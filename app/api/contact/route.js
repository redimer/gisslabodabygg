import { Resend } from "resend";

// Primary: send from the verified own domain, straight to the Gmail inbox.
// Fallback (until the domain is verified in Resend): the resend.dev test
// sender may only deliver to the Resend account owner's address (info@...),
// which one.com forwards to Gmail.
const PRIMARY = {
  from: "Gisslaboda Bygg – offertförfrågan <formular@gisslabodabyggab.se>",
  to: "gisslabodabygg@gmail.com",
};
const FALLBACK = {
  from: "Gisslaboda Bygg – offertförfrågan <onboarding@resend.dev>",
  to: "info@gisslabodabyggab.se",
};

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Ogiltig förfrågan." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  const email = (body.email || "").trim();
  const address = (body.address || "").trim();
  const message = (body.message || "").trim();

  if (!name || !phone || !email || !address || !message) {
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
  const notification = {
    replyTo: email,
    subject: `Ny offertförfrågan från ${name}`,
    text: [
      `Namn: ${name}`,
      `Telefonnummer: ${phone}`,
      `E-post: ${email}`,
      `Adress: ${address}`,
      "",
      "Vad behövs hjälp med:",
      message,
    ].join("\n"),
  };

  const autoReply = {
    from: "Gisslaboda Bygg AB <info@gisslabodabyggab.se>",
    to: email,
    subject: "Tack för din förfrågan – Gisslaboda Bygg AB",
    text: [
      `Hej ${name},`,
      "",
      "Tack för att du kontaktade oss! Vi har tagit emot följande uppgifter:",
      "",
      `Namn: ${name}`,
      `Telefonnummer: ${phone}`,
      `E-post: ${email}`,
      `Adress: ${address}`,
      "",
      "Vad du behöver hjälp med:",
      message,
      "",
      "Gisslaboda Bygg AB återkommer till dig inom 48 timmar.",
      "",
      "Vänliga hälsningar,",
      "Gisslaboda Bygg AB",
    ].join("\n"),
  };

  try {
    let { error } = await resend.emails.send({ ...PRIMARY, ...notification });

    if (error) {
      console.error("Resend error (primary sender), trying fallback:", error);
      ({ error } = await resend.emails.send({ ...FALLBACK, ...notification }));
    }

    if (error) {
      console.error("Resend error (fallback sender):", error);
      return Response.json(
        { error: "Kunde inte skicka just nu. Försök igen om en stund." },
        { status: 502 }
      );
    }

    const { error: autoReplyError } = await resend.emails.send(autoReply);
    if (autoReplyError) {
      console.error("Resend error (auto-reply to submitter):", autoReplyError);
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
