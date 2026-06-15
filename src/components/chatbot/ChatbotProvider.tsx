

import * as React from "react";
import {  useLocation  } from 'react-router-dom';
import { useChatbot } from "@/hooks/useChatbot";
import { ChatbotWidget } from "@/components/chatbot/ChatbotWidget";

export function ChatbotProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const pathname = location.pathname;
  const chatbot = useChatbot(pathname);

  return (
    <>
      {children}
      <ChatbotWidget
        messages={chatbot.session.messages}
        isOpen={chatbot.isOpen}
        isProcessing={chatbot.isProcessing}
        isLeadCaptureActive={chatbot.session.isLeadCaptureActive}
        leadStage={chatbot.leadStage}
        leadData={chatbot.leadData}
        currentPageContext={chatbot.session.currentPageContext ? { primaryColor: chatbot.session.currentPageContext.primaryColor, entityName: chatbot.session.currentPageContext.entityName } : null}
        onToggle={() => chatbot.toggleChat(chatbot.session)}
        onQuickReply={reply => chatbot.handleQuickReply(chatbot.session, reply)}
        onSendMessage={text => chatbot.handleUserMessage(chatbot.session, text)}
        onLeadInput={(field, value) => chatbot.handleLeadInput(chatbot.session, field, value)}
        onLeadSubmit={() => chatbot.handleLeadSubmit(chatbot.session)}
        onLeadSkip={() => chatbot.handleLeadSubmit(chatbot.session)}
      />
    </>
  );
}
