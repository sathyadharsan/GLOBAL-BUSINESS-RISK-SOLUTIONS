import { PAGE_CONTEXTS, type ChatbotPageContext } from "@/data/chatbotConfig";
import { industriesData, solutionsData, useCasesData, aboutUsData } from "@/data/siteContent";
import { INDUSTRIES_DATA_ENHANCED } from "@/data/industryData";
import { offeringsData } from "@/data/offeringsData";
import { risksData, riskCategories } from "@/data/risksData";
import { platformData } from "@/data/platformData";

function buildIndustryContext(slug: string, data: typeof industriesData[string]): ChatbotPageContext | null {
  const enhanced = INDUSTRIES_DATA_ENHANCED[slug];
  const entityName = data?.title || slug;
  const desc = data?.description || enhanced?.risks?.[0]?.description || "";
  const riskNames = enhanced?.risks?.slice(0, 6).map(r => r.name) || [];
  const topRisk = riskNames[0] || "Enterprise Risk";

  const quickReplies = [
    entityName + " Diagnostic",
    topRisk,
    ...riskNames.slice(1, 5),
  ].filter(Boolean).slice(0, 5);

  return {
    id: "industry-" + slug,
    pathPattern: "/industries/" + slug,
    type: "industry",
    entityName,
    intro: `Welcome to ${entityName} Risk Practice.\n\n${desc}\n\nWhat would you like to assess?`,
    quickReplies,
    diagnosticLabel: entityName + " Risk Diagnostic",
    diagnosticPath: "/contact",
    primaryColor: "#0052CC",
  };
}

function buildOfferingContext(slug: string, data: typeof offeringsData[string]): ChatbotPageContext | null {
  if (!data) return null;
  const entityName = data.title;
  const relatedRisks = data.relatedRisks?.slice(0, 3) || [];
  const relatedPlatforms = data.relatedPlatforms?.slice(0, 2) || [];
  const quickReplies = [
    "Coverage Assessment",
    "Premium Estimate",
    ...relatedRisks.slice(0, 2),
    ...relatedPlatforms.slice(0, 1),
  ].filter(Boolean).slice(0, 5);

  return {
    id: "offering-" + slug,
    pathPattern: "/offerings/" + slug,
    type: "offering",
    entityName,
    intro: `Welcome to ${entityName}.\n\n${data.shortDescription}\n\nWould you like to evaluate coverage options?`,
    quickReplies: quickReplies.length > 0 ? quickReplies : ["Coverage Assessment", "Premium Estimate", "Readiness Assessment", "Brochure Request", "Book Consultation"],
    diagnosticLabel: entityName + " Readiness Assessment",
    diagnosticPath: "/contact",
    primaryColor: "#0052CC",
  };
}

function buildRiskContext(slug: string, data: typeof risksData[string]): ChatbotPageContext | null {
  if (!data) return null;
  const entityName = data.label;
  const relatedOfferings = data.relatedOfferings?.slice(0, 3) || [];
  const quickReplies = [
    entityName + " Assessment",
    ...relatedOfferings.slice(0, 2),
    "Coverage Options",
    "Exposure Analysis",
  ].filter(Boolean).slice(0, 5);

  return {
    id: "risk-" + slug,
    pathPattern: "/risks/" + slug,
    type: "risk",
    entityName,
    intro: `${entityName} Intelligence Center.\n\n${data.longDescription?.slice(0, 300) || data.description || ""}\n\nWould you like to assess your exposure?`,
    quickReplies,
    diagnosticLabel: entityName + " Assessment",
    diagnosticPath: "/contact",
    primaryColor: data.color || "#0052CC",
  };
}

function buildPlatformContext(slug: string, data: typeof platformData[string]): ChatbotPageContext | null {
  if (!data) return null;
  const entityName = data.title;
  const quickReplies = [
    entityName + " Readiness",
    ...data.useCases?.slice(0, 2) || [],
    "Platform Demo",
    "Integration Review",
  ].filter(Boolean).slice(0, 5);

  return {
    id: "platform-" + slug,
    pathPattern: "/platform/" + slug,
    type: "platform",
    entityName,
    intro: `${entityName}.\n\n${data.description}\n\nWould you like a readiness assessment?`,
    quickReplies,
    diagnosticLabel: entityName + " Onboarding Assessment",
    diagnosticPath: "/contact",
    primaryColor: data.color || "#0052CC",
  };
}

