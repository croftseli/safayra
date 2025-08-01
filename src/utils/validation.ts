import { ContactFormData, ContactFormErrors } from '../types';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Input sanitization
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 1000); // Limit length
};

// Validate contact form
export const validateContactForm = (data: ContactFormData): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  // Full name validation
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters long';
  }

  // Email validation
  if (!data.email || !EMAIL_REGEX.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Confirm email validation
  if (!data.confirmEmail || !EMAIL_REGEX.test(data.confirmEmail)) {
    errors.confirmEmail = 'Please enter a valid email address';
  } else if (data.email !== data.confirmEmail) {
    errors.confirmEmail = 'Email addresses do not match';
  }

  // Subject validation
  if (!data.subject || data.subject.trim().length < 2) {
    errors.subject = 'Subject must be at least 2 characters long';
  }

  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return errors;
};

// Rate limiting helper (simple client-side implementation)
export const checkRateLimit = (key: string, maxAttempts: number = 3, windowMs: number = 300000): boolean => {
  const now = Date.now();
  const attempts = JSON.parse(localStorage.getItem(`rate_limit_${key}`) || '[]');
  
  // Filter out old attempts
  const recentAttempts = attempts.filter((timestamp: number) => now - timestamp < windowMs);
  
  if (recentAttempts.length >= maxAttempts) {
    return false; // Rate limit exceeded
  }

  // Add current attempt
  recentAttempts.push(now);
  localStorage.setItem(`rate_limit_${key}`, JSON.stringify(recentAttempts));
  
  return true;
};