import { NewsletterSignup } from "@/components/newsletter-signup";

export function NewsletterCard() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">
          Stay in the Loop
        </h2>
        <p className="max-w-2xl text-lg text-slate-600">
          Get league openings, tournament announcements, and facility updates delivered to
          your inbox.
        </p>
      </div>
      <NewsletterSignup />
    </div>
  );
}
