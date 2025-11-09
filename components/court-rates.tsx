import { courtRatesData } from "@/data/court-rates";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CourtRates() {
  return (
    <section className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Court Rates</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {courtRatesData.rates.map((rate) => (
          <Card key={rate.name} className="flex h-full flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-900">
                {rate.name}
              </CardTitle>
              <CardDescription className="text-base font-semibold text-slate-600">
                ${rate.ratePerHour}/Hour
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">{rate.timeRange}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
