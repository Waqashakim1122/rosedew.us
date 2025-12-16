// src/components/About.jsx
import React from "react";
import { Heart, Leaf, Star, Users, Sparkles, Target, Award, Gem } from "lucide-react";
import { motion } from "framer-motion";
import "../styles/About.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function About() {
  return (
    <section id="about" className="about-section" aria-label="About Rose Dew">
      <div className="about-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="about-header"
        >
          <div className="header-badge">
            <Sparkles size={16} />
            <span>Our Story</span>
          </div>
          <h1 className="about-title">
            Welcome to <span className="highlight">Rose Dew</span>
          </h1>
          <p className="about-intro">
            A place built on trust, simplicity, and an experience made with care.
          </p>
        </motion.div>

        {/* Story */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="story-section centered-section"
        >
          <motion.div variants={itemVariants} className="story-card">
            <div className="card-decoration"></div>
            <div className="card-content">
              <h2 className="story-title">How It All Began</h2>
              <div className="story-text">
                <p>
                  Rose Dew began with one simple goal — to create a smooth,
                  trustworthy, and effortless experience for everyone who visits us.
                  No complicated claims, no confusing processes, just a place built
                  on clarity and care.
                </p>
                <p>
                  Over time, our values have remained the same. We focus on
                  transparency, attention to detail, and making sure every customer
                  feels supported and respected in every interaction.
                </p>
              </div>

              <div className="story-stats">
                <motion.div variants={itemVariants} className="stat">
                  <div className="stat-number">Trusted</div>
                  <div className="stat-label">Service</div>
                </motion.div>
                <motion.div variants={itemVariants} className="stat">
                  <div className="stat-number">Secure</div>
                  <div className="stat-label">Experience</div>
                </motion.div>
                <motion.div variants={itemVariants} className="stat">
                  <div className="stat-number">Smooth</div>
                  <div className="stat-label">Process</div>
                </motion.div>
              </div>

            </div>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="values-section"
        >
          <motion.div variants={itemVariants} className="values-header">
            <h2 className="values-title">What Guides Us</h2>
            <p className="values-subtitle">
              Principles that shape every step of our journey
            </p>
          </motion.div>

          <motion.div className="values-grid four-columns">
            {[
              { icon: Star, title: "Reliability", desc: "We keep things clear, consistent, and dependable so every visitor feels confident.", tag: "Our Standard" },
              { icon: Heart, title: "Respect", desc: "Every interaction matters to us. We treat each customer with sincerity and care.", tag: "Our Focus" },
              { icon: Users, title: "Transparency", desc: "We believe in being open, honest, and straightforward—always.", tag: "Our Promise" },
              { icon: Leaf, title: "Thoughtful Choices", desc: "Everything we do is approached with intention and responsibility.", tag: "Our Commitment" },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="value-card"
              >
                <div className="card-top">
                  <div className="value-icon-wrapper">
                    <value.icon size={24} className="value-icon" data-icon={value.icon.displayName?.toLowerCase() || value.icon.name?.toLowerCase() || ""} />
                  </div>
                  <div className="value-name">{value.title}</div>
                </div>
                <p className="value-desc">{value.desc}</p>
                <div className="card-tag">{value.tag}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Promise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="promise-section centered-section"
        >
          <div className="promise-card">
            <div className="promise-header">
              <Target size={24} />
              <h3 className="promise-title">Our Simple Promise</h3>
            </div>
            <div className="promise-content">
              <p>
                Our promise is simple: to offer an experience that feels smooth,
                secure, and genuinely supportive. We believe in clarity,
                consistency, and being here whenever you need us.
              </p>
              <div className="promise-tags">
                <span className="tag">Clarity</span>
                <span className="tag">Reliability</span>
                <span className="tag">Real Support</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="contact-note"
        >
          <div className="contact-header">
            <Award size={24} />
            <h2 className="contact-title">Want to Know More?</h2>
          </div>
          <p className="contact-text">
            We're always here to help. Whether it's a question, a suggestion, or
            simply a conversation — you're welcome anytime.
          </p>
          <a href="#contact" className="contact-link">
            <Gem size={18} />
            <span>Get in touch</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default About;