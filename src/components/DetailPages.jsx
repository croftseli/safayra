import React from "react";
import { ArrowLeft } from "lucide-react";
import SkinPage from "./SkinPage";
import CulinaryPage from "./CulinaryPage";
import WellnessPage from "./WellnessPage";

const titles = {
  skin: {
    en: "Red Gold For The Skin",
    fr: "Or rouge pour la peau",
    de: "Rotes Gold für die Haut",
  },
  culinary: {
    en: "Enhancing the culinary experience",
    fr: "Sublimer l'expérience culinaire",
    de: "Das kulinarische Erlebnis bereichern",
  },
  wellness: {
    en: "Wellness",
    fr: "Bien-être",
    de: "Wohlbefinden",
  },
};

const DetailPages = ({ pageId, language = "en", onBack }) => {
  const t = {
    back: { en: "Back", fr: "Retour", de: "Zurück" },
  };

  const renderPage = () => {
    switch (pageId) {
      case "skin":
        return <SkinPage language={language} />;

      // Add real components as you create them:
      case "culinary":
        return <CulinaryPage language={language} />;
      case "wellness":
        return <WellnessPage language={language} />;
      // case "products": return <ProductsPage language={language} />;
      // case "origin-and-tradition": return <OriginAndTraditionPage language={language} />;
      // case "quality-and-testing": return <QualityAndTestingPage language={language} />;
      // case "recipes-and-uses": return <RecipesAndUsesPage language={language} />;

      default:
        return (
          <GenericDetail
            title={(titles[pageId] && titles[pageId][language]) || pageId}
          />
        );
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Top bar with Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-md
                     bg-brand/80 hover:bg-brand focus:bg-brand
                     px-3 py-2 text-sm font-medium text-[#2b1b1b]
                     shadow-sm transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-[#EBD4AD]/50"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.back[language]}
        </button>
      </div>

      {/* Page content */}
      <main>{renderPage()}</main>
    </div>
  );
};

const GenericDetail = ({ title }) => (
  <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16">
    <h1 className="text-brand font-nanum text-4xl md:text-5xl mb-4 md:mb-6">
      {title}
    </h1>
    <p className="text-brand font-nanum text-base md:text-lg leading-relaxed opacity-80">
      Content coming soon.
    </p>
  </section>
);

export default DetailPages;
