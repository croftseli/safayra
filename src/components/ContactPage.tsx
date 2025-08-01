import React from 'react';

interface ContactPageProps {
  language: 'en' | 'fr' | 'de';
}

const ContactPage: React.FC<ContactPageProps> = ({ language }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-amber-900 mb-6">
          {language === 'en' ? 'Contact Us' : language === 'fr' ? 'Contactez-nous' : 'Kontakt'}
        </h2>
        <p className="text-lg text-gray-600">
          {language === 'en'
            ? 'Get in touch with us for premium saffron inquiries'
            : language === 'fr' ? 'Contactez-nous pour vos demandes de safran premium' : 'Kontaktieren Sie uns für Premium-Safran-Anfragen'
          }
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-amber-900 mb-6">
            {language === 'en' ? 'Send us a message' : language === 'fr' ? 'Envoyez-nous un message' : 'Senden Sie uns eine Nachricht'}
          </h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Full Name' : language === 'fr' ? 'Nom complet' : 'Vollständiger Name'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder={language === 'en' ? 'Your name' : language === 'fr' ? 'Votre nom' : 'Ihr Name'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Email' : language === 'fr' ? 'E-mail' : 'E-Mail'}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder={language === 'en' ? 'your@email.com' : language === 'fr' ? 'votre@email.com' : 'ihre@email.com'}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Subject' : language === 'fr' ? 'Sujet' : 'Betreff'}
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                <option>{language === 'en' ? 'Select a subject' : language === 'fr' ? 'Sélectionnez un sujet' : 'Wählen Sie ein Thema'}</option>
                <option>{language === 'en' ? 'Wholesale Inquiry' : language === 'fr' ? 'Demande de gros' : 'Großhandelsanfrage'}</option>
                <option>{language === 'en' ? 'Partnership' : language === 'fr' ? 'Partenariat' : 'Partnerschaft'}</option>
                <option>{language === 'en' ? 'Quality Questions' : language === 'fr' ? 'Questions qualité' : 'Qualitätsfragen'}</option>
                <option>{language === 'en' ? 'Other' : language === 'fr' ? 'Autre' : 'Andere'}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Message' : language === 'fr' ? 'Message' : 'Nachricht'}
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder={language === 'en' ? 'Tell us about your saffron needs...' : language === 'fr' ? 'Parlez-nous de vos besoins en safran...' : 'Erzählen Sie uns von Ihren Safran-Bedürfnissen...'}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {language === 'en' ? 'Send Message' : language === 'fr' ? 'Envoyer le message' : 'Nachricht senden'}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#4A1F1A] to-[#6B2C20] text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">
              {language === 'en' ? 'Get in Touch' : language === 'fr' ? 'Contactez-nous' : 'Kontakt aufnehmen'}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-amber-200 mb-2">
                  {language === 'en' ? 'Email' : language === 'fr' ? 'E-mail' : 'E-Mail'}
                </h4>
                <p className="text-amber-100">info@safayra.com</p>
                <p className="text-amber-100">sales@safayra.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-200 mb-2">
                  {language === 'en' ? 'Phone' : language === 'fr' ? 'Téléphone' : 'Telefon'}
                </h4>
                <p className="text-amber-100">+33 1 23 45 67 89 (France)</p>
                <p className="text-amber-100">+49 30 12 34 56 78 (Germany)</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-200 mb-2">
                  {language === 'en' ? 'Address' : language === 'fr' ? 'Adresse' : 'Adresse'}
                </h4>
                <p className="text-amber-100">
                  {language === 'en'
                    ? 'European Distribution Center\n123 Saffron Street\n75001 Paris, France'
                    : language === 'fr'
                      ? 'Centre de Distribution Européen\n123 Rue du Safran\n75001 Paris, France'
                      : 'Europäisches Vertriebszentrum\n123 Safranstraße\n75001 Paris, Frankreich'
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">
              {language === 'en' ? 'Business Hours' : language === 'fr' ? 'Heures d\'ouverture' : 'Geschäftszeiten'}
            </h3>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-medium">{language === 'en' ? 'Monday - Friday:' : language === 'fr' ? 'Lundi - Vendredi :' : 'Montag - Freitag:'}</span> 9:00 AM - 6:00 PM CET</p>
              <p><span className="font-medium">{language === 'en' ? 'Saturday:' : language === 'fr' ? 'Samedi :' : 'Samstag:'}</span> 10:00 AM - 4:00 PM CET</p>
              <p><span className="font-medium">{language === 'en' ? 'Sunday:' : language === 'fr' ? 'Dimanche :' : 'Sonntag:'}</span> {language === 'en' ? 'Closed' : language === 'fr' ? 'Fermé' : 'Geschlossen'}</p>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              {language === 'en'
                ? 'We typically respond to inquiries within 24 hours.'
                : language === 'fr'
                  ? 'Nous répondons généralement aux demandes dans les 24 heures.'
                  : 'Wir antworten normalerweise innerhalb von 24 Stunden auf Anfragen.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;