import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/layout/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background-elevated">
      <div
        className="pointer-events-none absolute -bottom-24 -left-16 size-64 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-10 size-56 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative block h-14 w-[5.5rem] shrink-0 overflow-hidden">
                <Image
                  src={siteConfig.logo}
                  alt={`${siteConfig.name} logo`}
                  fill
                  sizes="88px"
                  className="object-contain object-left"
                />
              </span>
              <div>
                <p className="text-base font-semibold text-foreground">
                  {siteConfig.name}
                </p>
                <p className="text-sm text-muted">{siteConfig.title}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-soft">
              Quick Links
            </p>
            <nav aria-label="Footer" className="mt-4 flex flex-col gap-2.5">
              {siteConfig.footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-soft">
              Connect
            </p>
            <SocialLinks className="mt-4" />
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-sm text-muted-soft">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
