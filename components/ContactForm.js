"use client";

import { useState } from "react";

const NAME_PHONE_FIELDS = [
  { id: "name", label: "Namn", type: "text", autoComplete: "name" },
  { id: "phone", label: "Telefonnummer", type: "tel", autoComplete: "tel" },
];

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.target;
    const data = {
      name: form.name.value,
      phone: form.phone.value,
      address: form.address.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error || "Något gick fel. Försök igen.");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Kunde inte skicka. Kontrollera din internetuppkoppling och försök igen.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-forest-700 text-cream p-10 md:p-12 text-center">
        <p className="font-display italic text-2xl md:text-3xl mb-3">
          Tack för din förfrågan!
        </p>
        <p className="text-cream/80">
          Vi har tagit emot din offertförfrågan och hör av oss så snart vi kan.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        {NAME_PHONE_FIELDS.map((f) => (
          <div key={f.id}>
            <label htmlFor={f.id} className="block text-sm font-semibold mb-2">
              {f.label}
            </label>
            <input
              id={f.id}
              name={f.id}
              type={f.type}
              autoComplete={f.autoComplete}
              required
              className="w-full rounded-xl border border-ink/20 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-rust-500 focus:border-rust-500 transition"
            />
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-semibold mb-2">
          Adress
        </label>
        <input
          id="address"
          name="address"
          type="text"
          autoComplete="street-address"
          required
          className="w-full rounded-xl border border-ink/20 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-rust-500 focus:border-rust-500 transition"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          Vilken hjälp behöver du?
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Berätta kort om ditt projekt – vad det gäller, ungefär när du vill komma igång och annat vi bör veta."
          className="w-full rounded-xl border border-ink/20 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-rust-500 focus:border-rust-500 transition resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-rust-600 font-medium">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-rust-500 hover:bg-rust-600 disabled:opacity-60 text-cream px-8 py-3.5 font-semibold transition-colors"
      >
        {status === "sending" ? "Skickar..." : "Skicka offertförfrågan"}
      </button>
    </form>
  );
}
