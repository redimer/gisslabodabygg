import { Resend } from "resend";

// Resend's free-tier test sender may only deliver to the Resend account
// owner's address (info@...). Mail to info@ is forwarded to
// gisslabodabygg@gmail.com by one.com, where the owners read it.
const TO_EMAIL = "info@gisslabodabyggab.se";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Ogiltig förfrågan." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  const address = (body.address || "").trim();
  const message = (body.message || "").trim();

  if (!name || !phone || !address || !message) {
    return Response.json(
      { error: "Alla fält måste fyllas i." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY saknas i miljövariablerna.");
    return Response.json(
      { error: "Formuläret är inte konfigurerat ännu. Kontakta oss via e-post istället." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: "Gisslaboda Bygg – offertförfrågan <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject: `Ny offertförfrågan från ${name}`,
      text: [
        `Namn: ${name}`,
        `Telefonnummer: ${phone}`,
        `Adress: ${address}`,
        "",
        "Vad behövs hjälp med:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "Kunde inte skicka just nu. Försök igen om en stund." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json(
      { error: "Något gick fel. Försök igen om en stund." },
      { status: 500 }
    );
  }
}
