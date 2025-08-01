import React, { useState } from 'react';

// TODO: EmailJS Integration
// 1. Install EmailJS: npm install @emailjs/browser
// 2. Import EmailJS: import emailjs from '@emailjs/browser';
// 3. Initialize EmailJS in useEffect or App.js with your public key
// 4. Replace the simulated form submission with actual EmailJS send

const ContactPage = ({ language }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    confirmEmail: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // TODO: EmailJS Configuration
  // Add these constants when integrating EmailJS:
  // const EMAILJS_SERVICE_ID = 'your_service_id';
  // const EMAILJS_TEMPLATE_ID = 'your_template_id';
  // const EMAILJS_PUBLIC_KEY = 'your_public_key';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters long';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.confirmEmail || !emailRegex.test(formData.confirmEmail)) {
      newErrors.confirmEmail = 'Please enter a valid email address';
    } else if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = 'Email addresses do not match';
    }
    
    if (!formData.subject || formData.subject.trim().length < 2) {
      newErrors.subject = 'Subject must be at least 2 characters long';
    }
    
    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setSubmitStatus(null);
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // TODO: Replace this simulation with actual EmailJS send
      // Example EmailJS implementation:
      /*
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'your-email@domain.com', // Your receiving email
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      */
      
      // CURRENT: Simulated form submission (remove when implementing EmailJS)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus({
        type: 'success',
        message: language === 'en' 
          ? 'Message sent successfully! We will get back to you soon.'
          : language === 'fr'
          ? 'Message envoyé avec succès! Nous vous répondrons bientôt.'
          : 'Nachricht erfolgreich gesendet! Wir werden uns bald bei Ihnen melden.'
      });
      setFormData({ fullName: '', email: '', confirmEmail: '', subject: '', message: '' });
    } catch (error) {
      // TODO: Enhanced error handling for EmailJS
      // EmailJS errors can be: network issues, invalid config, rate limits, etc.
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: language === 'en'
          ? 'Failed to send message. Please try again later.'
          : language === 'fr'
          ? 'Échec de l\'envoi du message. Veuillez réessayer plus tard.'
          : 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // TODO: EmailJS Template Variables
  // When setting up your EmailJS template, use these variable names:
  // {{from_name}} - User's full name
  // {{from_email}} - User's email address  
  // {{subject}} - Message subject
  // {{message}} - Message content
  // {{to_email}} - Your receiving email (optional, can be set in template)

  return (
    <div className="max-w-6xl mx-auto px-2 xs:px-4 sm:px-6">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-amber-900 mb-6">
          {language === 'en' ? 'Contact Us' : language === 'fr' ? 'Contactez-nous' : 'Kontakt'}
        </h2>
        <p className="text-sm xs:text-base sm:text-lg text-gray-600 px-4">
          {language === 'en'
            ? 'Get in touch with us for premium saffron inquiries'
            : language === 'fr' ? 'Contactez-nous pour vos demandes de safran premium' : 'Kontaktieren Sie uns für Premium-Safran-Anfragen'
          }
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="w-full mb-12">
        <div className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl shadow-md xs:shadow-lg p-4 xs:p-6 sm:p-8">
          <h3 className="text-xl xs:text-2xl font-bold text-amber-900 mb-6">
            {language === 'en' ? 'Send us a message' : language === 'fr' ? 'Envoyez-nous un message' : 'Senden Sie uns eine Nachricht'}
          </h3>
          
          {/* Status Messages */}
          {submitStatus && (
            <div className={`mb-6 p-3 xs:p-4 rounded-lg text-sm xs:text-base ${
              submitStatus.type === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {submitStatus.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm xs:text-base font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Full Name' : language === 'fr' ? 'Nom complet' : 'Vollständiger Name'}
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full px-3 xs:px-4 py-2 xs:py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm xs:text-base ${
                  errors.fullName ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder={language === 'en' ? 'Your name' : language === 'fr' ? 'Votre nom' : 'Ihr Name'}
                required
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm xs:text-base font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Email' : language === 'fr' ? 'E-mail' : 'E-Mail'}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-3 xs:px-4 py-2 xs:py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm xs:text-base ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder={language === 'en' ? 'your@email.com' : language === 'fr' ? 'votre@email.com' : 'ihre@email.com'}
                required
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            {/* Confirm Email */}
            <div>
              <label className="block text-sm xs:text-base font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Confirm Email' : language === 'fr' ? 'Confirmer l\'e-mail' : 'E-Mail bestätigen'}
              </label>
              <input
                type="email"
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleInputChange}
                className={`w-full px-3 xs:px-4 py-2 xs:py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm xs:text-base ${
                  errors.confirmEmail ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder={language === 'en' ? 'Confirm your email' : language === 'fr' ? 'Confirmez votre e-mail' : 'Bestätigen Sie Ihre E-Mail'}
                required
              />
              {errors.confirmEmail && <p className="mt-1 text-sm text-red-600">{errors.confirmEmail}</p>}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm xs:text-base font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Subject' : language === 'fr' ? 'Sujet' : 'Betreff'}
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={`w-full px-3 xs:px-4 py-2 xs:py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm xs:text-base ${
                  errors.subject ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder={language === 'en' ? 'Enter subject' : language === 'fr' ? 'Entrez le sujet' : 'Betreff eingeben'}
                required
              />
              {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm xs:text-base font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Message' : language === 'fr' ? 'Message' : 'Nachricht'}
              </label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-3 xs:px-4 py-2 xs:py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm xs:text-base ${
                  errors.message ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder={language === 'en' ? 'Tell us about your saffron needs...' : language === 'fr' ? 'Parlez-nous de vos besoins en safran...' : 'Erzählen Sie uns von Ihren Safran-Bedürfnissen...'}
                required
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 xs:py-3 px-4 xs:px-6 rounded-lg font-semibold text-sm xs:text-base transition-all duration-300 ${
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
      </div>

      {/* Get in Touch Section */}
      <div className="w-full mb-12">
        <div className="bg-gradient-to-br from-[#4A1F1A] to-[#6B2C20] text-white rounded-lg xs:rounded-xl sm:rounded-2xl p-4 xs:p-6 sm:p-8">
          <h3 className="text-xl xs:text-2xl font-bold mb-6">
            {language === 'en' ? 'Get in Touch' : language === 'fr' ? 'Contactez-nous' : 'Kontakt aufnehmen'}
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-amber-200 mb-2 text-sm xs:text-base">
                {language === 'en' ? 'Phone' : language === 'fr' ? 'Téléphone' : 'Telefon'}
              </h4>
              <p className="text-amber-100 text-sm xs:text-base">+33 1 23 45 67 89 (France)</p>
              <p className="text-amber-100 text-sm xs:text-base">+49 30 12 34 56 78 (Germany)</p>
            </div>
            <div>
              <h4 className="font-semibold text-amber-200 mb-2 text-sm xs:text-base">
                {language === 'en' ? 'Address' : language === 'fr' ? 'Adresse' : 'Adresse'}
              </h4>
              <p className="text-amber-100 text-sm xs:text-base whitespace-pre-line">
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
      </div>

      {/* Business Hours Section */}
      <div className="w-full">
        <div className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl shadow-md xs:shadow-lg p-4 xs:p-6 sm:p-8">
          <h3 className="text-xl xs:text-2xl font-bold text-amber-900 mb-6">
            {language === 'en' ? 'Business Hours' : language === 'fr' ? 'Heures d\'ouverture' : 'Geschäftszeiten'}
          </h3>
          <div className="space-y-2 text-gray-700 text-sm xs:text-base">
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
  );
};

export default ContactPage;