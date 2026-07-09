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
    quote: null,
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
    quote: null,
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
    quote: null,
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
    quote: null,
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
    quote: null,
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
