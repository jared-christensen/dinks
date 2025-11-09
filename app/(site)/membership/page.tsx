import { MembershipSection } from "@/components/membership-section";
import { SponsorshipSection } from "@/components/sponsorship-section";

export default function Membership() {
  return (
    <section className="space-y-24">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-slate-900">Join Dinks</h1>
        <p className="mt-3 text-base text-slate-600">
          Individual memberships or business sponsorships—choose the option that works for you.
        </p>
      </div>

      <MembershipSection />

      <SponsorshipSection />
    </section>
  );
}
