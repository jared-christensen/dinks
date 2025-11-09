import { NewsletterSignup } from "@/components/newsletter-signup";

export function NewsletterCard() {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Stay in the Loop</h2>
        <p className="text-sm text-slate-600">
          Get league openings, tournament announcements, and facility updates.
        </p>
        <NewsletterSignup />
      </div>
    </div>
  );
}
