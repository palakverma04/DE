import { getProcessPages, internalPageUrl } from "./internalPages";

export const productLinks = [
  { href: "/product/invoiceiq", label: "InvoiceIQ" },
  { href: "/product/contractiq", label: "ContractIQ" },
  { href: "/product/converseiq", label: "ConverseIQ" },
  { href: "/product/decisioniq", label: "DecisionIQ" },
  { href: "/product/connectors", label: "Connectors" },
];

export const solutionLinks = [
  { href: "/solutions/finance", label: "Finance" },
  { href: "/solutions/procurement", label: "Procurement" },
  { href: "/solutions/sales", label: "Sales" },
];

export const solutionMegaGroups = [
  {
    label: "Finance",
    href: "/solutions/finance",
    links: getProcessPages("finance").slice(0, 4).map((p) => ({
      href: internalPageUrl(p),
      label: p.title,
    })),
  },
  {
    label: "Procurement",
    href: "/solutions/procurement",
    links: getProcessPages("procurement").slice(0, 4).map((p) => ({
      href: internalPageUrl(p),
      label: p.title,
    })),
  },
  {
    label: "Sales",
    href: "/solutions/sales",
    links: getProcessPages("sales").map((p) => ({
      href: internalPageUrl(p),
      label: p.title,
    })),
  },
];

export const companyLinks = [
  { href: "/company/about", label: "About" },
  { href: "/company/contact", label: "Contact" },
  { href: "/company/careers", label: "Careers" },
];

export const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/eula", label: "EULA" },
];

export const footerSections = [
  { title: "Product", links: productLinks },
  {
    title: "Solutions",
    links: [
      ...solutionLinks,
      ...getProcessPages("finance").slice(0, 2).map((p) => ({
        href: internalPageUrl(p),
        label: p.title,
      })),
    ],
  },
  { title: "Company", links: companyLinks },
  { title: "Legal", links: legalLinks },
];

export const mainNav = [
  { type: "dropdown" as const, label: "Product", links: productLinks, mega: false },
  { type: "dropdown" as const, label: "Solutions", links: solutionLinks, mega: true },
  { type: "link" as const, label: "Industries", href: "/industries" },
  { type: "link" as const, label: "Resources", href: "/resources" },
  { type: "dropdown" as const, label: "Company", links: companyLinks, mega: false },
];
