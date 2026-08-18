/** Hand-polished copy for pages where scrape quality is poor or missing. */

export type PageContentOverride = {
  description?: string;
  howItWorks?: string[];
  benefits?: string[];
};

export const pageOverrides: Record<string, PageContentOverride> = {
  // Products
  contractiq: {
    description:
      "Extract clauses, track obligations, and score contract risk with patented AI bots — 90% accuracy on standard fields out of the box, with closed-loop learning from every markup.",
    howItWorks: [
      "ContractIQ migrates legacy contract repositories into a searchable, machine-readable store — extracting clauses, parties, dates, and obligations from PDFs and scanned images.",
      "Risk-scoring bots compare extracted terms against your standard playbooks, flagging deviations before signature and surfacing renewal and termination obligations post-signature.",
      "Closed-loop learning adapts to your organization's custom clauses and fields through an intuitive markup UI — no IT reconfiguration required.",
      "Integration bots push extracted field data into AP, AR, and ERP systems to enforce billing rates, SLAs, and contractual commitments automatically.",
    ],
    benefits: [
      "90% accuracy extracting standard clauses and fields from day one",
      "Real-time learning from legal and business user markup",
      "Custom risk scoring against company standards and field ranges",
      "End-to-end automation via native ERP and CLM connectors",
      "Elastic scaling for high-volume contract ingestion",
    ],
  },
  converseiq: {
    description:
      "A sovereign finance assistant grounded in your ledger, contracts, and operational data — multi-turn Q&A, exception triage, and reporting without exporting data to a public model.",
    howItWorks: [
      "ConverseIQ replaces fragmented finance UIs with a single conversational interface — orchestrating InvoiceIQ, ContractIQ, and DecisionIQ agents behind one entry point.",
      "Generative agents connect processes, systems, and your enterprise knowledge graph to answer complex questions across AP, treasury, procurement, and sales.",
      "Finance teams generate reconciliations, variance explanations, and board-ready summaries from live data — with full audit trail from source document to answer.",
      "Procurement and sales teams get supplier performance insights, lead prioritization, and pipeline analytics through the same governed interface.",
    ],
    benefits: [
      "Unified interface across finance, procurement, and sales workflows",
      "Grounded answers from your ERP, contracts, and invoice data",
      "Automated financial reporting and exception explanation",
      "Supplier, pipeline, and forecast analytics on demand",
      "Deploys inside your VPC — data never leaves your perimeter",
    ],
  },
  decisioniq: {
    description:
      "Process orchestration layer that routes specialized AI models per task — from invoice digitization to lead scoring — with department-specific LoRA adapters and full auditability.",
    howItWorks: [
      "DecisionIQ composes multi-step workflows across finance, procurement, and sales — selecting the right model for extraction, matching, reasoning, or generation at each step.",
      "Organization-specific fine-tuning means every human correction sharpens your adapters without retraining the base model.",
      "A shared enterprise knowledge graph links invoices, contracts, POs, and customer records — eliminating manual reconciliation between siloed systems.",
      "Hybrid and on-prem deployment options keep sensitive workloads inside your environment while scaling burst capacity where policy allows.",
    ],
    benefits: [
      "Multi-model routing — fast extraction and deep reasoning per task",
      "Department- and entity-specific LoRA adapters",
      "Shared knowledge graph across AP, contracts, and sales",
      "Full audit trail from raw input to final system action",
      "Sovereign deployment: VPC, edge, or hybrid",
    ],
  },
  connectors: {
    description:
      "Pre-built integration bots for SAP, Oracle, NetSuite, Dynamics, JD Edwards, and PeopleSoft — plus UiPath and Automation Anywhere orchestration. Deploy hosted or inside your perimeter.",
    howItWorks: [
      "Connectors expose a unified API layer over your ERP, document stores, email inboxes, and cloud storage — so agents read and write without custom point integrations per workflow.",
      "Bidirectional sync pushes extracted invoice and contract data into GL, AP, and procurement modules while pulling PO, vendor, and master data for matching.",
      "RPA handoffs via UiPath and Automation Anywhere cover legacy systems without native APIs.",
      "Shared-nothing deployment with dedicated VPC compute — configurable retention, encryption at rest and in transit.",
    ],
    benefits: [
      "Native connectors for SAP, Oracle, NetSuite, Dynamics, JD Edwards, PeopleSoft",
      "UiPath and Automation Anywhere orchestration",
      "FTP, email, Google Drive, and Salesforce ingestion",
      "Structured output in CSV, CXML, XML, JSON, or custom formats",
      "Private cloud, on-prem, and hybrid deployment options",
    ],
  },

  // Solutions hub copy
  finance: {
    description:
      "Close faster with agents that reconcile invoices, validate contracts, and surface cash and risk exceptions — fine-tuned to your chart of accounts and deployed inside your perimeter.",
  },
  procurement: {
    description:
      "Touchless procure-to-pay from digitization through PO matching, compliance checks, and fraud detection — with closed-loop learning on every vendor format you process.",
  },
  sales: {
    description:
      "Prioritize leads, automate RFP responses, and surface cross-sell and up-sell opportunities from CRM and product usage data — grounded in your customer knowledge graph.",
  },

  // Internal pages — broken meta descriptions
  "invoice-digitization": {
    description:
      "Convert paper and email invoices into structured, validated records using AI/OCR — with continuous learning that improves accuracy on every correction.",
  },
  "invoice-po-reconciliation": {
    description:
      "Automatically match invoice line items against purchase orders and goods receipts — flagging quantity, price, and vendor discrepancies before payment.",
  },
  "service-invoice-validation": {
    description:
      "Validate service invoices against service orders and contracts — ensuring billed work aligns with agreed scope, rates, and deliverables.",
  },
  "invoice-compliance": {
    description:
      "Enforce tax, pricing, and vendor compliance rules on every invoice before approval — with audit-ready evidence for regulators and internal controls.",
  },
  "invoice-approval-risk": {
    description:
      "Score approval risk using duplicate detection, contract cross-checks, and vendor history — routing high-risk items to the right approver automatically.",
  },
  "risk-management": {
    description:
      "Identify financial and operational risk across invoices, contracts, and cash flows — with configurable scoring rules and exception workflows.",
  },
  "accounting-policies": {
    description:
      "Encode accounting policies into automated GL coding and approval rules — ensuring consistent treatment across entities and geographies.",
  },
  "paper-invoice-to-po": {
    description:
      "Link paper and scanned invoices to purchase orders automatically — closing the loop between physical documents and ERP records.",
  },
  rfp: {
    description:
      "Generate compliant, data-backed RFP responses in a fraction of the time — pulling from your product catalog, past wins, and customer knowledge graph.",
    howItWorks: [
      "DecisionIQ ingests RFP requirements and maps them to your approved response library, product specs, and case study evidence.",
      "Generative agents draft section responses while retrieval bots cite source documents — maintaining accuracy and auditability.",
      "Human reviewers markup gaps; closed-loop learning improves future response quality without retraining from scratch.",
      "Final packages export in your required format with version control and approval workflow intact.",
    ],
    benefits: [
      "Faster RFP turnaround with governed AI drafting",
      "Responses grounded in approved product and legal content",
      "Continuous improvement from reviewer markup",
      "Full audit trail for compliance and quality review",
    ],
  },
  "cross-sell": {
    description:
      "Surface cross-sell opportunities from usage patterns, contract entitlements, and customer segment data — delivered to reps inside CRM workflows.",
    howItWorks: [
      "DecisionIQ analyzes product usage, contract terms, and customer profile data to identify complementary offerings with the highest propensity to convert.",
      "Recommendations rank by revenue potential, install-base fit, and renewal timing — not generic rules.",
      "ConverseIQ delivers contextual talking points and email drafts grounded in the customer's actual data.",
      "Closed-loop feedback from won/lost deals sharpens scoring models over time.",
    ],
    benefits: [
      "Data-driven cross-sell recommendations per account",
      "CRM-integrated delivery with explainable rationale",
      "Hyper-personalized outreach drafts via ConverseIQ",
      "Models improve from rep feedback and outcomes",
    ],
  },
  "up-sell": {
    description:
      "Identify upgrade and expansion opportunities from consumption trends, support tickets, and contract utilization — before renewal windows close.",
    howItWorks: [
      "DecisionIQ monitors seat utilization, feature adoption, and support signals to flag accounts ready for tier upgrades or add-on modules.",
      "Scoring models weight contract value, churn risk, and expansion history — prioritizing rep time on highest-yield opportunities.",
      "ConverseIQ generates account-specific upgrade narratives tied to measurable ROI from the customer's own usage data.",
      "Integration with CRM and billing systems keeps recommendations current without manual spreadsheet analysis.",
    ],
    benefits: [
      "Utilization-based upgrade scoring",
      "Renewal-window alerts with expansion playbooks",
      "ROI-backed talking points from live customer data",
      "Continuous learning from closed-won and closed-lost outcomes",
    ],
  },
  "sales-ops": {
    description:
      "Equip sales operations with AI-driven lead qualification, proposal analytics, and pipeline intelligence — unified in one governed platform.",
  },
  "contract-manager": {
    description:
      "Streamline contract creation, review, compliance monitoring, and renewal — with AI extraction, risk scoring, and obligation tracking in one workspace.",
  },
  "lead-scoring": {
    description:
      "Rank inbound and outbound leads using CRM, product usage, and firmographic signals — so reps focus on accounts most likely to convert.",
  },
  cpo: {
    description:
      "Give procurement leaders real-time visibility into supplier performance, contract risk, and spend compliance — with AI-assisted negotiation and obligation tracking.",
    benefits: [
      "Procurement oversight with real-time spend and supplier analytics",
      "Contract review, risk assessment, and mitigation workflows",
      "Automated compliance monitoring against contractual obligations",
      "Negotiation prep combining internal data and market benchmarks",
      "Renewal, termination, and cost performance tracking",
    ],
  },
};

export function getPageOverride(slug: string): PageContentOverride | undefined {
  return pageOverrides[slug];
}
