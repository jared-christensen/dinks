"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  formInputClassName,
  formTextareaClassName,
  formLabelClassName,
  formContainerClassName,
  formStatusClassName,
} from "@/lib/form-styles";

export function TrainingContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
        setFormData({ name: "", email: "", phone: "", message: "", website: "" });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={formContainerClassName}>
      <h2 className="text-2xl font-semibold text-brand-blue-500">
        Get Started with Instruction
      </h2>
      <p className="mt-1 text-sm text-brand-blue-500/70">
        Share your contact info and David and Bailey will reach out to discuss
        instruction options.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
          <div className="space-y-2">
            <Label htmlFor="training-name" className={formLabelClassName}>
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
              className={formInputClassName}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="training-email" className={formLabelClassName}>
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
              className={formInputClassName}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="training-phone" className={formLabelClassName}>
              Phone (optional)
            </Label>
            <Input
              id="training-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
              className={formInputClassName}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="training-message" className={formLabelClassName}>
              Message (optional)
            </Label>
            <Textarea
              id="training-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your goals, experience level, or any questions you have"
              className={formTextareaClassName}
            />
          </div>
        </div>

        {submitStatus.type && (
          <div className={formStatusClassName[submitStatus.type]}>
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
