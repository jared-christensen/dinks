import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Generic package tier shape covering membership & sponsorship differences.
export interface PackageTier {
  name: string;
  price: string;
  description?: string; // Optional for sponsorship tiers that might not need a blurb
  keyDifferences?: string[]; // Membership-specific label ("Key differences")
  whatsDifferent?: string[]; // Sponsorship-specific label ("What's Different")
  included?: string[]; // Common included items list
  ctaHref: string; // Link target for action
  ctaLabel: string; // Button text
}

interface PackageCardProps {
  tier: PackageTier;
  variant?: "membership" | "sponsorship" | "auto"; // auto chooses based on presence of whatsDifferent vs keyDifferences
  compact?: boolean; // When true, suppress description & included list for tighter layouts (e.g., homepage)
}

export function PackageCard({
  tier,
  variant = "auto",
  compact = false,
}: PackageCardProps) {
  const derivedVariant =
    variant === "auto"
      ? tier.whatsDifferent
        ? "sponsorship"
        : "membership"
      : variant;

  const differences =
    derivedVariant === "sponsorship"
      ? tier.whatsDifferent
      : tier.keyDifferences;
  const differencesLabel = "Differences";

  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-slate-900">
          {tier.name}
        </CardTitle>
        <CardDescription className="text-base font-semibold text-slate-600">
          {tier.price}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col space-y-4">
        {!compact && tier.description && (
          <p className="h-[4.5rem] text-sm leading-6 text-slate-600">{tier.description}</p>
        )}

        {differences && differences.length > 0 && (
          <div className="space-y-2 text-sm leading-relaxed text-slate-700">
            <p className="font-bold text-slate-900">{differencesLabel}</p>
            <ul className="space-y-1.5">
              {differences.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-700"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {!compact && tier.included && tier.included.length > 0 && (
          <div className="space-y-2 text-xs leading-relaxed text-slate-600">
            <p className="font-semibold text-slate-900">Included</p>
            <ul className="space-y-1">
              {tier.included.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-300"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto pt-2">
          <Button asChild className="w-full">
            <Link href={tier.ctaHref}>{tier.ctaLabel}</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
