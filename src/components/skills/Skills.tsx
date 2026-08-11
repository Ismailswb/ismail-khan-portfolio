import { skillGroups } from "@/data/skills";
import { Section } from "@/components/layout/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <Section
      id="skills"
      ariaLabelledby="skills-heading"
      className="relative bg-background-elevated"
    >
      <div className="noise-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative">
        <Reveal className="flex items-center gap-4">
          <h2
            id="skills-heading"
            className="shrink-0 text-2xl font-semibold tracking-tight text-accent sm:text-3xl"
          >
            Skills
          </h2>
          <span className="section-line" aria-hidden="true" />
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            Technologies and practices I use to design, build, and deploy
            production software.
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <StaggerItem key={group.category}>
              <article className="group h-full rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:border-accent/30 sm:p-6">
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
                      className="rounded-full border border-border bg-background/40 px-2.5 py-1.5 text-xs text-muted transition-colors group-hover:border-border-strong group-hover:text-foreground"
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
