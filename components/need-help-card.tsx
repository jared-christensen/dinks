import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface NeedHelpCardProps {
  variant?: "default" | "compact";
}

export function NeedHelpCard({ variant = "default" }: NeedHelpCardProps) {
  if (variant === "compact") {
    return (
      <Card>
        <CardContent className="p-6 text-sm leading-6">
          <h2 className="text-lg font-semibold">Need help?</h2>
          <p className="mt-2">
            <Link
              href="/contact"
              className="font-semibold underline-offset-4 hover:underline"
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
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-base leading-7 text-white/80">
      <h2 className="text-xl font-semibold text-white">Need help?</h2>
      <p className="mt-2">
        Have questions or need assistance?{" "}
        <Link
          href="/contact"
          className="font-semibold text-white underline-offset-4 hover:underline"
        >
          Contact us
        </Link>{" "}
        and we&apos;ll be happy to help.
      </p>
    </div>
  );
}
