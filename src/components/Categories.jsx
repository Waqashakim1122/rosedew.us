// src/components/Categories.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/Categories.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function Categories() {
  const services = [
    {
      title: "Amazon",
      description:
        "A trusted global platform where you can explore our verified marketplace presence with secure and seamless buying options.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      bgColor: "#FF9900",
      link: "https://amazon.com"
    },
    {
      title: "Walmart",
      description:
        "Find us on a reliable retail network built for convenience, credibility, and smooth online purchasing experiences.",
      logo: "https://i5.walmartimages.com/dfw/63fd9f59-14e2/9d304ce6-96de-4331-b8ec-c5191226d378/v1/spark-icon.svg",
      bgColor: "#0071CE",
      link: "https://walmart.com"
    },
    {
      title: "eBay",
      description:
        "A global trading environment where every transaction is protected, transparent, and customer-focused.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
      bgColor: "#E53238",
      link: "https://ebay.com"
    },
    {
      title: "Shopify",
      description:
        "Our official digital storefront designed to offer clean navigation, secure payments, and a smooth buying journey.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
      bgColor: "#96bf48",
      link: "https://yourstore.myshopify.com"
    }
  ];

  return (
    <section id="categories" className="services-section">
      {/* Decorative background */}
      <div className="background-decoration" aria-hidden="true">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="services-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="services-header"
        >
          <span className="services-badge">Our Verified Presence</span>
          <h2 id="services-title" className="services-title">
            Where You Can <span className="gradient-text">Find Us</span>
          </h2>
          <p className="services-subtitle">
            Explore Rose Dew across trusted global marketplaces offering secure,
            fast, and reliable shopping experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="services-grid"
          role="grid"
        >
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="service-card"
              style={{
                // CSS Variables are set here for brand-specific coloring
                "--brand-color": service.bgColor,
                "--brand-color-light": `${service.bgColor}15`,
                "--brand-color-medium": `${service.bgColor}25`
              }}
              aria-label={`Visit Rose Dew on ${service.title}`}
            >
              <div className="card-accent-bar"></div>

              <div className="service-icon-wrapper">
                <div className="icon-glow"></div>
                <img
                  src={service.logo}
                  alt={`${service.title} logo`}
                  className="service-logo"
                  loading="lazy"
                />
              </div>

              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <div className="service-btn">
                  <span>Visit Platform</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              <div className="corner-decoration"></div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}