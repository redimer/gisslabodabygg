import { Fraunces, Archivo } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Gisslaboda Bygg AB – Snickeri & byggtjänster i Lönsboda",
  description:
    "Gisslaboda Bygg AB utför nybyggnation, tillbyggnad, renovering och attefallshus i Lönsboda med omnejd. Hantverk du kan lita på.",
  metadataBase: new URL("https://gisslabodabyggab.se"),
  openGraph: {
    title: "Gisslaboda Bygg AB",
    description:
      "Snickeri & byggtjänster i Lönsboda – nybyggnation, tillbyggnad, renovering och attefallshus.",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="sv"
      className={`${fraunces.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
