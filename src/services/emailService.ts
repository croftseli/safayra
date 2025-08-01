import emailjs from '@emailjs/browser';
import { ContactFormData } from '../types';
import { sanitizeInput } from '../utils/validation';

// EmailJS configuration - Replace these with your actual values
const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
};

// Initialize EmailJS (call this in your main App component)
export const initializeEmailJS = (): void => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Send contact form email
export const sendContactEmail = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Sanitize all inputs
    const sanitizedData = {
      fullName: sanitizeInput(formData.fullName),
      email: sanitizeInput(formData.email),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message),
    };

    // Prepare template parameters
    const templateParams = {
      from_name: sanitizedData.fullName,
      from_email: sanitizedData.email,
      subject: sanitizedData.subject,
      message: sanitizedData.message,
      to_name: 'Safayra Team', // Your company name
    };

    // Send email
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Message sent successfully! We will get back to you soon.',
      };
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again later or contact us directly.',
    };
  }
};

/*
SETUP INSTRUCTIONS FOR EMAILJS:

1. Go to https://www.emailjs.com/ and create an account
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - {{from_name}} - Sender's name
   - {{from_email}} - Sender's email
   - {{subject}} - Message subject
   - {{message}} - Message content
   - {{to_name}} - Your company name

4. Get your Service ID, Template ID, and Public Key from EmailJS dashboard
5. Replace the values in EMAILJS_CONFIG above
6. Call initializeEmailJS() in your App component's useEffect

Example EmailJS template:
Subject: New Contact Form Submission - {{subject}}

Hello {{to_name}},

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Website Contact Form
*/