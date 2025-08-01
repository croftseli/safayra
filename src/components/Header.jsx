import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ activeTab, setActiveTab, mobileMenuOpen, setMobileMenuOpen, language, setLanguage }) => {
  const navItems = [
    { id: 'home', label: { en: 'Home', fr: 'Accueil', de: 'Startseite' } },
    { id: 'about', label: { en: 'About', fr: 'À propos', de: 'Über uns' } },
    { id: 'gallery', label: { en: 'Gallery', fr: 'Galerie', de: 'Galerie' } },
    { id: 'contact', label: { en: 'Contact', fr: 'Contact', de: 'Kontakt' } },
  ];

  const languages = [
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'fr', flag: '🇫🇷', name: 'Français' },
    { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 xs:h-18 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 xs:space-x-3">
            <img
              src="/safayra_logo-removebg.jpg"
              alt="SAFAYRA"
              className="h-12 xs:h-14 sm:h-16 md:h-18 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm lg:text-base ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white shadow-lg'
                    : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
                }`}
              >
                {item.label[language]}
              </button>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4">
            {/* Language Flags */}
            <div className="flex items-center space-x-1 xs:space-x-1.5 sm:space-x-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`p-1 xs:p-1.5 sm:p-2 rounded-lg transition-all duration-300 text-lg xs:text-xl sm:text-2xl ${
                    language === lang.code
                      ? 'bg-amber-100 shadow-md scale-110'
                      : 'hover:bg-gray-100 hover:scale-105'
                  }`}
                  title={lang.name}
                >
                  {lang.flag}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
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
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <nav className="px-2 xs:px-4 py-3 xs:py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 xs:px-4 py-2 xs:py-3 rounded-lg font-medium transition-all duration-300 text-sm xs:text-base ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white shadow-lg'
                      : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
                  }`}
                >
                  {item.label[language]}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;