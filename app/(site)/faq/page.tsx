import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
  {
    question: "Is this Heaven?",
    answer: "No, it's indoor pickleball on 13 proper dedicated courts in Iowa!",
  },
  {
    question: "Do I need to be a member to play at Dinks?",
    answer:
      "Yes, we are a member facility. Members can both sign up for open play or book courts in advance and will receive a unique door code to enter our facility for each playing session. This is both for safety and liability.\n\nAll players have different needs and playing habits so we offer 3 different membership options to accommodate varying player's budgets and playing frequency/needs.\n\n**Guests:** Members may bring a guest(s) with them to their reservation, but guests must pay a daily guest fee of $10.",
  },
  {
    question: "Will there be Open Play?",
    answer:
      "Yes! We will be adapting to member demand, but initially plan to have open play 7 days a week from 6am-10am on dedicated courts. There will also be courts available for reservations during these time slots as well.\n\n**Open Play Rates (per session):**\n• VIP: $7/time\n• Gold: $8/time\n• Limited (Basic): $9/time",
  },
  {
    question: "What else will be available outside of court rentals?",
    answer:
      "While we are truly a dedicated pickleball facility, there will be a lot going on at Dinks!\n\n**Pickleball Instruction:**\n• Intro to Pickleball\n• Beginner clinics and lessons\n• Intermediate clinics and lessons\n• Advanced clinics and lessons\n\n**Competitive Play:**\n• Leagues\n• Fun events\n• Ongoing tournaments year round (several already planned and in the works)\n\n**Social Amenities:**\nOutside of pickleball we want our members to stay, relax, socialize and have fun. We have a lot of space for our members to enjoy:\n• Bags/cornhole\n• Ping pong\n• Yard games\n• And more!",
  },
  {
    question:
      "Are there Sponsorship opportunities to both support Dinks and Promote my Business?",
    answer:
      "Yes! This is a community and it has been our experience that pickleball players make fast friends and support one another. We have a variety of sponsorship opportunities that help us deliver on our mission to the pickleball community while at the same time providing you an opportunity to connect your business with the broader community.\n\nTo discuss sponsorship opportunities, please reach out to info@dinkspickleballdsm.com and let's discuss in further detail!",
  },
];

export default function Faq() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <span className="text-sm font-semibold uppercase tracking-wide text-slate-700">
          Help & Support
        </span>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="max-w-2xl text-base leading-7 text-slate-600">
          Please{" "}
          <Link
            href="/contact"
            className="font-semibold text-slate-700 underline-offset-4 hover:underline"
          >
            contact us
          </Link>{" "}
          if you cannot find an answer to your question.
        </p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl">{faq.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-base leading-7">
                {faq.answer.split("\n\n").map((paragraph, pIndex) => (
                  <p key={pIndex} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Still have questions?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base leading-7">
            We&apos;re here to help! Contact us and we&apos;ll get back to you
            as soon as possible.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">Contact us</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/join">View membership options</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
