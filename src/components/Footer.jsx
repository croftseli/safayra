import React from "react";

const Footer = ({ language = "en", setActiveTab }) => {
  const nav = [
    { id: "home", label: { en: "Home", fr: "Accueil", de: "Startseite" } },
    { id: "about", label: { en: "About Us", fr: "À propos", de: "Über uns" } },
    { id: "product", label: { en: "Product", fr: "Produit", de: "Produkt" } }, // <-- fixed
    { id: "contact", label: { en: "Contact", fr: "Contact", de: "Kontakt" } },
  ];

  const t = {
    legal: {
      en: "© 2025 Safayra. All rights reserved.",
      fr: "© 2025 Safayra. Tous droits réservés.",
      de: "© 2025 Safayra. Alle Rechte vorbehalten.",
    },
    creditPrefix: { en: "Website by", fr: "Site web par", de: "Website von" },
  };

  const fallbackHref = (id) => {
    // Adjust these if you use React Router/Next.js routes instead of anchors.
    switch (id) {
      case "home":
        return "/";
      case "about":
        return "/#about";
      case "product":
        return "/#products";
      case "contact":
        return "/#contact";
      default:
        return "/";
    }
  };

  const handleNav = (id) => {
    if (typeof setActiveTab === "function") {
      setActiveTab(id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-brand text-[#4d1112]">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Stacked logos */}
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <div
            className="pointer-events-none h-16 md:h-20 w-40 md:w-48 bg-[#4d1112]"
            style={{
              WebkitMaskImage: "url(/safayra-logo-simple.png)",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",
              maskImage: "url(/safayra-logo-simple.png)",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none h-8 md:h-10 w-44 md:w-56 bg-[#4d1112]"
            style={{
              WebkitMaskImage: "url(/safayra-text-logo.png)",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",
              maskImage: "url(/safayra-text-logo.png)",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
            }}
            aria-hidden="true"
          />
        </div>

        {/* Nav */}
        <nav className="mt-6">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-nanum text-base">
            {nav.map((item) => (
              <li key={item.id}>
                {typeof setActiveTab === "function" ? (
                  <button
                    type="button"
                    onClick={() => handleNav(item.id)}
                    className="px-1 hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#4d1112]/30"
                  >
                    {item.label[language]}
                  </button>
                ) : (
                  <a
                    href={fallbackHref(item.id)}
                    className="px-1 hover:underline underline-offset-4"
                  >
                    {item.label[language]}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal / credit */}
        <div className="mt-8 border-t border-[#4d1112]/20 pt-6 text-center font-nanum text-sm opacity-90">
          <p>{t.legal[language]}</p>
          <p className="mt-1">
            {t.creditPrefix[language]}{" "}
            <a
              href="https://unitywall.co"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:no-underline"
            >
              UnityWall
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
