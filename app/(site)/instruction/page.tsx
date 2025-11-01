import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrainingContactForm } from "@/components/training-contact-form";

const services = [
  {
    title: "Private Instruction",
    description: "1:1 Private Lessons",
    details:
      "Personalized instruction tailored to your skill level. Work one-on-one with our certified instructors to focus on your specific goals and improve your game.",
  },
  {
    title: "Group Instruction",
    description: "Learn with others",
    details:
      "Group lessons available for friends, families, or individuals looking to meet new players. Perfect for learning in a fun, social environment.",
  },
  {
    title: "Youth Training",
    description: "Programs for kids",
    details:
      "Dedicated youth programs designed to get kids started in pickleball the right way. Age-appropriate instruction in a safe, encouraging environment.",
  },
  {
    title: "Clinics",
    description: "All skill levels",
    details:
      "From Intro to Pickleball for complete beginners to advanced skill-specific clinics. Find the right clinic for your level and goals.",
  },
];

const clinicLevels = [
  "Intro to Pickleball - Perfect for beginners",
  "Beginner clinics",
  "Intermediate clinics",
  "Advanced clinics",
  "Skill-specific clinics",
];

export default function Instruction() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <span className="text-sm font-semibold uppercase tracking-wide text-slate-600">
          Learn & Improve
        </span>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Instruction &amp; Clinics
        </h1>
        <p className="max-w-2xl text-base leading-7 text-slate-600">
          Whether you&apos;re picking up a paddle for the first time or looking
          to refine advanced techniques, our PPR-certified instructors David
          &amp; Bailey provide professional instruction for all skill levels.
        </p>
      </div>

      {/* Instructors */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Meet Your Instructors</CardTitle>
            <CardDescription className="text-lg font-semibold text-slate-700">
              David &amp; Bailey Lanning
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm leading-6">
              <li className="flex items-start gap-2">
                <span className="text-slate-600">•</span>
                <span>Co-Owners of Dinks Pickleball</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-600">•</span>
                <span>PPR Professional Instructors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-600">•</span>
                <span>Certified pickleball instructors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-600">•</span>
                <span>
                  Experience with all skill levels from beginners to advanced
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <div className="relative h-64 overflow-hidden rounded-xl lg:h-auto">
          <Image
            src="/people.webp"
            alt="David & Bailey Lanning"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Services grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Card key={service.title}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription className="font-semibold text-slate-700">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm leading-6">
              {service.details}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Clinic levels */}
      <Card>
        <CardHeader>
          <CardTitle>Available Clinic Types</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm leading-6">
            {clinicLevels.map((level) => (
              <li key={level} className="flex items-start gap-2">
                <span className="text-slate-600">•</span>
                <span>{level}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Contact form */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TrainingContactForm />
        </div>
        <div>
          <Card className="bg-slate-50">
            <CardHeader>
              <CardTitle>General Questions?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm leading-6 text-slate-600">
                For facility or membership questions, contact the Dinks team.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">General Inquiries</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Dinks Destinations callout */}
      <Card className="border-2 border-slate-300 bg-slate-50">
        <CardHeader>
          <CardTitle className="text-2xl">Love to Travel?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-base leading-7 text-slate-600">
            David &amp; Bailey also organize <strong>Dinks Destinations</strong>{" "}
            - pickleball vacation trips to beautiful locations around the world.
            Improve your game while exploring amazing destinations with fellow
            pickleball enthusiasts!
          </p>
          <Button asChild>
            <Link href="/destinations">Explore Destinations</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
