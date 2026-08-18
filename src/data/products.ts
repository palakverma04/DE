import {
  getProductContent,
  type ProductRichContent,
  type ProductSection,
  type ProductFAQ,
  type ProductRelated,
  type ProductCTA,
  type ProductIntro,
} from "./productContent";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  heroTitle: string;
  description: string;
  image: string;
  stats: { value: string; label: string }[];
  intro?: ProductIntro;
  features: string[];
  sections: ProductSection[];
  highlight?: ProductRichContent["highlight"];
  global?: ProductRichContent["global"];
  security?: ProductRichContent["security"];
  faq?: ProductFAQ[];
  faqTitle?: string;
  partnersSection?: "technology" | "platforms";
  relatedProducts: ProductRelated[];
  cta: ProductCTA;
  metaTitle: string;
  metaDescription: string;
};

const productMeta: Record<string, { name: string; tagline: string; image: string; metaTitle: string; metaDescription: string }> = {
  invoiceiq: {
    name: "InvoiceIQ",
    tagline: "AP Automation Agent",
    image: "/images/products/invoiceiq.png",
    metaTitle: "InvoiceIQ — AP Automation | Decision Engines",
    metaDescription:
      "AI-driven, enterprise-grade invoice capture, intelligent GL coding, and multi-level approval workflows. 75% touchless invoice processing.",
  },
  contractiq: {
    name: "ContractIQ",
    tagline: "Contract Lifecycle Agent",
    image: "/images/products/contractiq.png",
    metaTitle: "ContractIQ — Contract Automation | Decision Engines",
    metaDescription:
      "Extract clauses, track obligations, and score contract risk with patented AI bots — 90% accuracy on standard fields with closed-loop learning.",
  },
  converseiq: {
    name: "ConverseIQ",
    tagline: "Finance Conversation Agent",
    image: "/images/products/converseiq.png",
    metaTitle: "ConverseIQ — AI Assistant | Decision Engines",
    metaDescription:
      "Sovereign finance assistant grounded in your ledger, contracts, and operational data — multi-turn Q&A and reporting without public cloud models.",
  },
  decisioniq: {
    name: "DecisionIQ",
    tagline: "Process Orchestration Agent",
    image: "/images/products/decisioniq.png",
    metaTitle: "DecisionIQ — Process Automation | Decision Engines",
    metaDescription:
      "Process orchestration that routes specialized AI models per task with department-specific fine-tuning and full auditability.",
  },
  connectors: {
    name: "Connectors",
    tagline: "Integration & Deployment Layer",
    image: "/images/products/connectors.png",
    metaTitle: "Connectors — Integration Layer | Decision Engines",
    metaDescription:
      "Pre-built integration bots for SAP, Oracle, NetSuite, Dynamics, and RPA orchestration — hosted or inside your perimeter.",
  },
};

function buildProduct(slug: string): Product {
  const meta = productMeta[slug];
  const content = getProductContent(slug)!;

  const features = content.sections.flatMap((section) =>
    section.capabilities.map((cap) => `${cap.title}: ${cap.description}`)
  );

  return {
    slug,
    name: meta.name,
    tagline: meta.tagline,
    heroTitle: content.heroTitle,
    description: content.description,
    image: meta.image,
    stats: content.stats,
    intro: content.intro,
    features,
    sections: content.sections,
    highlight: content.highlight,
    global: content.global,
    security: content.security,
    faq: content.faq,
    faqTitle: content.faqTitle,
    partnersSection: content.partnersSection,
    relatedProducts: content.relatedProducts,
    cta: content.cta,
    metaTitle: meta.metaTitle,
    metaDescription: meta.metaDescription,
  };
}

export const products: Product[] = [
  buildProduct("invoiceiq"),
  buildProduct("contractiq"),
  buildProduct("converseiq"),
  buildProduct("decisioniq"),
  buildProduct("connectors"),
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const productCards = products.map((p) => ({
  slug: p.slug,
  name: p.name,
  tagline: p.tagline,
  image: p.image,
  description:
    p.slug === "invoiceiq"
      ? "Captures, GL-codes, and routes global invoices end to end — 75%+ touchless processing."
      : p.slug === "contractiq"
        ? "Extracts clauses, tracks obligations, and flags risk across every contract format."
        : p.slug === "converseiq"
          ? "Multi-turn Q&A grounded in your financial data — reporting and exceptions, on demand."
          : p.slug === "decisioniq"
            ? "Orchestrates specialized models across finance, procurement, and sales workflows."
            : "Native connectors into SAP, Oracle, NetSuite, and Dynamics — inside your perimeter.",
}));
