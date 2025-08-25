import React from "react";

const SkinPage = ({ language = "en" }) => {
  const title = {
    en: "Red Gold for the Skin",
    fr: "Or rouge pour la peau",
    de: "Rotes Gold für die Haut",
  };

  return (
    <div className="w-full pt-8 md:pt-12">
      {/* Title with bottom blur */}
      <section className="w-full px-4 py-12 md:py-16">
        <div className="relative w-fit mx-auto">
          <h1 className="text-center text-brand font-nanum text-4xl md:text-5xl">
            {title[language]}
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

      {/* Why skincare loves saffron — full-bleed, second image sets the height */}
      <section className="relative w-screen left-1/2 -translate-x-1/2 py-12 md:py-16">
        <div className="grid grid-cols-12 gap-6 px-0 items-stretch">
          {/* Left image — touches left edge, matches row height */}
          <div className="col-span-12 md:col-span-2">
            <div className="h-full">
              <div className="relative w-full h-full overflow-hidden shadow-2xl">
                <img
                  src="/safayra-bowl-safron-cropped.jpg"
                  alt="Bowl of saffron"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second image — square; its height sets the row height on md+ */}
          <div className="col-span-12 md:col-span-5">
            {/* Square on all breakpoints so width of this column sets the height */}
            <div className="relative w-full overflow-hidden shadow-2xl aspect-square">
              <img
                src="/safayra-saffron-oil-parfume.JPG"
                alt="Saffron oil & perfume"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text column */}
          <div className="col-span-12 md:col-span-5 self-center pl-4 md:pl-6 lg:pl-8 pr-2 md:pr-4 lg:pr-6">
            <h2 className="text-brand font-nanum text-2xl md:text-3xl mb-4 md:mb-6">
              {language === "fr"
                ? "Pourquoi le soin de la peau aime le safran"
                : language === "de"
                ? "Warum Hautpflege Safran liebt"
                : "Why skincare loves saffron"}
            </h2>

            <p className="text-brand font-nanum text-base md:text-lg leading-relaxed">
              {language === "fr"
                ? "Intégré aux soins de la peau, le safran aide à raviver l’éclat naturel, à améliorer la fermeté et à réduire visiblement les signes de fatigue et de vieillissement. Grâce à sa richesse en vitamine C et à ses propriétés inhibitrices de la mélanine, il favorise un teint plus homogène, atténue les taches, l’hyperpigmentation et les cicatrices d’acné, tout en améliorant visiblement la texture de la peau."
                : language === "de"
                ? "In die Hautpflege integriert, hilft Safran, die natürliche Ausstrahlung der Haut zu beleben, die Festigkeit zu verbessern und sichtbare Anzeichen von Müdigkeit und Alterung zu reduzieren. Dank seines hohen Vitamin-C-Gehalts und melaninhemmender Eigenschaften trägt er zu einem ebenmäßigeren Teint bei, lindert dunkle Flecken, Hyperpigmentierung und Aknenarben und verbessert sichtbar die Hautstruktur."
                : "When integrated into skincare, saffron helps revive the skin's natural radiance, enhance firmness, and visibly reduce signs of fatigue and aging. Thanks to its high vitamin C content and melanin-inhibiting properties, it contributes to a more even complexion, fading dark spots, hyperpigmentation, and acne scars, while visibly improving skin texture."}
            </p>

            <p className="text-brand font-nanum text-base md:text-lg leading-relaxed mt-6">
              {language === "fr"
                ? "Grâce à ses actions anti-inflammatoires et antibactériennes, le safran est un allié puissant pour prévenir les imperfections, apaiser les irritations et favoriser la régénération cellulaire. Idéal pour les peaux ternes, sensibles ou déshydratées, il apporte également une hydratation naturelle, aidant à restaurer douceur, souplesse et luminosité durable."
                : language === "de"
                ? "Durch seine entzündungshemmenden und antibakteriellen Eigenschaften ist Safran ein starker Verbündeter zur Vorbeugung von Unreinheiten, zur Beruhigung von Reizungen und zur Förderung der Zellregeneration. Ideal für matte, empfindliche oder dehydrierte Haut liefert Safran zudem natürliche Feuchtigkeit und hilft, Weichheit, Geschmeidigkeit und lang anhaltende Leuchtkraft wiederherzustellen."
                : "Its anti-inflammatory and antibacterial actions make saffron a powerful ally in preventing blemishes, soothing irritation, and promoting cellular regeneration. Ideal for dull, sensitive, or dehydrated skin, saffron also delivers natural hydration, helping to restore softness, smoothness, and lasting luminosity."}
            </p>
          </div>
        </div>
      </section>

      {/* Visible benefits */}
      <section className="w-full px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-brand font-nanum text-3xl md:text-4xl mb-6 md:mb-8">
            {language === "fr"
              ? "Bénéfices visibles pour votre peau"
              : language === "de"
              ? "Sichtbare Vorteile für Ihre Haut"
              : "Visible benefits for your skin"}
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: "brightening",
                img: "/safayra-skin-benefit-brightening-new.jpg",
                title: { en: "Brightening", fr: "Éclat", de: "Aufhellend" },
                desc: {
                  en: "Revives dull skin and evens out complexion",
                  fr: "Ravive les peaux ternes et unifie le teint",
                  de: "Belebt müde Haut und sorgt für einen ebenmäßigen Teint",
                },
                alt: {
                  en: "Close-up of bright skin",
                  fr: "Gros plan d’une peau lumineuse",
                  de: "Nahaufnahme strahlender Haut",
                },
              },
              {
                id: "calming",
                img: "/safayra-skin-benefit-calming-new.jpg",
                title: { en: "Calming", fr: "Apaisant", de: "Beruhigend" },
                desc: {
                  en: "Reduces inflammation and soothes sensitivities",
                  fr: "Réduit l’inflammation et apaise les sensibilités",
                  de: "Reduziert Entzündungen und lindert Empfindlichkeiten",
                },
                alt: {
                  en: "Towel-wrapped head at spa",
                  fr: "Tête enveloppée d’une serviette au spa",
                  de: "Mit Handtuch umwickelter Kopf im Spa",
                },
              },
              {
                id: "hydrating",
                img: "/safayra-skin-benefit-hydrating-new-2.png",
                title: {
                  en: "Hydrating",
                  fr: "Hydratant",
                  de: "Feuchtigkeitsspendend",
                },
                desc: {
                  en: "Restores softness and moisture",
                  fr: "Restaure douceur et hydratation",
                  de: "Stellt Geschmeidigkeit und Feuchtigkeit wieder her",
                },
                alt: {
                  en: "Dropper with skincare serum",
                  fr: "Pipette avec sérum de soin",
                  de: "Pipette mit Hautserum",
                },
              },
              {
                id: "regenerating",
                img: "/safayra-skin-benefit-regenerating-new-3.png",
                title: {
                  en: "Regenerating",
                  fr: "Régénérant",
                  de: "Regenerierend",
                },
                desc: {
                  en: "Promotes cellular renewal",
                  fr: "Favorise le renouvellement cellulaire",
                  de: "Fördert die Zellregeneration",
                },
                alt: {
                  en: "Hands showing smooth skin",
                  fr: "Mains montrant une peau lisse",
                  de: "Hände mit glatter Haut",
                },
              },
            ].map((c) => (
              <div
                key={c.id}
                className="group relative h-[340px] md:h-[563px] overflow-hidden shadow-2xl rounded-none"
              >
                {/* Image */}
                <img
                  src={c.img}
                  alt={c.alt[language]}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                  <h3 className="font-nanum text-xl md:text-2xl font-semibold text-[#4d1112]">
                    {c.title[language]}
                  </h3>
                  <p className="mt-2 font-nanum text-sm md:text-base text-[#4d1112] leading-relaxed max-w-[90%]">
                    {c.desc[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline: Rooted in tradition... with halo */}
      <section
        id="tagline-innovation"
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
          {language === "fr"
            ? "Ancré dans la tradition, perfectionné par la science"
            : language === "de"
            ? "In der Tradition verwurzelt, durch Wissenschaft perfektioniert"
            : "Rooted in tradition, perfected by science"}
        </p>
      </section>

      {/* Key actives grid */}
      <section className="w-full px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto text-brand">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
            {[
              {
                id: "crocin",
                title: { en: "Crocin", fr: "Crocine", de: "Crocin" },
                points: {
                  en: [
                    "Antioxidant that protects from oxidative stress",
                    "Stimulates collagen production",
                    "Enhances brightness & skin elasticity",
                  ],
                  fr: [
                    "Antioxydant qui protège du stress oxydatif",
                    "Stimule la production de collagène",
                    "Renforce l’éclat et l’élasticité de la peau",
                  ],
                  de: [
                    "Antioxidans, schützt vor oxidativem Stress",
                    "Regt die Kollagenproduktion an",
                    "Steigert Ausstrahlung & Hautelastizität",
                  ],
                },
              },
              {
                id: "safranal",
                title: { en: "Safranal", fr: "Safranal", de: "Safranal" },
                points: {
                  en: [
                    "Soothes irritation",
                    "Antibacterial – ideal for acne-prone skin",
                    "Reduces redness",
                  ],
                  fr: [
                    "Apaise les irritations",
                    "Antibactérien – idéal pour les peaux à tendance acnéique",
                    "Réduit les rougeurs",
                  ],
                  de: [
                    "Beruhigt Irritationen",
                    "Antibakteriell – ideal bei zu Akne neigender Haut",
                    "Reduziert Rötungen",
                  ],
                },
              },
              {
                id: "vitamin-c",
                title: { en: "Vitamin C", fr: "Vitamine C", de: "Vitamin C" },
                points: {
                  en: [
                    "Fades pigmentation & dark spots",
                    "Brightens and smooths skin texture",
                  ],
                  fr: [
                    "Atténue la pigmentation et les taches",
                    "Illumine et lisse le grain de peau",
                  ],
                  de: [
                    "Mildert Pigmentflecken & Hyperpigmentierung",
                    "Verleiht Leuchtkraft und glättet das Hautbild",
                  ],
                },
              },
              {
                id: "crocetin",
                title: { en: "Crocetin", fr: "Crocétine", de: "Crocetin" },
                points: {
                  en: ["Improves cell regeneration", "Boosts microcirculation"],
                  fr: [
                    "Améliore la régénération cellulaire",
                    "Booste la microcirculation",
                  ],
                  de: [
                    "Verbessert die Zellregeneration",
                    "Fördert die Mikrozirkulation",
                  ],
                },
              },
            ].map((b) => (
              <div key={b.id} className="text-left">
                <h3 className="font-nanum font-bold text-xl md:text-2xl mb-3 md:mb-4">
                  {b.title[language]}
                </h3>
                <ul className="font-nanum text-sm md:text-base leading-relaxed space-y-1">
                  {b.points[language].map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkinPage;
