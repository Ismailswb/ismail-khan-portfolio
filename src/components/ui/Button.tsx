import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "md" | "sm" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "accent-gradient text-white hover:brightness-110 shadow-[0_8px_28px_rgba(249,115,22,0.3)] border border-accent/30",
  secondary:
    "bg-transparent text-foreground border border-white/20 hover:border-white/35 hover:bg-white/5",
  ghost:
    "bg-transparent text-foreground hover:bg-surface-muted border border-transparent",
  outline:
    "bg-transparent text-accent border border-accent/50 hover:bg-accent-soft hover:border-accent",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-12 px-6 text-sm gap-2 font-semibold",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function isInternalHref(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  download?: boolean | string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  href,
  download,
  target,
  rel,
  onClick,
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (isInternalHref(href) && !download) {
    return (
      <Link href={href} className={classes} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      download={download}
      target={target}
      rel={rel}
      onClick={onClick}
      {...props}
    >
      {children}
    </a>
  );
}

type NativeButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function NativeButton({
  className,
  variant = "primary",
  size = "md",
  children,
  type = "button",
  ...props
}: NativeButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        baseClasses,
        "disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
