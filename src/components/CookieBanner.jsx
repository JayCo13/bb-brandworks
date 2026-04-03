import { useState, useEffect } from 'react';
import './CookieBanner.css';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('bb-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('bb-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('bb-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner fade-in-up">
      <button className="cookie-banner__close" onClick={handleDecline} aria-label="Schließen">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div className="cookie-banner__text">
        <p>
          Wir verwenden Cookies, um dein
          Nutzungserlebnis zu verbessern. Mit
          „Zustimmen“ erklärst du dich damit
          einverstanden. <a href="#datenschutz">Zur Datenschutzerklärung</a>
        </p>
      </div>

      <div className="cookie-banner__actions">
        <button className="cookie-btn cookie-btn--solid" onClick={handleAccept}>
          Zustimmen
        </button>
        <button className="cookie-btn cookie-btn--outline" onClick={handleDecline}>
          Einstellungen
        </button>
      </div>
    </div>
  );
}
