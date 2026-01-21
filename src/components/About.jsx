import React from "react";
import { FaRocket, FaLightbulb, FaHandsHelping, FaCodeBranch, FaEye, FaBullseye } from 'react-icons/fa';
import "./about.css";

function About() {
  const coreValues = [
    { icon: <FaLightbulb />, title: "Innovation", description: "Fostering creative thinking and exploring new technologies." },
    { icon: <FaHandsHelping />, title: "Collaboration", description: "Believing that great ideas are built together, across disciplines." },
    { icon: <FaCodeBranch />, title: "Skill Development", description: "Providing resources for continuous learning and practical application." },
  ];

  return (
    <div className="about-container">

          {/* 🚀 Hero Section */}
        <section className="about-hero-section">
        <div className="mission-content">
          <FaRocket className="mission-icon" />
          <h1 className="about-title">
            Unlocking Potential in the <strong>Digital Frontier</strong>
          </h1>
          <p className="about-subtitle">
            Ada’s Club is a vibrant community dedicated to empowering students
            with the skills, knowledge, and network to drive technological change.
            Established in 2023, we're building the future, one project at a time.
          </p>
        </div>
      </section>
{/* 👩‍💻 Inspiration Section – Ada Lovelace */}
<section className="core-values-section">
  <h2 className="section-heading">Why ADAS?</h2>

  <div className="values-grid">
    <div className="value-card">
      <h3>Ada Lovelace</h3>

      <p>
        Ada Lovelace is widely recognised as the world’s first computer
        programmer. Long before computers existed, she imagined how algorithms
        could power machines to think beyond numbers.
        <br /><br />
        ADAS Club is inspired by her vision — to nurture innovation, encourage
        women in technology, and shape leaders for the digital future.
      </p>
    </div>
  </div>
</section>

      {/* 🎯 Vision & Mission Section - Reusing Core Value Styles */}
      <section className="core-values-section" style={{ borderBottom: 'none' }}>
        <div className="values-grid">
          {/* Vision Card */}
          <div className="value-card">
            <div className="card-icon-wrapper" style={{ color: 'var(--color-accent-blue)', background: 'rgba(0, 124, 240, 0.1)' }}>
                <FaEye />
            </div>
            <h3>Our Vision</h3>
            <p>
              To be a global catalyst for inclusivity in tech, where a new generation 
              of diverse leaders pioneers the next wave of innovation through bold 
              creativity and technical excellence.
            </p>
          </div>

          {/* Mission Card */}
          <div className="value-card">
            <div className="card-icon-wrapper">
                <FaBullseye />
            </div>
            <h3>Our Mission</h3>
            <div className="mission-list-container">
                <p><strong>Skill Development:</strong> Coding workshops and practical learning.</p>
                <p><strong>Real-World Projects:</strong> Collaborative builds that solve problems.</p>
                <p><strong>Mentorship:</strong> Professional guidance and career readiness.</p>
                <p><strong>Inclusivity:</strong> Empowering women and underrepresented groups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 💡 Core Values Section */}
      <section className="core-values-section">
        <h2 className="section-heading">Our Core Values</h2>
        <div className="values-grid">
          {coreValues.map((value, index) => (
            <div key={index} className="value-card">
              <div className="card-icon-wrapper">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;