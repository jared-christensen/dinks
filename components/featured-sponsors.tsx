import Image from "next/image";
import Link from "next/link";
import { getFeaturedSponsors, getSponsorsByTier } from "@/data/sponsors";

export function FeaturedSponsors({ limit = 6 }: { limit?: number }) {
  const featured = getFeaturedSponsors(limit);
  const premier = getSponsorsByTier("premier");
  const gold = getSponsorsByTier("gold");

  if (!featured.length && !premier.length && !gold.length) return null;

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Our Sponsors
        </h2>
        <p className="text-slate-600 text-base max-w-2xl">
          These partners keep the courts open and our players thriving.{" "}
          <a
            href="/sponsorship"
            className="text-slate-800 underline hover:text-slate-900"
          >
            Want to join them?
          </a>
        </p>
      </div>
      {/* Platinum Sponsors */}
      {featured.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Platinum Sponsors
          </h3>
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
                  className="h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition"
                />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Premier Sponsors */}
      {premier.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Premier Sponsors
          </h3>
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
                  className="h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition"
                />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Gold Sponsors */}
      {gold.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Gold Sponsors
          </h3>
          <div className="flex flex-wrap gap-2">
            {gold.map((s) => (
              <Link
                key={s.name}
                href={s.href ?? "#"}
                className="inline-flex items-center justify-center rounded-md bg-white/60 px-2 py-2.5 text-center text-[11px] font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur transition hover:shadow-md hover:ring-slate-300"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
