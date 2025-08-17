import React from "react";

const Footer = ({ language = "en", setActiveTab }) => {
  const nav = [
    { id: "home", label: { en: "Home", fr: "Accueil", de: "Startseite" } },
    { id: "about", label: { en: "About Us", fr: "À propos", de: "Über uns" } },
    { id: "products", label: { en: "Product", fr: "Produit", de: "Produkt" } },
    { id: "contact", label: { en: "Contact", fr: "Contact", de: "Kontakt" } },
  ];

  const t = {
    legal: {
      en: "© 2025 Safayra. All rights reserved.",
      fr: "© 2025 Safayra. Tous droits réservés.",
      de: "© 2025 Safayra. Alle Rechte vorbehalten.",
    },
    creditPrefix: {
      en: "Website by",
      fr: "Site web par",
      de: "Website von",
    },
  };

  return (
    <footer className="w-full bg-brand text-[#4d1112]">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Stacked logos */}
        <div className="flex flex-col items-center gap-3 md:gap-4">
          {/* Emblem */}
          <div
            className="h-16 md:h-20 w-40 md:w-48 bg-[#4d1112]"
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
            aria-label="Safayra emblem"
            role="img"
          />

          {/* Wordmark */}
          <div
            className="h-8 md:h-10 w-44 md:w-56 bg-[#4d1112]"
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
            aria-label="Safayra wordmark"
            role="img"
          />
        </div>

        {/* Nav */}
        <nav className="mt-6">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-nanum text-base">
            {nav.map((item) => (
              <li key={item.id}>
                {setActiveTab ? (
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className="px-1 hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#4d1112]/30"
                  >
                    {item.label[language]}
                  </button>
                ) : (
                  <a
                    href="#"
                    className="px-1 hover:underline underline-offset-4"
                  >
                    {item.label[language]}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal / credit (localized) */}
        <div className="mt-8 border-top border-[#4d1112]/20 pt-6 text-center font-nanum text-sm opacity-90">
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
