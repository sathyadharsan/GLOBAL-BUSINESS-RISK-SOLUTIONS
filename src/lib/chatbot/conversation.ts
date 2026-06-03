import { matchPageContext } from "./pageContext";
import { classifyIntent } from "./intentClassifier";
import {
  PAGE_CONTEXTS, type ChatbotSession, type LeadCaptureData, LEAD_STAGES, AUTO_OPEN_RULES,
  BEHAVIOR_EVENTS, type BehaviorEvent, type BehaviorEventType,
  DIAGNOSTIC_TYPES, type ChatbotMessage,
} from "@/data/chatbotConfig";

export { matchPageContext } from "./pageContext";
export { classifyIntent } from "./intentClassifier";

export function createInitialSession(): ChatbotSession {
  return {
    id: crypto.randomUUID(), currentPageContext: null, matchedIntent: null,
    conversationHistory: [], leadData: {}, leadStageIndex: 0,
    behaviorEvents: [], sessionStart: Date.now(), lastActivity: Date.now(),
    isLeadCaptureActive: false, isDiagnosticActive: false, messages: [],
  };
}

export function addBotMessage(session: ChatbotSession, message: ChatbotMessage): ChatbotSession {
  return {
    ...session,
    lastActivity: Date.now(),
    messages: [...session.messages, message],
    conversationHistory: [...session.conversationHistory, { role: "bot" as const, text: message.text, timestamp: message.timestamp }],
  };
}

export function addUserMessage(session: ChatbotSession, text: string): ChatbotSession {
  return {
    ...session,
    lastActivity: Date.now(),
    messages: [...session.messages, { id: crypto.randomUUID(), role: "user" as const, text, type: "text", timestamp: Date.now() }],
    conversationHistory: [...session.conversationHistory, { role: "user" as const, text, timestamp: Date.now() }],
  };
}

export function updatePageContext(session: ChatbotSession, pathname: string): ChatbotSession {
  const ctx = matchPageContext(pathname);
  if (!ctx) return session;
  if (session.currentPageContext && session.currentPageContext.id === ctx.id) return session;
  return { ...recordEvent(session, BEHAVIOR_EVENTS.PAGE_VIEW, { path: pathname, contextId: ctx.id }), currentPageContext: ctx };
}

export function recordEvent(session: ChatbotSession, type: BehaviorEventType, data?: Record<string, unknown>): ChatbotSession {
  const event: BehaviorEvent = { type, timestamp: Date.now(), data };
  return { ...session, lastActivity: Date.now(), behaviorEvents: [...session.behaviorEvents, event] };
}

export function shouldAutoOpen(session: ChatbotSession, pathname: string): boolean {
  if (session.messages.length > 0) return false;
  if (Date.now() - session.sessionStart >= AUTO_OPEN_RULES.DWELL_TIME_MS) return true;
  const count = session.behaviorEvents.filter(e => e.type === BEHAVIOR_EVENTS.PAGE_VIEW && e.data?.path === pathname).length;
  return count >= AUTO_OPEN_RULES.PAGE_VISIT_THRESHOLD;
}

export function startLeadCapture(session: ChatbotSession): ChatbotSession {
  return { ...recordEvent(session, BEHAVIOR_EVENTS.LEAD_CAPTURE_START), isLeadCaptureActive: true, leadStageIndex: 0 };
}

