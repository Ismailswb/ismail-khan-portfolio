import { Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import {
  GitHubIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/ui/BrandIcons";

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
  onNavigate?: () => void;
};

const links = [
  {
    href: siteConfig.linkedin,
    label: "LinkedIn",
    icon: LinkedInIcon,
    external: true,
  },
  {
    href: siteConfig.github,
    label: "GitHub",
    icon: GitHubIcon,
    external: true,
  },
  {
    href: `mailto:${siteConfig.email}`,
    label: "Email",
    icon: Mail,
    external: false,
  },
  {
    href: siteConfig.whatsappHref,
    label: "WhatsApp",
    icon: WhatsAppIcon,
    external: true,
  },
] as const;

export function SocialLinks({
  className,
  iconClassName,
  onNavigate,
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            onClick={onNavigate}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-200 hover:border-accent/45 hover:text-accent hover:shadow-[0_0_18px_rgba(249,115,22,0.18)]",
              iconClassName,
            )}
          >
            <Icon className="size-4" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
