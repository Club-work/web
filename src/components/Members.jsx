import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./members.css";

const API_URL = import.meta.env.VITE_API_BASE_URL + "/president-members";

export default function Members() {
  const [data, setData] = useState([]);
  const [openBox, setOpenBox] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Members API error", err));
  }, []);

  const toggleBox = (id) => {
    setOpenBox(prev => (prev === id ? null : id));
  };

  return (
    <div className="members-container">
      <h1 className="page-title">
        <span className="gradient-text">
          Adas Club Leadership Archives
        </span>
      </h1>

      <div className="leadership-archive">
        {data.map((p) => {
          const isOpen = openBox === p.id;
          const Icon = isOpen ? FaChevronUp : FaChevronDown;

          return (
            <div
              key={p.id}
              className={`president-card-box ${isOpen ? "is-open" : ""}`}
            >
              {/* ✅ ONLY HEADER IS CLICKABLE */}
              <div
                className="president-header"
                onClick={() => toggleBox(p.id)}
              >
                <div className="photo-wrapper">
                  <img
                    src={p.photo_url}
                    className="president-photo"
                    alt={p.name}
                  />
                </div>

                <div className="president-info">
                  <h3 className="president-name">{p.name}</h3>
                  <p className="president-year">({p.year})</p>

                  <div className="expand-indicator">
                    <Icon className="toggle-icon" />
                    <span className="toggle-text">
                      {isOpen ? "Hide Team" : "View Team"}
                    </span>
                  </div>
                </div>
              </div>

              {/* ✅ STOP EVENT BUBBLING INSIDE GRID */}
              {isOpen && (
                <div
                  className="expandable-member-grid"
                  onClick={(e) => e.stopPropagation()}
                >
                  {p.members.map((m) => (
                    <div key={m.id} className="member-item">
                      <div className="member-photo-circle">
                        <img src={m.photo_url} alt={m.name} />
                      </div>
                      <p className="member-name-small">
                        <strong>{m.name}</strong>
                      </p>
                      <p className="member-role-small">{m.role}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
