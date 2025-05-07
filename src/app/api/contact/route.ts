import { NextResponse } from "next/server";
import { generateEmailTemplate, sendEmail } from "@/utils/email-helpers";

export async function POST(request: Request) {
  const {
    name,
    interest,
    email,
    phone,
    travelMonth,
    fixedDate,
    duration,
    adults,
    kids,
  } = await request.json();

  if (!name || !interest || !email || !phone || !duration || !adults) {
    return NextResponse.json(
      {
        success: false,
        message: "Validation Failed",
      },
      { status: 400 }
    );
  }

  const html = generateEmailTemplate(name, interest, email, phone, {
    travelMonth,
    fixedDate,
    duration,
    adults,
    kids,
  });
  const subject = "New Customer Inquiry";

  try {
    await sendEmail(email, "artoftravel61@gmail.com", subject, html);
    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email.",
      },
      {
        status: 500,
      }
    );
  }
}
