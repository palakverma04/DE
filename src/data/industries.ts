export type Industry = {
  name: string;
  description: string;
  customers: string[];
};

export const industries: Industry[] = [
  {
    name: "Financial Services",
    description:
      "Strict audit requirements, complex approval chains, and data sovereignty mandates for global payment and fintech operations.",
    customers: ["PayPal"],
  },
  {
    name: "Healthcare & Life Sciences",
    description:
      "Regulated procurement, contract compliance, and high-volume AP for pharmaceutical, medical device, and healthcare distribution.",
    customers: ["Genentech", "Embecta", "McKesson"],
  },
  {
    name: "Telecommunications",
    description:
      "Multi-entity finance operations, global vendor networks, and contract-heavy procurement at telecom scale.",
    customers: ["Nokia"],
  },
  {
    name: "E-commerce & Marketplaces",
    description:
      "High invoice volume, diverse supplier bases, and cash flow visibility across marketplace and platform economics.",
    customers: ["eBay"],
  },
  {
    name: "Technology & Software",
    description:
      "Global SaaS and product companies with complex vendor contracts, subscription billing, and fast-scaling finance teams.",
    customers: ["Autodesk"],
  },
];
