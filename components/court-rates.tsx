import { courtRatesData } from "@/data/court-rates";

export function CourtRates() {

  return (
    <section className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Court Rates</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {courtRatesData.rates.map((rate) => (
          <div
            key={rate.name}
            className="flex flex-col space-y-3 rounded-lg border border-slate-200 bg-white p-6 text-center"
          >
            <h3 className="text-xl font-semibold text-slate-900">
              {rate.name}
            </h3>
            <p className="text-2xl font-bold text-slate-900">
              ${rate.ratePerHour}/Hour
            </p>
            <p className="text-sm text-slate-600">{rate.timeRange}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
