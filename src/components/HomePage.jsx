import React from "react";

const HomePage = ({ language, setActiveTab }) => {
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
        img: "/safayra-saffron-cake-new.jpg",
        title: {
          en: "Enhancing the culinary experience",
          fr: "Sublimer l'expérience culinaire",
          de: "Das kulinarische Erlebnis bereichern",
        },
        desc: {
          en: "Saffron to elevate your gastronomic creations.",
          fr: "Safran pour chefs, restaurants et créations gastronomiques.",
          de: "Safran für Köche, Restaurants und gastronomische Kreationen.",
        },
      },
      {
        id: "skin",
        pageId: "skin",
        img: "/safayra-red-gold-for-skin-new.jpg",
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
        // img: "/safayra-wellness-oil-bottles.jpg",
        img: "/safayra-wellness-oil.png",
        title: {
          en: "Wellness",
          fr: "Bien-être",
          de: "Wohlbefinden",
        },
        desc: {
          en: "A natural ally for your everyday well-being.",
          fr: "Le safran est un allié naturel du bien-être au quotidien.",
          de: "Safran ist ein natürlicher Begleiter für tägliches Wohlbefinden.",
        },
      },
    ],
    sourcing: {
      en: "Sourced directly from Iran, grown with care and respect for tradition. Ethically harvested and lab-tested, our saffron reflects purity, culture, and quality.",
      fr: "Directement sourcé d’Iran, cultivé avec soin et dans le respect des traditions. Récolté de manière éthique et testé en laboratoire, notre safran reflète la pureté, la culture et la qualité.",
      de: "Direkt aus dem Iran bezogen, mit Sorgfalt und Respekt vor der Tradition angebaut. Ethisch geerntet und im Labor geprüft, spiegelt unser Safran Reinheit, Kultur und Qualität wider.",
    },
  };

  const cta = {
    title: {
      en: "Let’s talk saffron",
      fr: "Parlons safran",
      de: "Sprechen wir über Safran",
    },
    body: {
      en: "From restaurants to retail, we tailor our premium Super Negin saffron to your needs. Tell us what you’re building, and we’ll craft the right fit.",
      fr: "De la restauration au retail, nous adaptons notre safran Super Negin à vos besoins. Dites-nous votre projet — cuisine, soin, bien-être — et nous trouverons la meilleure solution.",
      de: "Von Gastronomie bis Handel: Wir passen unseren Super-Negin-Safran Ihren Anforderungen an. Erzählen Sie uns Ihr Vorhaben – Kulinarik, Pflege oder Wellness – und wir finden die passende Lösung.",
    },
    btn: { en: "Contact us", fr: "Nous contacter", de: "Kontakt aufnehmen" },
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Full-screen background image */}
      <div
        className="absolute top-0 left-0 w-screen h-screen z-0"
        style={{
          backgroundImage: "url('/safayra-saffron-homepage-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-50" /> */}
      </div>

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center">
        {/* Heading */}
        <div className="text-center pt-[24vh] md:pt-[28vh] lg:pt-[32vh] pb-0 w-full">
          {/* Logo with blur effect */}
          <div className="relative w-fit mx-auto mt-2">
            <img
              src="/safayra-text-logo.png"
              alt="Safayra"
              className="mx-auto h-16 sm:h-24 md:h-32 lg:h-40 xl:h-44 w-auto max-w-[84vw] object-contain"
              loading="eager"
              decoding="async"
            />
            {/* blur 
            <div
              className="hidden md:block pointer-events-none absolute inset-x-0 bottom-0
             h-[50%] backdrop-blur-[2.5px]
             [mask-image:linear-gradient(to_top,black_80%,transparent)]
             [-webkit-mask-image:linear-gradient(to_top,black_80%,transparent)]"
            /> */}
          </div>

          <p className="text-base md:text-lg lg:text-xl mt-3 text-brand font-nanum leading-relaxed">
            {language === "en" ? (
              <>
                A journey from the sun-drenched fields
                <br className="block" />
                of Iran to the heart of Europe.
              </>
            ) : language === "fr" ? (
              <>
                Un voyage des champs ensoleillés d'Iran
                <br className="block" />
                au cœur de l'Europe.
              </>
            ) : (
              <>
                Eine Reise von den sonnenverwöhnten Feldern
                <br className="block" />
                des Iran ins Herz Europas.
              </>
            )}
          </p>
        </div>

        {/* 3 Cards */}
        <div className="w-full max-w-6xl mx-auto px-4 pb-20 mt-[15vh] md:mt-[25vh] lg:mt-[30vh]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.cards.map((c) => (
              <div
                key={c.id}
                className="group relative h-[540px] md:h-[580px] rounded-none overflow-hidden shadow-2xl"
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${c.img}')` }}
                  aria-hidden="true"
                />

                {/* Dark top gradient for contrast (no beige wedge) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="relative z-10 h-full p-7 md:p-8 flex flex-col text-center">
                  <div className="mt-10 md:mt-14 lg:mt-16">
                    <h3 className="text-brand font-nanum text-xl md:text-2xl font-semibold leading-snug drop-shadow-md">
                      {c.title[language]}
                    </h3>
                    <p className="mt-3 text-brand font-nanum text-sm md:text-base leading-relaxed max-w-[90%] mx-auto">
                      {c.desc[language]}
                    </p>
                  </div>

                  {/* CTA bottom-left */}
                  <div className="mt-auto pt-8 self-start">
                    <a
                      href={`#${c.pageId}`}
                      className="inline-flex items-center rounded-none
                        bg-[#EBD4AD]/70 hover:bg-[#EBD4AD]/90 focus:bg-[#EBD4AD]/95
                        px-4 py-2 text-sm font-bold text-[#2b1b1b]
                        shadow-sm transition-colors duration-200
                        focus:outline-none focus:ring-2 focus:ring-[#EBD4AD]/50"
                    >
                      {t.learn}
                    </a>
                  </div>
                </div>

                {/* Whole-card click (on top, accessible) */}
                <a
                  href={`#${c.pageId}`}
                  aria-label={`${c.title[language]} — ${t.learn}`}
                  className="absolute inset-0 z-30 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#EBD4AD]/70"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sourcing paragraph section */}
      <section id="sourcing" className="w-full px-4 py-16 md:py-24">
        <p
          className="max-w-4xl mx-auto text-center text-brand font-nanum
                text-xl md:text-2xl lg:text-3xl leading-relaxed md:leading-normal"
        >
          {t.sourcing[language]}
        </p>
      </section>

      {/* Our Products */}
      <section id="products" className="w-full px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-brand font-nanum text-4xl md:text-5xl mb-6">
            {language === "fr"
              ? "Nos Produits"
              : language === "de"
              ? "Unsere Produkte"
              : "Our Products"}
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Top row: 2 images (unchanged) */}
            <div className="relative md:col-span-4 h-72 sm:h-80 md:h-96 lg:h-[28rem] rounded-none overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{
                  backgroundImage: "url('/safayra-saffron-glass-new-2.jpg')",
                }}
                aria-hidden="true"
              />
            </div>

            <div className="relative md:col-span-8 h-72 sm:h-80 md:h-96 lg:h-[28rem] rounded-none overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{
                  backgroundImage: "url('/safayra-saffron-two-bowls-new.png')",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Second row: beige text panel (left) + image (right) */}
            <div
              className="md:col-span-8 bg-[#EBD4AD]/90 shadow-xl rounded-none p-6 md:p-10 flex flex-col
               h-auto"
            >
              <p className="font-serif text-[#4d1112] text-lg md:text-xl leading-relaxed">
                {language === "fr"
                  ? "Nous fournissons du safran Super Negin en vrac, en poudre ou en filaments, disponible en différentes quantités selon vos besoins. Chaque lot est soigneusement sélectionné pour garantir une qualité exceptionnelle et une couleur intense."
                  : language === "de"
                  ? "Wir liefern Super-Negin-Safran in Großmengen, als Pulver oder Fäden, in verschiedenen Mengen ganz nach Ihren Bedürfnissen. Jede Charge wird sorgfältig ausgewählt, um höchste Qualität und intensive Farbe sicherzustellen."
                  : "We supply Super Negin saffron in bulk, either in powder or filament form. Each batch is carefully selected to ensure outstanding quality and vibrant color."}
              </p>
              <br />
              <p className="font-serif text-[#4d1112] text-lg md:text-xl leading-relaxed">
                {language === "fr"
                  ? "Pour la vente au détail et prête à l’emploi, nous proposons également du safran pré-emballé en sachets de 0,4 g. Des grammages personnalisés peuvent être organisés sur demande. Notre processus d’emballage protège l’arôme délicat et les propriétés naturelles du safran."
                  : language === "de"
                  ? "Für den Einzelhandel und den sofortigen Verkauf bieten wir zudem vorverpackten Safran in 0,4-g-Beuteln an. Individuelle Grammgewichte sind auf Anfrage möglich. Unsere Verpackung schützt das feine Aroma und die natürlichen Eigenschaften des Safrans."
                  : "For retail and ready-to-sell use, we also provide pre-packaged saffron in 0.4 g sachets. Custom gram weights can be arranged upon request. Our packaging safeguards the delicate aroma and natural properties of saffron."}
              </p>
              <br />
              <p className="font-serif text-[#4d1112] text-lg md:text-xl leading-relaxed">
                {language === "fr"
                  ? "De plus, nous collaborons avec des producteurs de confiance et garantissons une traçabilité complète. Cela signifie que vous recevez toujours un produit pur, authentique et respectueux des normes internationales."
                  : language === "de"
                  ? "Darüber hinaus arbeiten wir mit vertrauenswürdigen Produzenten zusammen und garantieren volle Rückverfolgbarkeit. So erhalten Sie stets ein reines, authentisches Produkt, das internationalen Standards entspricht."
                  : "We work closely with trusted growers and ensure full traceability. This means you always receive a pure, authentic product that meets international standards. It’s about excellence, heritage, and the hands that make it all possible."}
              </p>

              <div className="mt-12 md:mt-16 self-end">
                <a
                  href="#product"
                  className="inline-flex items-center rounded-none
                   bg-white/70 hover:bg-white/90 focus:bg-white
                   px-4 py-2 text-sm font-bold text-[#2b1b1b]
                   shadow-sm transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-[#EBD4AD]/50"
                >
                  {language === "fr"
                    ? "En savoir plus"
                    : language === "de"
                    ? "Mehr erfahren"
                    : "Learn more"}
                </a>
              </div>
            </div>

            {/* Image column that stretches to match the beige panel height */}
            <div className="md:col-span-4 rounded-none overflow-hidden shadow-2xl">
              <img
                src="/safayra-saffron-bowl-new.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA — contained, dark red background */}
      <section className="w-full px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto bg-[#681c18] rounded-none shadow-2xl">
          <div className="px-6 md:px-10 py-10 md:py-14 text-center">
            <h2 className="text-brand font-nanum text-3xl md:text-4xl">
              {cta.title[language]}
            </h2>
            <p className="mt-3 text-brand font-nanum text-base md:text-lg leading-relaxed">
              {cta.body[language]}
            </p>

            <div className="mt-6 md:mt-8">
              <a
                href="#contact"
                className="inline-flex items-center rounded-none
       bg-[#EBD4AD]/90 hover:bg-[#EBD4AD] focus:bg-[#EBD4AD]
       px-5 py-2.5 text-sm md:text-base font-bold text-[#4d1112]
       shadow-sm transition-colors duration-200
       focus:outline-none focus:ring-2 focus:ring-[#EBD4AD]/40"
              >
                {cta.btn[language]}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
