export type PlatformLogo = {
  name: string;
  src: string;
  height?: number;
};

/** Cloud infrastructure — "Our Partners" on ConverseIQ, DecisionIQ, Connectors */
export const cloudPartners: PlatformLogo[] = [
  { name: "AWS", src: "/images/partners/aws.png", height: 36 },
  { name: "Google Cloud", src: "/images/partners/google-cloud.png", height: 32 },
  { name: "Microsoft Azure", src: "/images/partners/azure.png", height: 32 },
  { name: "IBM Cloud", src: "/images/partners/ibm-cloud.png", height: 32 },
  { name: "Oracle Cloud", src: "/images/partners/oracle-cloud.png", height: 32 },
];

/** ERP & RPA — InvoiceIQ "Supported Platforms" strip (live site order, no duplicates) */
export const invoiceErpPlatforms: PlatformLogo[] = [
  { name: "JD Edwards", src: "/images/platforms/jdedwards.png", height: 22 },
  { name: "PeopleSoft", src: "/images/platforms/peoplesoft.png", height: 22 },
  { name: "Microsoft Dynamics 365", src: "/images/platforms/dynamics.png", height: 22 },
  { name: "UiPath", src: "/images/platforms/uipath.png", height: 22 },
  { name: "Automation Anywhere", src: "/images/platforms/automation-anywhere.png", height: 22 },
];

/** Full supported platforms row for InvoiceIQ */
export const invoiceSupportedPlatforms: PlatformLogo[] = [
  ...cloudPartners.map((p) => ({ ...p, height: 22 })),
  ...invoiceErpPlatforms,
];

export const technologyPartnersCopy =
  "Our Partners include top-tier technology companies who value the transformative power of AI in driving innovation, efficiency, and strategic decision-making.";
