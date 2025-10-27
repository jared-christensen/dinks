"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/instruction", label: "Instruction" },
  { href: "/destinations", label: "Destinations" },
  { href: "/book", label: "Book a Court" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full  bg-white/90 backdrop-blur transition-shadow  ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Dinks Pickleball home"
          >
            <Image
              src="/dinks-logo-horizontal.png"
              alt="Dinks Pickleball"
              width={180}
              height={40}
              priority
              className="h-8 w-auto "
            />
          </Link>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-slate-600 transition hover:text-brand-green"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild>
            <Link href="/join">Join Dinks</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-menu"
          className="space-y-4 border-t border-slate-200 bg-white px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:text-brand-green"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <Button asChild className="w-full">
              <Link href="/join" onClick={() => setIsMenuOpen(false)}>
                Join Dinks
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
