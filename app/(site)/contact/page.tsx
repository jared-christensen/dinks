"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for your message! We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again or email us directly at info@dinkspickleballdsm.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <span className="text-sm font-semibold uppercase tracking-wide text-slate-700">
          Get in Touch
        </span>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Contact Us
        </h1>
        <p className="max-w-2xl text-base leading-7 text-slate-600">
          Have a question about memberships, sponsorships, or facility details?
          We&apos;d love to hear from you. Fill out the form below and
          we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your question or inquiry..."
                      rows={6}
                    />
                  </div>
                </div>

                {submitStatus.type && (
                  <div
                    className={`rounded-lg p-4 ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-800"
                        : "bg-red-50 text-red-800"
                    }`}
                  >
                    <p className="text-sm">{submitStatus.message}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Visit Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm leading-6">
                <div>
                  <p className="font-semibold">Address</p>
                  <p>3800 Merle Hay Rd Suite 1000</p>
                  <p>Des Moines, IA 50310</p>
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p>North end of Merle Hay Mall</p>
                  <p>Next to food court and Kids Empire</p>
                </div>
                <div>
                  <p className="font-semibold">Hours</p>
                  <p>Open daily: 6am – midnight</p>
                </div>
              </div>
              <Button asChild variant="outline" className="mt-4 w-full">
                <Link
                  href="https://maps.google.com/?q=Dinks+Pickleball+Des+Moines"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <Link
                  href="/join"
                  className="block text-slate-700 hover:underline"
                >
                  → Membership Packages
                </Link>
                <Link
                  href="/sponsorship"
                  className="block text-slate-700 hover:underline"
                >
                  → Sponsorship Packages
                </Link>
                <Link
                  href="/instruction"
                  className="block text-slate-700 hover:underline"
                >
                  → Lessons & Clinics
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
