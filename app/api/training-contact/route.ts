import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { trainingFormSchema } from "@/lib/validations";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate with Zod
    const result = trainingFormSchema.safeParse(body);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      const firstError = Object.values(errors)[0]?.[0] || "Invalid form data";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { name, email, phone, website } = result.data;

    // Honeypot check - if filled, it's a bot
    if (website) {
      // Silently succeed to not tip off bots
      return NextResponse.json(
        { message: "Training inquiry submitted successfully" },
        { status: 200 }
      );
    }

    await resend.emails.send({
      from: "Dinks Website <noreply@dinkspickleballdsm.com>",
      to: "lanningpickleball@gmail.com",
      replyTo: email,
      subject: "New Training Inquiry from Dinks Website",
      html: `
        <h2>New Training Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    return NextResponse.json(
      { message: "Training inquiry submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Training inquiry error:", error);
    return NextResponse.json(
      { error: "Failed to process training inquiry" },
      { status: 500 }
    );
  }
}
