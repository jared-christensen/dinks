import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaLocationArrow } from "react-icons/fa";

export function SiteFooter() {
  return (
    <footer className="border-t-8 border-white/10 bg-brand-green-500">
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
                className="text-white/80 transition hover:text-white"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white/80 transition hover:text-white"
              >
                Contact
              </Link>
              <Link
                href="/membership#business-sponsorships"
                className="text-white/80 transition hover:text-white"
              >
                Sponsors
              </Link>
              <Link
                href="/apps"
                className="text-white/80 transition hover:text-white"
              >
                Apps
              </Link>
              <Link
                href="https://www.facebook.com/dinkspickleball"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 transition hover:text-white"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </Link>
            </nav>
          </div>

          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Dinks Pickleball
          </p>
        </div>

        {/* Address row */}
        <div className="mt-6 flex flex-col items-start gap-3 border-t border-white/20 pt-6 text-sm text-white/70">
          <div className="space-y-1">
            <span className="block">3800 Merle Hay Rd Suite 1000, Des Moines, IA</span>
            <span className="block">Open daily 6am–12am</span>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link
              href="https://maps.google.com/?q=Dinks+Pickleball+Des+Moines"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <FaLocationArrow className="h-3 w-3" />
              Get directions
            </Link>
          </Button>
        </div>
      </Container>
    </footer>
  );
}
