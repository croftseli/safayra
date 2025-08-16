import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import GalleryPage from "./components/GalleryPage";
import ContactPage from "./components/ContactPage";
import DetailPages from "./components/DetailPages";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [activeDetailPage, setActiveDetailPage] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  // If we're on a detail page, render that instead
  if (activeDetailPage) {
    return (
      <DetailPages
        pageId={activeDetailPage}
        onBack={() => setActiveDetailPage(null)}
        language={language}
      />
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <HomePage
            language={language}
            setActiveDetailPage={setActiveDetailPage}
          />
        );
      case "about":
        return <AboutPage language={language} />;
      case "gallery":
        return <GalleryPage language={language} />;
      case "contact":
        return <ContactPage language={language} />;
      default:
        return (
          <HomePage
            language={language}
            setActiveDetailPage={setActiveDetailPage}
          />
        );
    }
  };

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
            ? "w-full" // allow full bleed for homepage
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
