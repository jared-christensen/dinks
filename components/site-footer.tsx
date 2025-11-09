import Link from "next/link";
import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer className="bg-slate-800 text-white border-t-[15px] border-white">
      <Container className="flex flex-col gap-8 px-4 py-12 text-sm sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md space-y-3">
          <p className="text-lg font-semibold text-white">Dinks Pickleball</p>
          <p className="leading-relaxed text-white/90">
            Des Moines&apos; home for indoor pickleball with 13
            climate-controlled courts, daily play, and member-focused
            programming.
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Visit
          </p>
          <p className="text-white/90">
            3800 Merle Hay Rd Suite 1000, Des Moines, IA 50310
          </p>
          <p className="text-white/90">Open daily 6 am – midnight</p>
          <Link
            href="https://maps.google.com/?q=Dinks+Pickleball+Des+Moines"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold text-white transition hover:text-white/80"
          >
            Get directions
          </Link>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
            More
          </p>
          <div className="flex flex-col gap-2 text-white/90">
            <Link href="/sponsorship" className="transition hover:text-white">
              Sponsorship Packages
            </Link>
            <Link href="/destinations" className="transition hover:text-white">
              Destinations
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Connect
          </p>
          <div className="flex flex-col gap-2 text-white/90">
            <Link
              href="https://www.facebook.com/dinkspickleball"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Facebook
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </Container>
      <div className=" py-4 text-sm text-white/70">
        <Container className="flex flex-col items-center gap-2 px-4 text-center sm:flex-row sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} Dinks Pickleball. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
