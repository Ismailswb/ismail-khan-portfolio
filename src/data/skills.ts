export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Mobile",
    items: [
      "React Native",
      "Expo",
      "Redux Toolkit",
      "API Integration",
      "Reusable Component Architecture",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "State Management",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "REST APIs",
      "Authentication",
      "RBAC",
    ],
  },
  {
    category: "Database",
    items: [
      "PostgreSQL",
      "Prisma ORM",
      "Schema Design",
      "Migrations",
      "Data Seeding",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "GCP",
      "Linux",
      "Docker",
      "Nginx",
      "PM2",
      "SSL/TLS",
      "CI/CD",
    ],
  },
  {
    category: "Architecture",
    items: [
      "Monorepo",
      "Modular Architecture",
      "S3-Compatible Object Storage",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Cursor", "Claude"],
  },
];
