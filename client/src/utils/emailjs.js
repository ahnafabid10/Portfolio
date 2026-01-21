import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};

// Initialize EmailJS
export const initEmailJS = () => {
  if (EMAILJS_CONFIG.publicKey) {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }
};

// Send email function
export const sendEmail = async (formData) => {
  try {
    if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
      throw new Error('EmailJS configuration is missing. Please check your environment variables.');
    }

    // Validate formData
    if (!formData || !formData.name || !formData.email || !formData.message) {
      throw new Error('Form data is incomplete.');
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'ahnafabid600@gmail.com',
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    return response;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { initEmailJS, sendEmail };