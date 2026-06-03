import { CHATBOT_INTENTS, type ChatbotIntent } from "@/data/chatbotConfig";

export function classifyIntent(input: string): ChatbotIntent | null {
  const normalized = input.toLowerCase().trim();
  if (!normalized || normalized.length < 2) return null;
  const words = normalized.split(/\s+/);
  let bestMatch: ChatbotIntent | null = null;
  let bestScore = 0;
  for (const intent of CHATBOT_INTENTS) {
    let score = 0;
    for (const keyword of intent.keywords) {
      const kw = keyword.toLowerCase();
      if (normalized.includes(kw)) score += kw.split(/\s+/).length > 1 ? 15 : 10;
      for (const word of words) {
        if (kw.includes(word) && word.length >= 3) score += 3;
      }
    }
    if (score > bestScore) { bestScore = score; bestMatch = intent; }
  }
  if (bestScore >= 5 && bestMatch) return bestMatch;
  return null;
}
