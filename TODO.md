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
