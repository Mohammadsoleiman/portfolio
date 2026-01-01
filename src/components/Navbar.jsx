import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/navbar.css";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export default function Navbar({ activeSection, setActiveSection }) {
  const [hovered, setHovered] = useState(null);

  const handleClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text">MS</span>
          <div className="logo-glow" />
        </motion.div>

        <div className="nav-items">
          {navItems.map((item, i) => (
            <motion.div
              key={item.id}
              className="nav-item-wrapper"
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: -20, opacity: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                onClick={() => handleClick(item.id)}
              >
                {item.label}
                {(hovered === item.id || activeSection === item.id) && (
                  <motion.div
                    className="nav-highlight"
                    layoutId="nav-highlight"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
              {activeSection === item.id && (
                <motion.div
                  className="nav-indicator"
                  layoutId="nav-indicator"
                  transition={{ type: "spring", stiffness: 500 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="nav-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#contact" className="hire-btn">
            <span>Hire Me</span>
            <div className="btn-sparkle" />
          </a>
        </motion.div>
      </div>

      {/* Animated Line */}
      <motion.div 
        className="nav-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </motion.nav>
  );
}