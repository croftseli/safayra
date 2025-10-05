import React from "react";

const AboutPage = ({ language = "en" }) => {
  const copy = {
    title: {
      en: "Who are we",
      fr: "Qui sommes-nous",
      de: "Wer sind wir",
    },
    p1: {
      en: "Two women, two cultures, one shared vision.",
      fr: "Deux femmes, deux cultures, une vision commune.",
      de: "Zwei Frauen, zwei Kulturen, eine gemeinsame Vision.",
    },
    p2: {
      en: "We come from two different worlds, Kiyansu from Iran and Lou from France. At first glance, our cultures couldn’t be more different, yet it was exactly this difference that became our strength. By sharing and learning from one another, we discovered how much beauty lies in unity and connection.",
      fr: "Nous venons de deux horizons différents, Kiyansu d’Iran et Lou de France. À première vue, tout semblait nous opposer, et pourtant, c’est cette différence qui est devenue notre force. En partageant et en apprenant l’une de l’autre, nous avons découvert combien la véritable richesse réside dans l’unité et le lien humain.",
      de: "Wir kommen aus zwei verschiedenen Welten – Kiyansu aus dem Iran und Lou aus Frankreich. Auf den ersten Blick könnten unsere Kulturen kaum unterschiedlicher sein, und doch wurde genau diese Verschiedenheit zu unserer Stärke. Durch das Teilen und gegenseitige Lernen haben wir entdeckt, wie viel Schönheit in Einheit und Verbindung liegt.",
    },
    p3: {
      en: "Our conversations often turned to saffron, the most precious spice of Iran, used in almost every aspect of life, from food to wellness rituals. We both share a love for natural ingredients that make people feel good and empowered, and we were inspired by how women in Iran have passed on the tradition of using saffron for centuries. That’s when the idea of Safayra was born.",
      fr: "Nos échanges nous ramenaient sans cesse au safran, ce trésor d’Iran présent dans tant de moments de la vie quotidienne, qu’il s’agisse de cuisine ou de rituels de bien-être. Nous partageons une même passion pour les ingrédients naturels, ceux qui nourrissent le corps, apaisent l’esprit et redonnent confiance. C’est de là qu’est née l’idée de Safayra.",
      de: "Oft drehten sich unsere Gespräche um Safran – das wertvollste Gewürz Irans, das in fast allen Lebensbereichen Verwendung findet, von der Küche bis zu Wellnessritualen. Wir teilen beide die Liebe zu natürlichen Zutaten, die Menschen guttun und stärken. Besonders inspiriert hat uns, wie Frauen im Iran seit Jahrhunderten die Tradition der Safranverwendung weitergeben. So entstand die Idee zu Safayra.",
    },
    p4: {
      en: "For us, Safayra is not just a brand, it’s an experience. We want people to fall in love with exploring cultures, just as we did with each other’s. Safayra is about connection, discovery, and honoring traditions that bring people closer together.",
      fr: "Safayra n’est pas seulement une marque, c’est une expérience. Nous voulons transmettre plus qu’un produit : une invitation à tomber amoureux de la découverte des cultures, comme nous l’avons fait à travers la rencontre de la nôtre. Safayra, c’est le goût de la connexion, de l’exploration et du respect des traditions qui rapprochent les gens.",
      de: "Für uns ist Safayra nicht nur eine Marke, sondern eine Erfahrung. Wir möchten Menschen dazu inspirieren, sich in die Entdeckung von Kulturen zu verlieben – so wie wir es in unserer Begegnung getan haben. Safayra steht für Verbindung, Entdeckung und die Wertschätzung von Traditionen, die Menschen einander näherbringen.",
    },
    p5: {
      en: "We chose saffron from Iran because that is where its story begins. By working directly with local cultivators in Mashhad, we honor the people who have mastered the art of harvesting saffron for generations. We listen to their stories, we learn from their way of life, and we carry that authenticity with us to Europe with every batch being lab-tested.",
      fr: "Nous avons choisi le safran d’Iran parce que c’est là que son histoire prend racine. En travaillant directement avec les cultivateurs de Mashhad, nous rendons hommage à ceux qui, génération après génération, ont su préserver l’art délicat de la récolte du safran. Leurs récits, leur quotidien et leur savoir-faire nourrissent notre démarche. Chaque lot que nous apportons en Europe est rigoureusement testé en laboratoire afin de garantir cette authenticité.",
      de: "Wir haben uns für Safran aus dem Iran entschieden, denn dort beginnt seine Geschichte. Durch die direkte Zusammenarbeit mit lokalen Anbauern in Mashhad ehren wir die Menschen, die seit Generationen die Kunst des Safrananbaus perfektioniert haben. Wir hören ihre Geschichten, lernen aus ihrem Lebensstil und tragen diese Authentizität mit jedem im Labor geprüften Batch nach Europa.",
    },
    p6: {
      en: "Safayra is our journey from the saffron fields of Iran to the heart of Europe, and we invite you to be part of it.",
      fr: "Safayra est notre voyage, des champs de safran d’Iran jusqu’au cœur de l’Europe, et nous vous invitons à en faire partie.",
      de: "Safayra ist unsere Reise – von den Safranfeldern des Iran bis ins Herz Europas. Und wir laden Sie ein, Teil davon zu sein.",
    },
    tagline: {
      en: "The most precious spice in the world",
      fr: "L’épice la plus précieuse au monde",
      de: "Das kostbarste Gewürz der Welt",
    },
    heartTitle: {
      en: "The Heart of Saffron Production",
      fr: "Le cœur de la production de safran",
      de: "Das Herz der Safranproduktion",
    },
    heartP1: {
      en: "Iran, which accounts for nearly 90% of global production, is the historical heartland of saffron. Its cultivation relies on ancestral know-how. Each flower is hand-picked at dawn, and the stigmas are delicately removed one by one. The flowering season, which lasts only a few weeks from late October to mid-November, requires an intense pace of work within a short time frame.",
      fr: "L’Iran représentant près de 90% de la production mondiale, est le berceau historique du safran. Sa culture repose sur un savoir-faire ancestral. Chaque fleur est cueillie à l’aube, et les stigmates sont délicatement retirés un à un. La floraison, qui ne dure que quelques semaines de fin octobre à mi-novembre, impose un rythme de travail intense sur une période très courte.",
      de: "Der Iran, der nahezu 90 % der weltweiten Produktion ausmacht, ist das historische Herzland des Safrans. Sein Anbau beruht auf jahrhundertealtem Wissen. Jede Blüte wird im Morgengrauen von Hand gepflückt, und die Narben werden sorgfältig einzeln entfernt. Die Blütezeit, die nur wenige Wochen von Ende Oktober bis Mitte November dauert, erfordert ein intensives Arbeitstempo in kurzer Zeit.",
    },
    heartP2: {
      en: "This artisanal method, combined with the rarity of the harvest, is what makes saffron the most precious spice in the world.",
      fr: "Cette méthode artisanale, combinée à la rareté de la récolte, fait du safran l’épice la plus précieuse au monde. Nous croyons que l’excellence naît de la relation. C’est pourquoi nous collaborons étroitement avec nos clients, des chefs aux détaillants, afin d’offrir non seulement du safran, mais une expérience réfléchie et sur mesure.",
      de: "Diese handwerkliche Methode, verbunden mit der Seltenheit der Ernte, macht Safran zum kostbarsten Gewürz der Welt. Wir glauben, dass Exzellenz aus Verbindung entsteht – deshalb arbeiten wir eng mit unseren Kunden, von Köchen bis hin zu Einzelhändlern, zusammen, um nicht nur Safran zu liefern, sondern ein durchdachtes, maßgeschneidertes Erlebnis.",
    },
  };

  return (
    <div className="w-full pt-8 md:pt-12">
      {/* Title */}
      <section className="w-full px-4 py-12 md:py-16">
        <div className="relative w-fit mx-auto">
          <h1 className="text-center text-brand font-nanum text-4xl md:text-5xl">
            {copy.title[language]}
          </h1>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="relative w-screen left-1/2 -translate-x-1/2 bg-[#EBD4AD] overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="relative min-h-[360px] md:min-h-[520px]">
            <img
              src="/safayra-saffron-flowers-field.png"
              alt="Safayra saffron flowers field"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

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
              {copy.p4[language] && (
                <p className="text-[#4d1112] font-nanum text-base md:text-lg leading-relaxed">
                  {copy.p4[language]}
                </p>
              )}
              {copy.p5[language] && (
                <p className="text-[#4d1112] font-nanum text-base md:text-lg leading-relaxed">
                  {copy.p5[language]}
                </p>
              )}
              {copy.p6[language] && (
                <p className="text-[#4d1112] font-nanum text-base md:text-lg leading-relaxed">
                  {copy.p6[language]}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section
        id="tagline"
        className="relative w-full px-4 pt-24 md:pt-32 lg:pt-40 pb-8 md:pb-10 overflow-visible"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                 w-[80vmin] md:w-[72vmin] lg:w-[64vmin] aspect-square rounded-full blur-3xl
                 bg-[radial-gradient(circle_at_center,rgba(235,212,173,0.18)_0%,rgba(235,212,173,0.09)_42%,transparent_78%)]"
          />
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

      {/* Heart of Production */}
      <section id="heart-of-production" className="w-full px-4 py-16 md:py-24">
        <h2 className="text-left text-brand font-nanum text-3xl md:text-4xl mb-6 md:mb-8">
          {copy.heartTitle[language]}
        </h2>

        <div className="max-w-4xl text-left">
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
