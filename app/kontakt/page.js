import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Få en offert – Gisslaboda Bygg AB",
  description:
    "Berätta om ditt projekt och få en offert från Gisslaboda Bygg AB i Lönsboda.",
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-forest-800 text-cream grain pt-36 pb-16 px-6 md:px-10">
          <div className="mx-auto max-w-3xl">
            <p className="text-rust-400 font-semibold tracking-[0.25em] text-xs uppercase mb-4">
              Få en offert
            </p>
            <h1 className="font-display italic text-5xl md:text-6xl leading-tight text-balance">
              Berätta om ditt projekt.
            </h1>
            <p className="mt-6 text-cream/75 text-lg max-w-xl">
              Fyll i formuläret nedan så återkommer vi så snart vi kan. Du kan
              också mejla oss direkt på{" "}
              <a
                href="mailto:info@gisslabodabyggab.se"
                className="underline hover:text-rust-400"
              >
                info@gisslabodabyggab.se
              </a>
              .
            </p>
          </div>
        </section>

        <section className="py-20 px-6 md:px-10">
          <div className="mx-auto max-w-3xl">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
