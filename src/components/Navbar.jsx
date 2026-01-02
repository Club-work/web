import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // 🔒 Menu open irukkum pothu body scroll stop
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <>
      {/* 🔲 Overlay – outside click close */}
      {isOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu}>Ada's Club</Link>
        </div>

        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/members" onClick={closeMenu}>Members</Link>
          <Link to="/events" onClick={closeMenu}>Events</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </div>
      </nav>
    </>
  );
};

export default Navbar;
