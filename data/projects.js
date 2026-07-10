// OBS: Citaten nedan är platshållare (påhittade exempel) tills riktiga
// kundomdömen finns. Byt text och author till kundens egna ord innan
// de används i marknadsföring. Sätt quote: null för att dölja ett citat.
export const projects = [
  {
    slug: "tillbyggnad-lonsboda",
    title: "Tillbyggnad med ny grund och takstomme",
    tag: "Tillbyggnad & tak",
    location: "Lönsboda",
    summary: "Från ny grund till färdig takstomme – en tillbyggnad i egen regi, hela vägen.",
    description: [
      "Den här tillbyggnaden startade i marken. Vi göt en ny grund i lättbetong, murade upp grundväggarna och byggde sedan upp den nya stommen från golv till nock.",
      "När stommen stod klar togs det gamla taket bort och en ny takstomme restes, sargades in och kläddes med underlagstak innan den nya takbeklädnaden kunde läggas. Allt utfört av oss från start till mål.",
    ],
    images: [
      "/images/projects/tillbyggnad-1.jpg",
      "/images/projects/tillbyggnad-2.jpg",
      "/images/projects/tillbyggnad-4.jpg",
      "/images/projects/tillbyggnad-3.jpg",
    ],
    quote: {
      text: "Otroligt noggranna genom hela bygget – från grunden till taket. Vi kände oss trygga hela vägen.",
      author: "Villaägare, Lönsboda",
    },
  },
  {
    slug: "nybygge-fritidshus",
    title: "Nybyggnation av fritidshus",
    tag: "Nybyggnation",
    location: "Lönsboda",
    summary: "Ett komplett nybygge, rest från stomme till taknock.",
    description: [
      "Ett nybyggt fritidshus med rejäl takresning, byggt från grunden och upp. Vi ansvarade för stomresning, bjälklag och takstolar i egen takt genom hela projektet.",
      "Att bygga nytt ställer höga krav på planering – varje bjälke och takstol måste sitta rätt innan nästa steg kan ta vid. Det är den typen av precisionsarbete vi trivs bäst med.",
    ],
    images: ["/images/projects/nybygge-1.jpg", "/images/projects/nybygge-2.jpg"],
    quote: {
      text: "Raka besked, snyggt hantverk och en tidplan som höll. Vårt fritidshus blev precis som vi tänkt oss.",
      author: "Fritidshusägare, Lönsboda",
    },
  },
  {
    slug: "tillbyggnad-tegelhus",
    title: "Tillbyggnad med nya takstolar",
    tag: "Tillbyggnad",
    location: "Lönsboda",
    summary: "Nya takstolar och utökad boyta på ett klassiskt tegelhus.",
    description: [
      "En tillbyggnad på ett äldre tegelhus, där nya takstolar restes för att ge huset mer yta och ett sammanhängande tak. Noggrann inmätning och montering krävdes för att den nya delen skulle ansluta snyggt mot den befintliga byggnaden.",
    ],
    images: ["/images/projects/tegelhus-1.jpg"],
    quote: {
      text: "Tillbyggnaden smälter in så väl att man tror att den alltid funnits där. Mycket nöjda!",
      author: "Husägare, Lönsboda",
    },
  },
  {
    slug: "uterum-fonster",
    title: "Uterum med nya fönsterpartier",
    tag: "Uterum & fönster",
    location: "Lönsboda",
    summary: "Ljust och luftigt uterum med noggrant monterade fönsterpartier.",
    description: [
      "Stora fönsterpartier monterades in i det här uterummet för att ge maximalt ljusinsläpp och fri sikt ut mot trädgården. Varje fönster passades in och tätades noggrant för att hålla tätt och stå still i många år framöver.",
    ],
    images: ["/images/projects/uterum-1.jpg"],
    quote: {
      text: "Ljuset i uterummet är fantastiskt. Fönsterpartierna sitter perfekt och allt blev klart i tid.",
      author: "Kund, Lönsboda",
    },
  },
  {
    slug: "attefallshus-nyckelfardigt",
    title: "Nyckelfärdigt attefallshus",
    tag: "Attefallshus",
    location: "Lönsboda",
    summary: "Smart planerad och komplett inredd, från loftsäng till kök.",
    description: [
      "Ett komplett attefallshus, inrett från golv till loft. Här har varje kvadratmeter utnyttjats – ett kök med gott om förvaring under loftet, en trappstege upp till sovloftet och ett badrum med genomtänkta materialval.",
      "Ett bra exempel på hur mycket hem som får plats på en liten yta när planlösningen är rätt tänkt från början.",
    ],
    images: [
      "/images/projects/attefallshus-1.jpg",
      "/images/projects/attefallshus-3.jpg",
      "/images/projects/attefallshus-2.jpg",
    ],
    quote: {
      text: "Varje kvadratmeter är genomtänkt. Ett litet hus som känns stort – vi kunde inte vara nöjdare.",
      author: "Beställare av attefallshus, Lönsboda",
    },
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