export function processLeadInput(session: ChatbotSession, input: string): { session: ChatbotSession; completed: boolean; message?: ChatbotMessage } {
  if (session.leadStageIndex >= LEAD_STAGES.length) {
    const score = calculateLeadScore(session.leadData);
    const finalData = { ...session.leadData, score, completed: true } as LeadCaptureData;
    const done = recordEvent({ ...session, leadData: finalData, isLeadCaptureActive: false }, BEHAVIOR_EVENTS.LEAD_CAPTURE_COMPLETE, { leadData: finalData, score });
    const thankMsg: ChatbotMessage = {
      id: crypto.randomUUID(), role: "bot", type: "text", timestamp: Date.now(),
      text: `Thank you${session.leadData.name ? ", " + session.leadData.name : ""}. Your risk profile has been captured.\n\nA senior risk architect will reach out within 24 hours. How else may I assist you?`,
      quickReplies: ["Risk Diagnostic", "Explore Offerings", "Schedule Consultation"],
    };
    return { session: addBotMessage(done, thankMsg), completed: true };
  }

  const stage = LEAD_STAGES[session.leadStageIndex];
  const valid = !stage.validation || stage.validation(input);
  if (!valid && input.length > 0) {
    const err: ChatbotMessage = { id: crypto.randomUUID(), role: "bot", type: "text", timestamp: Date.now(), text: "Please provide a valid " + stage.label.toLowerCase() + "." };
    return { session: addBotMessage(session, err), completed: false };
  }

  const updatedLead = { ...session.leadData, [stage.field]: input };
  const nextIndex = session.leadStageIndex + 1;
  let updated = { ...session, leadData: updatedLead as LeadCaptureData, leadStageIndex: nextIndex };

  if (nextIndex < LEAD_STAGES.length) {
    const next = LEAD_STAGES[nextIndex];
    const msg: ChatbotMessage = { id: crypto.randomUUID(), role: "bot", type: "lead-form", text: next.label, timestamp: Date.now(), leadStage: next };
    updated = addBotMessage(updated, msg);
    return { session: updated, completed: false };
  }

  const score = calculateLeadScore(updatedLead);
  const finalLead = { ...updatedLead, score, completed: true } as LeadCaptureData;
  const done = recordEvent({ ...updated, leadData: finalLead, isLeadCaptureActive: false }, BEHAVIOR_EVENTS.LEAD_CAPTURE_COMPLETE);
  const finalMsg: ChatbotMessage = {
    id: crypto.randomUUID(), role: "bot", type: "text", timestamp: Date.now(),
    text: `Thank you${input ? ", " + input : ""}. Your requirements have been captured.\n\nA senior risk architect will reach out within 24 hours. How else may I assist you?`,
    quickReplies: ["Risk Diagnostic", "Explore Offerings", "Schedule Consultation"],
  };
  return { session: addBotMessage(done, finalMsg), completed: true };
}

export function calculateLeadScore(data: LeadCaptureData): number {
  const d = data as Record<string, unknown>;
  let score = 20;
  const name = typeof d.name === "string" ? d.name : "";
  const businessEmail = typeof d.businessEmail === "string" ? d.businessEmail : "";
  const company = typeof d.company === "string" ? d.company : "";
  const industry = typeof d.industry === "string" ? d.industry : "";
  const annualRevenue = typeof d.annualRevenue === "string" ? d.annualRevenue : "";
  const timeline = typeof d.timeline === "string" ? d.timeline : "";
  const primaryRisk = typeof d.primaryRisk === "string" ? d.primaryRisk : "";
  const country = typeof d.country === "string" ? d.country : "";
  const phone = typeof d.phone === "string" ? d.phone : "";

  if (!name || !businessEmail || !company) score -= 10;
  if (industry) score += 10;
  if (["Financial Services", "Healthcare & Life Sciences", "Technology & Digital"].includes(industry)) score += 15;
  if (["$1B – $5B", "$5B+"].includes(annualRevenue)) score += 20;
  else if (["$250M – $1B"].includes(annualRevenue)) score += 15;
  else if (["$50M – $250M"].includes(annualRevenue)) score += 10;
  else if (["$10M – $50M"].includes(annualRevenue)) score += 5;
  if (["Immediate (within 30 days)", "Short-term (1-3 months)"].includes(timeline)) score += 15;
  if (primaryRisk && primaryRisk.length > 10) score += 10;
  if (country) score += 5;
  if (phone) score += 5;
  return Math.min(100, Math.max(0, score));
}

