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

const pastDestinations = [
  {
    location: "Sonoma, California",
    description: "Wine country experience",
    details: "Pair your pickleball with your favorite wine",
  },
  {
    location: "Budapest, Hungary",
    description: "Danube River boat experience",
    details: "Take your game abroad down the Danube River",
  },
  {
    location: "Riviera Maya, Mexico",
    description: "All-inclusive resort",
    details: "Don't have to worry about a thing but keeping score",
  },
];

const benefits = [
  "Improve your game with professional instruction from David and Bailey",
  "Have an absolute blast in beautiful locations",
  "Create lifelong memories with fellow pickleball enthusiasts",
  "Experience destinations you've always dreamed of visiting",
  "Organized trips - we handle the details, you enjoy the fun",
];

export default function Destinations() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-white">
          Dinks Destinations: Pickleball Getaway Vacations
        </h1>
        <p className="text-lg font-semibold text-white/90">
          What&apos;s better than pickleball? Pickleball vacations at some of
          the most beautiful locations in the world!
        </p>
        <p className="max-w-2xl text-base leading-7 text-white/80">
          Join David and Bailey Lanning, co-owners of Dinks Pickleball and PPR
          Professional Instructors, on your next vacation. If you want to
          improve your game while having an absolute blast and creating lifelong
          memories and fun - these trips are for you!
        </p>
      </div>

      {/* Why join */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            Benefits of a Dinks Destination trip
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-base leading-7">
            {benefits.map((benefit) => (
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
          {pastDestinations.map((dest) => (
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
                href="https://www.facebook.com/groups/380792678025831/"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2 uppercase tracking-wide"
              >
                <FaFacebook className="h-4 w-4" />
                Join Facebook Group
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Ask about trips</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* About organizers */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="relative h-64 overflow-hidden rounded-xl lg:h-auto">
          <Image
            src="/david-bailey.webp"
            alt="David and Bailey Lanning"
            fill
            className="object-cover"
          />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Your Trip Organizers</CardTitle>
            <CardDescription className="text-lg font-semibold text-white/90">
              David and Bailey Lanning
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-7">
              Co-owners of Dinks Pickleball and PPR Professional Instructors.
              They bring their passion for pickleball and love of travel
              together to create unforgettable experiences. You&apos;ll get
              professional instruction, organized play, and the chance to
              explore amazing destinations with fellow pickleball enthusiasts.
            </p>
            <Button asChild variant="outline" className="mt-4">
              <Link href="/lessons">Explore lessons</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
