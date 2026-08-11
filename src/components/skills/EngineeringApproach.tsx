import { engineeringApproach } from "@/data/experience";
import { Section } from "@/components/layout/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function EngineeringApproach() {
  return (
    <Section
      id="approach"
      ariaLabelledby="approach-heading"
      className="relative"
    >
      <div className="relative">
        <Reveal className="flex items-center gap-4">
          <h2
            id="approach-heading"
            className="shrink-0 text-2xl font-semibold tracking-tight text-accent sm:text-3xl"
          >
            Engineering Approach
          </h2>
          <span className="section-line" aria-hidden="true" />
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            How I take products from architecture through production.
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {engineeringApproach.map((item) => (
            <StaggerItem key={item.step}>
              <article className="h-full rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/30">
                <span className="font-mono text-xs font-semibold text-accent">
                  {item.step}
                </span>
                <h3 className="mt-3 text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
