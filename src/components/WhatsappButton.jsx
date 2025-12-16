// src/components/WhatsappButton.jsx
import React, { useState, useEffect } from "react";
import "../styles/WhatsappButton.css";

export default function WhatsappButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumber = "+16099683825";
  const message = "Hello Rose Dew! I'd love to learn more about your collection.";

  useEffect(() => {
    const toggle = () => setIsVisible(window.pageYOffset > 400);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setShowTooltip(true), 1200);
      setTimeout(() => setShowTooltip(false), 5000);
    }
  }, [isVisible]);

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-btn ${isVisible ? "show" : ""}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      aria-label="Chat with Rose Dew on WhatsApp"
    >
      {/* Pulse Rings */}
      <span className="pulse-ring"></span>
      <span className="pulse-ring delay1"></span>
      <span className="pulse-ring delay2"></span>

      {/* Main Button with Full Spin */}
      <div className={`btn-circle ${isVisible ? "spin-in" : ""}`}>
        <svg viewBox="0 0 24 24" className="whatsapp-icon" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.132.56 4.146 1.538 5.892L.06 24l6.312-1.49C8.046 23.394 9.938 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.738 0-3.432-.426-4.896-1.23l-.347-.21-3.818.9.912-3.75-.24-.38C2.77 15.686 2.25 13.888 2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/>
        </svg>
      </div>

      {/* Tooltip */}
      <div className={`tooltip ${showTooltip ? "visible" : ""}`}>
        <span>Chat with us on WhatsApp</span>
        <div className="arrow"></div>
      </div>
    </a>
  );
}