function buildSolutionContext(slug: string, data: typeof solutionsData[string]): ChatbotPageContext | null {
  if (!data) return null;
  const entityName = data.title;
  const quickReplies = [
    entityName + " Diagnostic",
    ...data.features?.slice(0, 3).map(f => f.title) || [],
  ].filter(Boolean).slice(0, 5);

  return {
    id: "solution-" + slug,
    pathPattern: "/solutions/" + slug,
    type: "solution",
    entityName,
    intro: `${entityName}.\n\n${data.description}\n\nWhich component interests you?`,
    quickReplies: quickReplies.length > 0 ? quickReplies : ["Advisory Session", "Program Design", "Book Consultation"],
    diagnosticLabel: entityName + " Advisory Diagnostic",
    diagnosticPath: "/contact",
    primaryColor: "#0052CC",
  };
}

function buildUseCaseContext(slug: string, data: typeof useCasesData[string]): ChatbotPageContext | null {
  if (!data) return null;
  const entityName = data.title;
  const quickReplies = [
    "Scenario Assessment",
    ...data.features?.slice(0, 3).map(f => f.title) || [],
    "Similar Cases",
  ].filter(Boolean).slice(0, 5);

  return {
    id: "use-case-" + slug,
    pathPattern: "/outcomes/" + slug,
    type: "outcome",
    entityName,
    intro: `${entityName}.\n\n${data.description}\n\nWould you like a similar scenario assessment?`,
    quickReplies: quickReplies.length > 0 ? quickReplies : ["Scenario Assessment", "Coverage Review", "Book Consultation"],
    diagnosticLabel: "Use Case Risk Assessment",
    diagnosticPath: "/contact",
    primaryColor: "#0052CC",
  };
}

function buildAboutContext(slug: string, data: typeof aboutUsData[string]): ChatbotPageContext | null {
  if (!data) return null;
  const entityName = data.title;
  return {
    id: "about-" + slug,
    pathPattern: "/about-us/" + slug,
    type: "about",
    entityName,
    intro: `${entityName}.\n\n${data.description}\n\nHow can I assist you with your risk requirements?`,
    quickReplies: ["Enterprise Compatibility", "Platform Overview", "Insurance Approach", "Global Reach", "Partnership Inquiry"],
    diagnosticLabel: "Enterprise Compatibility Assessment",
    diagnosticPath: "/contact",
    primaryColor: "#0052CC",
  };
}

function buildDynamicContexts(): ChatbotPageContext[] {
  const contexts: ChatbotPageContext[] = [];

  for (const [slug, data] of Object.entries(industriesData)) {
    const ctx = buildIndustryContext(slug, data);
    if (ctx) contexts.push(ctx);
  }

  for (const [slug, data] of Object.entries(offeringsData)) {
    const ctx = buildOfferingContext(slug, data);
    if (ctx) contexts.push(ctx);
  }

  for (const [slug, data] of Object.entries(risksData)) {
    const ctx = buildRiskContext(slug, data);
    if (ctx) contexts.push(ctx);
  }

  for (const [slug, data] of Object.entries(platformData)) {
    const ctx = buildPlatformContext(slug, data);
    if (ctx) contexts.push(ctx);
  }

  for (const [slug, data] of Object.entries(solutionsData)) {
    const ctx = buildSolutionContext(slug, data);
    if (ctx) contexts.push(ctx);
  }

  for (const [slug, data] of Object.entries(useCasesData)) {
    const ctx = buildUseCaseContext(slug, data);
    if (ctx) contexts.push(ctx);
  }

  for (const [slug, data] of Object.entries(aboutUsData)) {
    const ctx = buildAboutContext(slug, data);
    if (ctx) contexts.push(ctx);
  }

  return contexts;
}

