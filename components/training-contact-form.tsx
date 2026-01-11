"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const inputClassName =
  "border-brand-blue-500/40 bg-brand-blue-500/5 text-brand-blue-500 placeholder:text-brand-blue-500/40 focus-visible:border-brand-yellow-500 focus-visible:ring-brand-yellow-500/30";

export function TrainingContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
      const response = await fetch("/api/training-contact", {
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
            "Thank you! David & Bailey will get back to you soon to discuss instruction options.",
        });
        setFormData({ name: "", email: "", phone: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "Sorry, there was an error submitting the form. Please try again or use our general contact form.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="rounded-lg border border-white/10 bg-white p-6">
      <h2 className="text-2xl font-semibold text-brand-blue-500">
        Get Started with Instruction
      </h2>
      <p className="mt-1 text-sm text-brand-blue-500/70">
        Share your contact info and David &amp; Bailey will reach out to discuss
        instruction options.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="training-name" className="text-brand-blue-500">
              Name *
            </Label>
            <Input
              id="training-name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="training-email" className="text-brand-blue-500">
              Email *
            </Label>
            <Input
              id="training-email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="training-phone" className="text-brand-blue-500">
              Phone (optional)
            </Label>
            <Input
              id="training-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
              className={inputClassName}
            />
          </div>
        </div>

        {submitStatus.type && (
          <div
            className={`rounded-lg p-4 text-sm ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Request Information"}
          </Button>
        </div>
      </form>
    </div>
  );
}
