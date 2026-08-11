export const siteConfig = {
  name: "Ismail Khan",
  title: "Full-Stack Software Engineer",
  tagline: "I build software across the entire stack.",
  taglineSupport: "Mobile. Web. Backend. Cloud.",
  description:
    "Full-Stack Software Engineer building production-ready web, mobile, and backend applications with React Native, Next.js, NestJS, PostgreSQL, and modern cloud infrastructure.",
  email: "ismailswb231@gmail.com",
  phone: "+92 348 8609060",
  phoneHref: "tel:+923488609060",
  location: "Pakistan (GMT+5) — Open to Remote",
  locationShort: "Pakistan — Open to Remote",
  availability: "Available for remote opportunities",
  profileImage: "/image/portfolio_image.png",
  logo: "/image/logo.png",
  /** Replace with your production domain before deploying. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ismailkhan.dev",
  /** Replace with your real LinkedIn profile URL. */
  linkedin: "https://linkedin.com/in/your-handle",
  /** Replace with your real GitHub profile URL. */
  github: "https://github.com/your-handle",
  cvPath: "/Ismail-Khan-Full-Stack-Software-Engineer-CV.pdf",
  positioning: "React Native | Next.js | NestJS | PostgreSQL",
  heroLabel: "Full-Stack Software Engineer",
  heroSupporting:
    "Full-Stack Software Engineer with 2+ years of hands-on experience building and deploying production-ready web, mobile, and backend applications using React Native, Next.js, NestJS, and PostgreSQL.",
  about: {
    heading: "More than just frontend.",
    paragraphs: [
      "I'm Ismail Khan, a Full-Stack Software Engineer focused on building production-ready web, mobile, and backend applications.",
      "I started primarily in mobile development with React Native and gradually expanded into web development, backend engineering, database architecture, cloud infrastructure, and deployment.",
      "Today, I work across the full product lifecycle — from architecture and development to deployment and production environments.",
    ],
  },
  contact: {
    heading: "Let's build something great.",
    text: "Have a project, product idea, or engineering challenge? I'm available for remote full-stack opportunities.",
  },
  whatsappHref: "https://wa.me/923488609060",
  nav: [
    { label: "Home", href: "/#home", id: "home" },
    { label: "About", href: "/#about", id: "about" },
    { label: "Projects", href: "/#projects", id: "projects" },
    { label: "Experience", href: "/#experience", id: "experience" },
    { label: "Skills", href: "/#skills", id: "skills" },
    { label: "Contact", href: "/#contact", id: "contact" },
  ],
  footerLinks: [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ],
  /** Fact-based sidebar metrics only — derived from existing content. */
  sidebarStats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Shipped", value: "5" },
  ],
  heroStack: [
    "React Native",
    "Next.js",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Prisma",
    "GCP",
    "Docker",
  ],
  techStrip: [
    "React Native",
    "Next.js",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Prisma",
    "GCP",
    "Docker",
    "Nginx",
    "PM2",
    "CI/CD",
    "Git",
  ],
  careerProgression: [
    "React Native",
    "Web",
    "Backend",
    "Database",
    "Cloud",
    "Production",
  ],
  productFlow: [
    "Mobile",
    "Web",
    "Backend",
    "Database",
    "Cloud",
    "Production",
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
