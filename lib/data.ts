export interface Service {
  id: string;
  icon: string; // lucide-react icon name
  title: string;
  description: string;
  tags: string[];
}

export interface Product {
  id: number;
  category: string;
  title: string;
  description: string;
  metric: { value: string; label: string };
}

export interface Value {
  icon: string; // lucide-react icon name
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  unit: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "95", unit: "%", label: "Cost Reduction Potential" },
  { value: "12", unit: "min", label: "Avg. MTTR (vs 4hrs)" },
  { value: "80", unit: "%", label: "Fewer Manual Inquiries" },
];

export const services: Service[] = [
  {
    id: "cloud-infra",
    icon: "Cloud",
    title: "Cloud Infrastructure (AWS)",
    description:
      "Run faster, more reliable systems without the firefighting. We design, migrate, and harden your AWS environment — and codify it with Terraform & CloudFormation so it's repeatable, secure, and built to scale.",
    tags: ["Architecture Design", "Cloud Migration", "IaC / Terraform", "High Availability"],
  },
  {
    id: "cost-opt",
    icon: "TrendingDown",
    title: "Cloud Cost Optimization",
    description:
      "Stop overpaying for cloud. We audit your AWS spend, rightsize what's bloated, and put FinOps discipline in place — so your bill reflects what you actually use, not idle capacity.",
    tags: ["AWS Cost Audits", "Rightsizing", "FinOps", "Cost Explorer"],
  },
  {
    id: "automation",
    icon: "Bot",
    title: "Intelligent Process Automation",
    description:
      "Give your team their hours back. We automate the manual, error-prone work — document processing, approvals, reporting, and customer conversations — so your people spend time on judgment, not data entry.",
    tags: ["Amazon Textract", "AWS Lambda", "Chatbots", "ML Workflows"],
  },
  {
    id: "devops",
    icon: "Infinity",
    title: "DevOps & Infrastructure Mgmt",
    description:
      "Ship faster and sleep better. CI/CD pipelines, real-time monitoring, and disaster-recovery plans — backed by 24/7 managed operations that catch issues before your users do.",
    tags: ["CI/CD Pipelines", "CloudWatch", "DR Planning", "24/7 Ops"],
  },
  {
    id: "procurement",
    icon: "Cpu",
    title: "IT Hardware & Software Procurement",
    description:
      "Equip your teams without the procurement headache. Genuine hardware, licensed software, workstations, and networking — sourced from verified global vendors and installed ready to work.",
    tags: ["Hardware Supply", "MS 365", "Networking", "SaaS Platforms"],
  },
  {
    id: "consultancy",
    icon: "Compass",
    title: "Consultancy & Project Management",
    description:
      "Move from plan to delivery without the false starts. We map your transformation, assess cloud readiness, guide NDPR/ISO compliance, and run delivery on Agile, Scrum, or PRINCE2 — so projects actually land.",
    tags: ["Digital Strategy", "NDPR Advisory", "Agile / Scrum", "ICT Governance"],
  },
];

export const products: Product[] = [
  {
    id: 1,
    category: "Logistics & Operations",
    title: "Intelligent Order Routing & 3PL Automation Agent",
    description:
      "Scale fulfillment without scaling your ops team. Every order is routed to the right 3PL and dispatched automatically — so orders keep moving on their own, even on your busiest days.",
    metric: { value: "Auto", label: "End-to-end order routing with zero manual intervention" },
  },
  {
    id: 2,
    category: "Sales & CRM",
    title: "Intelligent CRM Lead Routing System — Automated Sales Assignment",
    description:
      "Stop losing leads to slow handoffs. Each incoming lead is scored, qualified, and routed to the best-fit rep in seconds — so the right person follows up while the lead is still warm.",
    metric: { value: "Smart", label: "AI-driven lead scoring and instant assignment" },
  },
  {
    id: 3,
    category: "Real Estate",
    title: "AI Real Estate Bot: 80% Fewer Manual Inquiries, 24/7 Lead Capture",
    description:
      "A conversational AI bot that handles property inquiries around the clock, qualifies buyers and renters, schedules viewings, and captures leads while your team sleeps — reducing manual workload by up to 80%.",
    metric: { value: "80%", label: "Reduction in manual inquiry handling" },
  },
  {
    id: 4,
    category: "Cloud Infrastructure",
    title: "Production Terraform Modules for AWS Infrastructure",
    description:
      "Stand up secure AWS environments fast — never from scratch. Production-ready modules (VPC, IAM, ECS, RDS, S3) built to the AWS Well-Architected Framework, so you deploy with confidence.",
    metric: { value: "IaC", label: "Repeatable, version-controlled infrastructure deployments" },
  },
  {
    id: 5,
    category: "Monitoring & Reliability",
    title: "Proactive Monitoring System: Reduced MTTR from 4 Hours to 12 Minutes",
    description:
      "A comprehensive observability stack that proactively detects, alerts, and diagnoses infrastructure incidents before they impact users — combining CloudWatch, Prometheus, and Grafana with automated runbooks.",
    metric: { value: "4h → 12min", label: "Mean time to resolution — a 95% reduction in incident response" },
  },
  {
    id: 6,
    category: "Sales & Outreach",
    title: "Intelligent Outreach Engine — Permission-First B2B Prospecting",
    description:
      "Win real conversations, not spam complaints. This system researches and verifies each prospect, drafts a tailored, personalized message, and sends only on a human-approved, rate-throttled schedule. Every domain is SPF/DKIM-authenticated for deliverability — engineered for genuine 1:1 outreach, never bulk blasting.",
    metric: { value: "Approved", label: "Every send is human-approved, throttled, and SPF/DKIM-authenticated" },
  },
];

export const coreValues: Value[] = [
  { icon: "Rocket", title: "Innovation-Led", description: "We embrace emerging technologies to solve complex challenges creatively." },
  { icon: "ShieldCheck", title: "Security by Design", description: "Every solution embeds NDPR-aligned security controls and global best practices." },
  { icon: "Target", title: "Outcome-Oriented", description: "We measure success by tangible impact — not project completion checkboxes." },
  { icon: "Handshake", title: "Collaboration", description: "We build lasting partnerships through trust, empathy, and shared success." },
];

export const whyUs: Value[] = [
  { icon: "Award", title: "AWS Certified Team", description: "Internationally recognized certifications backed by real-world deployment experience across Nigeria and beyond." },
  { icon: "Landmark", title: "Local Regulatory Expertise", description: "Deep knowledge of NDPR, CBN, NCC, and sector-specific compliance requirements." },
  { icon: "TrendingUp", title: "Outcome-Driven", description: "We track measurable KPIs — cost savings, uptime, efficiency gains — not just deliverables." },
  { icon: "Shield", title: "Security-First", description: "Every architecture embeds ISO 27001-aligned security controls from the ground up." },
];
