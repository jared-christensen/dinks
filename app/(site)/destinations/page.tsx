import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaFacebook } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { destinationsData } from "@/data/destinations";

export default function Destinations() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-white">
          {destinationsData.pageTitle}
        </h1>
        <p className="text-lg font-semibold text-white/90">
          {destinationsData.tagline}
        </p>
        <p className="max-w-2xl text-base leading-7 text-white/80">
          {destinationsData.intro}
        </p>
      </div>

      {/* Why join */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            Why Join a Dinks Destination Trip?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-base leading-7">
            {destinationsData.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="text-xl text-brand-yellow-500">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Past destinations */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">
          Past Destination Examples
        </h2>
        <p className="text-base leading-7 text-white/80">
          Dinks Destinations has organized trips to incredible locations around
          the world:
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {destinationsData.pastDestinations.map((dest) => (
            <Card key={dest.location}>
              <CardHeader>
                <CardTitle>{dest.location}</CardTitle>
                <CardDescription className="font-semibold text-white/90">
                  {dest.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-6">
                {dest.details}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stay updated CTA */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            Stay Updated on Future Trips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base leading-7">
            Join the Dinks Destinations Facebook group to be the first to hear
            about upcoming trip announcements, get all the details, and connect
            with other pickleball travelers. New destinations and dates are
            announced regularly!
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link
                href={destinationsData.facebookGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <FaFacebook className="h-4 w-4" />
                Join Facebook Group
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact us about trips</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* About organizers */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="relative h-64 overflow-hidden rounded-xl lg:h-auto">
          <Image
            src={destinationsData.instructorsImageSrc}
            alt={destinationsData.instructorsName}
            fill
            className="object-cover"
          />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Your Trip Organizers</CardTitle>
            <CardDescription className="text-lg font-semibold text-white/90">
              {destinationsData.instructorsName}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-7">
              {destinationsData.instructorsDescription}
            </p>
            <Button asChild variant="outline" className="mt-4">
              <Link href="/lessons">Learn more about lessons</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
