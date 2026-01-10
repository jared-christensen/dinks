import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <Container className="px-4 py-8 sm:px-6">
        {/* Links + Copyright row */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-6">
            <Image
              src="/dinks-logo-circle.png"
              alt="Dinks Pickleball"
              width={32}
              height={32}
            />
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/about"
                className="text-black/60 transition hover:text-black"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-black/60 transition hover:text-black"
              >
                Contact
              </Link>
              <Link
                href="/membership#business-sponsorships"
                className="text-black/60 transition hover:text-black"
              >
                Sponsors
              </Link>
              <Link
                href="https://www.facebook.com/dinkspickleball"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 transition hover:text-black"
              >
                Facebook
              </Link>
            </nav>
          </div>

          <p className="text-sm text-black/40">
            © {new Date().getFullYear()} Dinks Pickleball
          </p>
        </div>

        {/* Address row */}
        <div className="mt-6 flex flex-col items-start gap-3 border-t border-black/10 pt-6 text-sm text-black/50">
          <div className="space-y-1">
            <span className="block">3800 Merle Hay Rd Suite 1000, Des Moines, IA</span>
            <span className="block">Open daily 6am–midnight</span>
          </div>
          <Button asChild variant="secondary-blue" size="sm">
            <Link
              href="https://maps.google.com/?q=Dinks+Pickleball+Des+Moines"
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions
            </Link>
          </Button>
        </div>
      </Container>
    </footer>
  );
}
