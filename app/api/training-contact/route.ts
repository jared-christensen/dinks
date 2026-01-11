import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, website } = body;

    // Honeypot check - if filled, it's a bot
    if (website) {
      // Silently succeed to not tip off bots
      return NextResponse.json(
        { message: "Training inquiry submitted successfully" },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // TODO: Update to production: to: "lanningpickleball@gmail.com"
    await resend.emails.send({
      from: "Dinks Website <noreply@dinkspickleballdsm.com>",
      to: "jared.christensen@gmail.com",
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
