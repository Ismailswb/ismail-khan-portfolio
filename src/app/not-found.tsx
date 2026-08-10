import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center py-24">
      <Container className="text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/" variant="primary">
            Back home
          </Button>
          <Button href="/projects" variant="secondary">
            View projects
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted-soft">
          Or{" "}
          <Link href="/#contact" className="font-medium text-accent hover:text-accent-hover">
            get in touch
          </Link>
          .
        </p>
      </Container>
    </div>
  );
}
