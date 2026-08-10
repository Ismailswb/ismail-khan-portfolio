export type ProjectSlug =
  | "msj-erp"
  | "eventmanao"
  | "dispatchops"
  | "yourspeak"
  | "alsayed";

export type ArchitectureLayer = {
  label: string;
  detail?: string;
};

export type Project = {
  number: string;
  slug: ProjectSlug;
  title: string;
  category: string;
  shortDescription: string;
  overview: string;
  role: string;
  technologies: string[];
  engineeringPoints: string[];
  architecture: ArchitectureLayer[];
  features: string[];
  technicalDetails: string[];
  outcome: string;
  accent: string;
  placeholderLabel: string;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "msj-erp",
    title: "MSJ 7 Star Enterprise",
    category: "Multi-Branch Electronics ERP",
    shortDescription:
      "Multi-branch electronics ERP designed to manage inventory, customers, vendors, cash sales, installment sales, payments, recovery operations, and role-based business workflows.",
    overview:
      "MSJ 7 Star Enterprise is a multi-branch electronics ERP built to support inventory, customers, vendors, cash and installment sales, payments, recovery operations, and role-based business workflows across separate operational portals.",
    role: "Full-stack engineering across web application architecture, NestJS APIs, PostgreSQL data modeling, authentication, role-based authorization, and shared monorepo structure.",
    technologies: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Redux Toolkit",
      "RBAC",
    ],
    engineeringPoints: [
      "Multi-branch architecture",
      "Authentication",
      "Role-based authorization",
      "Branch-level data isolation",
      "Inventory management",
      "Installment sales",
      "Payment and recovery workflows",
      "Separate role-based portals",
      "Monorepo architecture",
    ],
    architecture: [
      { label: "Role-Based Web Portals", detail: "Next.js" },
      { label: "REST API Layer", detail: "NestJS" },
      { label: "Authorization & Business Logic", detail: "RBAC" },
      { label: "PostgreSQL", detail: "Prisma ORM" },
      { label: "Shared Monorepo Packages" },
    ],
    features: [
      "Multi-branch operations with branch-level data isolation",
      "Inventory, customer, and vendor management",
      "Cash sales and installment sales workflows",
      "Payment and recovery operations",
      "Role-based portals aligned to business responsibilities",
      "Authentication and role-based authorization",
    ],
    technicalDetails: [
      "Next.js application surfaces for role-specific workflows",
      "NestJS REST APIs for core business operations",
      "PostgreSQL schema design with Prisma",
      "Redux Toolkit for client-side state management",
      "Monorepo structure for shared packages and consistent delivery",
    ],
    outcome:
      "A production-oriented multi-branch ERP foundation covering inventory, sales, payments, recovery, and role-based operational workflows.",
    accent: "#2563EB",
    placeholderLabel: "ERP dashboard & workflow views",
  },
  {
    number: "02",
    slug: "eventmanao",
    title: "EventManao",
    category: "Service Provider Platform",
    shortDescription:
      "Service-provider platform consisting of mobile, web, admin, and backend systems developed around a shared product architecture.",
    overview:
      "EventManao is a service-provider platform spanning mobile, web, admin, and backend systems, developed around a shared product architecture for consistent delivery across clients.",
    role: "Cross-platform full-stack engineering across React Native, Next.js, NestJS APIs, PostgreSQL, media storage, and cloud deployment.",
    technologies: [
      "React Native",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "GCP",
      "S3-compatible storage",
    ],
    engineeringPoints: [
      "React Native mobile application",
      "Next.js web platform",
      "Backend APIs",
      "Authentication",
      "PostgreSQL",
      "Media storage",
      "Cloud deployment",
      "CI/CD",
    ],
    architecture: [
      { label: "Mobile Client", detail: "React Native" },
      { label: "Web & Admin", detail: "Next.js" },
      { label: "REST API", detail: "NestJS" },
      { label: "PostgreSQL" },
      { label: "S3-Compatible Media Storage" },
      { label: "GCP + CI/CD" },
    ],
    features: [
      "React Native mobile application",
      "Next.js web platform and admin surfaces",
      "Shared backend APIs and authentication",
      "PostgreSQL-backed data layer",
      "Media handling with S3-compatible object storage",
      "Cloud deployment with CI/CD support",
    ],
    technicalDetails: [
      "Shared product architecture across mobile, web, admin, and API layers",
      "NestJS backend services with authentication",
      "PostgreSQL database design",
      "S3-compatible storage for media assets",
      "GCP deployment and CI/CD pipelines",
    ],
    outcome:
      "A cohesive service-provider platform spanning mobile, web, admin, backend, storage, and cloud deployment.",
    accent: "#0EA5E9",
    placeholderLabel: "Mobile, web & admin product surfaces",
  },
  {
    number: "03",
    slug: "dispatchops",
    title: "DispatchOps",
    category: "B2C Delivery Service Platform",
    shortDescription:
      "Backend and infrastructure architecture for a B2C delivery platform, including APIs, database design, and production deployment infrastructure.",
    overview:
      "DispatchOps focuses on the backend and infrastructure architecture for a B2C delivery platform — covering APIs, database design, delivery and order workflows, and production deployment infrastructure.",
    role: "Backend and infrastructure engineering across NestJS APIs, PostgreSQL design, GCP provisioning, CI/CD, and production deployment.",
    technologies: ["NestJS", "PostgreSQL", "GCP", "CI/CD"],
    engineeringPoints: [
      "Backend architecture",
      "REST APIs",
      "PostgreSQL",
      "Delivery/order workflows",
      "GCP infrastructure",
      "CI/CD",
      "Production deployment",
    ],
    architecture: [
      { label: "Client Applications" },
      { label: "REST API Layer", detail: "NestJS" },
      { label: "Delivery & Order Workflows" },
      { label: "PostgreSQL" },
      { label: "GCP Infrastructure" },
      { label: "CI/CD → Production" },
    ],
    features: [
      "Backend architecture for a B2C delivery platform",
      "REST APIs for core platform operations",
      "Delivery and order workflow support",
      "PostgreSQL database design",
      "GCP infrastructure and production deployment",
      "CI/CD for repeatable releases",
    ],
    technicalDetails: [
      "NestJS service architecture and REST endpoints",
      "PostgreSQL schema supporting delivery and order workflows",
      "GCP Linux VM–oriented deployment environment",
      "CI/CD pipelines for production delivery",
    ],
    outcome:
      "A backend and infrastructure foundation for delivery and order operations, ready for production deployment on GCP.",
    accent: "#334155",
    placeholderLabel: "API, workflow & infrastructure views",
  },
  {
    number: "04",
    slug: "yourspeak",
    title: "YourSpeak",
    category: "Social / Communication Platform",
    shortDescription:
      "Social and communication platform spanning React Native and Next.js clients with real-time communication, media, and API-backed services.",
    overview:
      "YourSpeak is a social and communication platform built with React Native and Next.js clients, supported by real-time communication capabilities, media handling, and API-backed services.",
    role: "Full-stack product engineering across React Native, Next.js, real-time communication flows, media handling, and API integration.",
    technologies: [
      "React Native",
      "Next.js",
      "Real-time communication",
      "Media",
      "APIs",
    ],
    engineeringPoints: [
      "React Native mobile client",
      "Next.js web client",
      "Real-time communication",
      "Media handling",
      "API integration",
    ],
    architecture: [
      { label: "Mobile Client", detail: "React Native" },
      { label: "Web Client", detail: "Next.js" },
      { label: "APIs & Real-Time Communication" },
      { label: "Media Services" },
    ],
    features: [
      "React Native mobile experience",
      "Next.js web experience",
      "Real-time communication capabilities",
      "Media support within the product flow",
      "API-backed client functionality",
    ],
    technicalDetails: [
      "Cross-platform clients with React Native and Next.js",
      "Real-time communication integrated into the product experience",
      "Media handling connected through API services",
      "Shared API layer supporting mobile and web clients",
    ],
    outcome:
      "A social and communication product foundation connecting mobile and web clients through APIs, real-time communication, and media support.",
    accent: "#6366F1",
    placeholderLabel: "Communication & media product views",
  },
  {
    number: "05",
    slug: "alsayed",
    title: "ALSAYED Food & Beverages",
    category: "E-commerce Platform",
    shortDescription:
      "E-commerce platform with a customer-facing website, product management, dynamic content, backend services, database layer, admin functionality, and deployment.",
    overview:
      "ALSAYED Food & Beverages is an e-commerce platform covering a customer-facing website, product management, dynamic content, backend services, database architecture, admin functionality, and deployment.",
    role: "Full-stack engineering across Next.js storefront and admin surfaces, NestJS backend, PostgreSQL data modeling, and deployment.",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    engineeringPoints: [
      "Customer-facing website",
      "Product management",
      "Dynamic content",
      "Backend services",
      "Database layer",
      "Admin functionality",
      "Deployment",
    ],
    architecture: [
      { label: "Customer Website", detail: "Next.js" },
      { label: "Admin Functionality", detail: "Next.js" },
      { label: "REST API", detail: "NestJS" },
      { label: "PostgreSQL", detail: "TypeScript stack" },
      { label: "Deployment Environment" },
    ],
    features: [
      "Customer-facing e-commerce website",
      "Product management workflows",
      "Dynamic content delivery",
      "Admin functionality for catalog and content operations",
      "Backend services with PostgreSQL persistence",
      "Deployed production environment",
    ],
    technicalDetails: [
      "Next.js customer and admin experiences",
      "NestJS backend APIs in TypeScript",
      "PostgreSQL database for products and content",
      "Deployment setup for the full application stack",
    ],
    outcome:
      "A complete e-commerce stack spanning storefront, admin, backend, database, and deployment for a food and beverages brand.",
    accent: "#0F766E",
    placeholderLabel: "Storefront & admin product views",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: ProjectSlug): {
  previous: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

export const projectSlugs = projects.map((project) => project.slug);