export const DYNAMIC_PAGE_CONTEXTS = buildDynamicContexts();

export function matchPageContext(pathname: string): ChatbotPageContext | null {
  for (const ctx of PAGE_CONTEXTS) {
    if (pathname === ctx.pathPattern) return ctx;
  }
  for (const ctx of PAGE_CONTEXTS) {
    const pattern = ctx.pathPattern.replace(/\/$/, "");
    if (pathname.startsWith(pattern)) return ctx;
  }
  for (const ctx of DYNAMIC_PAGE_CONTEXTS) {
    if (pathname === ctx.pathPattern) return ctx;
  }
  for (const ctx of DYNAMIC_PAGE_CONTEXTS) {
    const pattern = ctx.pathPattern.replace(/\/$/, "");
    if (pathname.startsWith(pattern)) return ctx;
  }

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length >= 2) {
    const category = segments[0];
    const slug = segments[1];
    const dynamicCtx = DYNAMIC_PAGE_CONTEXTS.find(ctx => ctx.pathPattern === "/" + category + "/" + slug);
    if (dynamicCtx) return dynamicCtx;
  }

  if (pathname.startsWith("/industries/")) {
    const slug = pathname.replace("/industries/", "").split("/")[0];
    const industryData = industriesData[slug];
    if (industryData) return buildIndustryContext(slug, industryData) || PAGE_CONTEXTS.find(ctx => ctx.type === "industry") || null;
    return PAGE_CONTEXTS.find(ctx => ctx.type === "industry") || null;
  }
  if (pathname.startsWith("/offerings/")) {
    const slug = pathname.replace("/offerings/", "").split("/")[0];
    const offeringData = offeringsData[slug];
    if (offeringData) return buildOfferingContext(slug, offeringData) || PAGE_CONTEXTS.find(ctx => ctx.type === "offering") || null;
    return PAGE_CONTEXTS.find(ctx => ctx.type === "offering") || null;
  }
  if (pathname.startsWith("/risks/")) {
    const slug = pathname.replace("/risks/", "").split("/")[0];
    const riskDataItem = risksData[slug];
    if (riskDataItem) return buildRiskContext(slug, riskDataItem) || PAGE_CONTEXTS.find(ctx => ctx.type === "risk") || null;
    return PAGE_CONTEXTS.find(ctx => ctx.type === "risk") || null;
  }
  if (pathname.startsWith("/platform/")) {
    const slug = pathname.replace("/platform/", "").split("/")[0];
    const platData = platformData[slug];
    if (platData) return buildPlatformContext(slug, platData) || PAGE_CONTEXTS.find(ctx => ctx.type === "platform") || null;
    return PAGE_CONTEXTS.find(ctx => ctx.type === "platform") || null;
  }
  if (pathname.startsWith("/solutions/")) {
    const slug = pathname.replace("/solutions/", "").split("/")[0];
    const solData = solutionsData[slug];
    if (solData) return buildSolutionContext(slug, solData) || PAGE_CONTEXTS.find(ctx => ctx.type === "solution") || null;
    return PAGE_CONTEXTS.find(ctx => ctx.type === "solution") || null;
  }
  if (pathname.startsWith("/outcomes/")) {
    const slug = pathname.replace("/outcomes/", "").split("/")[0];
    const ucData = useCasesData[slug];
    if (ucData) return buildUseCaseContext(slug, ucData) || PAGE_CONTEXTS.find(ctx => ctx.type === "outcome") || null;
    return PAGE_CONTEXTS.find(ctx => ctx.type === "outcome") || null;
  }
  if (pathname.startsWith("/about-us/")) {
    const slug = pathname.replace("/about-us/", "").split("/")[0];
    const aboutData = aboutUsData[slug];
    if (aboutData) return buildAboutContext(slug, aboutData) || PAGE_CONTEXTS.find(ctx => ctx.type === "about") || null;
    return PAGE_CONTEXTS.find(ctx => ctx.type === "about") || null;
  }

  const fallback = PAGE_CONTEXTS.find(ctx => ctx.pathPattern === "/");
  return fallback || null;
}
