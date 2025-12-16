// src/components/Contact.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, XCircle, Loader, Sparkles } from "lucide-react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

export default function Contact() {
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  /* ================= FORM HANDLERS ================= */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.message.trim())
      newErrors.message = "Message is required";
    else if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";
    return newErrors;
  };

  /* ================= EMAIL SUBMIT ================= */

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === "sending") return;

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrors({});

    emailjs
      .send(
        "service_v7ddpcj",      // ✅ YOUR SERVICE ID
        "template_kpxpbzk",     // ✅ YOUR TEMPLATE ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "No Subject",
          message: formData.message,
        },
        "1ymsRB9kQJalEuuSI"     // ✅ YOUR PUBLIC KEY
      )
      .then(
        () => {
          setStatus("success");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
          });
          setTimeout(() => setStatus(""), 5000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  /* ================= UI ================= */

  return (
    <section id="contact" className="contact-section">
      {/* Background decorative blobs */}
      <div className="contact-background-decoration">
        <div className="contact-blob contact-blob-1"></div>
        <div className="contact-blob contact-blob-2"></div>
      </div>

      <div className="contact-container">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <div className="contact-badge">
            <Sparkles size={16} />
            <span>Contact Us</span>
          </div>
          <h1 className="contact-title">
            Connect With <span className="gradient-text">Our Team</span>
          </h1>
          <p className="contact-subtitle">
            We’d love to hear from you. Send us a message anytime.
          </p>
        </motion.header>

        <div className="contact-card-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="contact-card"
          >
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-grid">
                <input
                  type="text"
                  name="name"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "sending"}
                />
                <input
                  type="email"
                  name="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "sending"}
                />
              </div>

              <input
                type="text"
                name="subject"
                className="form-input"
                placeholder="Subject (Optional)"
                value={formData.subject}
                onChange={handleChange}
                disabled={status === "sending"}
              />

              <textarea
                name="message"
                className={`form-textarea ${errors.message ? 'error' : ''}`}
                placeholder="Your Message *"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                disabled={status === "sending"}
              />

              {Object.keys(errors).length > 0 && (
                <div className="error-messages">
                  {Object.values(errors).map((error, index) => (
                    <p key={index} className="error-text">
                      {error}
                    </p>
                  ))}
                </div>
              )}

              <button 
                type="submit" 
                className="form-submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <Loader className="spin" size={18} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
              
              <p className="form-note">
                All fields marked with * are required.
              </p>
            </form>
          </motion.div>
        </div>

        {/* ================= TOAST NOTIFICATIONS ================= */}
        <AnimatePresence>
          {status === "success" && (
            <motion.div 
              className="toast-notification success"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <CheckCircle size={24} color="#10b981" />
              <div>
                <h4>Message Sent Successfully!</h4>
                <p>We've received your message and will get back to you soon.</p>
              </div>
              <button onClick={() => setStatus("")}>
                <XCircle size={18} />
              </button>
            </motion.div>
          )}
          {status === "error" && (
            <motion.div 
              className="toast-notification error"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <XCircle size={24} color="#ef4444" />
              <div>
                <h4>Failed to Send Message</h4>
                <p>Please check your connection and try again.</p>
              </div>
              <button onClick={() => setStatus("")}>
                <XCircle size={18} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}