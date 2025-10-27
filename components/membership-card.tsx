import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type MembershipTier = {
  name: string;
  price: string;
  description: string;
  keyDifferences: string[];
  included: string[];
};

export function MembershipCard({ tier }: { tier: MembershipTier }) {
  return (
    <Card className="flex flex-col transition hover:shadow-md">
      <CardHeader>
        <CardTitle>{tier.name}</CardTitle>
        <CardDescription className="text-sm font-semibold uppercase tracking-wide text-brand-green">
          {tier.price}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col space-y-4">
        <p className="text-sm leading-6 text-slate-600">{tier.description}</p>
        <div className="space-y-2 text-sm leading-6 text-slate-600">
          <p className="font-semibold text-slate-900">Key differences</p>
          <ul className="space-y-1">
            {tier.keyDifferences.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span
                  aria-hidden
                  className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-green"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto pt-2">
          <Button asChild className="w-full">
            <Link href="/join/how-to">Select this membership</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
