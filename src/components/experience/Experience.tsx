import { education, experience } from "@/data/experience";
import { Section } from "@/components/layout/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <Section id="experience" ariaLabelledby="experience-heading" className="relative">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-25" aria-hidden="true" />

      <div className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Professional experience."
            description="Roles focused on shipping production web, mobile, and backend systems."
            titleId="experience-heading"
          />
        </Reveal>

        <Stagger className="relative mt-12 space-y-8 before:absolute before:left-[11px] before:top-3 before:bottom-3 before:w-px before:bg-gradient-to-b before:from-accent/50 before:via-border before:to-transparent sm:before:left-[15px]">
          {experience.map((item) => (
            <StaggerItem key={`${item.company}-${item.period}`}>
              <article className="relative pl-10 sm:pl-12">
                <span
                  className="absolute left-0 top-2 size-6 rounded-full border-2 border-accent bg-background shadow-[0_0_16px_rgba(59,130,246,0.35)] sm:size-8"
                  aria-hidden="true"
                />
                <div className="rounded-2xl border border-border bg-surface/70 p-6 transition-colors hover:border-border-strong sm:p-7">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-medium text-accent">{item.company}</p>
                      <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                        {item.role}
                      </h3>
                    </div>
                    <p className="shrink-0 font-mono text-xs text-muted sm:pt-1">
                      {item.period}
                    </p>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {item.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:rounded-full before:bg-accent/70"
                      >
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" ariaLabelledby="education-heading" className="pt-0">
      <Reveal>
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation."
          titleId="education-heading"
        />
        <article className="mt-8 max-w-2xl rounded-2xl border border-border bg-surface/70 p-6 sm:p-8">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {education.degree}
          </h3>
          <p className="mt-2 text-base text-muted">{education.institution}</p>
          {education.graduationYear ? (
            <p className="mt-3 font-mono text-xs text-muted-soft">
              Graduation Year: {education.graduationYear}
            </p>
          ) : null}
        </article>
      </Reveal>
    </Section>
  );
}
