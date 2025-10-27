import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function JoinHowTo() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-green">
          Join Dinks
        </span>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          How to join Dinks
        </h1>
        <p className="max-w-2xl text-base leading-7 text-slate-600">
          Dinks memberships are managed through CourtReserve, a platform that handles our court
          bookings, member accounts, and payments. You&apos;ll create a CourtReserve account and join
          Dinks Pickleball from there.
        </p>
      </div>

      <div className="space-y-6 rounded-3xl bg-slate-50 p-8 text-base leading-7 text-slate-700 shadow-sm">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Join through the website (recommended)
          </h2>
          <ol className="space-y-3 list-decimal pl-5">
            <li>Create your CourtReserve account</li>
            <li>Search for &quot;Dinks Pickleball&quot; and select the club</li>
            <li>Choose your membership tier</li>
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

        <div className="space-y-4 border-t border-slate-200 pt-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Or join through the mobile app
          </h2>
          <p className="text-sm">
            If you prefer to join from your phone, download the CourtReserve app and follow the same
            steps above.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://apps.apple.com/us/app/courtreserve/id1248602367"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              <span
                aria-hidden="true"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-base text-white"
              >
                
              </span>
              Download on the App Store
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.courtreserve"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              <span
                aria-hidden="true"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-green text-base text-white"
              >
                ▶
              </span>
              Get it on Google Play
            </Link>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-6 text-slate-600 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Need help?</h2>
        <p className="mt-2">
          <Link
            href="/contact"
            className="font-semibold text-brand-green underline-offset-4 hover:underline"
          >
            Contact us
          </Link>{" "}
          or talk with the front desk during staffed hours and we&apos;ll walk you through the process.
        </p>
      </div>
    </section>
  );
}