export function getLeadScoreLabel(score: number): { category: string; color: string } {
  if (score >= 80) return { category: "High Priority", color: "text-emerald-600 bg-emerald-50 border-emerald-200" };
  if (score >= 60) return { category: "Medium Priority", color: "text-amber-600 bg-amber-50 border-amber-200" };
  return { category: "Standard", color: "text-slate-600 bg-slate-50 border-slate-200" };
}

export function processUserInput(session: ChatbotSession, input: string, pathname: string): { session: ChatbotSession; botMessages: ChatbotMessage[] } {
  let updated = session;
  const botMessages: ChatbotMessage[] = [];

  updated = addUserMessage(updated, input);
  updated = recordEvent(updated, BEHAVIOR_EVENTS.MESSAGE_SENT, { text: input });
  updated = updatePageContext(updated, pathname);

  const intent = classifyIntent(input);
  if (intent && (!updated.matchedIntent || updated.matchedIntent.id !== intent.id)) {
    updated = { ...updated, matchedIntent: intent };
  }

  if (updated.isLeadCaptureActive) {
    const result = processLeadInput(updated, input);
    return { session: result.session, botMessages: result.message ? [result.message] : [] };
  }

  const lowerInput = input.toLowerCase();
  if (/consultation|book|schedule|speak|expert|advisor|contact|connect|reach|talk|human|agent|representative|chat with|call me|call us|get in touch|callback|meeting|demo request|speak to|speak with/.test(lowerInput)) {
    const result = bookConsultation(updated);
    return { session: result.session, botMessages: [result.message] };
  }

  if (/^(hi|hello|hey|good morning|good afternoon|good evening|help|help me|need help|support|assist|assistance|pls|please|can you|could you|i need|i want|iam|i am|looking for|searching for|enquiry|inquiry|query|question|doubt|info|information|details|tell me|explain|describe|what|how|why|when|where|which|who|can|may|is|are|do|does|did|will|would|should|shall|could|must|might)\b/i.test(lowerInput.trim()) && !intent) {
    const ctx = updated.currentPageContext;
    const quickReplyPool = ctx?.quickReplies || PAGE_CONTEXTS[0].quickReplies;
    const responseText = (ctx?.intro ? ctx.intro + "\n\nI can also:\n• Run a " + (ctx?.diagnosticLabel || "risk").toLowerCase() : "I can help you with risk assessment, insurance solutions, compliance, and more.") + "\n• Show relevant TRUSTFLOW offerings\n• Connect you with a sector specialist\n\nWhat would you prefer?";
    const msg: ChatbotMessage = {
      id: crypto.randomUUID(), role: "bot", type: "text", text: responseText, timestamp: Date.now(),
      quickReplies: quickReplyPool.slice(0, 5),
    };
    const final = addBotMessage(updated, msg);
    return { session: recordEvent(final, BEHAVIOR_EVENTS.MESSAGE_RECEIVED), botMessages: [msg] };
  }

  const ctx = updated.currentPageContext;
  const quickReplyPool = ctx?.quickReplies || PAGE_CONTEXTS[0].quickReplies;

  let responseText = "";
  const quickReplies: string[] = [];

  if (intent) {
    const pageRelated = ctx && updated.matchedIntent?.id === intent.id;
    const qualifier = pageRelated ? "Given your current focus on " + ctx.entityName : "Based on your interest in " + intent.label;
    responseText = qualifier + ":\n\n";
    if (intent.relatedOfferings && intent.relatedOfferings.length > 0) {
      responseText += "Preferred coverage areas:\n• " + intent.relatedOfferings.slice(0, 3).join("\n• ") + "\n\n";
    }
    if (intent.relatedPlatforms && intent.relatedPlatforms.length > 0) {
      responseText += "Platform advantages:\n• " + intent.relatedPlatforms.slice(0, 2).join("\n• ") + "\n\n";
    }
    responseText += "Would you like deeper analysis?";
    quickReplies.push(...(intent.quickReplies || []).slice(0, 3), "Start Assessment", "Speak to an Expert");
  } else if (ctx && ctx.type !== "home") {
    responseText = ctx.intro + "\n\nI can also:\n• Run a " + ctx.diagnosticLabel.toLowerCase() + "\n• Show relevant TRUSTFLOW offerings\n• Connect you with a sector specialist\n\nWhat would you prefer?";
    quickReplies.push(...ctx.quickReplies.slice(0, 4), "Risk Diagnostic", "Platform Demo");
  } else {
    responseText = "I specialize in enterprise risk architecture across 200+ risk categories and 41 industry verticals.\n\nHow can I assist you today?";
    quickReplies.push(...quickReplyPool);
  }

  const uniqueReplies = [...new Set(quickReplies)].slice(0, 5);
  const msg: ChatbotMessage = {
    id: crypto.randomUUID(), role: "bot", type: "text", text: responseText, timestamp: Date.now(),
    quickReplies: uniqueReplies.length > 0 ? uniqueReplies : quickReplyPool.slice(0, 5),
  };
  const final = addBotMessage(updated, msg);
  return { session: recordEvent(final, BEHAVIOR_EVENTS.MESSAGE_RECEIVED), botMessages: [msg] };
}

