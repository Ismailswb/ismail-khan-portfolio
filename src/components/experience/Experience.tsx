import { education, experience } from "@/data/experience";
import { Section } from "@/components/layout/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <Section id="experience" ariaLabelledby="experience-heading" className="bg-surface/60">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience."
          description="Roles focused on shipping production web, mobile, and backend systems."
          titleId="experience-heading"
        />
      </Reveal>

      <Stagger className="relative mt-12 space-y-6 before:absolute before:left-[11px] before:top-3 before:bottom-3 before:w-px before:bg-border sm:before:left-[15px]">
        {experience.map((item) => (
          <StaggerItem key={`${item.company}-${item.period}`}>
            <article className="relative pl-10 sm:pl-12">
              <span
                className="absolute left-0 top-2 size-6 rounded-full border-2 border-accent bg-surface sm:size-8"
                aria-hidden="true"
              />
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-7">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-navy sm:text-xl">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">{item.company}</p>
                  </div>
                  <p className="shrink-0 font-mono text-xs text-muted sm:pt-1">
                    {item.period}
                  </p>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {item.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:rounded-full before:bg-border-strong"
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
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" ariaLabelledby="education-heading">
      <Reveal>
        <SectionHeading eyebrow="Education" title="Academic foundation." titleId="education-heading" />
        <article className="mt-8 max-w-2xl rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
          <h3 className="text-xl font-semibold tracking-tight text-navy">
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
