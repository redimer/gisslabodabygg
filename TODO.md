# Att göra

## ✅ Offertformuläret (/kontakt) — KLART 2026-07-13

Formuläret är kopplat och fungerar live. Resend-kontot är registrerat på
info@gisslabodabyggab.se, `RESEND_API_KEY` ligger i Vercel (projektet
**gisslabodabygg**), och mejl går till info@gisslabodabyggab.se som
vidarebefordras till gisslabodabygg@gmail.com.

- [ ] (Valfri uppgradering) Verifiera domänen gisslabodabyggab.se i
      Resend (DNS-poster hos one.com) så att formulärmejlen skickas från
      egen adress istället för onboarding@resend.dev — bättre mot
      spamfilter.

## Städa: två Vercel-projekt deployar samma repo

Det finns två projekt i Vercel-teamet "my-flight" som båda bygger från
samma GitHub-repo: **gisslabodabygg** (har domänen — detta är "riktiga"
projektet) och **gislabodabygg** (ett stavfel-dubblettprojekt, bara
*.vercel.app). Båda har `RESEND_API_KEY` satt.

- [ ] Ta bort dubblettprojektet **gislabodabygg** (enkelt s) i Vercels
      dashboard när det känns tryggt — annars byggs varje push två gånger

## Byt ut platshållar-citaten mot riktiga kundomdömen

Citat-karusellen på startsidan och citaten på projektsidorna använder
**påhittade exempeltexter** tills vidare (markerade med en kommentar i
`data/projects.js`).

- [ ] Samla in riktiga omdömen från kunderna bakom projekten
- [ ] Byt ut `quote.text` och `quote.author` per projekt i
      `data/projects.js` (fråga kunden om ni får använda namn/ort)
- [ ] Sätt `quote: null` på projekt som inte ska visa något citat

## Innehållspipeline: låt ägarna lägga till projekt/citat själva (ej påbörjat)

Idé: ägarna fyller i ett Google Formulär (nytt projekt med bilder, eller ett
kundcitat) → Samir exporterar svaren och kör en Claude Code-skill
(`/rebuild-content`) som AI-granskar innehållet och skriver in det i
`data/projects.js` + `public/images/projects/` → Samir granskar `git diff`
och gör commit/push själv som vanligt. Inget commit/push sker automatiskt.

Fullständig plan (formulärfält, filmatchning, vad AI:n får/inte får göra
automatiskt, edge cases): se
`/Users/samirsmajic/.claude/plans/without-coding-anything-what-polymorphic-petal.md`

- [ ] Bygg Google Formuläret enligt fältspecen i planen
- [ ] Skapa `.claude/skills/rebuild-content.md`
- [ ] Lägg till `/content-inbox` i `.gitignore`
- [ ] Skapa `.content-pipeline-state.json` (dedupe-ledger)
- [ ] Testa med några exempel-inlämningar innan det tas i skarpt bruk
