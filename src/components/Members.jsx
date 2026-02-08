import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./members.css";

const API_URL = import.meta.env.VITE_API_BASE_URL + "/president-members";

export default function Members() {
  const [data, setData] = useState([]);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Members API error", err));
  }, []);

  const toggle = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="members-container">
      <h1 className="page-title">
        <span className="gradient-text">
          Adas Club Leadership Archives
        </span>
      </h1>

      <div className="leadership-archive">
        {data.map(p => {
          const isOpen = openId === p.id;
          const Icon = isOpen ? FaChevronUp : FaChevronDown;

          return (
            <div key={p.id} className="president-card-box">
              
              {/* ✅ CLICK ONLY THIS HEADER */}
              <div
                className="president-header"
                onClick={() => toggle(p.id)}
              >
                <div className="photo-wrapper">
                  <img src={p.photo_url} alt={p.name} />
                </div>

                <div className="president-info">
                  <h3>{p.name}</h3>
                  <p>({p.year})</p>

                  <div className="expand-indicator">
                    <Icon />
                    <span>{isOpen ? "Hide Team" : "View Team"}</span>
                  </div>
                </div>
              </div>

              {/* ✅ ONLY THIS PRESIDENT MEMBERS */}
              {isOpen && (
                <div className="expandable-member-grid">
                  {p.members.map(m => (
                    <div key={m.id} className="member-item">
                      <img src={m.photo_url} alt={m.name} />
                      <p><b>{m.name}</b></p>
                      <p>{m.role}</p>
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
