// src/utils/contact.js

/**
 * Single Source of Truth for Contact Information
 */
export const CONTACT_INFO = {
    // Display format (human readable)
    phoneDisplay: '+254 769 122 507',

    // Link formats
    phoneLink: 'tel:+254769122507',
    whatsappNumber: '254769122507', // No + or spaces for wa.me link

    email: 'ecoplainsafaris@gmail.com',
    address: 'Comet Mall, Monrovia Street, 1st Floor, Nairobi, Kenya',

    // Socials
    socials: {
        tiktok: 'https://www.tiktok.com/@eco_plains_safaris',
        instagram: 'https://www.instagram.com/eco_plains_safaris/',
        twitter: 'https://twitter.com', // Update if specific handle available
    }
};

/**
 * Generates a consistent WhatsApp link with an optional pre-filled message.
 * @param {string} message - Optional message to pre-fill
 * @returns {string} - Full WhatsApp URL
 */
export const getWhatsappLink = (message = '') => {
    const baseUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}`;
    if (message) {
        return `${baseUrl}?text=${encodeURIComponent(message)}`;
    }
    return baseUrl;
};
