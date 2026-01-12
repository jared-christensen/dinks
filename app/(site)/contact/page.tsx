"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaLocationArrow } from "react-icons/fa";
import {
  formInputClassName,
  formLabelClassName,
  formContainerClassName,
  formStatusClassName,
} from "@/lib/form-styles";
import { FACILITY } from "@/constants/facility";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // honeypot field
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
        setFormData({ name: "", email: "", subject: "", message: "", website: "" });
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
        <h1 className="text-4xl font-bold text-white">
          Contact Us
        </h1>
        <p className="max-w-2xl text-base leading-7 text-white/80">
          Have a question about memberships, sponsorships, or facility details?
          We&apos;d love to hear from you. Fill out the form below and
          we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className={formContainerClassName}>
            <h2 className="mb-6 text-2xl font-semibold text-brand-blue-500">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field - hidden from users, bots will fill it */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="absolute -left-[9999px]"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className={formLabelClassName}>Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={formInputClassName}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className={formLabelClassName}>Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={formInputClassName}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className={formLabelClassName}>Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className={formInputClassName}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className={formLabelClassName}>Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your question or inquiry..."
                    rows={12}
                    className={`min-h-48 ${formInputClassName}`}
                  />
                </div>
              </div>

              {submitStatus.type && (
                <div className={formStatusClassName[submitStatus.type]}>
                  {submitStatus.message}
                </div>
              )}

              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
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
                  <p>{FACILITY.address.street}</p>
                  <p>{FACILITY.address.city}, {FACILITY.address.state} {FACILITY.address.zip}</p>
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p>{FACILITY.location.description}</p>
                  <p>{FACILITY.location.landmark}</p>
                </div>
                <div>
                  <p className="font-semibold">Hours</p>
                  <p>{FACILITY.hours.description}</p>
                </div>
              </div>
              <Button asChild variant="outline" className="mt-4 w-full">
                <Link
                  href={FACILITY.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                  aria-label="Get directions to Dinks Pickleball (opens in new tab)"
                >
                  <FaLocationArrow className="h-3 w-3" />
                  Get Directions
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
