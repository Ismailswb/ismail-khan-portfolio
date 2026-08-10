import { whatIBuild } from "@/data/experience";
import { Section } from "@/components/layout/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhatIBuild() {
  return (
    <Section
      id="services"
      ariaLabelledby="services-heading"
      className="relative overflow-hidden bg-background-elevated"
    >
      <div className="pointer-events-none absolute inset-0 ambient-glow opacity-50" aria-hidden="true" />
      <div className="noise-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Engineering capabilities"
            title="Built for the full product stack."
            description="Four domains I ship across — from mobile clients to production infrastructure."
            titleId="services-heading"
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
          {whatIBuild.map((item) => (
            <StaggerItem key={item.number}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface/70 p-6 transition-all duration-300 hover:border-accent/35 hover:bg-surface-hover/80 sm:p-8">
                <div
                  className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-accent/5 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="relative flex items-start justify-between gap-4">
                  <span className="font-mono text-sm text-accent">{item.number}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-soft">
                    Capability
                  </span>
                </div>
                <h3 className="relative mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {item.title}
                </h3>
                <p className="relative mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  {item.description}
                </p>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-background/50 px-2.5 py-1 font-mono text-[11px] text-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
