// src/components/HeroBrandCards.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/HeroBrandCards.css";

const brands = [
  { name: "", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", color: "#FF9900", light: "#fff9f0", link: "https://amazon.com" },
  { name: "Walmart", logo: "https://i5.walmartimages.com/dfw/63fd9f59-14e2/9d304ce6-96de-4331-b8ec-c5191226d378/v1/spark-icon.svg", color: "#0071CE", light: "#f0f8ff", link: "https://walmart.com" },
  { name: "", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg", color: "#E53238", light: "#fff0f0", link: "https://ebay.com" },
  { name: "", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg", color: "#95BF47", light: "#f5f9f0", link: "https://shopify.com" },
];

export default function HeroBrandCards() {
  const handleClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="brand-cards-wrapper">
      <div className="brand-cards-grid">
        {brands.map((brand, index) => {
          const fromLeft = index === 1 || index === 3;

          return (
            <motion.div
              key={index}
              className="brand-card"
              initial={{ 
                opacity: 0,
                scale: 0.85,
                x: fromLeft ? -160 : 160,
                y: 120
              }}
              whileInView={{ 
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0
              }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 1.1,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                scale: 1.09,
                y: -18,
                rotate: fromLeft ? -2.5 : 2.5
              }}
              style={{ 
                "--brand-color": brand.color,
                "--light-bg": brand.light
              }}
              onClick={() => handleClick(brand.link)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleClick(brand.link)}
              aria-label={`Shop on ${brand.name || 'Amazon/eBay/Shopify'}`}
            >
              <div className="card-inner">
                <div className="floating-glow"></div>
                <img src={brand.logo} alt="" className="brand-logo" />
                
                {/* Only Walmart shows name */}
                {brand.name && (
                  <motion.span 
                    className="brand-name-text"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {brand.name}
                  </motion.span>
                )}

                <div className="card-accent"></div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}