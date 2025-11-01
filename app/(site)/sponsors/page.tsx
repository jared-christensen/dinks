"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sponsor, SponsorCard } from "@/components/sponsor-card";

const platinumSponsors: Sponsor[] = [
  {
    name: "ET Capital Partners",
    tier: "Platinum Court Sponsor",
    blurb:
      "ET Capital Partners helps private participants find quality opportunities with dependable and experienced partners while also helping commercial partners find private participants to acquire private equity in their projects. Founded on the premise that private equity participants should never miss the opportunity to collaborate with a reputable partner that has a proven long-term history.\n\n\"Whether it's your first time participating in private equity, or you're a seasoned participant; I'd love to help you explore all our opportunities to find what fits your needs.\" — Erik Torgerson, President & CEO.",
    imageSrc: "/sponsors/platinum/et-cap-partners.webp",
    imageAlt: "ET Capital Partners logo",
    href: "http://www.etcapitalpartners.com/",
  },
  {
    name: "Roofing Siding Windows of Iowa (RSW)",
    tier: "Platinum Court Sponsor",
    blurb:
      "RSW is your first choice in building supplies for exterior projects. Locally owned, RSW's owners have over 50 years of combined experience in the building industry, putting that experience to work for you while dedicating their services to the full exterior building envelope.",
    imageSrc: "/sponsors/platinum/RSW.webp",
    imageAlt: "Roofing Siding Windows of Iowa (RSW) logo",
    href: "http://www.roofingsidingwindowsofiowa.com/",
  },
  {
    name: "East Village Foot & Ankle Surgeons",
    tier: "Platinum Court Sponsor",
    blurb:
      "When you need foot and ankle care, you deserve the best. East Village Foot & Ankle Surgeons provides a wide range of foot & ankle services and is fully equipped to treat whatever condition may be slowing you down. From common ankle sprains to the most complicated reconstructive procedures, the team is by your side working to get you back on your feet. Clinics in Des Moines, Mason City, and Pella.",
    imageSrc: "/sponsors/platinum/east-village-foot-ankle.webp",
    imageAlt: "East Village Foot & Ankle Surgeons logo",
    href: "http://www.eastvillagefootandankle.com/",
  },
  {
    name: "Fellows & Blake",
    tier: "Platinum Court Sponsor",
    blurb:
      "Fellows & Blake integrates investments with tax planning, risk mitigation, income protection, business succession, and legacy strategies to help prevent wealth from causing family strife or hindering retirement goals.",
    imageSrc: "/sponsors/platinum/fellows-blake.webp",
    imageAlt: "Fellows & Blake logo",
    href: "https://fellowsfg.com/",
  },
  {
    name: "Aetna Medicare",
    tier: "Platinum Court Sponsor",
    blurb:
      "Aetna Medicare helps people live healthier lives with health insurance plans and services, including medical, pharmacy, and dental, plus Medicare, Medicaid, behavioral health, and medical management. New for 2024: Fitness reimbursement on all Medicare Advantage plans between $600–$1200 per year, including pickleball memberships, court fees, and gear.",
    imageSrc: "/sponsors/platinum/Aetna-Medicare.webp",
    imageAlt: "Aetna Medicare logo",
    href: "http://www.aetnamedicare.com/",
  },
];

const premierSponsors: Sponsor[] = [
  {
    name: "Capital Defender Advisors",
    tier: "Premier Sponsor",
    imageSrc: "/sponsors/premier/capital-defender.webp",
    href: "http://www.capitaldefenderadvisors.com/",
  },
  {
    name: "AssuredPartners",
    tier: "Premier Sponsor",
    imageSrc: "/sponsors/premier/assured-partners.webp",
    href: "http://www.assuredpartners.com/",
  },
  {
    name: "Key Potential Chiropractic",
    tier: "Premier Sponsor",
    imageSrc: "/sponsors/premier/key-potential.webp",
    href: "https://www.keypotentialchiropractic.com/",
  },
];

