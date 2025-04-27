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
    services,
    country,
    message,
  } = await request.json();

  if (
    !name ||
    !interest ||
    !email ||
    !phone ||
    !duration ||
    !adults ||
    !country
  ) {
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
    services,
    country,
    message,
  });
  const subject = "New Customer Inquiry";

  try {
    await sendEmail(email, "zaheerkpr3@gmail.com", subject, html);
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
