import { CourtReserveWidget } from "@/components/court-reserve-events";

export default function Registration() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-white">Registration</h1>
        <p className="max-w-2xl text-base leading-7 text-white/80">
          Register for events, clinics, and programs at Dinks Pickleball.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-4">
        <CourtReserveWidget embedCodeId="80214" title="Registration" />
      </div>
    </section>
  );
}
