import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  language: 'en' | 'fr' | 'de';
}

const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  mobileMenuOpen,
  setMobileMenuOpen,
  language
}) => {
  const tabs = [
    { id: 'home', label: language === 'en' ? 'Home Page' : language === 'fr' ? 'Accueil' : 'Startseite' },
    { id: 'about', label: language === 'en' ? 'About us' : language === 'fr' ? 'À propos' : 'Über uns' },
    { id: 'gallery', label: language === 'en' ? 'Gallery' : language === 'fr' ? 'Galerie' : 'Galerie' },
    { id: 'contact', label: language === 'en' ? 'Contact us' : language === 'fr' ? 'Contactez-nous' : 'Kontakt' },
    { id: 'languages', label: language === 'en' ? 'Languages' : language === 'fr' ? 'Langues' : 'Sprachen' }
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation */}
          <nav className="hidden md:flex space-x-1">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeTab === 'home'
                ? 'bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white shadow-md'
                : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
                }`}
            >
              {language === 'en' ? 'Home Page' : 'Accueil'}
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeTab === 'about'
                ? 'bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white shadow-md'
                : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
                }`}
            >
              {language === 'en' ? 'About us' : 'À propos'}
            </button>
          </nav>

          {/* Centered Logo */}
          <div className="flex items-center space-x-3 absolute left-1/2 transform -translate-x-1/2">
            <img
              src="/safayra_logo-removebg.jpg"
              alt="SAFAYRA"
              className="h-28 w-auto object-contain"
            />
          </div>

          {/* Right Navigation */}
          <nav className="hidden md:flex space-x-1">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeTab === 'gallery'
                ? 'bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white shadow-md'
                : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
                }`}
            >
              {language === 'en' ? 'Gallery' : 'Galerie'}
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeTab === 'contact'
                ? 'bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white shadow-md'
                : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
                }`}
            >
              {language === 'en' ? 'Contact us' : 'Contactez-nous'}
            </button>
            <button
              onClick={() => setActiveTab('languages')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeTab === 'languages'
                ? 'bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white shadow-md'
                : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
                }`}
            >
              {language === 'en' ? 'Languages' : 'Langues'}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-amber-50"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white'
                  : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;