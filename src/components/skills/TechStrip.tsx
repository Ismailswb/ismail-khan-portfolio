import { siteConfig } from "@/data/site";
import { Container } from "@/components/layout/Container";

export function TechStrip() {
  return (
    <section
      aria-label="Technology stack"
      className="border-y border-border bg-surface"
    >
      <Container className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 sm:justify-between sm:gap-x-6">
        {siteConfig.techStrip.map((tech) => (
          <span
            key={tech}
            className="text-sm font-medium tracking-tight text-muted"
          >
            {tech}
          </span>
        ))}
      </Container>
    </section>
  );
}
