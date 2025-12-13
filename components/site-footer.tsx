import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
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
              className="text-slate-600 transition hover:text-slate-900"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-slate-600 transition hover:text-slate-900"
            >
              Contact
            </Link>
            <Link
              href="/membership#business-sponsorships"
              className="text-slate-600 transition hover:text-slate-900"
            >
              Sponsors
            </Link>
            <Link
              href="https://www.facebook.com/dinkspickleball"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 transition hover:text-slate-900"
            >
              Facebook
            </Link>
            </nav>
          </div>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Dinks Pickleball
          </p>
        </div>

        {/* Address row */}
        <div className="mt-6 flex flex-col gap-1 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <span>3800 Merle Hay Rd Suite 1000, Des Moines, IA</span>
          <span>Open daily 6am–midnight</span>
          <Link
            href="https://maps.google.com/?q=Dinks+Pickleball+Des+Moines"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 transition hover:text-slate-900"
          >
            Directions
          </Link>
        </div>
      </Container>
    </footer>
  );
}
