import Image from "next/image";
import Link from "next/link";
import { getFeaturedSponsors, getSponsorsByTier } from "@/data/sponsors";

export function FeaturedSponsors({
  limit = 6,
  showGold = true,
  goldLimit,
}: {
  limit?: number;
  showGold?: boolean;
  goldLimit?: number;
}) {
  const featured = getFeaturedSponsors(limit);
  const premier = getSponsorsByTier("premier");
  const allGold = getSponsorsByTier("gold");
  const gold = goldLimit ? allGold.slice(0, goldLimit) : allGold;

  if (!featured.length && !premier.length && !gold.length) return null;

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-slate-900">Our Sponsors</h2>
        <p className="text-base text-slate-600">
          These sponsors keep the courts open and our players thriving.{" "}
          <a
            href="/membership#business-sponsorships"
            className="text-slate-800 underline hover:text-slate-900"
          >
            Want to join them?
          </a>
        </p>
      </div>
      {/* Platinum Sponsors */}
      {featured.length > 0 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {featured.map((s) => (
            <Link
              key={s.name}
              href={s.href ?? "#"}
              aria-label={`Visit ${s.name} website`}
              className="group flex items-center justify-center rounded-md bg-white/70 p-5 shadow-md ring-2 ring-slate-300 backdrop-blur transition hover:shadow-lg hover:ring-slate-400"
            >
              <Image
                src={s.imageSrc!}
                alt={s.imageAlt ?? `${s.name} logo`}
                width={200}
                height={80}
                loading="lazy"
                className="h-16 w-auto object-contain grayscale transition group-hover:grayscale-0"
              />
            </Link>
          ))}
        </div>
      )}

      {/* Premier Sponsors */}
      {premier.length > 0 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {premier.map((s) => (
            <Link
              key={s.name}
              href={s.href ?? "#"}
              aria-label={`Visit ${s.name} website`}
              className="group flex items-center justify-center rounded-md bg-white/60 p-3 shadow-sm ring-1 ring-slate-200 backdrop-blur transition hover:shadow-md hover:ring-slate-300"
            >
              <Image
                src={s.imageSrc!}
                alt={s.imageAlt ?? `${s.name} logo`}
                width={160}
                height={64}
                loading="lazy"
                className="h-10 w-auto object-contain grayscale transition group-hover:grayscale-0"
              />
            </Link>
          ))}
        </div>
      )}

      {/* Gold Sponsors */}
      {showGold && gold.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {gold.map((s) => (
            <Link
              key={s.name}
              href={s.href ?? "#"}
              className="inline-flex items-center justify-center rounded-md bg-white/60 px-2 py-2.5 text-center text-xs font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur transition hover:shadow-md hover:ring-slate-300"
            >
              {s.name}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
