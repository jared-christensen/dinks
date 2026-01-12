import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrainingContactForm } from "@/components/training-contact-form";

const services = [
  {
    title: "Private Instruction",
    details:
      "Personalized instruction tailored to your skill level. Work one-on-one with our certified instructors to focus on your specific goals and improve your game.",
  },
  {
    title: "Group Instruction",
    details:
      "Group lessons available for friends, families, or individuals looking to meet new players. Perfect for learning in a fun, social environment.",
  },
  {
    title: "Youth Training",
    details:
      "Dedicated youth programs designed to get kids started in pickleball the right way. Age-appropriate instruction in a safe, encouraging environment.",
  },
  {
    title: "Clinics",
    details:
      "From Intro to Pickleball for complete beginners to advanced skill-specific clinics. Find the right clinic for your level and goals.",
  },
];

const credentials = [
  "Co-owners of Dinks Pickleball",
  "PPR Professional Instructors",
  "Certified pickleball instructors",
  "Experience with all skill levels from beginners to advanced",
];

export default function Lessons() {
  return (
    <section className="space-y-16">
      {/* Page Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-white">Lessons and clinics</h1>
        <p className="max-w-2xl text-base leading-7 text-white/80">
          Whether you&apos;re picking up a paddle for the first time or looking
          to refine advanced techniques, our PPR-certified instructors David and
          Bailey provide professional instruction for all skill levels.
        </p>
      </div>

      {/* Instructor Hero */}
      <div className="overflow-hidden rounded-2xl border-8 border-white/10 bg-white">
        <div className="grid lg:grid-cols-5">
          {/* Image - takes 3/5 on desktop */}
          <div className="relative aspect-[4/3] lg:col-span-3 lg:aspect-auto">
            <Image
              src="/david-bailey.webp"
              alt="David and Bailey Lanning"
              fill
              className="object-cover object-[center_40%]"
              priority
            />
          </div>
          {/* Content - takes 2/5 on desktop */}
          <div className="flex flex-col justify-center p-8 lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue-500/50">
              Meet Your Instructors
            </p>
            <h2 className="mt-2 text-3xl font-bold text-brand-blue-500">
              David and Bailey Lanning
            </h2>
            <ul className="mt-6 space-y-3 text-base leading-7 text-brand-blue-500/80">
              {credentials.map((credential) => (
                <li key={credential} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-yellow-500" />
                  <span>{credential}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Services - simple list, not cards */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white">What We Offer</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="space-y-2">
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-6 text-white/70">
                {service.details}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact form + Destinations callout */}
      <div className="grid gap-6 lg:grid-cols-2">
        <TrainingContactForm />

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to travel</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col justify-between space-y-4">
            <p className="text-base leading-7 text-white/70">
              David and Bailey also organize{" "}
              <strong>Dinks Destinations</strong> - pickleball vacation trips to
              beautiful locations around the world. Improve your game while
              exploring amazing destinations with fellow pickleball enthusiasts!
            </p>
            <Button asChild>
              <Link href="/destinations">Explore Destinations</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
