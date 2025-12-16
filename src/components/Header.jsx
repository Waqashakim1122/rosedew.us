// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Menu, Sparkles } from "lucide-react";
import "../styles/Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileOpen(false);
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Categories", id: "categories" },
    { label: "Why Choose Us", id: "why-choose" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-background" aria-hidden="true"></div>

      <div className="header-container">
        {/* Logo */}
        <div className="header-brand">
          <button onClick={() => scrollTo("hero")} className="header-logo-button">
            <div className="brand-text">
              <span className="brand-name">Rose</span>
              <span className="brand-name-gradient">Dew</span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button onClick={() => scrollTo(item.id)} className="nav-link">
                  <span className="nav-label">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="header-actions">
          <button onClick={() => scrollTo("contact")} className="header-cta-button">
            <span>Get In Touch</span>
            <Sparkles size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Side Drawer */}
      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-nav-overlay" onClick={() => setMobileOpen(false)} />

        <div className="mobile-nav-panel">
          <div className="mobile-panel-header">
            <div className="mobile-panel-logo">
              <span className="brand-name">Rose</span>
              <span className="brand-name-gradient">Dew</span>
            </div>
          </div>

          <div className="mobile-nav-content">
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="mobile-nav-item">
                  <button onClick={() => scrollTo(item.id)} className="mobile-nav-link">
                    <span className="mobile-nav-label">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch Inside Drawer */}
          <div className="mobile-cta-section">
            <button
              onClick={() => {
                scrollTo("contact");
                setMobileOpen(false);
              }}
              className="mobile-cta-button"
            >
              <span>Get In Touch</span>
              <Sparkles size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;