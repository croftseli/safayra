import React from "react";

const WellnessPage = ({ language = "en" }) => {
  const t = {
    title: { en: "Wellness", fr: "Bien-être", de: "Wohlbefinden" },
    intro: {
      en: "Renowned for its soothing and revitalizing properties, saffron has been treasured for centuries. Rich in active compounds such as crocin, crocetin, and safranal, it has now found its place in modern wellness practices, meeting the growing demand for natural alternatives to conventional pharmaceutical solutions.",
      fr: "Réputé pour ses propriétés apaisantes et revitalisantes, le safran est apprécié depuis des siècles. Riche en composés actifs tels que la crocine, la crocétine et le safranal, il a désormais trouvé sa place dans les pratiques de bien-être modernes, répondant à la demande croissante d’alternatives naturelles aux solutions pharmaceutiques conventionnelles.",
      de: "Bekannt für seine beruhigenden und belebenden Eigenschaften, wird Safran seit Jahrhunderten geschätzt. Reich an Wirkstoffen wie Crocin, Crocetin und Safranal hat er inzwischen seinen Platz in modernen Wellness-Praktiken gefunden und entspricht der wachsenden Nachfrage nach natürlichen Alternativen zu herkömmlichen pharmazeutischen Lösungen.",
    },
    tagline: {
      en: "Saffron is a natural ally for everyday well-being",
      fr: "Le safran est un allié naturel du bien-être au quotidien",
      de: "Safran ist ein natürlicher Begleiter für tägliches Wohlbefinden",
    },
  };

  const features = [
    {
      img: "/safayra-saffron-pour.png",
      eyebrow: {
        en: "Infusions, Aromatherapy & Dietary Supplements",
        fr: "Infusions, aromathérapie & compléments alimentaires",
        de: "Aufgüsse, Aromatherapie & Nahrungsergänzung",
      },
      title: {
        en: "Nature’s touch in daily wellness",
        fr: "La touche de la nature au quotidien",
        de: "Natürliche Unterstützung im Alltag",
      },
      text: {
        en: "Saffron can be infused in teas, diffused in the air, or taken as a supplement. It helps reduce stress, improve sleep, and support emotional well-being.",
        fr: "Le safran peut être infusé dans des thés, diffusé dans l’air ou pris en complément. Il aide à réduire le stress, à améliorer le sommeil et à soutenir le bien-être émotionnel.",
        de: "Safran kann in Tees aufgegossen, in der Luft vernebelt oder als Ergänzung eingenommen werden. Er hilft, Stress zu reduzieren, den Schlaf zu verbessern und das emotionale Wohlbefinden zu fördern.",
      },
    },
    {
      img: "/safayra-oil-massage.png",
      eyebrow: {
        en: "Massage Oils & Body Treatments",
        fr: "Huiles de massage & soins du corps",
        de: "Massageöle & Körperbehandlungen",
      },
      title: {
        en: "A natural ally for relaxation and recovery",
        fr: "Un allié naturel pour détente et récupération",
        de: "Ein natürlicher Partner für Entspannung und Regeneration",
      },
      text: {
        en: "Rich in anti-inflammatory and antioxidant compounds, saffron soothes muscle tension, supports skin regeneration, and enhances physical recovery. Whether in oils or creams, it provides a luxurious sensory experience in wellness and physiotherapy settings.",
        fr: "Riche en composés anti-inflammatoires et antioxydants, le safran apaise les tensions musculaires, soutient la régénération de la peau et favorise la récupération. En huile ou en crème, il offre une expérience sensorielle luxueuse en bien-être et physiothérapie.",
        de: "Reich an entzündungshemmenden und antioxidativen Verbindungen beruhigt Safran Muskelverspannungen, unterstützt die Hautregeneration und fördert die Erholung. Als Öl oder Creme bietet er ein luxuriöses Sinneserlebnis in Wellness- und Physiotherapiekontexten.",
      },
    },
    {
      img: "/safayra-womens-health.png",
      eyebrow: {
        en: "Women’s Health",
        fr: "Santé des femmes",
        de: "Frauengesundheit",
      },
      title: {
        en: "Natural support for women’s balance",
        fr: "Un soutien naturel pour l’équilibre féminin",
        de: "Natürliche Unterstützung für das Gleichgewicht von Frauen",
      },
      text: {
        en: "Saffron supports women’s health by helping ease menstrual discomfort and promoting hormonal balance, particularly during the menstrual cycle and menopause.",
        fr: "Le safran soutient la santé des femmes en aidant à soulager l’inconfort menstruel et à favoriser l’équilibre hormonal, notamment pendant le cycle et la ménopause.",
        de: "Safran unterstützt die Frauengesundheit, lindert Menstruationsbeschwerden und fördert das hormonelle Gleichgewicht – besonders während Zyklus und Wechseljahren.",
      },
    },
  ];

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

      {/* Intro paragraph (below title) */}
      <section className="w-full px-4 pb-6 md:pb-8">
        <p className="max-w-3xl mx-auto text-center text-brand font-nanum text-base md:text-lg leading-relaxed">
          {t.intro[language]}
        </p>
      </section>

      {/* Alternating full-bleed rows — off-white bg + deep red text */}
      <section className="relative w-screen left-1/2 -translate-x-1/2 bg-[#EBD4AD]">
        {features.map((f, i) => {
          const imgFirst = i % 2 === 0; // even rows: image left, text right
          return (
            <div
              key={f.img}
              className="grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch"
            >
              {/* Image side */}
              <div className={`md:col-span-6 ${imgFirst ? "" : "md:order-2"}`}>
                <div className="relative w-full h-64 sm:h-80 md:h-[420px] lg:h-[520px] overflow-hidden">
                  <img
                    src={f.img}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text side */}
              <div
                className={`md:col-span-6 flex items-center ${
                  imgFirst ? "" : "md:order-1"
                }`}
              >
                <div className="w-full px-6 py-10 md:px-12 md:py-16 lg:px-16 text-[#4d1112]">
                  <div className="font-nanum font-bold text-sm md:text-base tracking-wide uppercase opacity-80 mb-2">
                    {f.eyebrow[language]}
                  </div>
                  <h3 className="font-nanum text-2xl md:text-3xl mb-3 md:mb-4">
                    {f.title[language]}
                  </h3>
                  <p className="font-nanum text-base md:text-lg leading-relaxed max-w-2xl">
                    {f.text[language]}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Tagline with halo */}
      <section
        id="tagline"
        className="relative w-full px-4 pt-20 md:pt-28 lg:pt-32 pb-12 md:pb-16 overflow-visible"
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

export default WellnessPage;
