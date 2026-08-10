import { siteConfig } from "@/data/site";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
    url: siteConfig.url,
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: [
      "React Native",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "Full-Stack Software Engineering",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
  );
}
