export type DemoProductOption = {
  id: string;
  title: string;
  description: string;
  icon: "invoice" | "contract" | "assistant" | "automation";
};

export const demoRoles = [
  "AP Manager / AP Lead",
  "Finance Director",
  "Controller",
  "CFO / VP Finance",
  "Finance / AP Team",
  "IT / Ops",
  "Other",
] as const;

export const demoProducts: DemoProductOption[] = [
  {
    id: "invoiceiq",
    title: "AP Processing",
    description: "AI-driven invoice capture, coding & approval workflows",
    icon: "invoice",
  },
  {
    id: "contractiq",
    title: "Contract Lifecycle",
    description: "AI contract intake, obligation tracking & risk flags",
    icon: "contract",
  },
  {
    id: "converseiq",
    title: "Finance Assistant",
    description: "Conversational AI for finance queries & reporting",
    icon: "assistant",
  },
  {
    id: "decisioniq",
    title: "Process Automation",
    description: "Intelligent automation across finance, sales & procurement",
    icon: "automation",
  },
];

export const demoExpectations = [
  "Personalized walkthrough of the products you select",
  "Real examples relevant to your industry and ERP environment",
  "Technical Q&A with solution experts",
  "Implementation and deployment preview",
  "Post-demo summary and recommended next steps",
];

export const demoCountries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Germany",
  "France",
  "India",
  "Australia",
  "Singapore",
  "Netherlands",
  "Other",
];

/** Map URL ?product= slugs to demo product ids */
export const demoProductFromQuery: Record<string, string> = {
  invoiceiq: "invoiceiq",
  ap: "invoiceiq",
  contractiq: "contractiq",
  contract: "contractiq",
  converseiq: "converseiq",
  assistant: "converseiq",
  decisioniq: "decisioniq",
  automation: "decisioniq",
  connectors: "decisioniq",
};
