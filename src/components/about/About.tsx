import { siteConfig } from "@/data/site";
import { Section } from "@/components/layout/Container";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <Section id="about" ariaLabelledby="about-heading" className="relative">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

      <div className="relative grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.25fr)] lg:gap-16 xl:gap-20">
        <Reveal>
          <div className="flex flex-col items-start gap-6">
            <ProfileImage />
            <div className="rounded-xl border border-border bg-surface/60 px-4 py-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                Based in
              </p>
              <p className="mt-1 text-sm text-foreground">{siteConfig.locationShort}</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title={siteConfig.about.heading}
              titleId="about-heading"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10">
              <p className="eyebrow mb-6">Career progression</p>
              <div className="relative">
                <div
                  className="pointer-events-none absolute bottom-4 left-[15px] top-4 w-px bg-gradient-to-b from-accent via-cyan/40 to-border"
                  aria-hidden="true"
                />
                <ol className="relative space-y-0">
                  {siteConfig.careerProgression.map((item, index) => (
                    <li key={item} className="relative flex gap-5 pb-5 last:pb-0">
                      <span
                        className="relative z-[1] mt-1.5 flex size-[30px] shrink-0 items-center justify-center rounded-full border border-accent/40 bg-background font-mono text-[10px] text-accent"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 rounded-xl border border-border bg-surface/60 px-4 py-3.5 transition-colors hover:border-accent/30">
                        <p className="text-base font-semibold tracking-tight text-foreground">
                          {item}
                        </p>
                        {index < siteConfig.careerProgression.length - 1 ? (
                          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-soft">
                            Next layer →
                          </p>
                        ) : (
                          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-cyan">
                            Shipping live systems
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
