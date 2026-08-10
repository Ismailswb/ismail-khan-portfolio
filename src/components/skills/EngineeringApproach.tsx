import { engineeringApproach } from "@/data/experience";
import { Section } from "@/components/layout/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function EngineeringApproach() {
  return (
    <Section id="approach" ariaLabelledby="approach-heading" className="bg-navy text-white">
      <Reveal>
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-blue-300">
            Engineering approach
          </p>
          <h2
            id="approach-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            From architecture to production.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            I work across the complete software lifecycle — designing systems,
            building clients and APIs, shaping data models, and shipping to
            production environments.
          </p>
        </div>
      </Reveal>

      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {engineeringApproach.map((item) => (
          <StaggerItem key={item.step}>
            <article className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
              <span className="font-mono text-xs text-blue-300">{item.step}</span>
              <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
