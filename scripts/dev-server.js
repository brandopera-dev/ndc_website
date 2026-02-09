import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
app.use(express.json());

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Simulation de l'endpoint API pour le développement local
app.post('/api/send-quote', async (req, res) => {
  console.log('Requête reçue sur /api/send-quote');
  try {
    const data = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"NDC Website (Local)" <${process.env.SMTP_USER}>`,
      to: process.env.QUOTE_TO || 'info@ndc.africa',
      subject: data._subject || 'Nouvelle demande de devis - NDC (Local)',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
          <div style="background-color: #e11a1a; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">NDC ÉNERGIE</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0 0;">Demande de Devis en Ligne</p>
          </div>
          <div style="padding: 30px; color: #333;">
            <h2 style="color: #e11a1a; border-bottom: 2px solid #f8f8f8; padding-bottom: 10px;">Récapitulatif de la demande</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; width: 40%; border-bottom: 1px solid #eee;">Service :</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.service}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #eee;">Société :</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.societe}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #eee;">Secteur :</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.secteur}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #eee;">Email :</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${data.email}" style="color: #e11a1a; text-decoration: none;">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #eee;">Téléphone :</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.telephone}</td>
              </tr>
            </table>

            <h3 style="color: #e11a1a; margin-top: 30px; border-bottom: 2px solid #f8f8f8; padding-bottom: 10px;">Détails supplémentaires</h3>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
              ${Object.entries(data)
                .filter(([key]) => !['_subject', 'service', 'societe', 'secteur', 'email', 'telephone'].includes(key))
                .map(([key, value]) => `
                  <tr>
                    <td style="padding: 10px 0; font-weight: bold; width: 40%; border-bottom: 1px solid #eee;">${key.replace(/_/g, ' ')} :</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${value}</td>
                  </tr>
                `).join('')}
            </table>
          </div>
          <div style="background-color: #f8f8f8; padding: 20px; text-align: center; font-size: 12px; color: #666;">
            <p>Ce message a été envoyé depuis le formulaire de devis du site ndc.africa</p>
            <p>&copy; ${new Date().getFullYear()} NDC Énergie. Tous droits réservés.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email envoyé avec succès !');
    res.status(200).json({ message: 'Email envoyé avec succès' });
  } catch (error) {
    console.error('Erreur d\'envoi:', error);
    res.status(500).json({ error: 'Erreur lors de l\'envoi', details: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Serveur de dev API lancé sur http://localhost:${PORT}`);
});
