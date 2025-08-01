import React from 'react';

interface LanguagePageProps {
  language: 'en' | 'fr' | 'de';
  setLanguage: (lang: 'en' | 'fr' | 'de') => void;
}

const LanguagePage: React.FC<LanguagePageProps> = ({ language, setLanguage }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-amber-900 mb-8">
          {language === 'en' ? 'Choose Your Language' : language === 'fr' ? 'Choisissez votre langue' : 'Wählen Sie Ihre Sprache'}
        </h2>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setLanguage('en')}
            className={`px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${language === 'en'
              ? 'bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white shadow-lg transform scale-105'
              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-amber-400 hover:text-amber-700'
              }`}
          >
            🇺🇸 English
          </button>
          <button
            onClick={() => setLanguage('fr')}
            className={`px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${language === 'fr'
              ? 'bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white shadow-lg transform scale-105'
              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-amber-400 hover:text-amber-700'
              }`}
          >
            🇫🇷 Français
          </button>
          <button
            onClick={() => setLanguage('de')}
            className={`px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${language === 'de'
              ? 'bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white shadow-lg transform scale-105'
              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-amber-400 hover:text-amber-700'
              }`}
          >
            🇩🇪 Deutsch
          </button>
        </div>
        <p className="text-gray-600 mt-6">
          {language === 'en'
            ? 'Select your preferred language to view the website content'
            : language === 'fr'
              ? 'Sélectionnez votre langue préférée pour afficher le contenu du site web'
              : 'Wählen Sie Ihre bevorzugte Sprache, um den Website-Inhalt anzuzeigen'
          }
        </p>
      </div>
    </div>
  );
};

export default LanguagePage;