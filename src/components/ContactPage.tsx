import React, { useState } from 'react';
import { ContactFormData, ContactFormErrors } from '../types';
import { validateContactForm, checkRateLimit } from '../utils/validation';
import { sendContactEmail } from '../services/emailService';

interface ContactPageProps {
  language: 'en' | 'fr' | 'de';
}

const ContactPage: React.FC<ContactPageProps> = ({ language }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    confirmEmail: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous status
    setSubmitStatus(null);
    
    // Validate form
    const formErrors = validateContactForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Check rate limiting
    if (!checkRateLimit('contact_form', 3, 300000)) { // 3 attempts per 5 minutes
      setSubmitStatus({
        type: 'error',
        message: language === 'en' 
          ? 'Too many attempts. Please wait 5 minutes before trying again.'
          : language === 'fr'
          ? 'Trop de tentatives. Veuillez attendre 5 minutes avant de réessayer.'
          : 'Zu viele Versuche. Bitte warten Sie 5 Minuten, bevor Sie es erneut versuchen.'
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ fullName: '', email: '', confirmEmail: '', subject: '', message: '' }); // Reset form
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: language === 'en'
          ? 'An unexpected error occurred. Please try again.'
          : language === 'fr'
          ? 'Une erreur inattendue s\'est produite. Veuillez réessayer.'
          : 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

      <div className="space-y-12">
        {/* Contact Form - Full Width */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-amber-900 mb-6">
            {language === 'en' ? 'Send us a message' : language === 'fr' ? 'Envoyez-nous un message' : 'Senden Sie uns eine Nachricht'}
          </h3>
          
          {/* Status Messages */}
          {submitStatus && (
            <div className={`mb-6 p-4 rounded-lg ${
              submitStatus.type === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {submitStatus.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Full Name' : language === 'fr' ? 'Nom complet' : 'Vollständiger Name'}
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                    errors.fullName ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder={language === 'en' ? 'Your name' : language === 'fr' ? 'Votre nom' : 'Ihr Name'}
                  required
                />
                {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Email' : language === 'fr' ? 'E-mail' : 'E-Mail'}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder={language === 'en' ? 'your@email.com' : language === 'fr' ? 'votre@email.com' : 'ihre@email.com'}
                  required
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Confirm Email' : language === 'fr' ? 'Confirmer l\'e-mail' : 'E-Mail bestätigen'}
                </label>
                <input
                  type="email"
                  name="confirmEmail"
                  value={formData.confirmEmail}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                    errors.confirmEmail ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder={language === 'en' ? 'Confirm your email' : language === 'fr' ? 'Confirmez votre e-mail' : 'Bestätigen Sie Ihre E-Mail'}
                  required
                />
                {errors.confirmEmail && <p className="mt-1 text-sm text-red-600">{errors.confirmEmail}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Subject' : language === 'fr' ? 'Sujet' : 'Betreff'}
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                  errors.subject ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder={language === 'en' ? 'Enter subject' : language === 'fr' ? 'Entrez le sujet' : 'Betreff eingeben'}
                required
              />
              {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Message' : language === 'fr' ? 'Message' : 'Nachricht'}
              </label>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                  errors.message ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder={language === 'en' ? 'Tell us about your saffron needs...' : language === 'fr' ? 'Parlez-nous de vos besoins en safran...' : 'Erzählen Sie uns von Ihren Safran-Bedürfnissen...'}
                required
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white hover:shadow-lg transform hover:scale-105'
              }`}
            >
              {isSubmitting 
                ? (language === 'en' ? 'Sending...' : language === 'fr' ? 'Envoi...' : 'Senden...')
                : (language === 'en' ? 'Send Message' : language === 'fr' ? 'Envoyer le message' : 'Nachricht senden')
              }
            </button>
          </form>
        </div>

        {/* Contact Information - Full Width */}
        <div className="bg-gradient-to-br from-[#4A1F1A] to-[#6B2C20] text-white rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
            <h3 className="text-2xl font-bold mb-6">
              {language === 'en' ? 'Get in Touch' : language === 'fr' ? 'Contactez-nous' : 'Kontakt aufnehmen'}
            </h3>
            <div className="space-y-4">
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

            <div>
            <h3 className="text-2xl font-bold text-amber-200 mb-6">
              {language === 'en' ? 'Business Hours' : language === 'fr' ? 'Heures d\'ouverture' : 'Geschäftszeiten'}
            </h3>
            <div className="space-y-2 text-amber-100">
              <p><span className="font-medium">{language === 'en' ? 'Monday - Friday:' : language === 'fr' ? 'Lundi - Vendredi :' : 'Montag - Freitag:'}</span> 9:00 AM - 6:00 PM CET</p>
              <p><span className="font-medium">{language === 'en' ? 'Saturday:' : language === 'fr' ? 'Samedi :' : 'Samstag:'}</span> 10:00 AM - 4:00 PM CET</p>
              <p><span className="font-medium">{language === 'en' ? 'Sunday:' : language === 'fr' ? 'Dimanche :' : 'Sonntag:'}</span> {language === 'en' ? 'Closed' : language === 'fr' ? 'Fermé' : 'Geschlossen'}</p>
            </div>
            <p className="text-sm text-amber-200 mt-4">
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