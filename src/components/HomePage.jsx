import React from "react";

const HomePage = ({ language, setActiveDetailPage }) => {
  const t = {
    learn:
      language === "fr"
        ? "En savoir plus"
        : language === "de"
        ? "Mehr erfahren"
        : "Learn more",
    cards: [
      {
        id: "culinary",
        pageId: "culinary",
        img: "/safayra-saffron-cake.JPG",
        title: {
          en: "Enhancing the culinary experience",
          fr: "Sublimer l'expérience culinaire",
          de: "Das kulinarische Erlebnis bereichern",
        },
        desc: {
          en: "Saffron for chefs, restaurants and gastronomic creations.",
          fr: "Safran pour chefs, restaurants et créations gastronomiques.",
          de: "Safran für Köche, Restaurants und gastronomische Kreationen.",
        },
      },
      {
        id: "skin",
        pageId: "skin",
        img: "/safayra-red-gold-for-skin.png",
        title: {
          en: "Red Gold for the Skin",
          fr: "Or rouge pour la peau",
          de: "Rotes Gold für die Haut",
        },
        desc: {
          en: "A precious antioxidant for your skincare.",
          fr: "Un précieux antioxydant pour votre soin de la peau.",
          de: "Ein wertvolles Antioxidans für Ihre Hautpflege.",
        },
      },
      {
        id: "wellness",
        pageId: "wellness",
        img: "/safayra-wellness.png",
        title: {
          en: "Wellness",
          fr: "Bien-être",
          de: "Wohlbefinden",
        },
        desc: {
          en: "Saffron is a natural ally for everyday well-being.",
          fr: "Le safran est un allié naturel du bien-être au quotidien.",
          de: "Safran ist ein natürlicher Begleiter für tägliches Wohlbefinden.",
        },
      },
    ],
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Full-screen background image */}
      <div
        className="absolute top-0 left-0 w-screen h-screen z-0"
        style={{
          backgroundImage: "url('/safayra-saffron-homepage-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center">
        {/* Heading */}
        <div className="text-center pt-16 md:pt-24 pb-8 w-full">
          <h1 className="text-5xl md:text-6xl font-bold uppercase text-brand">
            Safayra
          </h1>
          <p className="text-sm md:text-base mt-2 text-brand">
            {language === "en"
              ? "A journey from the sun-scorched fields of Iran to the heart of Europe"
              : language === "fr"
              ? "Un voyage des champs brûlés par le soleil d'Iran au cœur de l'Europe"
              : "Eine Reise von den sonnengebrannten Feldern des Iran ins Herz Europas"}
          </p>
        </div>

        {/* 3 Cards */}
        <div className="w-full max-w-6xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.cards.map((c) => (
              <div
                key={c.id}
                className="group relative h-[460px] rounded-[10px] overflow-hidden shadow-2xl"
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${c.img}')` }}
                  aria-hidden="true"
                />

                {/* Top dark gradient for text-brand text (like reference) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />

                {/* Beige wedge at the bottom (angled highlight) */}
                <div
                  className="absolute bottom-0 right-0 w-full h-[45%] bg-[#f1e1c6]/28"
                  style={{
                    clipPath:
                      "polygon(40% 0, 100% 0, 100% 100%, 0 100%, 0 55%)",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 h-full p-6 flex flex-col">
                  <div className="mt-2">
                    <h3 className="text-brand text-2xl font-semibold leading-snug drop-shadow">
                      {c.title[language]}
                    </h3>
                    <p className="mt-2 text-brand text-sm leading-relaxed max-w-[90%]">
                      {c.desc[language]}
                    </p>
                  </div>

                  {/* CTA at bottom-left, sitting on the beige wedge */}
                  <div className="mt-auto pt-6">
                    <button
                      onClick={() => setActiveDetailPage(c.pageId)}
                      className="inline-flex items-center rounded-[6px] bg-[#f1e1c6]/90 hover:bg-[#f1e1c6] px-4 py-2 text-sm font-medium text-[#2b1b1b] shadow-sm transition"
                    >
                      {t.learn}
                    </button>
                  </div>
                </div>

                {/* Make whole card clickable (optional) */}
                <button
                  aria-label={`${c.title[language]} — ${t.learn}`}
                  onClick={() => setActiveDetailPage(c.pageId)}
                  className="absolute inset-0 focus:outline-none focus:ring-2 focus:text-brand/70"
                  tabIndex={-1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
