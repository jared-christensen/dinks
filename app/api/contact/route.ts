import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate with Zod
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      const firstError = Object.values(errors)[0]?.[0] || "Invalid form data";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { name, email, subject, message, website } = result.data;

    // Honeypot check - if filled, it's a bot
    if (website) {
      // Silently succeed to not tip off bots
      return NextResponse.json(
        { message: "Form submitted successfully" },
        { status: 200 }
      );
    }

    await resend.emails.send({
      from: process.env.EMAIL_FROM || "Dinks Website <noreply@dinkspickleballdsm.com>",
      to: process.env.CONTACT_EMAIL || "info@dinkspickleballdsm.com",
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process form submission" },
      { status: 500 }
    );
  }
}
