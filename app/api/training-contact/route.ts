import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

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

    // TODO: Add email service integration here
    // This should send to lanningpickleball@gmail.com
    // For now, we'll log the form submission
    // You can integrate with services like:
    // - Resend (recommended for Next.js)
    // - SendGrid
    // - AWS SES
    // - Nodemailer with your SMTP server

    console.log("Training inquiry submission:", {
      name,
      email,
      phone: phone || "Not provided",
      timestamp: new Date().toISOString(),
    });

    // In production, you would send the email here
    // Example with Resend (after installing: npm install resend)
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'noreply@dinkspickleballdsm.com',
      to: 'lanningpickleball@gmail.com',
      replyTo: email,
      subject: 'New Training Inquiry from Dinks Website',
      html: `
        <h2>New Training Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `,
    });
    */

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
