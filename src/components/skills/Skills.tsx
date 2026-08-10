import { skillGroups } from "@/data/skills";
import { Section } from "@/components/layout/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <Section
      id="skills"
      ariaLabelledby="skills-heading"
      className="relative bg-background-elevated"
    >
      <div className="noise-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Technical skills"
            title="A practical full-stack toolkit."
            description="Technologies and practices I use to design, build, and deploy production software."
            titleId="skills-heading"
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <StaggerItem key={group.category}>
              <article className="group h-full rounded-2xl border border-border bg-surface/70 p-6 transition-all duration-300 hover:border-accent/30 hover:bg-surface-hover/70">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold text-foreground">
                    {group.category}
                  </h3>
                  <span className="font-mono text-[10px] text-muted-soft">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-background/40 px-2.5 py-1.5 text-xs text-muted transition-colors group-hover:border-border-strong group-hover:text-foreground"
                    >
                      {item}
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
