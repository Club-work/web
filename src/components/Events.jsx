import React, { useEffect, useState } from 'react';
import {
  FaCalendarAlt,
  FaCode,
  FaRobot,
  FaLaptopCode,
  FaChevronRight
} from 'react-icons/fa';
import './events.css';

// Event styles – DO NOT CHANGE
const eventStyles = {
  Webinar: { icon: FaLaptopCode, color: 'var(--color-accent-blue)' },
  Workshop: { icon: FaRobot, color: 'var(--color-accent-green)' },
  Competition: { icon: FaCode, color: 'var(--color-accent-pink)' },
  Coding: { icon: FaCode, color: 'var(--color-accent-pink)' },
  Hackathon: { icon: FaLaptopCode, color: 'var(--color-accent-green)' },
  Quiz: { icon: FaCode, color: 'var(--color-accent-blue)' },
  Tutorial: { icon: FaLaptopCode, color: 'var(--color-accent-blue)' },
  Community: { icon: FaCalendarAlt, color: 'var(--color-text-light)' },
};

function Events() {
  const [events, setEvents] = useState([]);
  const [flippedCard, setFlippedCard] = useState(null);

  const API_URL = import.meta.env.VITE_API_BASE_URL + '/events';

  // Fetch events from backend
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const sorted = data.sort((a, b) => b.id - a.id); // latest first
        setEvents(sorted);
      })
      .catch(err => console.error('Events API Error:', err));
  }, []);

  const handleCardFlip = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  const renderEventCard = (e, i) => {
    const style = eventStyles[e.categories] || eventStyles['Webinar'];
    const IconComponent = style.icon;
    const isFlipped = flippedCard === i;

    return (
      <div
        key={i}
        className={`timeline-node ${i % 2 === 0 ? 'left' : 'right'}`}
        style={{ '--accent-color': style.color }}
        onClick={() => handleCardFlip(i)}
      >
        <div className="timeline-node-dot">
          <IconComponent className="dot-icon" style={{ color: style.color }} />
        </div>

        <div className={`event-card-3d ${isFlipped ? 'is-flipped' : ''}`}>

          {/* FRONT */}
          <div className="card-face card-front">
            <span className="event-category" style={{ color: style.color }}>
              {e.categories}
            </span>

            <h2 className="event-title">{e.title}</h2>
            <p className="event-desc">
              {e.details.length > 100 ? e.details.slice(0, 100) + "..." : e.details}
            </p>

            <div className="card-footer">
              <p>Click for Details <FaChevronRight /></p>
            </div>

            {/* Register Button */}
            {e.register && e.gform_link && (
              <button
                className="register-btn"
                onClick={(ev) => {
                  ev.stopPropagation();
                  window.open(e.gform_link, '_blank');
                }}
              >
                Register Now
              </button>
            )}
          </div>

          {/* BACK */}
          <div className="card-face card-back">
            <h3 className="event-details-title">DETAILS</h3>
            <p className="event-details-text">{e.details}</p>

            {e.register && e.gform_link && (
              <button
                className="register-btn"
                onClick={(ev) => {
                  ev.stopPropagation();
                  window.open(e.gform_link, '_blank');
                }}
              >
                Register Now
              </button>
            )}
          </div>

        </div>
      </div>
    );
  };

  return (
    <div className="events-page-container">
      <header className="events-header">
        <h1 className="page-title">
          <span className="holographic-text">Adas Club Event Horizon</span>
        </h1>
        <p className="page-subtitle">
          A journey through our past, present, and future tech milestones.
        </p>
      </header>

      <div className="events-timeline">
        {events.map(renderEventCard)}
      </div>
    </div>
  );
}

export default Events;
