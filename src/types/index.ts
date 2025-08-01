// Contact form types
export interface ContactFormData {
  fullName: string;
  email: string;
  confirmEmail: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  confirmEmail?: string;
  subject?: string;
  message?: string;
}

// Language types
export type Language = 'en' | 'fr' | 'de';

// Gallery item types
export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  alt: string;
  text: string;
}