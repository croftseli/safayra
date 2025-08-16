import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = ({
  activeTab,
  setActiveTab,
  mobileMenuOpen,
  setMobileMenuOpen,
  language,
  setLanguage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: { en: "Home", fr: "Accueil", de: "Startseite" } },
    { id: "about", label: { en: "About Us", fr: "À propos", de: "Über uns" } },
    { id: "logo", isLogo: true }, // Logo as a nav item
    { id: "gallery", label: { en: "Gallery", fr: "Galerie", de: "Galerie" } },
    { id: "contact", label: { en: "Contact", fr: "Contact", de: "Kontakt" } },
  ];

  const languages = [
    { code: "en", flag: "🇺🇸", name: "English" },
    { code: "fr", flag: "🇫🇷", name: "Français" },
    { code: "de", flag: "🇩🇪", name: "Deutsch" },
  ];

  const currentLang = languages.find((lang) => lang.code === language);
  const otherLangs = languages.filter((lang) => lang.code !== language);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center h-16 xs:h-18 sm:h-20">
          {/* Mobile Menu Button (Visible on Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-all duration-300"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 xs:w-6 xs:h-6" />
            ) : (
              <Menu className="w-5 h-5 xs:w-6 xs:h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-between w-full">
            {navItems.map((item) => (
              <div key={item.id} className="flex items-center">
                {item.isLogo ? (
                  <img
                    src="/safayra-logo-removebg.jpg"
                    alt="SAFAYRA"
                    className="h-12 xs:h-14 sm:h-16 md:h-18 w-auto object-contain"
                  />
                ) : (
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`px-3 lg:px-4 py-2 font-medium transition-all duration-300 text-sm lg:text-base ${
                      activeTab === item.id
                        ? "text-[#4A1F1A] border-b-2 border-[#4A1F1A]"
                        : "text-gray-700 hover:text-amber-700 hover:border-b-2 hover:border-amber-700"
                    }`}
                  >
                    {item.label[language]}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Language Toggle (Positioned further right) */}
          <div
            className="absolute right-0 xs:right-0 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="p-1 xs:p-1.5 sm:p-2 rounded-lg transition-all duration-300 text-sm xs:text-base font-medium text-gray-700 hover:text-amber-700 hover:bg-amber-50">
              {language.toUpperCase()}
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg py-2 z-50">
                {otherLangs.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setShowDropdown(false);
                    }}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 w-full"
                  >
                    {lang.flag} {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <nav className="w-full px-4 xs:px-6 py-3 xs:py-4 space-y-2">
              {navItems
                .filter((item) => !item.isLogo)
                .map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 xs:px-4 py-2 xs:py-3 font-medium transition-all duration-300 text-sm xs:text-base ${
                      activeTab === item.id
                        ? "text-[#4A1F1A] border-b-2 border-[#4A1F1A]"
                        : "text-gray-700 hover:text-amber-700 hover:border-b-2 hover:border-amber-700"
                    }`}
                  >
                    {item.label[language]}
                  </button>
                ))}
              {/* Mobile Language Options */}
              <div className="px-3 xs:px-4 py-2 xs:py-3">
                <span className="text-sm xs:text-base font-medium text-gray-700">
                  Language:
                </span>
                <div className="flex space-x-2 mt-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`p-1 xs:p-1.5 rounded-lg transition-all duration-300 text-sm xs:text-base ${
                        language === lang.code
                          ? "bg-amber-100 shadow-md"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {lang.flag} {lang.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
