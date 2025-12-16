// src/components/Footer.jsx
import React from "react";
import { 
  Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, 
  Sparkles, Home, Users, Package, Award, BookOpen, ShoppingBag,
  Store, ShoppingCart, Globe, Heart
} from "lucide-react";
import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  // Replace with your real store links
  const stores = {
    amazon: "https://amazon.com/yourstore",
    walmart: "https://walmart.com/yourstore",
    ebay: "https://ebay.com/usr/yourstore",
    shopify: "https://yourbrand.myshopify.com",
    etsy: "https://etsy.com/shop/yourstore"
  };

  // Social media links
  const socialLinks = {
    instagram: "https://instagram.com/rosedew",
    facebook: "https://facebook.com/rosedew",
    twitter: "https://twitter.com/rosedew",
    pinterest: "https://pinterest.com/rosedew",
    youtube: "https://youtube.com/rosedew"
  };

  return (
    <footer className="footer-section" aria-label="Main footer">
      {/* Top decorative element */}
      <div className="footer-top-decoration">
        <Sparkles size={24} className="footer-sparkle" />
      </div>

      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Brand Column */}
          <div className="footer-brand-column">
            <div className="footer-brand-wrapper">
              <h2 className="footer-brand">
                Rose <span className="gradient-text">Dew</span>
              </h2>
              <div className="footer-brand-badge">
                <Sparkles size={14} />
                <span>Luxury Redefined</span>
              </div>
            </div>
            <p className="footer-brand-description">
              A global luxury Redefined dedicated to timeless elegance, 
              exquisite craftsmanship, and unparalleled customer experiences.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="newsletter-section">
              <h4 className="newsletter-title">Stay in the Loop</h4>
              <p className="newsletter-subtitle">Subscribe for exclusive offers and style inspiration</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <div className="newsletter-input-group">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="newsletter-input"
                    aria-label="Email for newsletter subscription"
                  />
                  <button type="submit" className="newsletter-button">
                    <Mail size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="footer-column-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link"><Home size={16} /> Home</a></li>
              <li><a href="#about" className="footer-link"><Users size={16} /> About Us</a></li>
              <li><a href="#categories" className="footer-link"><Package size={16} /> Collections</a></li>
              <li><a href="#why-choose" className="footer-link"><Award size={16} /> Why Rose Dew</a></li>
              <li><a href="#contact" className="footer-link"><Mail size={16} /> Contact</a></li>
              <li><a href="#blog" className="footer-link"><BookOpen size={16} /> Style Journal</a></li>
            </ul>
          </div>

          {/* Where to Shop */}
          <div className="footer-column">
            <h3 className="footer-column-title">Where to Shop</h3>
            <ul className="footer-links">
              <li>
                <a href={stores.amazon} target="_blank" rel="noopener noreferrer" className="footer-link store-link">
                  <ShoppingBag size={18} className="brand-icon amazon-icon" />
                  Amazon Store
                </a>
              </li>
              <li>
                <a href={stores.shopify} target="_blank" rel="noopener noreferrer" className="footer-link store-link">
                  <Store size={18} className="brand-icon shopify-icon" />
                  Shopify Store
                </a>
              </li>
              
              <li>
                <a href={stores.ebay} target="_blank" rel="noopener noreferrer" className="footer-link store-link">
                  <Globe size={18} className="brand-icon ebay-icon" />
                  eBay Store
                </a>
              </li>
              <li>
                <a href={stores.walmart} target="_blank" rel="noopener noreferrer" className="footer-link store-link">
                  <ShoppingCart size={18} className="brand-icon walmart-icon" />
                  Walmart Marketplace
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="footer-column">
            <h3 className="footer-column-title">Get in Touch</h3>
            <ul className="footer-contact">
              <li className="contact-item">
                <Mail size={16} className="contact-icon" />
                <span>afaq@rosedew.us</span>
              </li>
              <li className="contact-item">
                <Phone size={16} className="contact-icon" />
                <span>+1 (609) 968-3825</span>
              </li>
              <li className="contact-item">
                <MapPin size={16} className="contact-icon" />
                <span>Cincinnati Ohio</span>
              </li>
            </ul>
            
            <div className="social-section">
              <h4 className="social-title">Follow Us</h4>
              <div className="social-links">
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <Instagram size={20} className="social-icon" />
                </a>
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <Facebook size={20} className="social-icon" />
                </a>
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                  <Twitter size={20} className="social-icon" />
                </a>
                <a href={socialLinks.pinterest} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Pinterest">
                  <Heart size={20} className="social-icon pinterest-icon" />
                </a>
                <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                  <Youtube size={20} className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="footer-legal">
          <div className="legal-links">
            <a href="#privacy" className="legal-link">Privacy Policy</a>
            <span className="legal-separator">•</span>
            <a href="#terms" className="legal-link">Terms of Service</a>
            <span className="legal-separator">•</span>
            <a href="#shipping" className="legal-link">Shipping & Returns</a>
            <span className="legal-separator">•</span>
            <a href="#cookies" className="legal-link">Cookie Policy</a>
            <span className="legal-separator">•</span>
            <a href="#faq" className="legal-link">FAQ</a>
          </div>
        </div>

        {/* Copyright - CENTERED */}
        <div className="footer-copyright-centered">
          <p className="copyright-text">
            © {currentYear} <span className="copyright-brand">Rose Dew</span>. All rights reserved.
          </p>
          <p className="copyright-disclaimer">
            Luxury goods showcased are trademarks of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;