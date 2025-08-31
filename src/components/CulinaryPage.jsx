import React from "react";

const CulinaryPage = ({ language = "en" }) => {
  const t = {
    title: {
      en: "Enhancing the Culinary Experience",
      fr: "Sublimer l'expérience culinaire",
      de: "Das kulinarische Erlebnis bereichern",
    },
    tagline: {
      en: "Color, aroma, and depth in every dish",
      fr: "Couleur, parfum et profondeur dans chaque plat",
      de: "Farbe, Aroma und Tiefe in jedem Gericht",
    },
  };

  return (
    <div className="w-full pt-8 md:pt-12">
      {/* Title with bottom blur */}
      <section className="w-full px-4 py-12 md:py-16">
        <div className="relative w-fit mx-auto">
          <h1 className="text-center text-brand font-nanum text-4xl md:text-5xl">
            {t.title[language]}
          </h1>
          {/* blur overlay
          <div
            className="hidden md:block pointer-events-none absolute inset-x-0 bottom-0
                 h-[40%] backdrop-blur-[1px]
                 [mask-image:linear-gradient(to_top,black_80%,transparent_95%)]
                 [-webkit-mask-image:linear-gradient(to_top,black_80%,transparent_95%)]"
          /> */}
        </div>
      </section>

      {/* Why Top Chefs Choose Saffron */}
      <section className="w-full px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* LEFT SIDE */}
          <div className="md:col-span-7 space-y-6">
            {/* Text card */}
            <div className="bg-[#EBD4AD] text-[#4d1112] shadow-xl rounded-none p-6 md:p-8">
              <h3 className="font-nanum font-bold text-2xl md:text-3xl mb-4">
                {language === "fr"
                  ? "Pourquoi les grands chefs choisissent le safran"
                  : language === "de"
                  ? "Warum Spitzenköche Safran wählen"
                  : "Why Top Chefs Choose Saffron"}
              </h3>
              <ul className="font-nanum text-base md:text-lg leading-relaxed space-y-2">
                <li>
                  {language === "fr"
                    ? "Découvrez une intensité aromatique exceptionnelle, portée par un ingrédient d’origine naturelle soigneusement sélectionnés. Sa pigmentation naturellement vibrante, sans aucun colorant artificiel, apporte une touche visuelle unique à vos préparations."
                    : language === "de"
                    ? "Einzigartige aromatische Intensität"
                    : "Discover an exceptional aromatic intensity, carried by a carefully handpicked natural ingredient. Its naturally vibrant pigmentation, free from any artificial coloring, brings a one-of-a-kind visual touch to your creations. With just a sprinkle, your dishes are elevated, both in taste and in appearance. Beyond its culinary virtues, this product is packed with health benefits, thanks to its remarkable properties."}
                </li>
                <li>
                  {language === "fr"
                    ? "En un seul geste, vos plats sont sublimés, tant par le goût que par la couleur. Au-delà de ses qualités culinaires, ce produit regorge de bienfaits pour la santé, grâce à ses propriétés."
                    : language === "de"
                    ? "Natürlich leuchtende Färbung (ohne künstliche Farbstoffe)"
                    : ""}
                </li>
                <li>
                  {language === "fr"
                    ? ""
                    : language === "de"
                    ? "Steigert sofort den wahrgenommenen Wert jedes Gerichts"
                    : ""}
                </li>
                <li>
                  {language === "fr"
                    ? ""
                    : language === "de"
                    ? "Gesundheitsvorteile (antioxidativ, beruhigend, entzündungshemmend)"
                    : ""}
                </li>
              </ul>
            </div>

            {/* One big image instead of 2×2 grid */}
            <div className="relative w-full overflow-hidden shadow-2xl aspect-[3/4] md:aspect-[2/3]">
              <img
                src="/safayra-culinary-grid-new.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-5 grid gap-6 md:grid-rows-[1fr_1fr] md:h-full">
            {/* Top image */}
            <div className="relative w-full overflow-hidden shadow-2xl aspect-[3/4] md:aspect-auto md:h-full">
              <img
                src="/safayra-dark-meal.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Bottom image */}
            <div className="relative w-full overflow-hidden shadow-2xl aspect-[4/3] md:aspect-auto md:h-full">
              <img
                src="/safayra-sushi.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Script tagline with halo */}
      <section
        id="culinary-tagline"
        className="relative w-full px-4 py-16 md:py-20 lg:py-24 overflow-visible"
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
          {t.tagline[language]}
        </p>
      </section>
    </div>
  );
};

export default CulinaryPage;
