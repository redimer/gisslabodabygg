# Gisslaboda Bygg AB — webbplats

Next.js-webbplats för Gisslaboda Bygg AB (snickeri & byggtjänster, Lönsboda).

## Köra lokalt

```bash
npm install
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000).

## Redigera innehåll

- **Projekt**: `data/projects.js` — varje projekt har titel, bilder, beskrivning och plats för kundcitat (`quote`). Bilder ligger i `public/images/projects/`.
- **Kundcitat**: sätt `quote: { text: "...", author: "Namn, Ort" }` på ett projekt i `data/projects.js` för att visa ett omdöme istället för platshållartexten.
- **Hero-video**: `public/video/hero.mp4`. Byt filen för att uppdatera bakgrundsvideon på startsidan.
- **Kontaktuppgifter**: `components/Footer.js`.
- **Facebook-flöde**: `components/FacebookFeed.js` — pekar mot Facebook-sidan via dess URL.

## Bygga för produktion

```bash
npm run build
npm run start
```

## Driftsättning (GitHub + Vercel)

1. Skapa ett repo på [github.com/new](https://github.com/new) och pusha den här mappen till det.
2. Gå till [vercel.com/new](https://vercel.com/new), importera GitHub-repot — Vercel upptäcker Next.js automatiskt och behöver ingen extra konfiguration.
3. Varje push till huvudgrenen (`main`) publiceras automatiskt.
