import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const { name, email, subject, phone, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({
        success: false,
        error: "Missing required fields.",
      });
    }

    const data = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: ["bagasbanuna02@gmail.com"], // ganti sesuai email kamu
      subject: `New message from ${name}: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
          <h1>New Message Received</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      error: (error as Error).message,
    });
  }
}
