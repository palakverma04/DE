import { getPageOverride } from "./contentOverrides";

export type Solution = {
  slug: string;
  name: string;
  team: string;
  description: string;
  relatedProducts: string[];
  metaTitle: string;
  metaDescription: string;
};

export const solutions: Solution[] = [
  {
    slug: "finance",
    name: "Finance",
    team: "CFO & Finance Manager",
    description:
      getPageOverride("finance")?.description ??
      "Close faster with agents that reconcile invoices, validate contracts, and surface cash and risk exceptions — fine-tuned to your chart of accounts and deployed inside your perimeter.",
    relatedProducts: ["invoiceiq", "contractiq", "converseiq"],
    metaTitle: "Finance Solutions | Decision Engines",
    metaDescription:
      "AI-powered finance automation for invoice reconciliation, contract validation, cash reconciliation, and risk management.",
  },
  {
    slug: "procurement",
    name: "Procurement",
    team: "CPO & Contract Manager",
    description:
      getPageOverride("procurement")?.description ??
      "Touchless procure-to-pay from digitization through PO matching, compliance checks, and fraud detection — with closed-loop learning on every vendor format you process.",
    relatedProducts: ["invoiceiq", "contractiq", "decisioniq"],
    metaTitle: "Procurement Solutions | Decision Engines",
    metaDescription:
      "Automate invoice digitization, PO reconciliation, compliance, fraud detection, and procure-to-pay workflows.",
  },
  {
    slug: "sales",
    name: "Sales",
    team: "CRO & Sales Ops",
    description:
      getPageOverride("sales")?.description ??
      "Prioritize leads, automate RFP responses, and surface cross-sell and up-sell opportunities from CRM and product usage data.",
    relatedProducts: ["decisioniq", "converseiq"],
    metaTitle: "Sales Solutions | Decision Engines",
    metaDescription:
      "AI-driven lead scoring, RFP automation, cross-sell and up-sell for sales teams.",
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
