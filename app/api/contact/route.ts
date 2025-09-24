import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // ton domaine validé
      to: "enismermer38@gmail.com",
      subject: `[Contact Portfolio] ${subject}`,
      replyTo: email, // ici l’adresse de la personne qui a rempli le formulaire
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f9fafb; color: #111;">
          <h2 style="color: #2563eb;">📩 Nouveau message depuis ton portfolio</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Sujet :</strong> ${subject}</p>
          <p style="margin-top: 20px; padding: 15px; background: #fff; border-left: 4px solid #2563eb;">
            ${message}
          </p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />
          <p style="font-size: 12px; color: #666;">Cet email a été envoyé automatiquement depuis ton portfolio 🚀</p>
        </div>
      `,
    })

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ success: false, error: "Erreur d’envoi du message" }), { status: 500 })
  }
}
