import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <Section
      id="contact"
      ariaLabelledby="contact-heading"
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 ambient-glow" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />
      <div className="noise-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/80 p-8 shadow-lg sm:p-12 lg:p-16">
        <div
          className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-accent/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-16 size-56 rounded-full bg-cyan/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2
              id="contact-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl"
            >
              {siteConfig.contact.heading}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.contact.text}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={`mailto:${siteConfig.email}`} variant="primary" size="lg">
                <Mail className="size-4" aria-hidden="true" />
                Email Me
              </Button>
              <Button
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
              >
                <LinkedInIcon className="size-4" aria-hidden="true" />
                LinkedIn
              </Button>
              <Button
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
              >
                <GitHubIcon className="size-4" aria-hidden="true" />
                GitHub
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-border bg-background/50 p-6 sm:p-8">
              <dl className="space-y-7">
                <div>
                  <dt className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-soft">
                    <Mail className="size-3.5" aria-hidden="true" />
                    Email
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-base font-medium text-foreground transition-colors hover:text-accent"
                    >
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-soft">
                    <Phone className="size-3.5" aria-hidden="true" />
                    Phone
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={siteConfig.phoneHref}
                      className="text-base font-medium text-foreground transition-colors hover:text-accent"
                    >
                      {siteConfig.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-soft">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    Location
                  </dt>
                  <dd className="mt-2 text-base font-medium text-foreground">
                    {siteConfig.locationShort}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
