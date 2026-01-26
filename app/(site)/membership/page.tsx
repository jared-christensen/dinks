import { MembershipSection } from "@/components/membership-section";
import { SponsorshipSection } from "@/components/sponsorship-section";

export default function Membership() {
  return (
    <section className="space-y-24">
      <MembershipSection showGuestInfo />

      <SponsorshipSection />
    </section>
  );
}
