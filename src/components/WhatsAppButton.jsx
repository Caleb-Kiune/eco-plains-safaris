// src/components/WhatsAppButton.jsx 
import "./WhatsAppButton.css";
import { MessageCircle } from "lucide-react"; 

export default function WhatsAppButton() {
  const phoneNumber = "254721315506"; 
  const message = "Hello! I would like to inquire about your bespoke Kenyan safari experiences.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat with us on WhatsApp – we reply within minutes"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="whatsapp-icon" aria-hidden="true" />
      <span className="whatsapp-tooltip">Chat with us</span>
    </a>
  );
}