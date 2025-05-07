import nodemailer from "nodemailer";

export const sendEmail = async (
  from: string,
  to: string,
  subject: string,
  html: string
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
      user: "zaheerkpr3@gmail.com",
      pass: "nhxz netp avxq iaat",
    },
  });

  await transporter.sendMail({
    from,
    to: to || "Bill@stoneconcepts.net",
    subject,
    html,
  });
};

export const generateEmailTemplate = (
  name: string,
  interest: string,
  email: string,
  phone: string,
  details: {
    travelMonth?: string;
    fixedDate?: boolean;
    duration?: string;
    adults?: number;
    kids?: number;
    services?: string[];
    country?: string;
    message?: string;
  }
) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #2d3748;
          margin: 0;
          padding: 0;
          background-color: #f7fafc;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          overflow: hidden;
        }
        .header {
          background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
          color: #fff;
          padding: 28px 24px 20px 24px;
          text-align: center;
        }
        .header h2 {
          margin: 0;
          font-size: 26px;
          font-weight: 700;
          letter-spacing: 1px;
        }
        .header p {
          margin: 10px 0 0;
          opacity: 0.95;
          font-size: 16px;
        }
        .content {
          padding: 28px 24px;
        }
        .row {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }
        .field {
          flex: 1 1 220px;
          margin-bottom: 18px;
          padding: 14px 16px;
          background-color: #f8fafc;
          border-radius: 6px;
          min-width: 180px;
        }
        .label {
          font-weight: 600;
          color: #4a5568;
          display: block;
          margin-bottom: 4px;
          font-size: 13px;
          letter-spacing: 0.5px;
        }
        .value {
          color: #2d3748;
          font-size: 15px;
        }
        .section-title {
          font-size: 17px;
          font-weight: 600;
          margin: 24px 0 10px 0;
          color: #dd2476;
        }
        .footer {
          text-align: center;
          padding: 16px;
          background-color: #f8fafc;
          color: #718096;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Tour Plan Inquiry</h2>
          <p>A new tour plan inquiry has been submitted via the website.</p>
        </div>
        <div class="content">
          <div class="row">
            <div class="field">
              <span class="label">Full Name</span>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <span class="label">Email</span>
              <div class="value">${email}</div>
            </div>
          </div>
          <div class="row">
            <div class="field">
              <span class="label">Contact Number</span>
              <div class="value">${phone || "Not provided"}</div>
            </div>
            <div class="field">
              <span class="label">Country</span>
              <div class="value">${details.country || "Not provided"}</div>
            </div>
          </div>
          <div class="section-title">Tour Preferences</div>
          <div class="row">
            <div class="field">
              <span class="label">Interested In</span>
              <div class="value">${interest}</div>
            </div>
            <div class="field">
              <span class="label">Date of Travel</span>
              <div class="value">
                ${details.fixedDate ? "Fixed" : "Anytime"}
                ${details.travelMonth ? `(${details.travelMonth})` : ""}
              </div>
            </div>
            <div class="field">
              <span class="label">Duration</span>
              <div class="value">${details.duration || "Not specified"}</div>
            </div>
          </div>
          <div class="row">
            <div class="field">
              <span class="label">Adults</span>
              <div class="value">${details.adults ?? "Not specified"}</div>
            </div>
            <div class="field">
              <span class="label">Kids (6-11)</span>
              <div class="value">${details.kids ?? "0"}</div>
            </div>
          </div>
        <div class="footer">
          This is an automated email from the Tour of India contact form.
        </div>
      </div>
    </body>
  </html>
  `;
};
