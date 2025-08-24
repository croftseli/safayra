import React from "react";

const ProductsPage = ({ language = "en" }) => {
  const t = {
    title: { en: "Our Products", fr: "Nos Produits", de: "Unsere Produkte" },
    sentence: {
      en: "We customise the form of our product to your needs",
      fr: "Nous personnalisons la forme de notre produit selon vos besoins",
      de: "Wir passen die Form unseres Produkts an Ihre Bedürfnisse an",
    },
    p1: {
      en: "We offer Super Negin saffron, one of the highest-quality grades available on the market. It is distinguished by its uniform deep red color, long unbroken stigmas, and powerful aroma. Its purity and consistency make it ideal for culinary applications, traditional remedies, and premium product formulations.",
      fr: "Nous proposons du safran Super Negin, l’un des grades de la plus haute qualité disponibles sur le marché. Il se distingue par sa couleur rouge profond uniforme, ses longs stigmates entiers et son arôme puissant. Sa pureté et sa constance en font un choix idéal pour les applications culinaires, les remèdes traditionnels et les formulations haut de gamme.",
      de: "Wir bieten Super-Negin-Safran an, eine der hochwertigsten Qualitäten auf dem Markt. Er zeichnet sich durch seine gleichmäßig tiefrote Farbe, lange ungebrochene Narben und ein intensives Aroma aus. Seine Reinheit und gleichbleibende Qualität machen ihn ideal für kulinarische Anwendungen, traditionelle Heilmittel und hochwertige Produktformulierungen.",
    },
    p2: {
      en: "Super Negin saffron contains very few broken threads and provides a rich, distinctive taste. Thanks to its visual and aromatic qualities, it is among the most valuable saffron varieties, widely used by professionals in gastronomy, natural cosmetics, and wellness industries.",
      fr: "Le safran Super Negin contient très peu de filaments cassés et offre une saveur riche et distinctive. Grâce à ses qualités visuelles et aromatiques, il figure parmi les variétés de safran les plus précieuses, largement utilisées par les professionnels de la gastronomie, de la cosmétique naturelle et du bien-être.",
      de: "Super-Negin-Safran enthält nur sehr wenige gebrochene Fäden und bietet einen reichen, charakteristischen Geschmack. Dank seiner visuellen und aromatischen Eigenschaften zählt er zu den wertvollsten Safransorten und wird von Fachleuten in Gastronomie, Naturkosmetik und Wellness breit eingesetzt.",
    },
    tagline: {
      en: "A touch to elevate your everyday lifestyle",
      fr: "Une touche pour sublimer votre quotidien",
      de: "Ein Hauch, der Ihren Alltag veredelt",
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
          {/* blur overlay */}
          <div
            className="hidden md:block pointer-events-none absolute inset-x-0 bottom-0
                 h-[40%] backdrop-blur-[1px]
                 [mask-image:linear-gradient(to_top,black_80%,transparent_95%)]
                 [-webkit-mask-image:linear-gradient(to_top,black_80%,transparent_95%)]"
          />
        </div>
      </section>

      {/* One-line sentence */}
      <section className="w-full px-4">
        <p className="max-w-3xl mx-auto text-center text-brand font-nanum text-base md:text-lg leading-relaxed">
          {t.sentence[language]}
        </p>
      </section>

      {/* Two paragraphs */}
      <section className="w-full px-4 pt-8 md:pt-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-brand font-nanum text-base md:text-lg leading-relaxed">
            {t.p1[language]}
          </p>
          <p className="text-brand font-nanum text-base md:text-lg leading-relaxed">
            {t.p2[language]}
          </p>
        </div>
      </section>

      <section id="products" className="w-full px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Top row: 3 images */}
            <div className="relative md:col-span-3 h-60 sm:h-64 md:h-72 lg:h-80 rounded-none overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: "url('/products-1.jpg')" }}
                aria-hidden="true"
              />
            </div>

            <div className="relative md:col-span-4 h-60 sm:h-64 md:h-72 lg:h-80 rounded-none overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: "url('/products-2.jpg')" }}
                aria-hidden="true"
              />
            </div>

            <div className="relative md:col-span-5 h-60 sm:h-64 md:h-72 lg:h-80 rounded-none overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: "url('/products-3.jpg')" }}
                aria-hidden="true"
              />
            </div>

            {/* Second row: beige text panel (left) + image (right) */}
            <div className="md:col-span-8 bg-[#EBD4AD]/90 shadow-xl rounded-none p-6 md:p-10 flex flex-col">
              <p className="font-nanum text-[#4d1112] text-lg md:text-xl leading-relaxed">
                {language === "fr"
                  ? "Nous fournissons du safran Super Negin en vrac — en poudre ou en filaments — disponible en différentes quantités selon vos besoins."
                  : language === "de"
                  ? "Wir liefern Super-Negin-Safran in Großmengen – als Pulver oder Fäden – in verschiedenen Mengen ganz nach Ihren Bedürfnissen."
                  : "We supply Super Negin saffron in bulk—either in powder or filament form—available in various quantities to suit your needs."}
              </p>
              <br />
              <p className="font-nanum text-[#4d1112] text-lg md:text-xl leading-relaxed">
                {language === "fr"
                  ? "Pour la vente au détail et prête à l’emploi, nous proposons également du safran pré-emballé en sachets de 0,4 g. Des grammages personnalisés peuvent être organisés sur demande."
                  : language === "de"
                  ? "Für den Einzelhandel und den sofortigen Verkauf bieten wir zudem vorverpackten Safran in 0,4-g-Beuteln an. Individuelle Grammgewichte sind auf Anfrage möglich."
                  : "For retail and ready-to-sell use, we also provide pre-packaged saffron in 0.4 g sachets. Custom gram weights can be arranged upon request."}
              </p>
            </div>

            <div className="relative md:col-span-4 h-60 sm:h-64 md:h-72 lg:h-80 rounded-none overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: "url('/products-4.jpg')" }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tagline with wider, slightly dimmer halo */}
      <section
        id="products-tagline"
        className="relative w-full px-4 py-12 md:py-16 lg:py-20 overflow-visible"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          {/* wider base glow */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                 w-[80vmin] md:w-[72vmin] lg:w-[64vmin] aspect-square rounded-full blur-3xl
                 bg-[radial-gradient(circle_at_center,rgba(235,212,173,0.18)_0%,rgba(235,212,173,0.09)_42%,transparent_78%)]"
          />
          {/* gentle core */}
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

export default ProductsPage;
