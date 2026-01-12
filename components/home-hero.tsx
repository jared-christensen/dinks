import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <div className="relative left-1/2 right-1/2 -mt-24 w-screen -translate-x-1/2 overflow-hidden bg-brand-blue-500">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/home-page-hero.jpg')] bg-cover bg-center opacity-80" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-brand-blue-500 via-brand-blue-500/50 to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-28">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Image
            src="/dinks-logo-circle.png"
            alt="Dinks Pickleball"
            width={160}
            height={160}
            className="mb-8 h-[clamp(6rem,15vw,10rem)] w-[clamp(6rem,15vw,10rem)]"
          />

          {/* Main headline */}
          <h1 className="text-balance font-black uppercase leading-[0.85] tracking-[-0.02em] text-[clamp(2.25rem,7vw,4.25rem)] text-white">
            Des Moines&apos; Largest{" "}
            <span className="text-brand-yellow-500">Pickleball Facility</span>
          </h1>

          {/* Subhead */}
          <p className="mt-6 text-balance text-lg leading-relaxed text-white/90">
            13 professional indoor courts. Open daily 6am to 12am.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center rounded-full bg-brand-yellow-500 px-8 py-3 text-sm font-bold uppercase tracking-wide text-black transition-all hover:scale-105 hover:bg-brand-yellow-300 active:scale-95 active:bg-brand-yellow-600"
            >
              Join Now
            </Link>
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-white/50 hover:bg-white/10 active:scale-95 active:bg-white/20"
            >
              Book a Court
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
