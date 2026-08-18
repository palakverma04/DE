export type CustomerLogo = {
  name: string;
  src: string;
  height?: number;
  industry?: string;
};

export const customerLogos: CustomerLogo[] = [
  { name: "PayPal", src: "/customers/paypal.png", height: 28, industry: "Financial Services" },
  { name: "Genentech", src: "/customers/genentech.png", height: 24, industry: "Healthcare & Life Sciences" },
  { name: "Embecta", src: "/customers/embecta.png", height: 28, industry: "Healthcare & Life Sciences" },
  { name: "McKesson", src: "/customers/mckesson.png", height: 26, industry: "Healthcare & Life Sciences" },
  { name: "eBay", src: "/customers/ebay.png", height: 28, industry: "E-commerce & Marketplaces" },
  { name: "Nokia", src: "/customers/nokia.png", height: 24, industry: "Telecommunications" },
  { name: "Autodesk", src: "/customers/autodesk.png", height: 28, industry: "Technology & Software" },
];

export const trustBadges = [
  { label: "SOC 2 Type II", highlight: true },
  { label: "Listed on SAP Store", plain: true },
];
