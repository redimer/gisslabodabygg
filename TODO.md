# Att göra

## Koppla på offertformuläret (/kontakt)

Formuläret och API-routen är klara och pushade. Det som återstår är att
koppla på faktisk e-postutskick:

- [ ] Skapa ett gratis konto på [resend.com](https://resend.com)
- [ ] Skapa en API-nyckel under **API Keys**
- [ ] Lägg till `RESEND_API_KEY` i Vercel (**Settings → Environment
      Variables**) med nyckeln som värde
- [ ] Redeploya projektet i Vercel så att miljövariabeln börjar gälla
- [ ] Skicka ett test via formuläret på den publicerade sajten och
      bekräfta att mejlet kommer fram till gisslabodabygg@gmail.com

Se `README.md` för fler detaljer om detta steg.

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
