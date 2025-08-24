import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = ({
  activeTab,
  setActiveTab,
  mobileMenuOpen,
  setMobileMenuOpen,
  language,
  setLanguage,
  overHero = false, // pass true on pages with a hero under the header
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile-only: open/close the Home submenu
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false);

  // Language dropdown state
  const [showLang, setShowLang] = useState(false);
  const [langHovering, setLangHovering] = useState(false);
  const [langTimeout, setLangTimeout] = useState(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Header background rule (seamless on hero like homepage)
  const headerChrome =
    isScrolled || !overHero ? "backdrop-blur-md shadow-lg" : "bg-transparent";

  const navItems = [
    {
      id: "home",
      label: { en: "Home", fr: "Accueil", de: "Startseite" },
      // Desktop hover / Mobile submenu entries
      children: [
        {
          id: "culinary",
          label: { en: "Culinary", fr: "Culinaire", de: "Kulinarik" },
        },
        {
          id: "skin",
          label: { en: "Skin Care", fr: "Soins de la peau", de: "Hautpflege" },
        },
        {
          id: "wellness",
          label: { en: "Wellness", fr: "Bien-être", de: "Wellness" },
        },
      ],
    },
    { id: "about", label: { en: "About Us", fr: "À propos", de: "Über uns" } },
    { id: "logo", isLogo: true },
    { id: "product", label: { en: "Product", fr: "Produit", de: "Produkt" } },
    { id: "contact", label: { en: "Contact", fr: "Contact", de: "Kontakt" } },
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
  ];
  const otherLangs = languages.filter((l) => l.code !== language);

  // Language dropdown handlers (with small delay to feel nice)
  const onLangEnter = () => {
    if (langTimeout) {
      clearTimeout(langTimeout);
      setLangTimeout(null);
    }
    setShowLang(true);
  };
  const onLangLeave = () => {
    const t = setTimeout(() => {
      if (!langHovering) setShowLang(false);
    }, 160);
    setLangTimeout(t);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${headerChrome}`}
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
            {navItems.map((item) => {
              if (item.isLogo) {
                return (
                  <button
                    key="logo"
                    onClick={() => {
                      setActiveTab?.("home");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="group inline-flex items-center focus:outline-none"
                    aria-label="Go to home"
                  >
                    <img
                      src="/safayra-logo-simple.png"
                      alt="Safayra"
                      className="h-8 sm:h-10 md:h-12 lg:h-12 w-auto object-contain cursor-pointer transition-transform duration-200 group-hover:scale-[1.02]"
                    />
                  </button>
                );
              }

              // HOME with submenu (desktop)
              if (item.children) {
                return (
                  <div key={item.id} className="relative group pb-2">
                    <button
                      onClick={() => {
                        setActiveTab?.(item.id);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`inline-flex items-center gap-1 px-3 lg:px-4 py-2 font-nanum font-extrabold transition-all duration-300 text-sm lg:text-base text-brand ${
                        activeTab === item.id
                          ? "border-b-2 border-brand"
                          : "hover:border-b-2 hover:border-brand"
                      }`}
                      aria-haspopup="menu"
                      aria-expanded="false"
                    >
                      {item.label[language]}
                      <ChevronDown className="w-4 h-4 opacity-80" />
                    </button>

                    {/* Dropdown: sits flush at bottom of trigger, no "gap".
                        The pb-2 on parent + this 'after' hover-bridge prevent flicker. */}
                    <div
                      className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-lg py-2 z-50
                                 opacity-0 invisible translate-y-1
                                 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                                 transition pointer-events-none group-hover:pointer-events-auto
                                 after:content-[''] after:absolute after:-top-2 after:left-0 after:right-0 after:h-2"
                      role="menu"
                    >
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => {
                            setActiveTab?.(child.id);
                            window.scrollTo({ top: 0, behavior: "auto" });
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-[#4d1112] hover:bg-amber-50"
                          role="menuitem"
                        >
                          {child.label[language]}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              // Regular items
              return (
                <div key={item.id} className="flex items-center">
                  <button
                    onClick={() => {
                      setActiveTab?.(item.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`px-3 lg:px-4 py-2 font-nanum font-extrabold transition-all duration-300 text-sm lg:text-base text-brand ${
                      activeTab === item.id
                        ? "border-b-2 border-brand"
                        : "hover:border-b-2 hover:border-brand"
                    }`}
                  >
                    {item.label[language]}
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Language Toggle */}
          <div
            className="absolute right-0 xs:right-0 sm:right-2 md:right-0 top-1/2 -translate-y-1/2"
            onMouseEnter={() => {
              onLangEnter();
            }}
            onMouseLeave={() => {
              setLangHovering(false);
              onLangLeave();
            }}
          >
            <button
              className={`p-1 xs:p-1.5 sm:p-2 rounded-lg transition-all duration-200 text-sm xs:text-base font-nanum font-extrabold hover:bg-amber-50 ${
                showLang ? "text-[#4d1112]" : "text-brand"
              }`}
              aria-haspopup="menu"
              aria-expanded={showLang}
            >
              {language.toUpperCase()}
            </button>

            {showLang && (
              <div
                className="absolute right-0 top-full w-32 bg-white shadow-lg rounded-lg py-2 z-50"
                onMouseEnter={() => {
                  setLangHovering(true);
                  if (langTimeout) {
                    clearTimeout(langTimeout);
                    setLangTimeout(null);
                  }
                }}
                onMouseLeave={() => {
                  setLangHovering(false);
                  onLangLeave();
                }}
                role="menu"
              >
                {otherLangs.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setShowLang(false);
                    }}
                    className="flex items-center px-4 py-2 text-sm w-full text-[#4d1112] hover:bg-amber-50 font-nanum font-extrabold"
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
          <div className="md:hidden border-top border-[#4d1112]/20 bg-white/95 backdrop-blur-md">
            <nav className="w-full px-4 xs:px-6 py-3 xs:py-4 space-y-2">
              {navItems.map((item) => {
                if (item.isLogo) return null;

                // Mobile: HOME with expandable submenu
                if (item.children) {
                  return (
                    <div key="home-mobile">
                      {/* Row wrapper keeps the border/hover visuals like before */}
                      <div
                        className={`w-full flex items-center justify-between px-3 xs:px-4 py-2 xs:py-3 border-b-2 transition-all duration-300 ${
                          activeTab === item.id
                            ? "border-[#4d1112]"
                            : "border-transparent hover:border-[#4d1112]"
                        }`}
                      >
                        {/* Left: tap "Home" -> navigate to homepage */}
                        <button
                          type="button"
                          onClick={() => {
                            setActiveTab?.(item.id); // "home"
                            setMobileMenuOpen(false);
                            window.scrollTo({ top: 0, behavior: "auto" });
                          }}
                          className="flex-1 text-left font-nanum font-extrabold text-sm xs:text-base text-[#4d1112]"
                        >
                          {item.label[language]}
                        </button>

                        {/* Right: tap chevron -> toggle submenu (no navigation) */}
                        <button
                          type="button"
                          aria-label="Toggle Home submenu"
                          aria-expanded={mobileHomeOpen}
                          aria-controls="home-submenu"
                          onClick={(e) => {
                            e.stopPropagation(); // prevent row click
                            setMobileHomeOpen((v) => !v);
                          }}
                          className="p-2 -mr-2 rounded hover:bg-[#EBD4AD]/30 focus:outline-none focus:ring-2 focus:ring-[#EBD4AD]/60"
                        >
                          <ChevronDown
                            className={`w-4 h-4 text-[#4d1112] transition-transform ${
                              mobileHomeOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      <div
                        id="home-submenu"
                        className={`pl-5 pr-3 xs:pl-6 xs:pr-4 overflow-hidden transition-[max-height,opacity] duration-300 ${
                          mobileHomeOpen
                            ? "max-h-48 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.children.map((child) => (
                          <button
                            key={child.id}
                            onClick={() => {
                              setActiveTab?.(child.id);
                              setMobileMenuOpen(false);
                              window.scrollTo({ top: 0, behavior: "auto" });
                            }}
                            className="block w-full text-left py-2 text-sm text-[#4d1112] hover:underline underline-offset-4"
                          >
                            {child.label[language]}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                }

                // Mobile: regular items
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab?.(item.id);
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "auto" });
                    }}
                    className={`w-full text-left px-3 xs:px-4 py-2 xs:py-3 font-nanum font-extrabold transition-all duration-300 text-sm xs:text-base text-[#4d1112] ${
                      activeTab === item.id
                        ? "border-b-2 border-[#4d1112]"
                        : "border-b-2 border-transparent hover:border-[#4d1112]"
                    }`}
                  >
                    {item.label[language]}
                  </button>
                );
              })}

              {/* Mobile Language Options */}
              <div className="px-3 xs:px-4 py-2 xs:py-3">
                <span className="text-sm xs:text-base font-nanum font-extrabold text-[#4d1112]">
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
                      className={`p-1 xs:p-1.5 rounded-lg transition-all duration-200 text-sm xs:text-base text-[#4d1112] font-nanum font-extrabold ${
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
