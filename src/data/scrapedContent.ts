import pages from "../../decisionengines-pages.json";
import { getPageOverride, type PageContentOverride } from "./contentOverrides";

export type ScrapedPage = {
  title: string;
  description: string;
  howItWorks: string[];
  benefits: string[];
  stats: string[];
};

/** Maps our site slugs → keys in decisionengines-pages.json */
export const scrapedSlugMap: Record<string, string> = {
  invoiceiq: "invoice-automation",
  contractiq: "contract-automation",
  converseiq: "converseiq-assistant",
  decisioniq: "decisioniq-automation",
  connectors: "connectors",
  "invoice-reconciliation": "invoice-reconciliation",
  "contract-validation": "contract-validation",
  "cash-reconciliation": "cash-reconciliation",
  "risk-management": "risk-management",
  "accounting-policies": "accounting-policies",
  "paper-invoice-to-po": "paper-invoice-to-purchase-order",
  cfo: "cfo-2",
  "finance-manager": "finance-manager",
  "invoice-digitization": "invoice-digitization",
  "invoice-po-reconciliation": "invoice-po-reconciliation",
  "service-invoice-validation": "service-invoice-validation",
  "invoice-compliance": "invoice-compliance",
  "invoice-approval-risk": "invoice-approval-risk",
  "procure-to-pay": "procure-to-pay",
  "fraud-detection": "fraud-detection",
  cpo: "cpo",
  "contract-manager": "contract-manager",
  "lead-scoring": "lead-scoring",
  rfp: "rfp-automation",
  "cross-sell": "sales-cross-sell",
  "up-sell": "sales-up-sell",
  cro: "cro",
  "sales-ops": "sales-ops",
  about: "about-2",
};

const scraped = pages as Record<string, ScrapedPage>;

const NAV_JUNK =
  /Toggle Menu|Get A Demo|Expand PROCESSES|InvoiceIQ Contract Automation|Industries Resources Company/i;

export function decodeEntities(text: string): string {
  return text
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, "\u201C")
    .replace(/&#8221;/g, "\u201D")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

export function isNavGarbage(text: string): boolean {
  const t = text.trim();
  if (t.length < 40) return false;
  return NAV_JUNK.test(t) || (t.length > 350 && /PROCESSES.*TEAM/i.test(t));
}

export function isBoilerplateParagraph(text: string): boolean {
  const t = text.trim();
  return (
    /^Our Partners include top-tier/i.test(t) ||
    /^AI-Powered Assistant For Enterprise$/i.test(t) ||
    /^Contract Life Cycle & Risk Automation$/i.test(t) ||
    /^Solutions$/i.test(t) ||
    t.length < 45
  );
}

export function sanitizeDescription(description: string, howItWorks: string[]): string {
  const decoded = decodeEntities(description).replace(/\s+/g, " ").trim();
  if (!isNavGarbage(decoded) && decoded.length >= 40 && decoded.length <= 320) {
    return decoded;
  }
  if (!isNavGarbage(decoded) && decoded.length > 320) {
    return `${decoded.slice(0, 317).trim()}…`;
  }

  const fallback = howItWorks.find((p) => !isBoilerplateParagraph(p) && !isNavGarbage(p));
  if (fallback) {
    const clean = decodeEntities(fallback).replace(/\s+/g, " ").trim();
    return clean.length > 320 ? `${clean.slice(0, 317).trim()}…` : clean;
  }

  return decoded.length > 0 && !isNavGarbage(decoded)
    ? `${decoded.slice(0, 317).trim()}…`
    : "AI-powered automation built for enterprise finance, procurement, and sales teams.";
}

export function sanitizeParagraphs(paragraphs: string[]): string[] {
  const results: string[] = [];

  for (const raw of paragraphs) {
    let text = decodeEntities(raw).replace(/\s+/g, " ").trim();
    if (isBoilerplateParagraph(text) || isNavGarbage(text)) continue;

    // Split wall-of-text paragraphs at common scrape join points
    if (text.length > 500) {
      const chunks = text.split(
        /(?=(?:Orchestration|Innovation|Decision-making|Unification|procurement ConverseIQ|Sales ConverseIQ|What ConverseIQ Can Do|Realtime Learning|End-To-End Automation|Any Document Type|Auto Scaling|User-friendly Interface)\s*:)/
      );
      if (chunks.length > 1) {
        for (const chunk of chunks) {
          const c = chunk.trim();
          if (c.length > 45 && !isBoilerplateParagraph(c)) results.push(c);
        }
        continue;
      }
    }

    results.push(text);
  }

  return results;
}

export function sanitizeBenefits(benefits: string[], howItWorks: string[]): string[] {
  const cleaned = benefits
    .map((b) => decodeEntities(b).replace(/\s+/g, " ").trim())
    .filter((b) => b.length > 20 && !isBoilerplateParagraph(b) && !isNavGarbage(b));

  if (cleaned.length > 0) return cleaned.slice(0, 8);

  // Derive bullet outcomes from substantive howItWorks paragraphs
  return howItWorks
    .filter((p) => p.length > 80 && p.length < 220)
    .slice(0, 5)
    .map((p) => {
      const sentence = p.split(/(?<=[.!?])\s+/)[0] ?? p;
      return sentence.length > 120 ? `${sentence.slice(0, 117).trim()}…` : sentence;
    });
}

function applyOverride(page: ScrapedPage, override?: PageContentOverride): ScrapedPage {
  if (!override) return page;
  return {
    ...page,
    description: override.description ?? page.description,
    howItWorks: override.howItWorks ?? page.howItWorks,
    benefits: override.benefits ?? page.benefits,
  };
}

export function getScraped(slug: string): ScrapedPage | undefined {
  const key = scrapedSlugMap[slug] ?? slug;
  const raw = scraped[key];
  if (!raw) return undefined;

  const override = getPageOverride(slug);
  const merged = applyOverride(raw, override);

  const howItWorks = sanitizeParagraphs(merged.howItWorks);
  const benefits = sanitizeBenefits(merged.benefits, howItWorks);
  const description = sanitizeDescription(merged.description, howItWorks);

  return {
    ...merged,
    description,
    howItWorks,
    benefits,
  };
}

export function parseStats(raw: string[]): { value: string; label: string }[] {
  const results: { value: string; label: string }[] = [];
  for (const line of raw) {
    const decoded = decodeEntities(line);
    const m = decoded.match(/^(\d+%\+?|<\d+\s*Days?|\d+)\s+(.+)/i);
    if (m && m[2].length < 120) results.push({ value: m[1], label: m[2] });
  }
  return results;
}
