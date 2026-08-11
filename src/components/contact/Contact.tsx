import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const contactCards = [
  {
    label: "Email me",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "Call me",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    icon: Phone,
  },
  {
    label: "Based in",
    value: siteConfig.locationShort,
    href: undefined,
    icon: MapPin,
  },
] as const;

export function Contact() {
  return (
    <Section
      id="contact"
      ariaLabelledby="contact-heading"
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 ambient-glow" aria-hidden="true" />

      <div className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          <Reveal>
            <h2
              id="contact-heading"
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
            >
              Let&apos;s Build Something Great
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              {siteConfig.contact.text}
            </p>
          </Reveal>

          <Stagger className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <>
                  <div className="mb-3 flex size-9 items-center justify-center rounded-lg border border-accent/25 bg-accent-soft text-accent">
                    <Icon className="size-4" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-medium text-foreground break-all">
                    {card.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-soft">{card.label}</p>
                </>
              );

              return (
                <StaggerItem key={card.label}>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="block h-full rounded-xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="h-full rounded-xl border border-border bg-surface p-4">
                      {content}
                    </div>
                  )}
                </StaggerItem>
              );
            })}

            <StaggerItem>
              <Button
                href={`mailto:${siteConfig.email}`}
                variant="primary"
                size="lg"
                className="h-full min-h-[7.5rem] w-full flex-col gap-2 rounded-xl text-base"
              >
                Get In Touch
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
