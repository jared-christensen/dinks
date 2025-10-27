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
      className={`flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900 ${className}`}
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
        <div className="mb-4 flex items-center justify-center">
          <Image
            src="https://placehold.co/320x120?text=Sponsor+Logo"
            alt="Placeholder sponsor logo"
            width={320}
            height={120}
            className="h-16 w-auto rounded-xl object-contain"
          />
        </div>
      )}

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-green">
          {sponsor.tier}
        </p>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
          {sponsor.name}
        </h3>
        {showBlurb && sponsor.blurb ? (
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300 whitespace-pre-line">
            {sponsor.blurb}
          </p>
        ) : null}
      </div>

      {sponsor.href ? (
        <div className="mt-4">
          <Link
            href={sponsor.href}
            className="text-sm font-semibold text-slate-700 underline underline-offset-4 hover:text-slate-900 dark:text-slate-200"
          >
            Visit website
          </Link>
        </div>
      ) : null}
    </article>
  );
}
