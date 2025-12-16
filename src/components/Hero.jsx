// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import HeroBrandCards from "./HeroBrandCards";
import { Globe, Award } from "lucide-react";
import RoseDewLogo from "../assets/logo3.png";
import "../styles/Hero.css";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" }
  }
};

const cardsVariant = {
  hidden: { opacity: 0, y: 100, scale: 0.9 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 1.1, 
      delay: 1.2,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Hero() {
  const handleExploreClick = () => {
    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHeritageClick = () => {
    document.getElementById('why-choose')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-decoration" aria-hidden="true">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="hero-container">
        <div className="hero-grid">

          {/* TEXT & LOGO */}
          <motion.div 
            className="hero-content"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-150px" }}
          >
            {/* Logo Wrapper with Glow */}
            <motion.div variants={item} className="hero-logo-wrapper">
              <div className="logo-glow"></div>
              <img src={RoseDewLogo} alt="Rose Dew" className="hero-logo" />
            </motion.div>

            <motion.h1 variants={item} className="hero-tagline">
              Timeless Luxury
              <br />
              <span className="gradient-text">Redefined</span>
            </motion.h1>

            <motion.p variants={item} className="hero-subtitle">
              Exquisite craftsmanship, delivered worldwide through the finest platforms.
            </motion.p>

            <motion.div variants={item} className="hero-cta">
              <button onClick={handleExploreClick} className="btn-primary">
                <Globe size={20} />
                Explore Collections
              </button>
              <button onClick={handleHeritageClick} className="btn-secondary">
                <Award size={20} />
                Our Story
              </button>
            </motion.div>
          </motion.div>

          {/* BRAND CARDS */}
          <motion.div 
            className="hero-visual"
            variants={cardsVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="cards-wrapper">
              <HeroBrandCards />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}