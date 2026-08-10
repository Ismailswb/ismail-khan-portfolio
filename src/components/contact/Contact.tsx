import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <Section id="contact" ariaLabelledby="contact-heading" className="bg-surface/60">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title={siteConfig.contact.heading}
            description={siteConfig.contact.text}
            titleId="contact-heading"
          />
          <div className="mt-8 flex flex-wrap gap-3">
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
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
            <dl className="space-y-6">
              <div>
                <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-soft">
                  <Mail className="size-3.5" aria-hidden="true" />
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base font-medium text-navy transition-colors hover:text-accent"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-soft">
                  <Phone className="size-3.5" aria-hidden="true" />
                  Phone
                </dt>
                <dd className="mt-2">
                  <a
                    href={siteConfig.phoneHref}
                    className="text-base font-medium text-navy transition-colors hover:text-accent"
                  >
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-soft">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  Location
                </dt>
                <dd className="mt-2 text-base font-medium text-navy">
                  {siteConfig.locationShort}
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
