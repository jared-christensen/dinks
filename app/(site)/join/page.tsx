import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const steps = [
  {
    number: 1,
    title: "Sign up on CourtReserve",
    description: "Create a free account with your email",
  },
  {
    number: 2,
    title: "Find Dinks Pickleball",
    description: "Search \"Dinks Pickleball\" and select our club",
  },
  {
    number: 3,
    title: "Pick your membership",
    description: "Choose Basic, Gold, or VIP",
  },
];

export default function Join() {
  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-white">Join Dinks</h1>
        <p className="max-w-2xl text-balance text-base leading-7 text-white/80">
          Becoming a member takes just a few minutes through CourtReserve, the
          platform we use for memberships and court reservations.
        </p>
      </div>

      {/* Main Steps Card */}
      <div className="overflow-hidden rounded-2xl border-8 border-white/10 bg-white">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-brand-blue-500">
            Steps to Join
          </h2>

          <div className="mt-8 space-y-5">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-yellow-500 text-sm font-bold text-brand-blue-500">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-brand-blue-500">
                    {step.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-brand-blue-500/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link
                href="https://app.courtreserve.com/Account/Register?t=2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 uppercase tracking-wide"
              >
                <Image
                  src="/courtreserve-icon.webp"
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 rounded"
                />
                Get Started on CourtReserve
              </Link>
            </Button>
          </div>
        </div>

        {/* App Download Section */}
        <div className="border-t border-brand-blue-500/10 bg-brand-blue-500/5 px-8 py-5">
          <p className="text-sm text-brand-blue-500/70">
            Prefer mobile? Download the CourtReserve app and follow the same
            steps.
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="https://apps.apple.com/us/app/courtreserve/id1392556575"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-blue-500/20 bg-white px-4 py-2 text-sm font-medium text-brand-blue-500 transition hover:border-brand-blue-500/40 hover:bg-brand-blue-500/5"
            >
              <FaApple className="h-4 w-4" />
              App Store
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.courtreserve"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-blue-500/20 bg-white px-4 py-2 text-sm font-medium text-brand-blue-500 transition hover:border-brand-blue-500/40 hover:bg-brand-blue-500/5"
            >
              <FaGooglePlay className="h-4 w-4" />
              Google Play
            </Link>
          </div>
        </div>
      </div>

      {/* After You Join */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <h2 className="font-semibold text-white">After you join</h2>
        <p className="mt-2 max-w-prose text-sm leading-6 text-white/70">
          You&apos;ll receive a welcome email with door access instructions.
          Your phone is your key via the VizPin Smart app (
          <Link
            href="https://apps.apple.com/us/app/vizpin-smart/id946474106"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-yellow-500 underline underline-offset-2 hover:text-brand-yellow-400"
          >
            iOS
          </Link>
          {" / "}
          <Link
            href="https://play.google.com/store/apps/details?id=com.eckey.vizpin.dm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-yellow-500 underline underline-offset-2 hover:text-brand-yellow-400"
          >
            Android
          </Link>
          ).
        </p>
        <p className="mt-4 max-w-prose text-sm leading-6 text-white/70">
          Reserve courts through{" "}
          <Link
            href="/schedule"
            className="text-brand-yellow-500 underline underline-offset-2 hover:text-brand-yellow-400"
          >
            CourtReserve
          </Link>{" "}
          (
          <Link
            href="https://apps.apple.com/us/app/courtreserve/id1392556575"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-yellow-500 underline underline-offset-2 hover:text-brand-yellow-400"
          >
            iOS
          </Link>
          {" / "}
          <Link
            href="https://play.google.com/store/apps/details?id=com.courtreserve"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-yellow-500 underline underline-offset-2 hover:text-brand-yellow-400"
          >
            Android
          </Link>
          ).
        </p>
        <p className="mt-4 max-w-prose text-sm leading-6 text-white/70">
          Bringing friends? Add guests to your reservation for $10 per person at
          checkout.
        </p>
        <p className="mt-4 max-w-prose text-sm text-white/70">
          See our{" "}
          <Link
            href="/apps"
            className="text-brand-yellow-500 underline underline-offset-2 hover:text-brand-yellow-400"
          >
            Apps page
          </Link>{" "}
          for info on all the apps and platforms we use.
        </p>
      </div>
    </section>
  );
}
