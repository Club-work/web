import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaCalendarAlt, FaUsers, FaArrowRight } from 'react-icons/fa';
import './home.css';
import logo from '../assets/logo.jpg';

const Home = () => {
  return (
    <div className="home-container">

      {/* 🚀 Hero Section - Dark & Futuristic */}
      <section className="hero-section">
        <div className="hero-content">
          <img src={logo} alt="Adas Club Logo" className="club-logo" />
          <h1 className="club-title">
            <span className="gradient-text">Adas Club</span>
          </h1>
          <p className="club-tagline">
            Empowering the Next Generation of <br />
            **Innovation & Technology**
          </p>
          <div className="logo-circle">
  <img src={logo} alt="Adas Club Logo" />
</div>
          <div className="hero-actions">
            {/* PRIMARY CTA: Link to /contact page */}
            <Link to="/contact" className="cta-button primary-cta">
              Join the Club <FaArrowRight className="icon-right" />
            </Link>
            {/* Secondary CTA: Link to /events page */}
            <Link to="/events" className="cta-button secondary-cta">
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;