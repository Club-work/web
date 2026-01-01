import React, { useState } from "react";
import { FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { sendContactMessage } from "../config/api";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "Sending...") return;

    setStatus("Sending...");

    try {
      await sendContactMessage(formData);

      setStatus("Message Sent Successfully ✅");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message ❌");
    }
  };

  return (
    <section id="contact" className="contact-page-container">
      <header className="contact-header">
        <h1 className="page-title">
          <span className="holographic-text">Connect with Adas Club</span>
        </h1>
        <p className="page-subtitle">
          We are always ready to collaborate, answer questions, and welcome new members.
        </p>
      </header>

      <div className="contact-content-grid">
        {/* INFO */}
        <div className="contact-info-box neon-border">
          <h3 className="box-heading">Get in Touch</h3>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <p>A.U. R.C.M., Madurai, Tamil Nadu, India</p>
          </div>

          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <a href="mailto:adasclubaurcm@gmail.com" className="contact-link">
              adasclubaurcm@gmail.com
            </a>
          </div>

          <h3 className="follow-heading">Follow Us</h3>
          <a
            href="https://www.instagram.com/adasclub_arcum"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link instagram-glow"
          >
            <FaInstagram /> @adasclub_arcum
          </a>
        </div>

        {/* FORM */}
        <div className="contact-form-box neon-border">
          <h3 className="box-heading">Send a Quick Message</h3>

          <form className="futuristic-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="form-input"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="form-input"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="form-input"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              className="submit-button"
              disabled={status === "Sending..."}
            >
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status && status !== "Sending..." && (
            <p className={`submission-status ${status.includes("Successfully") ? "success" : "error"}`}>
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
