export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  /** Optional — add when confirmed. */
  graduationYear?: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer — React Native, Web & Backend",
    company: "Silver Sparrow Studios",
    period: "Nov 2024 — Present",
    responsibilities: [
      "Built and shipped production applications using React Native, Next.js, NestJS, and PostgreSQL.",
      "Developed React Native applications using reusable component architecture, state management, and API integration.",
      "Designed REST APIs with authentication and role-based access control.",
      "Worked across web, mobile, backend, database, and shared monorepo packages.",
      "Handled deployment and DevOps responsibilities including GCP Linux VM provisioning, Docker, Nginx, PM2, SSL/TLS, domains, and CI/CD.",
      "Integrated S3-compatible object storage for media assets.",
      "Used AI-assisted development tools such as Cursor and Claude to accelerate development, debugging, and code review while maintaining ownership of technical decisions.",
    ],
  },
  {
    role: "Mobile & Web Development Intern",
    company: "Unaz Technology",
    period: "Aug 2024",
    responsibilities: [
      "Built web and mobile application features using React.js and React Native.",
      "Supported API integration and debugging.",
      "Developed reusable components under senior engineering guidance.",
    ],
  },
];

export const education: EducationItem = {
  degree: "Bachelor of Science in Computer Science",
  institution: "Abdul Wali Khan University, Mardan",
  // graduationYear: "YYYY",
};

export const engineeringApproach = [
  {
    step: "01",
    title: "Architecture",
    description:
      "Define product boundaries, module structure, and technical foundations before implementation begins.",
  },
  {
    step: "02",
    title: "Frontend / Mobile",
    description:
      "Build polished React Native and Next.js interfaces with reusable components and clear state flows.",
  },
  {
    step: "03",
    title: "Backend APIs",
    description:
      "Design NestJS REST APIs that encode business logic, validation, and secure access patterns.",
  },
  {
    step: "04",
    title: "Database",
    description:
      "Model PostgreSQL schemas, migrations, and data relationships that support real product workflows.",
  },
  {
    step: "05",
    title: "Authentication & Authorization",
    description:
      "Implement authentication and role-based authorization aligned to operational responsibilities.",
  },
  {
    step: "06",
    title: "Testing",
    description:
      "Validate critical flows and edge cases so releases remain stable as the product evolves.",
  },
  {
    step: "07",
    title: "Infrastructure",
    description:
      "Provision GCP environments with Docker, Nginx, PM2, SSL/TLS, and production-ready networking.",
  },
  {
    step: "08",
    title: "CI/CD",
    description:
      "Automate build and deployment pipelines for consistent, repeatable releases.",
  },
  {
    step: "09",
    title: "Production",
    description:
      "Ship, monitor, and maintain applications in live environments with ownership beyond the first deploy.",
  },
] as const;

export const whatIBuild = [
  {
    title: "Mobile Applications",
    description:
      "React Native applications with reusable architecture, state management, API integration, and production deployment.",
  },
  {
    title: "Web Applications",
    description:
      "Modern web applications, dashboards, admin portals, and customer-facing platforms using React, Next.js, and TypeScript.",
  },
  {
    title: "Backend Systems",
    description:
      "REST APIs, authentication, authorization, RBAC, business logic, database architecture, and integrations using NestJS and PostgreSQL.",
  },
  {
    title: "Cloud & Deployment",
    description:
      "GCP Linux VMs, Docker, Nginx, PM2, SSL/TLS, domains, CI/CD pipelines, and production environments.",
  },
] as const;
