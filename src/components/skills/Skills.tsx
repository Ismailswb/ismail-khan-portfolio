import { skillGroups } from "@/data/skills";
import { Section } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <Section id="skills" ariaLabelledby="skills-heading">
      <Reveal>
        <SectionHeading
          eyebrow="Technical skills"
          title="A practical full-stack toolkit."
          description="Technologies and practices I use to design, build, and deploy production software."
          titleId="skills-heading"
        />
      </Reveal>

      <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <StaggerItem key={group.category}>
            <article className="h-full rounded-2xl border border-border bg-surface p-6 shadow-sm">
              <h3 className="text-base font-semibold text-navy">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
