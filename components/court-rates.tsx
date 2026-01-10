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
        <h2 className="text-3xl font-bold text-white">Court Rates</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {courtRatesData.rates.map((rate) => (
          <Card key={rate.name} className="flex h-full flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white">
                {rate.name}
              </CardTitle>
              <CardDescription className="text-base font-semibold text-white/70">
                ${rate.ratePerHour}/Hour
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70">{rate.timeRange}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
