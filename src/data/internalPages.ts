import { getScraped } from "./scrapedContent";

export type InternalPage = {
  slug: string;
  solutionSlug: "finance" | "procurement" | "sales";
  type: "process" | "team";
  title: string;
  subtitle: string;
  description: string;
  howItWorks: string[];
  benefits: string[];
  relatedProducts: string[];
};

function fromScraped(
  slug: string,
  solutionSlug: InternalPage["solutionSlug"],
  type: InternalPage["type"],
  relatedProducts: string[]
): InternalPage {
  const s = getScraped(slug)!;
  return {
    slug,
    solutionSlug,
    type,
    title: s.title.replace(/^Chief Finance Officer$/i, "CFO").replace(/^Chief Procurement Officer$/i, "CPO").replace(/^Chief Revenue Officer$/i, "CRO"),
    subtitle: type === "process"
      ? `How ${s.title.replace(/^Chief Finance Officer$/i, "CFO").replace(/^Chief Procurement Officer$/i, "CPO").replace(/^Chief Revenue Officer$/i, "CRO")} works`
      : `Built for ${s.title.replace(/^Chief Finance Officer$/i, "CFO").replace(/^Chief Procurement Officer$/i, "CPO").replace(/^Chief Revenue Officer$/i, "CRO")} teams`,
    description: s.description,
    howItWorks: s.howItWorks.filter((p) => p.length > 40),
    benefits: s.benefits.filter((p) => p.length > 20),
    relatedProducts,
  };
}

export const internalPages: InternalPage[] = [
  // Finance — Processes
  fromScraped("invoice-reconciliation", "finance", "process", ["invoiceiq", "decisioniq", "converseiq"]),
  fromScraped("contract-validation", "finance", "process", ["contractiq", "invoiceiq"]),
  fromScraped("cash-reconciliation", "finance", "process", ["invoiceiq", "converseiq", "decisioniq"]),
  fromScraped("risk-management", "finance", "process", ["invoiceiq", "contractiq", "decisioniq"]),
  fromScraped("accounting-policies", "finance", "process", ["invoiceiq", "converseiq"]),
  fromScraped("paper-invoice-to-po", "finance", "process", ["invoiceiq", "connectors"]),
  // Finance — Teams
  fromScraped("cfo", "finance", "team", ["converseiq", "decisioniq", "invoiceiq"]),
  fromScraped("finance-manager", "finance", "team", ["invoiceiq", "converseiq", "contractiq"]),
  // Procurement — Processes
  fromScraped("invoice-digitization", "procurement", "process", ["invoiceiq", "connectors"]),
  fromScraped("invoice-po-reconciliation", "procurement", "process", ["invoiceiq", "decisioniq"]),
  fromScraped("service-invoice-validation", "procurement", "process", ["invoiceiq", "contractiq"]),
  fromScraped("invoice-compliance", "procurement", "process", ["invoiceiq", "connectors"]),
  fromScraped("invoice-approval-risk", "procurement", "process", ["invoiceiq", "decisioniq"]),
  fromScraped("procure-to-pay", "procurement", "process", ["invoiceiq", "decisioniq", "contractiq", "connectors"]),
  fromScraped("fraud-detection", "procurement", "process", ["invoiceiq", "decisioniq"]),
  // Procurement — Teams
  fromScraped("cpo", "procurement", "team", ["invoiceiq", "contractiq", "decisioniq"]),
  fromScraped("contract-manager", "procurement", "team", ["contractiq", "converseiq"]),
  // Sales — Processes
  fromScraped("lead-scoring", "sales", "process", ["decisioniq", "converseiq"]),
  fromScraped("rfp", "sales", "process", ["decisioniq", "contractiq"]),
  fromScraped("cross-sell", "sales", "process", ["decisioniq", "converseiq"]),
  fromScraped("up-sell", "sales", "process", ["decisioniq", "converseiq"]),
  // Sales — Teams
  fromScraped("cro", "sales", "team", ["decisioniq", "converseiq"]),
  fromScraped("sales-ops", "sales", "team", ["decisioniq", "converseiq", "contractiq"]),
];

export function getInternalPage(solutionSlug: string, pageSlug: string): InternalPage | undefined {
  return internalPages.find((p) => p.solutionSlug === solutionSlug && p.slug === pageSlug);
}

export function getProcessPages(solutionSlug: string): InternalPage[] {
  return internalPages.filter((p) => p.solutionSlug === solutionSlug && p.type === "process");
}

export function getTeamPages(solutionSlug: string): InternalPage[] {
  return internalPages.filter((p) => p.solutionSlug === solutionSlug && p.type === "team");
}

export function internalPageUrl(page: InternalPage): string {
  return `/solutions/${page.solutionSlug}/${page.slug}`;
}
