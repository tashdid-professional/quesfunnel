import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message ,service} = body;

    const data = await resend.emails.send({
      from: 'Quest Funnel <info@tashdid.online>',
      to: ['tashdidbruh@gmail.com'],
      subject: 'New Contact Form Submission',
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Service:</strong> ${service}</p>
             <p><strong>Message:</strong> ${message}</p>`
    });
    await resend.emails.send({
        from: 'info@tashdid.online',  // Your verified domain
        to: [email],  // Send to the sender's email
        subject: 'Thank You for Contacting Us!',
        html: `
          <p>Hello ${name},</p>
          <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
          <br>
          <p>Best regards,<br>Quest Funnel</p>
        `,
      });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error });
  }
}
