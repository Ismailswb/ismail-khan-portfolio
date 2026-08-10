import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <Section id="about" ariaLabelledby="about-heading">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
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
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
            <p className="eyebrow mb-6">Career progression</p>
            <ol className="space-y-0">
              {siteConfig.careerProgression.map((item, index) => (
                <li key={item} className="flex flex-col items-stretch">
                  <div className="flex items-center gap-4 rounded-xl border border-border bg-background px-4 py-3">
                    <span className="font-mono text-xs text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold text-navy sm:text-base">
                      {item}
                    </span>
                  </div>
                  {index < siteConfig.careerProgression.length - 1 ? (
                    <div
                      className="flex h-6 justify-center text-muted-soft"
                      aria-hidden="true"
                    >
                      <ArrowDown className="size-4 self-center" />
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
