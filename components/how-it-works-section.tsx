import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/constants/how-it-works";

export function HowItWorksSection() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-white">New to Dinks?</h2>
        <p className="text-base text-white/80">
          Playing at Dinks is simple. Here&apos;s everything you need to know.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {HOW_IT_WORKS_STEPS.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow-500 text-lg font-bold text-brand-blue-500">
              {step.number}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-white/70">{step.description}</p>
            {step.href && step.linkText && (
              <Link
                href={step.href}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-yellow-500 transition hover:text-brand-yellow-400"
              >
                {step.icon && (
                  <Image
                    src={step.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 rounded"
                  />
                )}
                {step.linkText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