export function getInitialBotMessage(session: ChatbotSession, pathname: string): ChatbotSession {
  const ctx = matchPageContext(pathname);
  const withCtx = { ...session, currentPageContext: ctx || session.currentPageContext };
  const introText = ctx?.intro || PAGE_CONTEXTS[0].intro;
  const quickReplies = ctx?.quickReplies || PAGE_CONTEXTS[0].quickReplies;
  const msg: ChatbotMessage = {
    id: crypto.randomUUID(), role: "bot", type: "text", text: introText, timestamp: Date.now(), quickReplies,
  };
  return addBotMessage(withCtx, msg);
}

export function getLeadFormMessage(stageIndex: number): ChatbotMessage | null {
  if (stageIndex >= LEAD_STAGES.length) return null;
  const stage = LEAD_STAGES[stageIndex];
  return { id: crypto.randomUUID(), role: "bot", type: "lead-form", text: stage.label, timestamp: Date.now(), leadStage: stage };
}

export function getDiagnosticCTA(session: ChatbotSession): ChatbotMessage | null {
  const ctx = session.currentPageContext;
  if (!ctx) return null;
  const diagInfo = DIAGNOSTIC_TYPES[ctx.type] || DIAGNOSTIC_TYPES.home;
  return {
    id: crypto.randomUUID(), role: "bot", type: "diagnostic",
    text: "Given your interest in " + ctx.entityName + ", I recommend starting with our " + diagInfo.label + ".\n\n" + diagInfo.description,
    timestamp: Date.now(), diagnosticType: ctx.type, diagnosticLabel: diagInfo.label,
    quickReplies: [diagInfo.cta, "Learn More", "Speak to Expert", "Continue Exploring"],
  };
}

export function acceptDiagnostic(session: ChatbotSession): ChatbotSession {
  return { ...recordEvent(session, BEHAVIOR_EVENTS.DIAGNOSTIC_REQUEST), isDiagnosticActive: true };
}

export function bookConsultation(session: ChatbotSession): { session: ChatbotSession; message: ChatbotMessage } {
  const updated = startLeadCapture(session);
  const msg: ChatbotMessage = {
    id: crypto.randomUUID(), role: "bot", type: "lead-form",
    text: "Excellent — let me collect a few details to connect you with a senior risk architect.\n\nWhat's your full name?",
    timestamp: Date.now(), leadStage: LEAD_STAGES[0],
  };
  return { session: addBotMessage(updated, msg), message: msg };
}
