// src/components/ContactForm.jsx 
import { useState } from "react";
import { CONTACT_INFO } from '../../utils/contact';
import "./ContactForm.css";

export default function ContactForm() {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Basic validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email address is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  // Form submission handler (mocked - no backend)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
    // Reset form after success (optional)
    setFormData({ name: "", email: "", phone: "", enquiry: "", message: "" });
  };

  // Enquiry options
  const enquiryOptions = [
    "Itinerary Planning",
    "Pricing Request",
    "Group/Family Safari",
    "Honeymoon Safari",
    "Custom Tailor-Made Trip"
  ];

  if (isSubmitted) {
    return (
      <div className="success-message">
        <h3>Thank You for Reaching Out!</h3>
        <p>Your message has been sent. We'll craft your dream safari and reply within 24 hours.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="form-button secondary"
          type="button"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate aria-label="Contact form for safari inquiries">
      {/* Full Name Field */}
      <div className="form-group">
        <label htmlFor="name" className="form-label">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className={`form-input ${errors.name ? 'error' : ''}`}
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <span id="name-error" className="error-text" role="alert">{errors.name}</span>
        )}
      </div>

      {/* Email Field */}
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          className={`form-input ${errors.email ? 'error' : ''}`}
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          required
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <span id="email-error" className="error-text" role="alert">{errors.email}</span>
        )}
      </div>

      {/* Phone Field */}
      <div className="form-group">
        <label htmlFor="phone" className="form-label">Phone Number (WhatsApp preferred)</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className={`form-input ${errors.phone ? 'error' : ''}`}
          value={formData.phone}
          onChange={handleChange}
          placeholder={CONTACT_INFO.phoneDisplay}
          required
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <span id="phone-error" className="error-text" role="alert">{errors.phone}</span>
        )}
      </div>

      {/* Enquiry Type Dropdown */}
      <div className="form-group">
        <label htmlFor="enquiry" className="form-label">Type of Enquiry</label>
        <select
          id="enquiry"
          name="enquiry"
          className={`form-input ${errors.enquiry ? 'error' : ''}`}
          value={formData.enquiry}
          onChange={handleChange}
          aria-describedby={errors.enquiry ? "enquiry-error" : undefined}
        >
          <option value="">Select an option...</option>
          {enquiryOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        {errors.enquiry && (
          <span id="enquiry-error" className="error-text" role="alert">{errors.enquiry}</span>
        )}
      </div>

      {/* Message Field */}
      <div className="form-group">
        <label htmlFor="message" className="form-label">Your Message</label>
        <textarea
          id="message"
          name="message"
          className={`form-input ${errors.message ? 'error' : ''}`}
          value={formData.message}
          onChange={handleChange}
          rows={6}
          placeholder="Tell us about your dream safari adventure..."
          required
          aria-describedby={errors.message ? "message-error" : undefined}
        ></textarea>
        {errors.message && (
          <span id="message-error" className="error-text" role="alert">{errors.message}</span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="form-button"
        disabled={isLoading}
        aria-label={isLoading ? "Submitting..." : "Submit inquiry"}
      >
        {isLoading ? (
          <>
            <span className="loading-spinner"></span>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}