"use client";
import React, { useState } from "react";

const ContactPage = ({ language = "en" }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    confirmEmail: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
    console.error("EmailJS env vars are missing in this environment.");
  }

  const t = {
    title: { en: "Contact Us", fr: "Contactez-nous", de: "Kontakt" },
    subtitle: {
      en: "Get in touch with us for premium saffron inquiries.",
      fr: "Contactez-nous pour vos demandes de safran premium.",
      de: "Kontaktieren Sie uns für Premium-Safran-Anfragen.",
    },
    formTitle: {
      en: "Send us a message",
      fr: "Envoyez-nous un message",
      de: "Senden Sie uns eine Nachricht",
    },
    labels: {
      fullName: {
        en: "Full Name",
        fr: "Nom complet",
        de: "Vollständiger Name",
      },
      email: { en: "Email", fr: "E-mail", de: "E-Mail" },
      confirmEmail: {
        en: "Confirm Email",
        fr: "Confirmer l’e-mail",
        de: "E-Mail bestätigen",
      },
      subject: { en: "Subject", fr: "Sujet", de: "Betreff" },
      message: { en: "Message", fr: "Message", de: "Nachricht" },
    },
    placeholders: {
      name: { en: "Your name", fr: "Votre nom", de: "Ihr Name" },
      email: {
        en: "your@email.com",
        fr: "votre@email.com",
        de: "ihre@email.com",
      },
      confirmEmail: {
        en: "Confirm your email",
        fr: "Confirmez votre e-mail",
        de: "Bestätigen Sie Ihre E-Mail",
      },
      subject: {
        en: "Enter subject",
        fr: "Entrez le sujet",
        de: "Betreff eingeben",
      },
      message: {
        en: "Tell us about your saffron needs…",
        fr: "Parlez-nous de vos besoins en safran…",
        de: "Erzählen Sie uns von Ihren Safran-Bedürfnissen…",
      },
    },
    status: {
      success: {
        en: "Message sent successfully! We will get back to you soon.",
        fr: "Message envoyé avec succès ! Nous vous répondrons bientôt.",
        de: "Nachricht erfolgreich gesendet! Wir melden uns bald bei Ihnen.",
      },
      error: {
        en: "Failed to send message. Please try again later.",
        fr: "Échec de l’envoi du message. Veuillez réessayer plus tard.",
        de: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
      },
      sending: { en: "Sending…", fr: "Envoi…", de: "Senden…" },
      send: {
        en: "Send Message",
        fr: "Envoyer le message",
        de: "Nachricht senden",
      },
    },
    info: {
      getInTouch: {
        en: "Get in Touch",
        fr: "Contactez-nous",
        de: "Kontakt aufnehmen",
      },
      locationLine: {
        en: "We are based in Luxembourg.",
        fr: "Nous sommes basés au Luxembourg.",
        de: "Wir haben notre siège au Luxembourg.", // or "Nous sommes basés au Luxembourg."
      },
      hours: {
        en: "Business Hours",
        fr: "Heures d’ouverture",
        de: "Geschäftszeiten",
      },
      hoursLines: {
        monFri: {
          en: "Monday – Friday: 9:00 – 18:00 CET",
          fr: "Lundi – Vendredi : 9h00 – 18h00 CET",
          de: "Montag – Freitag: 9:00 – 18:00 CET",
        },
        sat: {
          en: "Saturday: Closed",
          fr: "Samedi : Fermé",
          de: "Samstag: Geschlossen",
        },
        sun: {
          en: "Sunday: Closed",
          fr: "Dimanche : Fermé",
          de: "Sonntag: Geschlossen",
        },
        sla: {
          en: "We typically respond to inquiries within 24 hours.",
          fr: "Nous répondons généralement aux demandes sous 24 heures.",
          de: "Wir antworten in der Regel innerhalb von 24 Stunden.",
        },
      },
    },
    tagline: {
      en: "A direct line to red gold.",
      fr: "Un accès direct à l’or rouge.",
      de: "Direkter Draht zum roten Gold.",
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName || formData.fullName.trim().length < 2) {
      newErrors.fullName =
        language === "fr"
          ? "Le nom doit comporter au moins 2 caractères"
          : language === "de"
          ? "Der Name muss mindestens 2 Zeichen enthalten"
          : "Full name must be at least 2 characters long";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email =
        language === "fr"
          ? "Veuillez entrer une adresse e-mail valide"
          : language === "de"
          ? "Bitte geben Sie eine gültige E-Mail-Adresse ein"
          : "Please enter a valid email address";
    }
    if (!formData.confirmEmail || !emailRegex.test(formData.confirmEmail)) {
      newErrors.confirmEmail =
        language === "fr"
          ? "Veuillez entrer une adresse e-mail valide"
          : language === "de"
          ? "Bitte geben Sie eine gültige E-Mail-Adresse ein"
          : "Please enter a valid email address";
    } else if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail =
        language === "fr"
          ? "Les adresses e-mail ne correspondent pas"
          : language === "de"
          ? "E-Mail-Adressen stimmen nicht überein"
          : "Email addresses do not match";
    }
    if (!formData.subject || formData.subject.trim().length < 2) {
      newErrors.subject =
        language === "fr"
          ? "Le sujet doit comporter au moins 2 caractères"
          : language === "de"
          ? "Der Betreff muss mindestens 2 Zeichen enthalten"
          : "Subject must be at least 2 characters long";
    }
    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message =
        language === "fr"
          ? "Le message doit comporter au moins 10 caractères"
          : language === "de"
          ? "Die Nachricht muss mindestens 10 Zeichen enthalten"
          : "Message must be at least 10 characters long";
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
      const { default: emailjs } = await import("@emailjs/browser");

      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus({ type: "success", message: t.status.success[language] });
      setFormData({
        fullName: "",
        email: "",
        confirmEmail: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({ type: "error", message: t.status.error[language] });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full pt-8 md:pt-12">
      {/* Title + subtitle (title has bottom blur) */}
      <section className="w-full px-4 py-12 md:py-16">
        <div className="relative w-fit mx-auto">
          <h1 className="text-center text-brand font-nanum text-4xl md:text-5xl">
            {t.title[language]}
          </h1>
          {/* blur overlay */}
          <div
            className="hidden md:block pointer-events-none absolute inset-x-0 bottom-0
                 h-[40%] backdrop-blur-[1px]
                 [mask-image:linear-gradient(to_top,black_80%,transparent_95%)]
                 [-webkit-mask-image:linear-gradient(to_top,black_80%,transparent_95%)]"
          />
        </div>

        <p className="mt-3 text-center text-brand font-nanum text-base md:text-lg leading-relaxed">
          {t.subtitle[language]}
        </p>
      </section>

      {/* Full-bleed off-white panel: left info / right form */}
      <section className="relative left-1/2 -translate-x-1/2 w-screen bg-[#EBD4AD]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch px-6 md:px-8 lg:px-10 py-12 md:py-16">
          {/* Left: Contact info (no phone/address) */}
          <div className="text-[#4d1112] self-center">
            <h3 className="font-nanum text-2xl md:text-3xl mb-4 md:mb-6">
              {t.info.getInTouch[language]}
            </h3>

            <div className="space-y-6 font-nanum text-base md:text-lg leading-relaxed">
              {/* Location line */}
              <p className="italic">{t.info.locationLine[language]}</p>

              {/* (Optional) keep hours + SLA */}
              <div>
                <div className="font-bold mb-1">{t.info.hours[language]}</div>
                <p>{t.info.hoursLines.monFri[language]}</p>
                <p>{t.info.hoursLines.sat[language]}</p>
                <p>{t.info.hoursLines.sun[language]}</p>
                <p className="mt-2 opacity-80">
                  {t.info.hoursLines.sla[language]}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white shadow-2xl p-6 md:p-8 rounded-none">
            <h3 className="text-[#4d1112] font-nanum text-xl md:text-2xl mb-6">
              {t.formTitle[language]}
            </h3>

            {/* Status */}
            {submitStatus && (
              <div
                className={`mb-6 p-4 rounded text-sm md:text-base ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block font-nanum text-[#4d1112] text-sm md:text-base mb-2">
                  {t.labels.fullName[language]}
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-none text-[#4d1112] placeholder-[#4d1112]/50 focus:ring-2 focus:ring-[#4d1112] focus:border-transparent ${
                    errors.fullName ? "border-red-300" : "border-[#4d1112]/20"
                  }`}
                  placeholder={t.placeholders.name[language]}
                  required
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-700">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block font-nanum text-[#4d1112] text-sm md:text-base mb-2">
                  {t.labels.email[language]}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-none text-[#4d1112] placeholder-[#4d1112]/50 focus:ring-2 focus:ring-[#4d1112] focus:border-transparent ${
                    errors.email ? "border-red-300" : "border-[#4d1112]/20"
                  }`}
                  placeholder={t.placeholders.email[language]}
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-700">{errors.email}</p>
                )}
              </div>

              {/* Confirm Email */}
              <div>
                <label className="block font-nanum text-[#4d1112] text-sm md:text-base mb-2">
                  {t.labels.confirmEmail[language]}
                </label>
                <input
                  type="email"
                  name="confirmEmail"
                  value={formData.confirmEmail}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-none text-[#4d1112] placeholder-[#4d1112]/50 focus:ring-2 focus:ring-[#4d1112] focus:border-transparent ${
                    errors.confirmEmail
                      ? "border-red-300"
                      : "border-[#4d1112]/20"
                  }`}
                  placeholder={t.placeholders.confirmEmail[language]}
                  required
                />
                {errors.confirmEmail && (
                  <p className="mt-1 text-sm text-red-700">
                    {errors.confirmEmail}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block font-nanum text-[#4d1112] text-sm md:text-base mb-2">
                  {t.labels.subject[language]}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-none text-[#4d1112] placeholder-[#4d1112]/50 focus:ring-2 focus:ring-[#4d1112] focus:border-transparent ${
                    errors.subject ? "border-red-300" : "border-[#4d1112]/20"
                  }`}
                  placeholder={t.placeholders.subject[language]}
                  required
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-700">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block font-nanum text-[#4d1112] text-sm md:text-base mb-2">
                  {t.labels.message[language]}
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-none text-[#4d1112] placeholder-[#4d1112]/50 focus:ring-2 focus:ring-[#4d1112] focus:border-transparent ${
                    errors.message ? "border-red-300" : "border-[#4d1112]/20"
                  }`}
                  placeholder={t.placeholders.message[language]}
                  required
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-700">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-none font-semibold transition ${
                  isSubmitting
                    ? "bg-[#4d1112]/60 text-brand cursor-not-allowed"
                    : "bg-[#4d1112] text-brand hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#4d1112]/40"
                }`}
              >
                {isSubmitting
                  ? t.status.sending[language]
                  : t.status.send[language]}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact tagline with halo */}
      <section
        id="contact-tagline"
        className="relative w-full px-4 pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-12 overflow-visible"
      >
        {/* glow background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          {/* wide outer glow */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                 w-[80vmin] md:w-[72vmin] lg:w-[64vmin] aspect-square rounded-full blur-3xl
                 bg-[radial-gradient(circle_at_center,rgba(235,212,173,0.18)_0%,rgba(235,212,173,0.09)_42%,transparent_78%)]"
          />
          {/* softer inner core */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                 w-[56vmin] md:w-[50vmin] lg:w-[44vmin] aspect-square rounded-full blur-2xl opacity-75
                 bg-[radial-gradient(circle_at_center,rgba(235,212,173,0.25)_0%,rgba(235,212,173,0.12)_50%,transparent_72%)]"
          />
        </div>

        <p className="text-center text-brand font-aurore text-3xl md:text-4xl lg:text-5xl leading-tight">
          {t.tagline[language]}
        </p>
      </section>
    </div>
  );
};

export default ContactPage;
