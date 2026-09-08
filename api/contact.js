import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !name.trim() || !email || !email.trim() || !message || !message.trim()) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    let emailSent = false;
    const hasSmtpConfig = process.env.SMTP_USER && process.env.SMTP_PASS;

    if (hasSmtpConfig) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: process.env.SMTP_SECURE === 'true',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const mailOptions = {
          from: `"${name}" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_RECEIVER_EMAIL || 'heritier.serutamba@gmail.com',
          replyTo: email,
          subject: `Portfolio: New Contact Message from ${name}`,
          text: `You have received a new contact message from your portfolio site.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}\n`,
          html: `
            <h3>New Portfolio Contact Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
          `,
        };

        await transporter.sendMail(mailOptions);
        emailSent = true;
      } catch (mailError) {
        console.error('Nodemailer error:', mailError);
      }
    }

    return res.status(200).json({
      success: true,
      message: emailSent
        ? "Message sent successfully to Heritier's email!"
        : 'Message received successfully!',
    });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    return res.status(500).json({ error: 'Failed to process message.' });
  }
}