const goldSponsors: Sponsor[] = [
  {
    name: "Image360",
    tier: "Gold Sponsor",
    imageSrc: "/sponsors/gold/image360-logotopv2.webp",
    href: "https://www.image360.com/desmoines",
  },
  {
    name: "RoofSmart",
    tier: "Gold Sponsor",
    imageSrc: "/sponsors/gold/roofsmart_logoservices_color.jpg",
    href: "https://roofsmart.com",
  },
  {
    name: "Happy Roof",
    tier: "Gold Sponsor",
    imageSrc: "/sponsors/gold/happyroof.jpg",
    href: "https://happyroof.com",
  },
  {
    name: "Sherwood Forest",
    tier: "Gold Sponsor",
    imageSrc: "/sponsors/gold/sherwood_forest.webp",
    href: "https://sherwoodforestdsm.com",
  },
  {
    name: "Ridgemont",
    tier: "Gold Sponsor",
    imageSrc: "/sponsors/gold/ridgemont.jpeg",
    href: "https://ridgemontdsm.com",
  },
  {
    name: "Elevate",
    tier: "Gold Sponsor",
    imageSrc: "/sponsors/gold/elevate.jpeg",
    href: "https://elevatedsm.com",
  },
  {
    name: "Clarity Cleaning",
    tier: "Gold Sponsor",
    imageSrc: "/sponsors/gold/clarity_logo_4.png",
    href: "https://claritycleaningdsm.com",
  },
  {
    name: "Potthoff Foods",
    tier: "Gold Sponsor",
    imageSrc: "/sponsors/gold/pfi_potthoff_foods.jpg",
    href: "https://potthofffoods.com",
  },
  {
    name: "Grounds",
    tier: "Gold Sponsor",
    imageSrc: "/sponsors/gold/grounds.jpeg",
    href: "https://groundsdsm.com",
  },
  {
    name: "Cindy's Boutique",
    tier: "Gold Sponsor",
    imageSrc: "/sponsors/gold/cindysboutique.jpeg",
    href: "https://cindysboutique.com",
  },
  {
    name: "Skateland",
    tier: "Gold Sponsor",
    imageSrc: "/sponsors/gold/skateland.jpeg",
    href: "https://skatelanddsm.com",
  },
];

export default function Sponsors() {
  return (
    <section className="space-y-12">
      {/* Hero */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Our Sponsors
          </h1>
          <p className="text-slate-600">
            These partners keep the courts open and our players thriving. Want
            to join them? Explore the options below or contact us to design a
            custom package.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild>
              <Link href="/join#business-sponsorships">
                View sponsorship tiers
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">
                Contact us
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Platinum court sponsors */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">
          Platinum Court Sponsors
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {platinumSponsors.map((s) => (
            <SponsorCard key={s.name} sponsor={s} showBlurb />
          ))}
        </div>
      </div>

      {/* Premier sponsors */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">
          Premier Sponsors
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {premierSponsors.map((s) => (
            <SponsorCard key={s.name} sponsor={s} />
          ))}
        </div>
      </div>

      {/* Gold sponsors */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">
          Gold Sponsors
        </h2>
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          {goldSponsors.map((s) => (
            <SponsorCard key={s.name} sponsor={s} />
          ))}
          <article className="flex h-full flex-col items-start justify-between rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                Gold Sponsor Spots Available
              </h3>
              <p className="text-sm leading-6">
                Banner placement, on-site recognition, and website logo.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="mailto:info@dinkspickleballdsm.com"
                className="inline-flex items-center justify-center rounded-full bg-slate-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700/90"
              >
                Inquire about gold
              </Link>
            </div>
          </article>
        </div>
      </div>

      {/* Callout */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-slate-900">
              Interested in sponsoring?
            </h3>
            <p className="text-sm text-slate-600">
              We offer standard tiers and custom packages like “The Bob Barker”.
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild variant="outline">
              <Link href="/join#business-sponsorships">
                View tiers
              </Link>
            </Button>
            <Button asChild>
              <Link href="/contact">
                Contact us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
