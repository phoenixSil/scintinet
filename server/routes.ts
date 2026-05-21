import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";

const ADMIN_EMAIL = "tsillery@ymail.com";

function createTransporter() {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

async function sendEmail(subject: string, body: string, replyTo?: string) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log("=== EMAIL (no SMTP configured) ===");
    console.log("To:", ADMIN_EMAIL);
    console.log("Subject:", subject);
    console.log("Body:\n", body);
    console.log("==================================");
    return;
  }
  const transporter = createTransporter();
  await transporter.sendMail({
    from: `"ScintiNet" <${process.env.SMTP_USER}>`,
    to: ADMIN_EMAIL,
    subject,
    text: body,
    replyTo: replyTo || ADMIN_EMAIL,
  });
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/rendez-vous", async (req, res) => {
    try {
      const { name, email, phone, service, date, time, notes, body } = req.body;
      if (!name || !email || !phone || !date || !time) {
        return res.status(400).json({ error: "Champs requis manquants" });
      }
      await sendEmail(
        `[ScintiNet] Nouveau rendez-vous — ${date} à ${time}`,
        body,
        email
      );
      res.json({ success: true });
    } catch (err) {
      console.error("Erreur rendez-vous:", err);
      res.status(500).json({ error: "Erreur interne" });
    }
  });

  app.post("/api/devis", async (req, res) => {
    try {
      const { name, email, phone, body } = req.body;
      if (!name || !email || !phone) {
        return res.status(400).json({ error: "Champs requis manquants" });
      }
      await sendEmail(
        `[ScintiNet] Nouvelle demande de devis — ${name}`,
        body,
        email
      );
      res.json({ success: true });
    } catch (err) {
      console.error("Erreur devis:", err);
      res.status(500).json({ error: "Erreur interne" });
    }
  });

  return httpServer;
}
