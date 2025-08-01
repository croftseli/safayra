import React from 'react';

interface FooterProps {
  language: 'en' | 'fr' | 'de';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <h3 className="text-xl font-bold">SAFAYRA</h3>
        </div>
        <p className="text-amber-100 mb-2 text-sm">
          {language === 'en' ? 'Premium Saffron Exchange' : language === 'fr' ? 'Échange de Safran Premium' : 'Premium Safran Austausch'}
        </p>
        <p className="text-amber-200 text-xs">
          {language === 'en' ? '© 2025 Safayra. All rights reserved.' : language === 'fr' ? '© 2025 Safayra. Tous droits réservés.' : '© 2025 Safayra. Alle Rechte vorbehalten.'}
        </p>
        <p className="text-amber-200 text-xs">
          {language === 'en' ? 'Website by ' : language === 'fr' ? 'Site web par ' : 'Website von '}
          <a href="https://unitywall.co/" target="_blank" rel="noopener noreferrer" className="text-amber-100 hover:text-white hover:underline">
            UnityWall
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;