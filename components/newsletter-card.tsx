import { Card, CardContent } from "@/components/ui/card";
import { NewsletterSignup } from "@/components/newsletter-signup";

export function NewsletterCard() {
  return (
    <Card>
      <CardContent className="pt-6 text-sm leading-6 text-white">
        <h2 className="text-2xl font-semibold">Stay in the loop</h2>
        <p className="mt-2">
          Get league openings, tournament announcements, and facility updates in
          your inbox.
        </p>
        <NewsletterSignup />
      </CardContent>
    </Card>
  );
}
