import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = ({
  activeTab,
  setActiveTab,
  mobileMenuOpen,
  setMobileMenuOpen,
  language,
  setLanguage,
  overHero = false,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const positionClass = "fixed";

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      if (!isDropdownHovered) setShowDropdown(false);
    }, 200);
    setDropdownTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownHovered(true);
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownHovered(false);
    const timeout = setTimeout(() => setShowDropdown(false), 200);
    setDropdownTimeout(timeout);
  };

  const navItems = [
    { id: "home", label: { en: "Home", fr: "Accueil", de: "Startseite" } },
    { id: "about", label: { en: "About Us", fr: "À propos", de: "Über uns" } },
    { id: "logo", isLogo: true },
    // NOTE: if your route is "products", change this id to "products"
    { id: "product", label: { en: "Product", fr: "Produit", de: "Produkt" } },
    { id: "contact", label: { en: "Contact", fr: "Contact", de: "Kontakt" } },
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
  ];

  const currentLang = languages.find((l) => l.code === language);
  const otherLangs = languages.filter((l) => l.code !== language);

  return (
    <header
      className={`${positionClass} top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled || !overHero
          ? "backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center h-16 xs:h-18 sm:h-20">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-all duration-300 text-brand hover:bg-amber-50"
            aria-label="Toggle menu"
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
                    src="/safayra-logo-simple.png"
                    alt="SAFAYRA"
                    className="h-12 xs:h-14 sm:h-16 md:h-18 w-auto object-contain"
                  />
                ) : (
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`px-3 lg:px-4 py-2 font-medium transition-all duration-300 text-sm lg:text-base text-brand ${
                      activeTab === item.id
                        ? "border-b-2 border-brand"
                        : "hover:border-b-2 hover:border-brand"
                    }`}
                  >
                    {item.label[language]}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Language Toggle */}
          <div
            className="absolute right-0 xs:right-0 sm:right-2 md:right-0 top-1/2 -translate-y-1/2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`p-1 xs:p-1.5 sm:p-2 rounded-lg transition-all duration-200 text-sm xs:text-base font-medium hover:bg-amber-50 ${
                showDropdown ? "text-[#4d1112]" : "text-brand"
              }`}
              aria-haspopup="menu"
              aria-expanded={showDropdown}
            >
              {language.toUpperCase()}
            </button>

            {showDropdown && (
              <div
                className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg py-2 z-50"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
                role="menu"
              >
                {otherLangs.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setShowDropdown(false);
                    }}
                    className="flex items-center px-4 py-2 text-sm w-full text-[#4d1112] hover:bg-amber-50"
                    role="menuitem"
                  >
                    {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#4d1112]/20 bg-white/95 backdrop-blur-md">
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
                    className={`w-full text-left px-3 xs:px-4 py-2 xs:py-3 font-medium transition-all duration-300 text-sm xs:text-base text-[#4d1112] ${
                      activeTab === item.id
                        ? "border-b-2 border-[#4d1112]"
                        : "border-b-2 border-transparent hover:border-[#4d1112]"
                    }`}
                  >
                    {item.label[language]}
                  </button>
                ))}

              {/* Mobile Language Options */}
              <div className="px-3 xs:px-4 py-2 xs:py-3">
                <span className="text-sm xs:text-base font-medium text-[#4d1112]">
                  {language === "fr"
                    ? "Langue :"
                    : language === "de"
                    ? "Sprache:"
                    : "Language:"}
                </span>
                <div className="flex space-x-2 mt-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`p-1 xs:p-1.5 rounded-lg transition-all duration-200 text-sm xs:text-base text-[#4d1112] ${
                        language === lang.code
                          ? "bg-[#EBD4AD]/60 shadow-md"
                          : "hover:bg-[#EBD4AD]/30"
                      }`}
                    >
                      {lang.code.toUpperCase()}
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
