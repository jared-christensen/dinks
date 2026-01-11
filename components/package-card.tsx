import Link from "next/link";

// Generic package tier shape covering membership & sponsorship differences.
export interface PackageTier {
  name: string;
  price: string;
  description?: string;
  keyDifferences?: string[];
  whatsDifferent?: string[];
  included?: string[];
  ctaHref: string;
  ctaLabel: string;
}

interface PackageCardProps {
  tier: PackageTier;
  compact?: boolean;
  highlighted?: boolean;
}

export function PackageCard({
  tier,
  compact = false,
  highlighted = false,
}: PackageCardProps) {
  const differences = tier.whatsDifferent ?? tier.keyDifferences;

  return (
    <Link
      href={tier.ctaHref}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border-8 p-6 transition ${
        highlighted
          ? "border-brand-yellow-500 bg-brand-green-400"
          : "border-white/10 bg-brand-green-500 hover:bg-brand-green-400"
      }`}
    >
      {/* Highlighted badge */}
      {highlighted && (
        <div className="absolute -right-8 top-4 rotate-45 bg-brand-red-500 px-10 py-1 text-xs font-bold uppercase tracking-wide text-white">
          Popular
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-2xl font-black tracking-tight text-white">
          {tier.name}
        </h3>
        <p className="text-lg font-bold text-brand-yellow-500">
          {tier.price}
        </p>
      </div>

      <div className="flex flex-1 flex-col space-y-4">
        {!compact && tier.description && (
          <p className="text-sm leading-6 text-white/80">{tier.description}</p>
        )}

        {differences && differences.length > 0 && (
          <div className="space-y-2 text-sm leading-relaxed text-white/80">
            <p className="text-xs font-bold uppercase tracking-wider text-white/50">
              Differences
            </p>
            <ul className="space-y-1.5">
              {differences.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-yellow-500"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {!compact && tier.included && tier.included.length > 0 && (
          <div className="space-y-2 text-xs leading-relaxed text-white/70">
            <p className="font-bold uppercase tracking-wider text-white/50">Included</p>
            <ul className="space-y-1">
              {tier.included.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className="mt-1 h-1.5 w-1.5 rounded-full bg-white/30"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto pt-4">
          <span className="flex w-full items-center justify-center rounded-full bg-brand-yellow-500 px-5 py-2 text-sm font-semibold text-black transition-transform group-hover:scale-110">
            {tier.ctaLabel}
          </span>
        </div>
      </div>
    </Link>
  );
}
