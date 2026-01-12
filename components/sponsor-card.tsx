"use client";

import Image from "next/image";
import Link from "next/link";

export type SponsorTier =
  | "Platinum Court Sponsor"
  | "Premier Sponsor"
  | "Gold Sponsor";

export type Sponsor = {
  name: string;
  tier: SponsorTier;
  blurb?: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
};

type SponsorCardProps = {
  sponsor: Sponsor;
  showBlurb?: boolean;
  className?: string;
};

export function SponsorCard({
  sponsor,
  showBlurb = false,
  className = "",
}: SponsorCardProps) {
  return (
    <article
      className={`flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm transition hover:bg-white/10 ${className}`}
    >
      {sponsor.imageSrc ? (
        <div className="mb-4 flex items-center justify-start">
          <Image
            src={sponsor.imageSrc}
            alt={sponsor.imageAlt ?? sponsor.name}
            width={320}
            height={120}
            className="h-16 w-auto object-contain"
          />
        </div>
      ) : (
        <div className="mb-4 flex h-16 items-center justify-center rounded-xl bg-white/10">
          <span className="text-sm font-medium text-white/40">{sponsor.name}</span>
        </div>
      )}

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
          {sponsor.tier}
        </p>
        <h3 className="text-xl font-semibold text-white">
          {sponsor.name}
        </h3>
        {showBlurb && sponsor.blurb ? (
          <p className="text-sm leading-6 text-white/80 whitespace-pre-line">
            {sponsor.blurb}
          </p>
        ) : null}
      </div>

      {sponsor.href ? (
        <div className="mt-4">
          <Link
            href={sponsor.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white underline underline-offset-4 hover:text-brand-yellow-500"
            aria-label={`Visit ${sponsor.name} website (opens in new tab)`}
          >
            Visit website
          </Link>
        </div>
      ) : null}
    </article>
  );
}
