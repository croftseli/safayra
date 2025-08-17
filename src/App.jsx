import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProductPage from "./components/ProductPage";
import ContactPage from "./components/ContactPage";
import SkinPage from "./components/SkinPage";
import CulinaryPage from "./components/CulinaryPage";
import WellnessPage from "./components/WellnessPage";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [activeDetailPage, setActiveDetailPage] = useState(null);

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomePage language={language} setActiveTab={setActiveTab} />; // 👈 pass setActiveTab
      case "about":
        return <AboutPage language={language} />;
      case "product":
        return <ProductPage language={language} />;
      case "contact":
        return <ContactPage language={language} />;
      case "culinary":
        return <CulinaryPage language={language} />;
      case "skin":
        return <SkinPage language={language} />;
      case "wellness":
        return <WellnessPage language={language} />;
      default:
        return <HomePage language={language} setActiveTab={setActiveTab} />;
    }
  };

  // Reset scroll on "navigation"
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeTab, activeDetailPage]);

  return (
    <div className="min-h-screen">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        language={language}
        setLanguage={setLanguage}
        overHero={activeTab === "home"}
      />

      <main
        className={
          activeTab === "home"
            ? "w-full" // full-bleed hero
            : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        }
      >
        {renderContent()}
      </main>

      <Footer language={language} />
    </div>
  );
}

export default App;
