import React from "react";

const AboutPage = ({ language = "en" }) => {
  const copy = {
    title: {
      en: "Who are we",
      fr: "Qui sommes-nous",
      de: "Wer sind wir",
    },
    p1: {
      en: "Ethically sourced saffron from Iran, Safayra is a journey from the sun-drenched fields of Iran to the heart of Europe. We bring you premium-quality saffron, carefully handpicked from its land of origin, where centuries of tradition meet ethical and modern practices.",
      fr: "Safran sourcé de manière éthique en Iran, Safayra est un voyage des champs baignés de soleil d’Iran jusqu’au cœur de l’Europe. Nous vous apportons un safran de qualité premium, soigneusement cueilli dans sa terre d’origine, où des siècles de tradition rencontrent des pratiques éthiques et modernes.",
      de: "Ethisch bezogener Safran aus dem Iran – Safayra ist eine Reise von den sonnengetränkten Feldern Irans bis ins Herz Europas. Wir bringen Ihnen Premium-Safran, sorgfältig von seinem Ursprungsland handverlesen, wo jahrhundertealte Tradition auf ethische und moderne Praktiken trifft.",
    },
    p2: {
      en: "We are committed to sharing the rich culture of Iran and honoring the heritage and communities behind every thread. Working hand in hand with local producers under fair, ethical, and hygienic conditions, we ensure transparency and respect throughout the supply chain.",
      fr: "Nous nous engageons à partager la riche culture de l’Iran et à honorer l’héritage et les communautés derrière chaque filament. Main dans la main avec des producteurs locaux, dans des conditions équitables, éthiques et hygiéniques, nous garantissons transparence et respect tout au long de la chaîne d’approvisionnement.",
      de: "Wir setzen uns dafür ein, die reiche Kultur Irans zu teilen und das Erbe sowie die Gemeinschaften hinter jedem Faden zu würdigen. In enger Zusammenarbeit mit lokalen Produzenten und unter fairen, ethischen und hygienischen Bedingungen gewährleisten wir Transparenz und Respekt entlang der gesamten Lieferkette.",
    },
    p3: {
      en: "Every batch is lab-tested for purity and quality, meeting the highest standards of color, aroma, and strength. At Safayra, excellence begins with connection. We collaborate closely with our clients to deliver not just saffron, but a thoughtful and elevated experience.",
      fr: "Chaque lot est en laboratoire testé pour la pureté et la qualité, répondant aux plus hauts standards de couleur, d’arôme et d’intensité. Chez Safayra, l’excellence commence par la relation. Nous collaborons étroitement avec nos clients pour offrir non seulement du safran, mais une expérience soignée et d’exception.",
      de: "Jede Charge wird im Labor auf Reinheit und Qualität geprüft und erfüllt höchste Standards in Farbe, Aroma und Stärke. Bei Safayra beginnt Exzellenz mit Verbindung. Wir arbeiten eng mit unseren Kunden zusammen, um nicht nur Safran zu liefern, sondern ein durchdachtes, anspruchsvolles Erlebnis.",
    },
    tagline: {
      en: "The most precious spice in the world.",
      fr: "L’épice la plus précieuse au monde.",
      de: "Das kostbarste Gewürz der Welt.",
    },
    heartTitle: {
      en: "The Heart of Saffron Production",
      fr: "Le cœur de la production de safran",
      de: "Das Herz der Safranproduktion",
    },
    heartP1: {
      en: "Iran, which accounts for nearly 90% of global production, is the historical heartland of saffron. Its cultivation relies on ancestral know-how: each flower is hand-picked at dawn, and the stigmas are delicately removed one by one. The flowering season, which lasts only a few weeks from late October to mid-November, requires an intense pace of work within a short time frame.",
      fr: "L’Iran, qui représente près de 90 % de la production mondiale, est le berceau historique du safran. Sa culture repose sur un savoir-faire ancestral : chaque fleur est cueillie à l’aube, et les stigmates sont délicatement retirés un à un. La floraison, qui ne dure que quelques semaines de fin octobre à mi-novembre, impose un rythme de travail intense sur une période très courte.",
      de: "Der Iran, der nahezu 90 % der weltweiten Produktion ausmacht, ist die historische Heimat des Safrans. Sein Anbau beruht auf jahrhundertealtem Know-how: Jede Blüte wird im Morgengrauen von Hand gepflückt, die Narben anschließend behutsam einzeln entfernt. Die Blütezeit, die nur wenige Wochen von Ende Oktober bis Mitte November dauert, erfordert in kurzer Zeit ein sehr intensives Arbeitstempo.",
    },
    heartP2: {
      en: "This artisanal method, combined with the rarity of the harvest, is what makes saffron the most precious spice in the world. We believe that excellence begins with connection. That's why we collaborate closely with our clients, from chefs to retailers, to deliver not just saffron, but a thoughtful, tailored experience.",
      fr: "Cette méthode artisanale, combinée à la rareté de la récolte, fait du safran l’épice la plus précieuse au monde. Nous croyons que l’excellence naît de la relation. C’est pourquoi nous collaborons étroitement avec nos clients, des chefs aux détaillants, afin d’offrir non seulement du safran, mais une expérience réfléchie et sur mesure.",
      de: "Diese handwerkliche Methode, verbunden mit der Seltenheit der Ernte, macht Safran zum kostbarsten Gewürz der Welt. Wir sind überzeugt, dass Exzellenz mit Verbindung beginnt. Daher arbeiten wir eng mit unseren Kunden – von Köchen bis zu Einzelhändlern – zusammen, um nicht nur Safran zu liefern, sondern ein durchdachtes, maßgeschneidertes Erlebnis.",
    },
  };

  return (
    <div className="w-full pt-8 md:pt-12">
      {/* Centered title with bottom blur */}
      <section className="w-full px-4 py-12 md:py-16">
        <div className="relative w-fit mx-auto">
          <h1 className="text-center text-brand font-nanum text-4xl md:text-5xl">
            {copy.title[language]}
          </h1>

          {/* blur overlay */}
          <div
            className="hidden md:block pointer-events-none absolute inset-x-0 bottom-0
                 h-[40%] backdrop-blur-[1px]
                 [mask-image:linear-gradient(to_top,black_80%,transparent_95%)]
                 [-webkit-mask-image:linear-gradient(to_top,black_80%,transparent_95%)]"
          />
        </div>
      </section>

      {/* Full-bleed split section with off-white bg + red text */}
      <section className="relative w-screen left-1/2 -translate-x-1/2 bg-[#EBD4AD] overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left: image */}
          <div className="relative min-h-[360px] md:min-h-[520px]">
            <img
              src="/safayra-saffron-flowers-field.png"
              alt="Safayra saffron flowers field"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: paragraphs */}
          <div className="flex items-center">
            <div
              className="w-full max-w-3xl mx-auto
                      px-6 py-10 md:px-12 md:py-16 lg:px-16
                      space-y-6 text-center md:text-left"
            >
              <p className="text-[#4d1112] font-nanum text-base md:text-lg leading-relaxed">
                {copy.p1[language]}
              </p>
              <p className="text-[#4d1112] font-nanum text-base md:text-lg leading-relaxed">
                {copy.p2[language]}
              </p>
              <p className="text-[#4d1112] font-nanum text-base md:text-lg leading-relaxed">
                {copy.p3[language]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline with halo */}
      <section
        id="tagline"
        className="relative w-full px-4 pt-24 md:pt-32 lg:pt-40 pb-8 md:pb-10 overflow-visible"
      >
        {/* glow background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          {/* wide outer glow */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                 w-[80vmin] md:w-[72vmin] lg:w-[64vmin] aspect-square rounded-full blur-3xl
                 bg-[radial-gradient(circle_at_center,rgba(235,212,173,0.18)_0%,rgba(235,212,173,0.09)_42%,transparent_78%)]"
          />
          {/* softer inner core */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                 w-[56vmin] md:w-[50vmin] lg:w-[44vmin] aspect-square rounded-full blur-2xl opacity-75
                 bg-[radial-gradient(circle_at_center,rgba(235,212,173,0.25)_0%,rgba(235,212,173,0.12)_50%,transparent_72%)]"
          />
        </div>

        <p className="text-center text-brand font-aurore text-3xl md:text-4xl lg:text-5xl leading-tight">
          {copy.tagline[language]}
        </p>
      </section>

      {/* The Heart of Saffron Production */}
      <section id="heart-of-production" className="w-full px-4 py-16 md:py-24">
        <h2 className="text-left text-brand font-nanum text-3xl md:text-4xl mb-6 md:mb-8">
          {copy.heartTitle[language]}
        </h2>

        <div className="max-w-4xl text-left">
          {" "}
          <p className="text-brand font-nanum text-base md:text-lg leading-relaxed">
            {copy.heartP1[language]}
          </p>
          <p className="text-brand font-nanum text-base md:text-lg leading-relaxed mt-6">
            {copy.heartP2[language]}
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
