import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  website: z.string().optional(), // honeypot field
});

export const trainingFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  website: z.string().optional(), // honeypot field
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type TrainingFormData = z.infer<typeof trainingFormSchema>;
