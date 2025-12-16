import React from "react";
import { motion } from "framer-motion";
import {
  Award, Sparkles, Truck, Headphones, ShieldCheck, Globe,
  BadgeCheck, Star, Users, TrendingUp, Shield,
  CheckCircle, Package, RefreshCw, Zap
} from "lucide-react";
import "../styles/WhyChoose.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function WhyChoose() {
  // Distinct colors for each card - optimized for both light and dark modes
  const reasons = [
    { 
      icon: Award, 
      title: "Premium Quality", 
      text: "Every item is thoughtfully crafted to ensure superior quality and lasting elegance.",
      color: "#9333ea", // Purple
      darkColor: "#a855f7",
      features: [
        { icon: CheckCircle, text: "Quality Inspected" },
        { icon: BadgeCheck, text: "Certified Materials" },
        { icon: ShieldCheck, text: "Traceable Sourcing" }
      ]
    },
    { 
      icon: Sparkles, 
      title: "Affordable Luxury", 
      text: "Experience refined luxury designed to be accessible without compromise.",
      color: "#ec4899", // Pink
      darkColor: "#f472b6",
      features: [
        { icon: Package, text: "Best Value" },
        { icon: TrendingUp, text: "Great Prices" },
        { icon: Star, text: "Exclusive Offers" }
      ]
    },
    { 
      icon: Truck, 
      title: "Fast Shipping", 
      text: "Reliable, secure, and timely delivery through our trusted logistics partners.",
      color: "#3b82f6", // Blue (changed from #4f46e5 for better distinction)
      darkColor: "#60a5fa",
      features: [
        { icon: Zap, text: "Express Delivery" },
        { icon: Package, text: "Fast Shipping" },
        { icon: Globe, text: "Global Reach" }
      ]
    },
    { 
      icon: Headphones, 
      title: "Customer First", 
      text: "Dedicated support to ensure a seamless and delightful shopping experience.",
      color: "#10b981", // Emerald Green
      darkColor: "#34d399",
      features: [
        { icon: ShieldCheck, text: "24/7 Support" },
        { icon: RefreshCw, text: "Easy Returns" },
        { icon: Shield, text: "Secure Payment" }
      ]
    }
  ];

  const trustStats = [
    { number: "20K+", label: "Happy Customers", icon: Users },
    { number: "4.9★", label: "Average Rating", icon: Star },
    { number: "100%", label: "Satisfaction", icon: TrendingUp },
    { number: "50+", label: "Countries Served", icon: Globe }
  ];

  const trustBadges = [
    { icon: ShieldCheck, text: "Secure Payment" },
    { icon: Package, text: "Fast Shipping" },
    { icon: CheckCircle, text: "Easy Returns" },
    { icon: BadgeCheck, text: "Authentic Quality" }
  ];

  const handleShopClick = () => {
    document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why-choose" className="why-section">
      {/* Background decoration */}
      <div className="why-background-decoration" aria-hidden="true">
        <div className="why-blob why-blob-1"></div>
        <div className="why-blob why-blob-2"></div>
      </div>

      <div className="why-container">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="why-header"
        >
          <div className="why-badge">
            <Sparkles size={16} />
            <span>Why Choose Us</span>
          </div>
          <h1 className="why-title">
            The <span className="gradient-text">Rose Dew</span> Difference
          </h1>
          <p className="why-subtitle">
            Discover what sets us apart. Experience premium quality, exceptional service, 
            and unmatched value that thousands of customers trust worldwide.
          </p>
        </motion.header>

        {/* Cards Grid - 4 Cards in One Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="why-grid"
        >
          {reasons.map((reason, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="why-card"
              style={{ 
                '--card-color': reason.color,
                '--card-color-dark': reason.darkColor 
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Top accent bar */}
              <div className="card-accent-bar"></div>

              {/* Icon */}
              <div className="why-icon-wrapper">
                <div className="why-icon-inner">
                  <reason.icon size={32} />
                </div>
                <div className="icon-glow"></div>
              </div>

              {/* Content */}
              <h2 className="why-card-title">{reason.title}</h2>
              <p className="why-card-text">{reason.text}</p>
              
              {/* Features */}
              <div className="why-features">
                {reason.features.map((feature, idx) => (
                  <div key={idx} className="why-feature">
                    <span className="feature-icon">
                      <feature.icon size={18} />
                    </span>
                    <span className="feature-text">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Bottom decoration */}
              <div className="corner-decoration"></div>
            </motion.article>
          ))}
        </motion.div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="trust-section"
        >
          <div className="trust-header">
            <div className="trust-badge-large">
              <ShieldCheck size={24} />
              <span>Trusted Worldwide</span>
            </div>
            <h3>Trusted by Thousands</h3>
            <p>Join our community of satisfied customers who choose Rose Dew for quality and reliability.</p>
          </div>

          {/* Trust Stats */}
          <div className="trust-stats">
            {trustStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <stat.icon size={24} />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="trust-badges-container">
            <div className="trust-badges">
              {trustBadges.map((badge, index) => (
                <div key={index} className="trust-badge">
                  <div className="badge-icon">
                    <badge.icon size={20} />
                  </div>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="why-cta"
        >
          <div className="cta-content">
            <h3>Ready to Experience Luxury?</h3>
            <p>Discover why thousands choose Rose Dew for their premium shopping needs.</p>
          </div>
          <button 
            className="why-cta-button" 
            onClick={handleShopClick}
            aria-label="Shop Rose Dew products"
          >
            <span>Shop Now</span>
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}