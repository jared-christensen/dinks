import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface NeedHelpCardProps {
  variant?: "default" | "compact";
}

export function NeedHelpCard({ variant = "default" }: NeedHelpCardProps) {
  if (variant === "compact") {
    return (
      <Card>
        <CardContent className="p-6 text-sm leading-6 text-slate-600">
          <h2 className="text-lg font-semibold text-slate-900">Need help?</h2>
          <p className="mt-2">
            <Link
              href="/contact"
              className="font-semibold text-slate-700 underline-offset-4 hover:underline"
            >
              Contact us
            </Link>{" "}
            and we&apos;ll walk you through it.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="rounded-3xl bg-slate-50 p-8 text-base leading-7 text-slate-700 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Need help?</h2>
      <p className="mt-2">
        Have questions or need assistance?{" "}
        <Link
          href="/contact"
          className="font-semibold text-slate-700 underline-offset-4 hover:underline"
        >
          Contact us
        </Link>{" "}
        and we&apos;ll be happy to help.
      </p>
    </div>
  );
}
