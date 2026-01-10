import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NeedHelpCard } from "@/components/need-help-card";

export default function Join() {
  return (
    <section className="space-y-8">
           <div className="space-y-4">
        <h1 className="text-4xl font-bold text-white">How to join Dinks</h1>
        <p className="max-w-2xl text-base leading-7 text-white/80">
          Dinks memberships are managed through CourtReserve, a platform that
          handles our court bookings, member accounts, and payments. You&apos;ll
          create a CourtReserve account and join Dinks Pickleball from there.
        </p>
      </div>
      <Card>
        <CardContent className="space-y-6 p-6 text-base leading-7 text-white/80">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">
              Join through the CourtReserve website
            </h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li>Create your CourtReserve account</li>
              <li>Search for &quot;Dinks Pickleball&quot; and select the club</li>
              <li>Choose your membership package</li>
              <li>Complete payment to activate your membership</li>
            </ol>
            <Button asChild>
              <Link
                href="https://app.courtreserve.com/Account/Register?t=2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open CourtReserve to join
              </Link>
            </Button>
          </div>

          <div className="space-y-4 border-t border-white/10 pt-6">
            <h2 className="text-xl font-semibold text-white">
              Or join through the CourtReserve mobile app
            </h2>
            <p className="text-sm">
            If you prefer to join from your phone, download the CourtReserve app
            and follow the same steps above.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://apps.apple.com/us/app/courtreserve/id1392556575"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-base text-black"
                >
                
                </span>
                Download on the App Store
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.courtreserve"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-base text-black"
                >
                  ▶
                </span>
                Get it on Google Play
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-white">After you join</h2>
          <p className="mt-2 text-sm text-white/80">
            Once you complete your membership registration, you&apos;ll receive
            a welcome email with detailed instructions for setting up door
            access via the VizPin app.
          </p>
        </CardContent>
      </Card>

      <NeedHelpCard variant="compact" />
    </section>
  );
}
