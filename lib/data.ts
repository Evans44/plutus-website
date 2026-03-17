export interface Service {
  id: string;
  icon: string;
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
  icon: string;
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
    icon: "☁️",
    title: "Cloud Infrastructure (AWS)",
    description:
      "Design, deploy and manage robust AWS environments. We handle migrations from legacy systems, security hardening, and Infrastructure as Code using Terraform & CloudFormation.",
    tags: ["Architecture Design", "Cloud Migration", "IaC / Terraform", "High Availability"],
  },
  {
    id: "cost-opt",
    icon: "💰",
    title: "Cloud Cost Optimization",
    description:
      "Deep-dive AWS cost audits, resource rightsizing, Reserved Instance planning, and FinOps frameworks that align cloud spending with your business outcomes.",
    tags: ["AWS Cost Audits", "Rightsizing", "FinOps", "Cost Explorer"],
  },
  {
    id: "automation",
    icon: "🤖",
    title: "Intelligent Process Automation",
    description:
      "AI-powered document processing, custom workflow automation with AWS AI/ML, intelligent chatbots, and automated reporting — eliminating manual bottlenecks.",
    tags: ["Amazon Textract", "AWS Lambda", "Chatbots", "ML Workflows"],
  },
  {
    id: "devops",
    icon: "⚙️",
    title: "DevOps & Infrastructure Mgmt",
    description:
      "CI/CD pipeline design, real-time infrastructure monitoring with Prometheus & Grafana, disaster recovery planning, and 24/7 managed cloud operations.",
    tags: ["CI/CD Pipelines", "CloudWatch", "DR Planning", "24/7 Ops"],
  },
  {
    id: "procurement",
    icon: "🖥️",
    title: "IT Hardware & Software Procurement",
    description:
      "Enterprise-grade hardware supply and installation, genuine software licensing, workstation setup, and networking infrastructure from verified global vendors.",
    tags: ["Hardware Supply", "MS 365", "Networking", "SaaS Platforms"],
  },
  {
    id: "consultancy",
    icon: "📋",
    title: "Consultancy & Project Management",
    description:
      "End-to-end digital transformation strategy, cloud readiness assessments, regulatory advisory (NDPR, ISO), and certified project execution using Agile, Scrum, and PRINCE2.",
    tags: ["Digital Strategy", "NDPR Advisory", "Agile / Scrum", "ICT Governance"],
  },
];

export const products: Product[] = [
  {
    id: 1,
    category: "Logistics & Operations",
    title: "Intelligent Order Routing & 3PL Automation Agent",
    description:
      "An AI-driven agent that intelligently routes orders to the right third-party logistics providers, automates dispatch workflows, and reduces manual order handling — scaling your fulfillment operations effortlessly.",
    metric: { value: "⚡ Auto", label: "End-to-end order routing with zero manual intervention" },
  },
  {
    id: 2,
    category: "Sales & CRM",
    title: "Intelligent CRM Lead Routing System — Automated Sales Assignment",
    description:
      "Automatically scores, qualifies, and routes incoming CRM leads to the best-fit sales agent based on territory, expertise, and availability. Eliminates manual handoffs and boosts conversion rates.",
    metric: { value: "🎯 Smart", label: "AI-driven lead scoring and instant assignment" },
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
      "Battle-tested, production-ready Terraform modules for spinning up secure, scalable AWS environments. Covers VPC, IAM, ECS, RDS, S3, and more — following AWS Well-Architected Framework best practices.",
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
];

export const coreValues: Value[] = [
  { icon: "🚀", title: "Innovation-Led", description: "We embrace emerging technologies to solve complex challenges creatively." },
  { icon: "🔒", title: "Security by Design", description: "Every solution embeds NDPR-aligned security controls and global best practices." },
  { icon: "🎯", title: "Outcome-Oriented", description: "We measure success by tangible impact — not project completion checkboxes." },
  { icon: "🤝", title: "Collaboration", description: "We build lasting partnerships through trust, empathy, and shared success." },
];

export const whyUs = [
  { icon: "🏅", title: "AWS Certified Team", description: "Internationally recognized certifications backed by real-world Nigerian deployment experience." },
  { icon: "🌍", title: "Local Regulatory Expertise", description: "Deep knowledge of NDPR, CBN, NCC, and sector-specific compliance requirements." },
  { icon: "📈", title: "Outcome-Driven", description: "We track measurable KPIs — cost savings, uptime, efficiency gains — not just deliverables." },
  { icon: "🛡️", title: "Security-First", description: "Every architecture embeds ISO 27001-aligned security controls from the ground up." },
];
