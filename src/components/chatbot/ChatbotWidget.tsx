

import * as React from "react";
import { cn } from "@/lib/utils";
import type { ChatbotMessage as ChatbotMessageType } from "@/data/chatbotConfig";
import { LEAD_STAGES } from "@/data/chatbotConfig";

interface ChatbotWidgetProps {
  messages: ChatbotMessageType[];
  isOpen: boolean;
  isProcessing: boolean;
  isLeadCaptureActive: boolean;
  leadStage: { field: string; label: string; type: string; options?: string[]; placeholder?: string } | undefined;
  leadData: Record<string, string>;
  currentPageContext: { primaryColor: string; entityName: string } | null;
  onToggle: () => void;
  onQuickReply: (reply: string) => void;
  onSendMessage: (text: string) => void;
  onLeadInput: (field: string, value: string) => void;
  onLeadSubmit: () => void;
  onLeadSkip: () => void;
}

const PRIMARY = "#0052CC";

export function ChatbotWidget({
  messages, isOpen, isProcessing, isLeadCaptureActive, leadStage, leadData, currentPageContext,
  onToggle, onQuickReply, onSendMessage, onLeadInput, onLeadSubmit, onLeadSkip,
}: ChatbotWidgetProps) {
  const [inputValue, setInputValue] = React.useState("");
  const [isClosing, setIsClosing] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const primaryColor = currentPageContext?.primaryColor || PRIMARY;
  const entityName = currentPageContext?.entityName || "Enterprise Risk";

  React.useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, isProcessing]);
  React.useEffect(() => { if (isOpen) setTimeout(() => inputRef.current?.focus(), 350); }, [isOpen]);

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-[100]">
        <button onClick={onToggle} className="group flex items-center gap-3 pl-5 pr-2.5 py-2 rounded-full shadow-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:scale-105">
          <div className="flex flex-col items-start">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 leading-none">TRUSTFLOW</span>
            <span className="text-[13px] font-bold text-slate-900 leading-tight mt-0.5">Advisor</span>
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-md" style={{ backgroundColor: primaryColor }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-[100]">
      <div className={cn("flex flex-col rounded-2xl shadow-2xl overflow-hidden transition-all duration-200 origin-bottom-right", isClosing ? "scale-90 opacity-0 translate-y-4" : "scale-100 opacity-100 translate-y-0")} style={{ width: "400px", maxWidth: "calc(100vw - 40px)", height: "600px", maxHeight: "calc(100vh - 80px)" }}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 text-white shrink-0" style={{ backgroundColor: primaryColor }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div>
              <div className="text-[13px] font-bold tracking-wide leading-tight">TRUSTFLOW Advisor</div>
              <div className="text-[10px] text-white/70 font-medium leading-tight">Enterprise Risk Intelligence</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] bg-white/15 text-white/90 px-2 py-1 rounded-full font-semibold hidden sm:inline tracking-wide uppercase">{entityName}</span>
            <button onClick={() => { setIsClosing(true); setTimeout(() => { setIsClosing(false); onToggle(); }, 220); }} className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto bg-slate-50 px-3.5 py-3.5 space-y-3">
          {messages.map(msg => (
            <MessageBubble key={msg.id} message={msg} primaryColor={primaryColor} onQuickReply={onQuickReply} isLeadActive={isLeadCaptureActive} leadData={leadData} onLeadInput={onLeadInput} onLeadSubmit={onLeadSubmit} onLeadSkip={onLeadSkip} />
          ))}
          {isProcessing && <TypingIndicator primaryColor={primaryColor} />}
          <div ref={messagesEndRef} />
        </div>

        {/* Bottom */}
        {isLeadCaptureActive && leadStage ? (
          <ActiveLeadForm stage={leadStage} leadData={leadData} onInput={onLeadInput} onSubmit={onLeadSubmit} onSkip={onLeadSkip} primaryColor={primaryColor} />
        ) : (
          <MessageInput inputValue={inputValue} setInputValue={setInputValue} onSend={onSendMessage} disabled={isProcessing} primaryColor={primaryColor} ref={inputRef} />
        )}

        {/* Footer */}
        <div className="px-4 py-1.5 bg-slate-100 border-t border-slate-200 flex items-center justify-between shrink-0">
          <div className="text-[9px] text-slate-400 font-bold tracking-wider uppercase">TRUSTFLOW Advisor · Rules-Based</div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] text-slate-500 font-medium">Secure Session</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageBubble({ message, primaryColor, onQuickReply, isLeadActive, leadData, onLeadInput, onLeadSubmit, onLeadSkip }: { message: ChatbotMessageType; primaryColor: string; onQuickReply: (r: string) => void; isLeadActive: boolean; leadData: Record<string, string>; onLeadInput: (f: string, v: string) => void; onLeadSubmit: () => void; onLeadSkip: () => void }) {
  const isBot = message.role === "bot";
  return (
    <div className={cn("flex flex-col", isBot ? "items-start" : "items-end")}>
      <div className={cn("px-4 py-3 text-[13px] leading-relaxed shadow-sm max-w-[88%]", isBot ? "bg-white border border-slate-200 text-slate-800 rounded-2xl rounded-tl-md" : "text-white rounded-2xl rounded-tr-md")} style={!isBot ? { backgroundColor: primaryColor } : undefined}>
        <div className="whitespace-pre-line">{message.text}</div>
      </div>
      {message.type === "lead-form" && message.leadStage && isLeadActive && !leadData[message.leadStage.field] && (
        <QuickLeadForm key={message.id} stage={message.leadStage} onInput={onLeadInput} onSubmit={onLeadSubmit} onSkip={onLeadSkip} primaryColor={primaryColor} />
      )}
      {message.quickReplies && message.quickReplies.length > 0 && !isLeadActive && (
        <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
          {message.quickReplies.map(reply => (
            <button key={reply} onClick={() => onQuickReply(reply)} disabled={isLeadActive} className="px-3 py-1.5 text-[11px] font-bold rounded-full border transition-all duration-200 hover:shadow-md disabled:opacity-40 bg-white" style={{ borderColor: primaryColor + "40", color: primaryColor }}>
              {reply}
            </button>
          ))}
        </div>
      )}
      {message.type === "diagnostic" && (
        <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
          {(message.quickReplies || []).map(reply => (
            <button key={reply} onClick={() => onQuickReply(reply)} className="px-3 py-1.5 text-[11px] font-bold rounded-full border transition-all duration-200 hover:shadow-md" style={{ backgroundColor: primaryColor + "0A", borderColor: primaryColor + "28", color: primaryColor }}>
              {reply}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function QuickLeadForm({ stage, onInput, onSubmit, onSkip, primaryColor }: { stage: { field: string; label: string; type: string; options?: string[]; placeholder?: string }; onInput: (f: string, v: string) => void; onSubmit: () => void; onSkip: () => void; primaryColor: string }) {
  const [local, setLocal] = React.useState("");
  React.useEffect(() => { const el = document.querySelector("[data-lead-input]") as HTMLInputElement | null; el?.focus(); }, []);

  const submit = () => { if (local.trim()) { onInput(stage.field, local); onSubmit(); } };
  return (
    <div className="mt-2 bg-white border border-slate-200 rounded-xl p-3 shadow-sm max-w-[90%]" data-lead-input>
      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">{stage.label}</div>
      {stage.options ? (
        <div className="space-y-1">
          {stage.options!.map(opt => (
            <button key={opt} onClick={() => { onInput(stage.field, opt); onSubmit(); }} className="w-full text-left px-3 py-2 text-sm font-medium rounded-lg border border-slate-200 hover:border-current transition-all" style={{ color: local === opt ? primaryColor : "#374151", backgroundColor: local === opt ? primaryColor + "0A" : "transparent" }}>
              {opt}
            </button>
          ))}
        </div>
      ) : (
        <form onSubmit={e => { e.preventDefault(); submit(); }} className="flex gap-2">
          <input data-lead-input type={stage.type === "email" ? "email" : stage.type === "phone" ? "tel" : "text"} value={local} onChange={e => setLocal(e.target.value)} placeholder={stage.placeholder || ""} className="flex-1 min-w-0 px-3 py-2 text-base rounded-lg border border-slate-300 focus:outline-none text-slate-800 placeholder:text-slate-400" onFocus={e => { e.target.style.boxShadow = "0 0 0 2px " + primaryColor + "60"; }} onBlur={e => { e.target.style.boxShadow = ""; }} />
          <button type="submit" disabled={!local.trim()} className="px-4 py-2 text-sm font-bold rounded-lg transition-all disabled:opacity-40 text-white whitespace-nowrap" style={{ backgroundColor: primaryColor }}>Send</button>
        </form>
      )}
      <div className="flex justify-between mt-1.5">
        <button onClick={onSkip} className="text-[10px] text-slate-400 hover:text-slate-600 font-medium transition-colors">Skip</button>
        <div className="text-[9px] text-slate-400 font-medium">Encrypted</div>
      </div>
    </div>
  );
}

function ActiveLeadForm({ stage, leadData, onInput, onSubmit, onSkip, primaryColor }: { stage: { field: string; label: string; type: string; options?: string[]; placeholder?: string }; leadData: Record<string, string>; onInput: (f: string, v: string) => void; onSubmit: () => void; onSkip: () => void; primaryColor: string }) {
  const currentValue = leadData[stage.field] || "";
  const stageIdx = LEAD_STAGES.findIndex(s => s.field === stage.field);
  return (
    <div className="px-4 py-3 bg-white border-t border-slate-200 shrink-0">
      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Step {(stageIdx >= 0 ? stageIdx : 0) + 1} of {LEAD_STAGES.length} — {stage.label}</div>
      {stage.options ? (
        <div className="space-y-1 max-h-[120px] overflow-y-auto">
          {stage.options!.map(opt => (
            <button key={opt} onClick={() => { onInput(stage.field, opt); onSubmit(); }} className="w-full text-left px-3 py-2 text-sm font-medium rounded-lg border border-slate-200 hover:border-current transition-all" style={{ color: currentValue === opt ? primaryColor : "#374151", backgroundColor: currentValue === opt ? primaryColor + "0A" : "transparent", borderColor: currentValue === opt ? primaryColor + "50" : undefined }}>
              {opt}
            </button>
          ))}
        </div>
      ) : (
        <form onSubmit={e => { e.preventDefault(); if (currentValue.trim()) { onInput(stage.field, currentValue); onSubmit(); } }} className="flex gap-2">
          <input autoFocus type={stage.type === "email" ? "email" : stage.type === "phone" ? "tel" : "text"} value={currentValue} onChange={e => onInput(stage.field, e.target.value)} placeholder={stage.placeholder || "Enter your answer"} className="flex-1 min-w-0 px-3 py-2.5 text-base rounded-lg border border-slate-300 focus:outline-none text-slate-800 placeholder:text-slate-400" onFocus={e => { e.target.style.boxShadow = "0 0 0 2px " + primaryColor + "50"; }} onBlur={e => { e.target.style.boxShadow = ""; }} />
          <button type="submit" disabled={!currentValue.trim()} className="px-4 py-2.5 text-sm font-bold rounded-lg transition-all disabled:opacity-40 text-white whitespace-nowrap" style={{ backgroundColor: primaryColor }}>Next</button>
        </form>
      )}
      <div className="flex justify-between items-center mt-1.5">
        <button onClick={onSkip} className="text-[10px] text-slate-400 hover:text-slate-600 font-medium transition-colors">Skip this field</button>
        <div className="text-[9px] text-slate-400 font-medium">Secured connection</div>
      </div>
    </div>
  );
}

function MessageInput({ inputValue, setInputValue, onSend, disabled, primaryColor, ref }: { inputValue: string; setInputValue: (v: string) => void; onSend: (t: string) => void; disabled: boolean; primaryColor: string; ref: React.Ref<HTMLInputElement> }) {
  const submit = (e: React.FormEvent) => { e.preventDefault(); const t = inputValue.trim(); if (t && !disabled) { onSend(t); setInputValue(""); } };
  return (
    <form onSubmit={submit} className="px-4 py-3 bg-white border-t border-slate-200 shrink-0">
      <div className="flex gap-2 items-center">
        <input ref={ref} type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Ask about risks, insurance, compliance..." disabled={disabled} className="flex-1 min-w-0 px-4 py-2.5 text-base rounded-full border border-slate-300 focus:outline-none text-slate-800 placeholder:text-slate-400 bg-slate-50/80 disabled:opacity-60" onFocus={e => { e.target.style.borderColor = primaryColor + "70"; e.target.style.boxShadow = "0 0 0 3px " + primaryColor + "18"; }} onBlur={e => { e.target.style.borderColor = ""; e.target.style.boxShadow = ""; }} />
        <button type="submit" disabled={disabled || !inputValue.trim()} className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md transition-all hover:shadow-lg hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100" style={{ backgroundColor: primaryColor }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    </form>
  );
}

function TypingIndicator({ primaryColor }: { primaryColor: string }) {
  return (
    <div className="flex items-start gap-2">
      <div className="px-4 py-3 bg-white border border-slate-200 rounded-2xl rounded-tl-md shadow-sm">
        <div className="flex gap-1.5 items-center">
          {[0, 1, 2].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: primaryColor, animation: "bounce-delayed 1.4s infinite ease-in-out", animationDelay: i * 0.2 + "s" }} />)}
        </div>
      </div>
    </div>
  );
}
