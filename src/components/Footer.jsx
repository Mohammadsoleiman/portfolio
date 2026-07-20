import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { profile } from "../data/profile";
import "../styles/footer.css";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: "github", href: profile.links.github },
    { icon: "linkedin", href: profile.links.linkedin },
    { icon: "twitter", href: "#" },
    { icon: "mail", href: `mailto:${profile.email}` },
  ];

  return (
    <footer className="footer">
      {/* Waves */}
      <div className="footer-waves">
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
      </div>

      <div className="footer-container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3>Mohammad Soleiman</h3>
            <p>
              Full Stack Developer specializing in modern web technologies. 
              Building scalable applications with Laravel, React, and modern DevOps tools.
            </p>
            <div className="contact-mini">
              <p>📧 {profile.email}</p>
              <p>📱 {profile.phone}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={link.href}>
                    <span className="link-icon">→</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="footer-section social-section">
            <h3>Connect With Me</h3>
            <div className="social-links-footer">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="social-link-footer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon === "github" && "🐙"}
                  {social.icon === "linkedin" && "💼"}
                  {social.icon === "twitter" && "🐦"}
                  {social.icon === "mail" && "📧"}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <motion.div 
            className="footer-logo"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring" }}
          >
            MS
          </motion.div>
          
          <p className="copyright">
            © {new Date().getFullYear()} Mohammad Soleiman. All rights reserved.
          </p>
          
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={showBackToTop ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        ↑
      </motion.button>
    </footer>
  );
}
