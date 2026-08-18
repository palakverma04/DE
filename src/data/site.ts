export const siteConfig = {
  name: "Decision Engines",
  url: "https://decisionengines.ai",
  description:
    "Agentic financial operations platform — specialized agents that execute AP, contracts, and reporting end to end.",
  demoUrl: "https://decisionengines.ai/contact",
  email: "info@decisionengines.ai",
  social: {
    x: "https://x.com/decisionengines",
    linkedin: "https://www.linkedin.com/company/decision-engines",
  },
};

export const erpPartners = [
  "SAP",
  "Oracle",
  "NetSuite",
  "Microsoft Dynamics",
  "JD Edwards",
  "PeopleSoft",
  "UiPath",
  "Automation Anywhere",
];

export const proofMetrics = [
  { value: "85%+", label: "Accuracy digitizing global paper invoices" },
  { value: "90%", label: "Reduction in payment delays, duplicate payments & fraud" },
  { value: "75%", label: "Touchless invoice processing" },
  { value: "<2 Days", label: "Cash-flow cycle time at 95% visibility accuracy" },
  { value: "90%", label: "Accurate clause & field extraction (ContractIQ)" },
  { value: "7", label: "Enterprise logos in production" },
];

export const comparisonRows = [
  {
    generic: "One-size-fits-all model — same accuracy on day 1,000 as day 1.",
    de: "**Continuous fine-tuning:** every correction sharpens your organization's own LoRA adapters.",
  },
  {
    generic: "Cloud-only processing; data leaves your perimeter.",
    de: "**Sovereign on-prem, edge, or hybrid deployment;** data never leaves your environment.",
  },
  {
    generic: "One large model handles every task.",
    de: "**Multiple specialized models routed per task** — fast extraction, deep reasoning.",
  },
  {
    generic: "Re-onboard from scratch for each new entity or department.",
    de: "**Department- and entity-specific adapters** swapped in without retraining the base model.",
  },
  {
    generic: "Manual reconciliation between AP, contracts, and reporting.",
    de: "**Shared enterprise knowledge graph** — one context across invoice, contract, and report.",
  },
  {
    generic: "Black-box accuracy claims.",
    de: "**Full audit trail** from raw document to final GL entry.",
  },
];
