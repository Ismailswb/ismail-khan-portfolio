import { siteConfig } from "@/data/site";
import { Section } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <Section id="about" ariaLabelledby="about-heading" className="relative">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-25" aria-hidden="true" />

      <div className="relative max-w-3xl">
        <Reveal>
          <div className="flex items-center gap-4">
            <h2
              id="about-heading"
              className="shrink-0 text-2xl font-semibold tracking-tight text-accent sm:text-3xl"
            >
              About
            </h2>
            <span className="section-line" aria-hidden="true" />
          </div>
          <p className="mt-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {siteConfig.about.heading}
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            {siteConfig.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-soft">
            Based in {siteConfig.locationShort}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
