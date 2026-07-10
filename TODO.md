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
