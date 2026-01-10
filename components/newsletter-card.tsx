import { NewsletterSignup } from "@/components/newsletter-signup";

export function NewsletterCard() {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-6">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">Stay in the Loop</h2>
        <p className="text-sm text-white/80">
          Get league openings, tournament announcements, and facility updates.
        </p>
        <NewsletterSignup />
      </div>
    </div>
  );
}
