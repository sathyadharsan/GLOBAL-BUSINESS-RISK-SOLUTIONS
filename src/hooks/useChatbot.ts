"use client";

import * as React from "react";
import {
  createInitialSession, updatePageContext, getInitialBotMessage,
  processUserInput, processLeadInput,
  recordEvent, bookConsultation,
} from "@/lib/chatbot/conversation";
import type { ChatbotSession, ChatbotMessage, LeadStage } from "@/data/chatbotConfig";
import { LEAD_STAGES, DIAGNOSTIC_TYPES, BEHAVIOR_EVENTS } from "@/data/chatbotConfig";

const SESSION_KEY = "trustflow_chatbot_session";
const VISIT_KEY = "trustflow_page_visits";
const CLOSED_PAGE_KEY = "trustflow_chatbot_closed_pages";

export function useChatbot(pathname: string) {
  const [session, setSession] = React.useState<ChatbotSession>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = sessionStorage.getItem(SESSION_KEY);
        if (saved) {
          const parsed = JSON.parse(saved) as ChatbotSession;
          return updatePageContext(parsed, pathname);
        }
      } catch { /* ignore */ }
    }
    return createInitialSession();
  });

  const [isOpen, setIsOpen] = React.useState(false);
  const [hasShownInitial, setHasShownInitial] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [leadData, setLeadData] = React.useState<Record<string, string>>({});
  const [leadStage, setLeadStage] = React.useState<LeadStage | undefined>(undefined);
  const lastPathRef = React.useRef(pathname);
  const autoOpenTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const isPageClosed = React.useCallback((page: string): boolean => {
    if (typeof window === "undefined") return false;
    try {
      const closed = sessionStorage.getItem(CLOSED_PAGE_KEY);
      if (!closed) return false;
      const pages: string[] = JSON.parse(closed);
      return pages.includes(page);
    } catch { return false; }
  }, []);

  const markPageClosed = React.useCallback((page: string) => {
    if (typeof window === "undefined") return;
    try {
      const closed = sessionStorage.getItem(CLOSED_PAGE_KEY);
      const pages: string[] = closed ? JSON.parse(closed) : [];
      if (!pages.includes(page)) {
        pages.push(page);
        sessionStorage.setItem(CLOSED_PAGE_KEY, JSON.stringify(pages));
      }
    } catch { /* ignore */ }
  }, []);

  const clearPageClosed = React.useCallback((page: string) => {
    if (typeof window === "undefined") return;
    try {
      const closed = sessionStorage.getItem(CLOSED_PAGE_KEY);
      if (!closed) return;
      const pages: string[] = JSON.parse(closed);
      const filtered = pages.filter(p => p !== page);
      sessionStorage.setItem(CLOSED_PAGE_KEY, JSON.stringify(filtered));
    } catch { /* ignore */ }
  }, []);

  const replaceFirstBotMessage = React.useCallback((s: ChatbotSession, newPathname: string): ChatbotSession => {
    const withCtx = updatePageContext(s, newPathname);
    const ctx = withCtx.currentPageContext;
    if (!ctx) return s;
    const botMsgs = withCtx.messages.filter(m => m.role === "bot");
    if (botMsgs.length === 0) return s;
    const firstBotId = botMsgs[0].id;
    const newMsg: ChatbotMessage = {
      id: firstBotId,
      role: "bot",
      type: "text",
      text: ctx.intro,
      timestamp: Date.now(),
      quickReplies: ctx.quickReplies,
    };
    const newMessages = withCtx.messages.map(m => m.id === firstBotId ? newMsg : m);
    const newHistory = withCtx.conversationHistory.map(h => h.role === "bot" && h.text === botMsgs[0].text ? { ...h, text: ctx.intro } : h);
    return { ...withCtx, messages: newMessages, conversationHistory: newHistory };
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      clearPageClosed(pathname);
    }

    if (pathname !== lastPathRef.current) {
      const prevPath = lastPathRef.current;
      lastPathRef.current = pathname;

      setSession(prev => {
        const updated = updatePageContext(prev, pathname);
        if (isOpen) {
          return replaceFirstBotMessage(updated, pathname);
        }
        return updated;
      });

      if (isOpen) {
        setIsOpen(true);
      } else if (!isPageClosed(pathname) && !hasShownInitial) {
        if (autoOpenTimerRef.current) clearTimeout(autoOpenTimerRef.current);
        autoOpenTimerRef.current = setTimeout(() => {
          setSession(prev => {
            if (isPageClosed(pathname)) return prev;
            const withCtx = updatePageContext(prev, pathname);
            const initial = getInitialBotMessage(withCtx, pathname);
            return recordEvent(initial, BEHAVIOR_EVENTS.CHAT_OPEN, { path: pathname });
          });
          setIsOpen(true);
          setHasShownInitial(true);
        }, 5000);
      } else if (!isPageClosed(pathname) && hasShownInitial) {
        if (autoOpenTimerRef.current) clearTimeout(autoOpenTimerRef.current);
        autoOpenTimerRef.current = setTimeout(() => {
          setSession(prev => {
            if (isPageClosed(pathname)) return prev;
            const withCtx = updatePageContext(prev, pathname);
            const initial = getInitialBotMessage(withCtx, pathname);
            return recordEvent(initial, BEHAVIOR_EVENTS.CHAT_OPEN, { path: pathname });
          });
          setIsOpen(true);
        }, 5000);
      }
    }

    return () => {
      if (autoOpenTimerRef.current) clearTimeout(autoOpenTimerRef.current);
    };
  }, [pathname, isOpen, hasShownInitial, isPageClosed, clearPageClosed, replaceFirstBotMessage]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = () => {
      const cur = parseInt(sessionStorage.getItem(VISIT_KEY) || "0", 10);
      sessionStorage.setItem(VISIT_KEY, String(cur + 1));
    };
    window.addEventListener("visibilitychange", handler);
    return () => window.removeEventListener("visibilitychange", handler);
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined" && session.messages.length > 2) {
      try { sessionStorage.setItem(SESSION_KEY, JSON.stringify(session)); } catch { /* ignore */ }
    }
  }, [session]);

  const openChat = (s: ChatbotSession) => {
    setIsOpen(true);
    setHasShownInitial(true);
    if (s.messages.length === 0) {
      const withCtx = updatePageContext(s, pathname);
      const initial = getInitialBotMessage(withCtx, pathname);
      setSession(recordEvent(initial, BEHAVIOR_EVENTS.CHAT_OPEN, { path: pathname }));
    }
  };

  const closeChat = (s: ChatbotSession) => {
    setIsOpen(false);
    markPageClosed(pathname);
    if (autoOpenTimerRef.current) clearTimeout(autoOpenTimerRef.current);
    setSession(recordEvent(s, BEHAVIOR_EVENTS.CHAT_CLOSE));
  };

  const toggleChat = (s: ChatbotSession) => {
    if (isOpen) closeChat(s);
    else {
      clearPageClosed(pathname);
      openChat(s);
    }
  };

  const handleQuickReply = (currentSession: ChatbotSession, reply: string) => {
    setIsProcessing(true);
    const updated = recordEvent(currentSession, BEHAVIOR_EVENTS.QUICK_REPLY_CLICK, { reply });

    const lower = reply.toLowerCase();
    if (/consultation|book|schedule|speak|expert|advisor|risk architect/.test(lower)) {
      const result = bookConsultation(updated);
      setSession(result.session);
      setLeadData(result.session.leadData as Record<string, string>);
      setLeadStage(result.session.leadStageIndex < LEAD_STAGES.length ? LEAD_STAGES[result.session.leadStageIndex] : undefined);
      setIsProcessing(false);
      return result;
    }

    if (/diagnostic|assessment|readiness|benchmark|evaluation/.test(lower) && !updated.isDiagnosticActive) {
      const ctx = updated.currentPageContext;
      const diag = ctx ? DIAGNOSTIC_TYPES[ctx.type] || DIAGNOSTIC_TYPES.home : DIAGNOSTIC_TYPES.home;
      const msg: ChatbotMessage = {
        id: crypto.randomUUID(), role: "bot", type: "diagnostic",
        text: diag.label + "\n\n" + diag.description + "\n\nShall I prepare your " + diag.label.toLowerCase() + "?",
        timestamp: Date.now(),
        quickReplies: [diag.cta, "Learn more first", "Speak to an expert"],
      };
      const final = { ...addBotMessage(updated, msg), isDiagnosticActive: true };
      setSession(recordEvent(final, BEHAVIOR_EVENTS.DIAGNOSTIC_REQUEST));
      setIsProcessing(false);
      return { session: final, completed: false } as { session: ChatbotSession; completed: boolean };
    }

    const result = processUserInput(updated, reply, pathname);
    setSession(result.session);
    setIsProcessing(false);
    return result;
  };

  const handleUserMessage = (currentSession: ChatbotSession, text: string) => {
    setIsProcessing(true);
    if (currentSession.isLeadCaptureActive) {
      const result = processLeadInput(currentSession, text);
      setSession(result.session);
      setLeadData(result.session.leadData as Record<string, string>);
      setLeadStage(result.session.leadStageIndex < LEAD_STAGES.length ? LEAD_STAGES[result.session.leadStageIndex] : undefined);
      setIsProcessing(false);
      return result;
    }
    const result = processUserInput(currentSession, text, pathname);
    setSession(result.session);
    setIsProcessing(false);
    return result;
  };

  const handleLeadInput = (currentSession: ChatbotSession, field: string, value: string) => {
    const updated = { ...currentSession, leadData: { ...currentSession.leadData, [field]: value } };
    setSession(updated);
    setLeadData(updated.leadData as Record<string, string>);
    return updated;
  };

  const handleLeadSubmit = (currentSession: ChatbotSession) => {
    const stage = currentSession.leadStageIndex < LEAD_STAGES.length ? LEAD_STAGES[currentSession.leadStageIndex] : null;
    const field = stage?.field || "";
    const value = ((currentSession.leadData as Record<string, string>)[field]) || "";
    const result = processLeadInput(currentSession, value);
    setSession(result.session);
    setLeadData(result.session.leadData as Record<string, string>);
    setLeadStage(result.session.leadStageIndex < LEAD_STAGES.length ? LEAD_STAGES[result.session.leadStageIndex] : undefined);
    setIsProcessing(false);
    return result;
  };

  return {
    session, isOpen, hasShownInitial, isProcessing, leadData, leadStage,
    openChat, closeChat, toggleChat,
    handleQuickReply, handleUserMessage, handleLeadInput, handleLeadSubmit,
  };
}

function addBotMessage(session: ChatbotSession, message: ChatbotMessage): ChatbotSession {
  return {
    ...session,
    lastActivity: Date.now(),
    messages: [...session.messages, message],
    conversationHistory: [...session.conversationHistory, { role: "bot" as const, text: message.text, timestamp: message.timestamp }],
  };
}
