import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-elevated">
      <Container className="py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-semibold text-foreground">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-muted">{siteConfig.title}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
            {siteConfig.footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-sm text-muted-soft">
          © 2026 {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
