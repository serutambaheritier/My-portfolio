import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import { existsSync } from 'fs';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
const projectsPath = path.join(__dirname, 'data', 'projects.json');
const messagesPath = path.join(__dirname, 'data', 'messages.json');

// GET all projects
app.get('/api/projects', async (req, res) => {
  try {
    const data = await fs.readFile(projectsPath, 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading projects data:', error);
    res.status(500).json({ error: 'Failed to retrieve projects data.' });
  }
});

// POST contact form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !name.trim() || !email || !email.trim() || !message || !message.trim()) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    // 1. Log message to local JSON file
    let messages = [];
    if (existsSync(messagesPath)) {
      const existingData = await fs.readFile(messagesPath, 'utf8');
      if (existingData.trim()) {
        messages = JSON.parse(existingData);
      }
    }

    const newMessage = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    messages.push(newMessage);
    await fs.writeFile(messagesPath, JSON.stringify(messages, null, 2), 'utf8');

    // 2. Try sending an email if SMTP credentials are provided
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
          from: `"${name}" <${process.env.SMTP_USER}>`, // Sent from SMTP_USER to avoid spoofing filters
          to: process.env.CONTACT_RECEIVER_EMAIL || 'heritier.serutamba@gmail.com',
          replyTo: email,
          subject: `Portfolio: New Contact Message from ${name}`,
          text: `You have received a new contact message from your portfolio site.

Name: ${name}
Email: ${email}
Message:
${message}
`,
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
        console.log(`Email successfully sent to ${mailOptions.to}`);
      } catch (mailError) {
        console.error('Nodemailer failed to send email:', mailError);
        // We do not fail the request since it was saved to the JSON file successfully.
      }
    }

    res.status(200).json({ 
      success: true, 
      message: emailSent 
        ? 'Message sent successfully to Heritier\'s email!' 
        : 'Message saved successfully! (Email not configured)' 
    });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Failed to process message. Please try again.' });
  }
});

// Serve frontend assets in production
const clientDistPath = path.join(__dirname, '..', 'client', 'dist');
if (existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API Server is running. Frontend static assets not built yet.');
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
