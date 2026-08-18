export type ProductCapability = {
  title: string;
  description: string;
};

export type ProductSection = {
  label?: string;
  title: string;
  description?: string;
  capabilities: ProductCapability[];
};

export type ProductFAQ = {
  question: string;
  answer: string;
};

export type ProductRelated = {
  slug: string;
  title: string;
  description: string;
};

export type ProductCTA = {
  title: string;
  description: string;
  note?: string;
};

export type ProductIntro = {
  label?: string;
  title: string;
  paragraphs: string[];
};

export type ProductRichContent = {
  heroTitle: string;
  description: string;
  stats: { value: string; label: string }[];
  intro?: ProductIntro;
  sections: ProductSection[];
  highlight?: {
    label: string;
    title: string;
    description?: string;
    bullets: string[];
  };
  security?: {
    label?: string;
    title: string;
    description: string;
    bullets: string[];
  };
  global?: {
    label?: string;
    title: string;
    description: string;
    bullets: string[];
  };
  faq?: ProductFAQ[];
  faqTitle?: string;
  partnersSection?: "technology" | "platforms";
  relatedProducts: ProductRelated[];
  cta: ProductCTA;
};

export const productContent: Record<string, ProductRichContent> = {
  invoiceiq: {
    heroTitle: "Accounts Payable Automation & Invoice Processing for Enterprise Finance Teams",
    description:
      "AI-driven, enterprise-grade invoice capture, intelligent GL coding, and multi-level approval workflows. Reduce manual processing time and errors — and achieve 75% touchless invoice processing.",
    stats: [
      { value: "85%+", label: "Accuracy digitizing global paper invoices out of the box" },
      { value: "90%", label: "Reduction in payment delays, missed credits & duplicate payments" },
      { value: "75%", label: "Touchless invoice processing — no human intervention required" },
    ],
    sections: [
      {
        label: "Capabilities at a Glance",
        title: "End-to-End Intelligent AP Automation",
        capabilities: [
          {
            title: "Statement Credits Audits",
            description:
              "Automatically identifies and digitizes credit memos from vendor communications, then reconciles and applies them to vendor accounts once approved.",
          },
          {
            title: "Auto-Code Invoices & SOWs to GL Accounts",
            description:
              "Assigns correct GL account codes to invoices and SOWs. When confidence is low, routes items to an accountant for coding — ensuring accurate GL classification without disrupting the AP workflow.",
          },
          {
            title: "Intelligent Accounts Payable Processing",
            description:
              "Digitizes multilingual and multi-format scanned invoices with automated 3-way matching against POs and goods receipts — minimizing delays, errors, and cash flow disruptions without BPOs.",
          },
          {
            title: "Auto-Reply Invoice & Payment Status Queries",
            description:
              "Digitizes invoice data, validates against payment dates from master data or contracts, and automatically responds to vendor payment status inquiries.",
          },
          {
            title: "Intelligent AP Service Desk",
            description:
              "Manages the AP inbox — understanding vendor requests, auto-responding, and triggering appropriate workflows. Eliminates 90% of errors from duplicate invoices and missed credits.",
          },
          {
            title: "AI Risk Scoring & Fraud Detection",
            description:
              "Approval risk scoring, intelligent duplicate detection, and contract discovery for non-PO invoices — alerting approvers to high-risk items before payment.",
          },
        ],
      },
    ],
    highlight: {
      label: "Real-Time Learning",
      title: "Gets Smarter With Every Invoice",
      description:
        "When invoices are complex or fields are unrecognized, InvoiceIQ routes them to an exception queue. Once a business user corrects the data, the AI bots learn from the correction — continuously improving accuracy without IT involvement.",
      bullets: [
        "Closed-loop learning from every human correction",
        "Adapts to new vendor formats automatically — no reconfiguration",
        "Accuracy improves over time without IT intervention",
      ],
    },
    global: {
      label: "Global Capabilities",
      title: "One Global Invoice Intake Point — 18+ Languages",
      description:
        "InvoiceIQ supports 18+ languages across Asia, Europe, and the Americas. Image-level language detection means invoices no longer need to be sorted by mailbox or BPO. Country-specific date, currency, and amount formats are normalized automatically.",
      bullets: [
        "Multi-locale: handles country-specific date and amount formats",
        "Any invoice format: PDF, image, XML, CSV, CXML, XLS, custom",
        "Elastic auto-scaling handles month-end and quarter-end volume spikes",
        "Outputs structured data in CSV, CXML, XML, JSON, XLS, or custom formats for downstream ERP and AP systems",
      ],
    },
    security: {
      label: "Security & Compliance",
      title: "SOC 2 Type II — Built for Enterprise Security",
      description:
        "InvoiceIQ is deployed as a secure SaaS application aligned with SOC 2 Type II standards. Your financial data stays protected at every step.",
      bullets: [
        "Dedicated VPC and compute infrastructure — not open to the public internet",
        "All data encrypted at rest and in-flight",
        "Shared-nothing deployment — private cloud and on-premise options available",
        "Data retention configurable to customer requirements",
      ],
    },
    faqTitle: "AP Automation — Frequently Asked Questions",
    faq: [
      {
        question: "What is AP automation software?",
        answer:
          "AP automation software — also called accounts payable automation software — uses AI to automatically capture, process, and route invoices, eliminating manual data entry, reducing payment errors, and accelerating cycle times.",
      },
      {
        question: "How does touchless invoice processing work?",
        answer:
          "Touchless invoice processing uses AI bots to automatically capture invoice data, validate it against purchase orders and contracts, assign GL codes, and route for approval — all without human intervention on standard invoices.",
      },
      {
        question: "What ERP systems does InvoiceIQ integrate with?",
        answer:
          "InvoiceIQ integrates with SAP, Oracle, NetSuite, Dynamics, and other major ERP systems via APIs, file exchange, and screen automation. Prebuilt connector bots are available for the most common enterprise platforms.",
      },
      {
        question: "How accurate is AI invoice processing out of the box?",
        answer:
          "InvoiceIQ achieves 85%+ accuracy digitizing global paper invoices from day one, without requiring extensive configuration or training data from your specific vendors. Accuracy continuously improves through closed-loop learning.",
      },
      {
        question: "What languages and invoice formats does InvoiceIQ support?",
        answer:
          "InvoiceIQ supports 18+ languages across Asia, Europe, and the Americas, with image-level language detection enabling a single global invoice intake point. It processes PDF, image, CXML, XML, and email attachments.",
      },
      {
        question: "How does InvoiceIQ prevent duplicate payments?",
        answer:
          "InvoiceIQ's intelligent risk management bots automatically detect duplicate invoices before they enter the payment workflow, alerting the AP team and blocking processing until resolved.",
      },
      {
        question: "Does InvoiceIQ support 3-way PO matching?",
        answer:
          "Yes. InvoiceIQ automatically performs 3-way matching — validating each invoice against the corresponding purchase order and goods receipt before routing for approval. Mismatches are flagged and routed to exception handling.",
      },
    ],
    partnersSection: "platforms",
    relatedProducts: [
      {
        slug: "contractiq",
        title: "Contract Lifecycle Management & Risk Automation",
        description:
          "AI-powered contract intake, clause extraction, obligation tracking, renewal alerts, and risk flagging. Keep your legal and procurement teams ahead of every deadline — without manual document review.",
      },
      {
        slug: "converseiq",
        title: "AI Finance Assistant for Enterprise Teams",
        description:
          "Ask questions, surface exceptions, and generate reports using conversational AI trained on your enterprise data — finance, procurement, and sales in one governed interface.",
      },
    ],
    cta: {
      title: "See InvoiceIQ in action with your own AP workflows",
      description:
        "Book a 30-minute demo and we'll show you exactly how InvoiceIQ handles your invoice formats, ERP environment, and approval workflows.",
      note: "Our team will be in touch within one business day.",
    },
  },

  contractiq: {
    heroTitle: "Contract Lifecycle & Risk Automation",
    description:
      "Extract clauses, track obligations, and score contract risk with patented AI bots — 90% accuracy on standard fields out of the box, with closed-loop learning from every markup.",
    stats: [
      { value: "90%", label: "Accurate clauses & fields extraction out of the box" },
      { value: "100%", label: "Real-time learning from user markup" },
      { value: "E2E", label: "Migration, extraction, risk scoring, and ERP sync" },
    ],
    sections: [
      {
        label: "Capabilities",
        title: "Contract Life Cycle & Risk Automation",
        capabilities: [
          {
            title: "Legacy Migration",
            description:
              "Migrate contracts from legacy document stores with intelligent content extraction to modern document stores and CLM systems.",
          },
          {
            title: "Post-Signature Digitization",
            description:
              "Digitize existing and new contracts post-signing and create a single searchable store — updating key systems with contract performance data.",
          },
          {
            title: "Negotiation Risk Tracking",
            description:
              "Track deviations of clauses and field values from company standards during negotiations to optimize total contract risk.",
          },
          {
            title: "Cross-System Enforcement",
            description:
              "Tie key contract field data into AP, AR, and ERP systems to enforce billing rates, SLAs, and contractual commitments automatically.",
          },
          {
            title: "90% Out-of-Box Accuracy",
            description:
              "Automatically extract standard clauses and fields from PDFs and images with 90% accuracy from day one — delivering immediate ROI without lengthy setup.",
          },
          {
            title: "Custom Risk Scoring",
            description:
              "Risk scoring bots apply your rules and AI algorithms, assessing deviations from standard clauses and specific field ranges before signature.",
          },
          {
            title: "Realtime Learning",
            description:
              "Active learning technology adapts to custom clauses and fields that business users markup — improving accuracy in real time without IT intervention.",
          },
          {
            title: "Any Document Type",
            description:
              "Process TEXT, Excel, image, PDF, and Word from FTP, Google Drive, email, Salesforce, Apttus, and other business applications.",
          },
        ],
      },
    ],
    highlight: {
      label: "Realtime Learning",
      title: "Closed-Loop Learning From Every Markup",
      description:
        "Business users mark up extracted clauses and fields in a highly intuitive UI. ContractIQ learns from every correction — adapting to your organization's language without IT reconfiguration.",
      bullets: [
        "Real-time learning from legal and business user markup",
        "Custom clause and field adaptation without IT",
        "Accuracy improves with every contract processed",
      ],
    },
    security: {
      label: "Security & Compliance",
      title: "Governed, Auditable Contract Data",
      description:
        "Every extraction, risk score, and system update is logged with full audit trail — supporting legal review, compliance, and regulatory requirements.",
      bullets: [
        "Full audit trail from document to ERP update",
        "Role-based access for legal and business teams",
        "SOC 2 Type II deployment options",
        "VPC and on-prem hosting available",
      ],
    },
    partnersSection: "technology",
    relatedProducts: [
      {
        slug: "invoiceiq",
        title: "Accounts Payable Automation & Invoice Processing",
        description:
          "AI-driven invoice capture, intelligent GL coding, and multi-level approval workflows — 75% touchless invoice processing for enterprise finance teams.",
      },
      {
        slug: "decisioniq",
        title: "Process Orchestration with Generative AI",
        description:
          "Compose multi-step workflows across finance, procurement, and sales — with department-specific fine-tuning and full auditability.",
      },
    ],
    cta: {
      title: "See ContractIQ in action with your contract workflows",
      description:
        "Book a 30-minute demo and we'll show you how ContractIQ extracts clauses, scores risk, and syncs obligations to your ERP.",
      note: "Our team will be in touch within one business day.",
    },
  },

  converseiq: {
    heroTitle: "AI-Powered Assistant For Enterprise",
    description:
      "ConverseIQ serves as a next-generation AI Assistant for comprehensive business operations — harnessing generative AI agents to streamline finance, procurement, and sales with insights grounded in your enterprise data.",
    stats: [],
    intro: {
      label: "Conversation automation",
      title: "Unleashing the Power of Generative AI",
      paragraphs: [
        "ConverseIQ, empowered by generative AI, can revolutionize the way your organization operates. It streamlines your financial, procurement, and sales processes with sophisticated AI capabilities, providing insights that were previously impossible to obtain manually.",
        "With ConverseIQ, businesses can optimize their operations, foster innovation, make smarter decisions, and streamline their interfaces — all through the power of generative AI.",
      ],
    },
    sections: [
      {
        label: "What ConverseIQ Can Do For Your Team",
        title: "One assistant tailored to every team",
        description:
          "Whether your team is a lean operation or a large-scale department, ConverseIQ can revolutionize your workflow. Our platform adapts to the unique needs of each team, providing a tailored approach for optimal results.",
        capabilities: [
          {
            title: "ConverseIQ for Finance Team",
            description:
              "Automates complex tasks, generates detailed financial reports, simplifies convoluted financial statements, and presents a clear picture of your financial status. By identifying and interpreting financial trends, ConverseIQ empowers finance teams to track progress and predict future outcomes with sharper precision.",
          },
          {
            title: "ConverseIQ for Procurement Team",
            description:
              "A powerful ally for procurement teams — aiding in supplier selection, contract management, and procurement planning with advanced analytical capabilities. Real-time insights into supplier performance, market trends, and procurement risks help teams optimize strategies and deliver better value.",
          },
          {
            title: "ConverseIQ for Sales Team",
            description:
              "Assists in lead prioritization, customer engagement, and sales forecasting using machine learning to surface actionable insights into customer behavior and market trends. ConverseIQ crafts personalized emails and identifies cross-selling and up-selling opportunities to drive revenue growth.",
          },
        ],
      },
    ],
    highlight: {
      label: "Orchestration",
      title: "Orchestration, innovation, and unified decision-making",
      description:
        "At the core of ConverseIQ is orchestration — gen-AI agents connect processes, systems, and knowledge to execute complex tasks seamlessly across your organization.",
      bullets: [
        "Orchestration: connects processes, systems, and knowledge across functions",
        "Innovation: surfaces insights from data previously inaccessible or unutilized",
        "Decision-making: analyzes data, makes predictions, and offers recommendations",
        "Unification: replaces fragmented interfaces with one conversational entry point",
      ],
    },
    security: {
      label: "Security & Compliance",
      title: "Sovereign Deployment by Default",
      description:
        "ConverseIQ deploys inside your VPC or on-prem environment. Your financial data never leaves your perimeter — and no queries are sent to public cloud models.",
      bullets: [
        "VPC, on-prem, and hybrid deployment on AWS, Azure, Google Cloud, IBM Cloud, and Oracle Cloud",
        "No data export to public LLM providers",
        "Role-based access and conversation audit logs",
        "SOC 2 Type II aligned infrastructure",
      ],
    },
    partnersSection: "technology",
    relatedProducts: [
      {
        slug: "invoiceiq",
        title: "Accounts Payable Automation & Invoice Processing",
        description:
          "AI-driven invoice capture, intelligent GL coding, and multi-level approval workflows — 75% touchless invoice processing.",
      },
      {
        slug: "contractiq",
        title: "Contract Lifecycle Management & Risk Automation",
        description:
          "AI-powered contract intake, clause extraction, obligation tracking, renewal alerts, and risk flagging.",
      },
    ],
    cta: {
      title: "See ConverseIQ in action with your enterprise data",
      description:
        "Book a 30-minute demo and we'll show you how ConverseIQ answers questions grounded in your ERP, contracts, and operational data.",
      note: "Our team will be in touch within one business day.",
    },
  },

  decisioniq: {
    heroTitle: "Process Automation for Enterprise",
    description:
      "Unleash the power of Process Automation and generative AI to transform data into actionable insights — for finance, procurement, and sales teams.",
    stats: [],
    intro: {
      label: "Process automation",
      title: "Accelerate Business Teams With Process Automation and Generative AI",
      paragraphs: [
        "Harnessing the power of process automation in conjunction with advanced AI technologies, DecisionIQ brings a revolutionary approach to enterprise workflows — from pre-processing and extraction through reasoning orchestration and closed-loop learning.",
        "By harnessing these four stages of process automation, DecisionIQ significantly enhances the efficiency of processes, systems, and knowledge integration — enabling businesses to transform data-driven insights into tangible results.",
      ],
    },
    sections: [
      {
        label: "What DecisionIQ Can Do For Your Team",
        title: "Tailored automation for every department",
        description:
          "Whether your team is a lean operation or a large-scale department, DecisionIQ can revolutionize your workflow. Our platform adapts to the unique needs of each team, providing a tailored approach for optimal results.",
        capabilities: [
          {
            title: "DecisionIQ for Finance Teams",
            description:
              "Powered by advanced AI and machine learning, DecisionIQ automates complex manual tasks like data entry and document processing — freeing finance teams to focus on strategic initiatives. Access real-time insights into financial trends and customer behavior to make smarter decisions that drive business growth.",
          },
          {
            title: "DecisionIQ for Procurement Teams",
            description:
              "Streamlines supplier selection, contract management, and procurement planning. Provides real-time insights into supplier performance and market trends, empowering procurement teams to optimize strategies and deliver better value across the organization.",
          },
          {
            title: "DecisionIQ for Sales Teams",
            description:
              "Assists in lead prioritization, customer engagement, and sales forecasting. Automates the crafting of personalized emails and identifies cross-selling and up-selling opportunities — helping sales teams craft more effective strategies and drive revenue growth.",
          },
        ],
      },
    ],
    highlight: {
      label: "Architecture",
      title: "Four Stages of Intelligent Process Automation",
      description:
        "DecisionIQ's unified approach to document management eliminates the need for multiple interfaces — enabling businesses to prioritize strategy and innovation while relying on dependable, AI-extracted data.",
      bullets: [
        "Pre-processing: format normalization, language detection, and quality checks",
        "Extraction: specialized bots for each document and data type",
        "Reasoning: multi-model routing for matching and decision logic",
        "Learning: LoRA adapters sharpen from every human correction",
      ],
    },
    security: {
      label: "Security & Compliance",
      title: "Hybrid and Sovereign Deployment",
      description:
        "Deploy sensitive workloads inside your environment on AWS, Azure, Google Cloud, IBM Cloud, or Oracle Cloud — while scaling burst capacity where policy allows.",
      bullets: [
        "On-prem, VPC, edge, and hybrid deployment options",
        "Full audit trail from input to system action",
        "Department-specific model isolation",
        "SOC 2 Type II attested infrastructure",
      ],
    },
    partnersSection: "technology",
    relatedProducts: [
      {
        slug: "invoiceiq",
        title: "Accounts Payable Automation & Invoice Processing",
        description:
          "AI-driven invoice capture, intelligent GL coding, and multi-level approval workflows — 75% touchless invoice processing.",
      },
      {
        slug: "contractiq",
        title: "Contract Lifecycle Management & Risk Automation",
        description:
          "AI-powered contract intake, clause extraction, obligation tracking, and risk flagging across every contract format.",
      },
    ],
    cta: {
      title: "See DecisionIQ in action with your workflows",
      description:
        "Book a 30-minute demo and we'll show you how DecisionIQ orchestrates specialized models across your finance, procurement, and sales processes.",
      note: "Our team will be in touch within one business day.",
    },
  },

  connectors: {
    heroTitle: "Connect All Your Existing Applications",
    description:
      "Decision Engines Connectors seamlessly integrate your existing applications with our platform — empowering you to leverage the full potential of Decision Engines across ERP, cloud storage, databases, and RPA systems.",
    stats: [],
    intro: {
      label: "Integrations",
      title: "Unified connectivity across your enterprise stack",
      paragraphs: [
        "The Decision Engines Connector integrates all of your existing applications into the platform, giving you access to the full range of capabilities offered by Decision Engines. This powerful tool streamlines your workflow and enhances collaboration across different systems.",
        "Connect data from databases, cloud storage platforms, email inboxes, and business applications — pulling relevant information and insights without manually switching between tools. Connectors are highly customizable: choose which systems to connect, set rules for data transfer and synchronization, and automate processes for a more efficient workflow.",
      ],
    },
    sections: [
      {
        label: "ERP & Business Applications",
        title: "Native ERP and application integrations",
        capabilities: [
          {
            title: "SAP",
            description: "Bidirectional sync with SAP ERP and S/4HANA — invoice posting, PO retrieval, vendor master, and GL coding.",
          },
          {
            title: "Oracle & NetSuite",
            description: "Cloud and on-prem Oracle integrations plus NetSuite AP, procurement, and financial modules.",
          },
          {
            title: "Microsoft Dynamics 365",
            description: "Dynamics Finance & Operations connectors for invoice processing and master data sync.",
          },
          {
            title: "JD Edwards & PeopleSoft",
            description: "Screen automation and API connectors for legacy Oracle ERP deployments.",
          },
          {
            title: "Salesforce & CLM",
            description: "Pull contract and customer data from Salesforce, Apttus, and other business applications.",
          },
          {
            title: "UiPath & Automation Anywhere",
            description: "Orchestrate RPA tasks alongside Decision Engines agents for end-to-end automation across legacy systems.",
          },
        ],
      },
      {
        label: "Data Sources",
        title: "Ingest and output from anywhere",
        capabilities: [
          {
            title: "Email & FTP",
            description: "Monitor AP inboxes and FTP drops for incoming invoices, contracts, and supporting documents.",
          },
          {
            title: "Cloud Storage",
            description: "Connect Google Drive, SharePoint, and other cloud document stores for automated ingestion.",
          },
          {
            title: "Databases & APIs",
            description: "Pull structured data from databases and custom APIs into Decision Engines workflows.",
          },
          {
            title: "Flexible Output",
            description: "Structured output in CSV, CXML, XML, JSON, XLS, or custom formats tailored to your ERP requirements.",
          },
        ],
      },
    ],
    security: {
      label: "Security & Compliance",
      title: "Secure, Configurable Deployment",
      description:
        "Connectors deploy in dedicated VPC environments on AWS, Azure, Google Cloud, IBM Cloud, or Oracle Cloud — with encryption at rest and in transit.",
      bullets: [
        "Private cloud, on-prem, and hybrid deployment",
        "Encryption at rest and in transit",
        "Configurable data retention and sync rules",
        "SOC 2 Type II attested infrastructure",
      ],
    },
    partnersSection: "technology",
    relatedProducts: [
      {
        slug: "invoiceiq",
        title: "Accounts Payable Automation & Invoice Processing",
        description:
          "AI-driven invoice capture, intelligent GL coding, and multi-level approval workflows — 75% touchless invoice processing.",
      },
      {
        slug: "decisioniq",
        title: "Process Orchestration with Generative AI",
        description:
          "Compose multi-step workflows across finance, procurement, and sales with department-specific fine-tuning.",
      },
    ],
    cta: {
      title: "See Connectors in action with your ERP environment",
      description:
        "Book a 30-minute demo and we'll show you how Decision Engines integrates with your SAP, Oracle, NetSuite, or Dynamics deployment.",
      note: "Our team will be in touch within one business day.",
    },
  },
};

export function getProductContent(slug: string): ProductRichContent | undefined {
  return productContent[slug];
}
