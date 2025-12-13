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
import { instructionData } from "@/data/instruction";

export default function Instruction() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">
          {instructionData.pageTitle}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-slate-600">
          {instructionData.intro}
        </p>
      </div>

      {/* Instructors */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Meet Your Instructors</CardTitle>
            <CardDescription className="text-lg font-semibold text-slate-700">
              {instructionData.instructorsName}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm leading-6">
              {instructionData.instructorsCredentials.map((credential) => (
                <li key={credential} className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  <span>{credential}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <div className="relative h-64 overflow-hidden rounded-xl lg:h-auto">
          <Image
            src={instructionData.instructorsImageSrc}
            alt={instructionData.instructorsName}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Contact form */}
      <TrainingContactForm />

      {/* Dinks Destinations callout */}
      <Card>
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
