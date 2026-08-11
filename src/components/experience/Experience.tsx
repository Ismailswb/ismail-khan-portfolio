import { education, experience } from "@/data/experience";
import { Section } from "@/components/layout/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <Section id="experience" ariaLabelledby="experience-heading" className="relative">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-15" aria-hidden="true" />

      <div className="relative">
        <Reveal className="flex items-center gap-4">
          <h2
            id="experience-heading"
            className="shrink-0 text-2xl font-semibold tracking-tight text-accent sm:text-3xl"
          >
            Experience
          </h2>
          <span className="section-line" aria-hidden="true" />
        </Reveal>

        <Stagger className="relative mt-10 space-y-8">
          {experience.map((item, index) => (
            <StaggerItem key={`${item.company}-${item.period}`}>
              <article className="grid gap-4 md:grid-cols-[11rem_1.25rem_minmax(0,1fr)] md:gap-6">
                <p className="pt-1 font-mono text-xs font-medium text-muted md:text-right md:text-sm">
                  {item.period}
                </p>

                <div className="relative hidden md:block" aria-hidden="true">
                  <span className="absolute left-1/2 top-2 size-3.5 -translate-x-1/2 rounded-full border-2 border-accent bg-accent shadow-[0_0_14px_rgba(249,115,22,0.55)]" />
                  {index < experience.length - 1 ? (
                    <span className="absolute left-1/2 top-6 bottom-[-2.5rem] w-px -translate-x-1/2 bg-border-strong" />
                  ) : (
                    <span className="absolute left-1/2 top-6 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-border-strong to-transparent" />
                  )}
                </div>

                <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
                  <div className="flex items-start gap-3 md:block">
                    <span
                      className="mt-1.5 size-2.5 shrink-0 rounded-full bg-accent shadow-[0_0_10px_rgba(249,115,22,0.5)] md:hidden"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-accent">
                        at {item.company}
                      </p>
                    </div>
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
        <div className="flex items-center gap-4">
          <h2
            id="education-heading"
            className="shrink-0 text-2xl font-semibold tracking-tight text-accent sm:text-3xl"
          >
            Education
          </h2>
          <span className="section-line" aria-hidden="true" />
        </div>
        <article className="mt-8 max-w-2xl rounded-xl border border-border bg-surface p-6 sm:p-8">
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
