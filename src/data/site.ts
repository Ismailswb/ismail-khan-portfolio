export const siteConfig = {
  name: "Ismail Khan",
  title: "Full-Stack Software Engineer",
  tagline: "I build complete software products from idea to production.",
  description:
    "Full-Stack Software Engineer building production-ready web, mobile, and backend applications with React Native, Next.js, NestJS, PostgreSQL, and modern cloud infrastructure.",
  email: "ismailswb231@gmail.com",
  phone: "+92 348 8609060",
  phoneHref: "tel:+923488609060",
  location: "Pakistan (GMT+5) — Open to Remote",
  locationShort: "Pakistan — Open to Remote",
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
    heading: "Let's build something.",
    text: "Have a project, product idea, or engineering challenge? I'd be happy to discuss it.",
  },
  nav: [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ],
  footerLinks: [
    { label: "Home", href: "/#home" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ],
  heroStack: ["React Native", "Next.js", "NestJS", "PostgreSQL"],
  techStrip: [
    "React Native",
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "TypeScript",
    "GCP",
    "Docker",
  ],
  careerProgression: [
    "React Native",
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "GCP / Docker / CI/CD",
  ],
  productFlow: [
    "Mobile",
    "Web",
    "API",
    "Database",
    "Cloud",
    "Production",
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
