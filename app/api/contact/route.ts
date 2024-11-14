import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const {
      first_name,
      last_name,
      email,
      company_name,
      help,
      company_size,
      info,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECIPIENT,
      subject: "Contact Form Submission",
      html: `
        <h1>Contact Form</h1>
        <p>First Name: ${first_name}</p>
        <p>Last Name: ${last_name}</p>
        <p>Work Email: ${email}</p>
        <p>Company Name: ${company_name}</p>
        <p>Company Size: ${company_size}</p>
        <p>Help: ${help}</p>
        <p>Info: ${info}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email has been sent" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Email has not been sent" }, { status: 500 });
  }
}
