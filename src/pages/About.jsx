import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/about.css";

export default function About() {
  const [activeTab, setActiveTab] = useState("professional");

  const tabs = [
    { id: "professional", label: "Professional" },
    { id: "approach", label: "My Approach" },
    { id: "philosophy", label: "Philosophy" }
  ];

  const professionalInfo = {
    title: "Full Stack Developer",
    details: [
      "Specializing in Laravel, React, and modern web technologies",
      "Building scalable applications with focus on performance and security",
      "Experience in fintech dashboards and multi-role systems",
      "Strong background in Agile SDLC and SOLID principles"
    ]
  };

  return (
    <motion.section 
      className="about-section text-gray-900 dark:text-white transition-colors duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-header">
        <motion.div 
          className="section-badge"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span>👨‍💻 About Me</span>
        </motion.div>
        
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Crafting Digital <span className="gradient-text">Experiences</span>
        </motion.h2>
      </div>

      <div className="about-content">
        {/* Profile Card */}
        <motion.div 
          className="profile-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ y: -10 }}
        >
          <div className="profile-image-wrapper">
            <img src={`${import.meta.env.BASE_URL}img/MohammadSoleiman.png`} alt="Mohammad Soleiman" />
            <div className="profile-shine" />
            <div className="profile-dots">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="dot" style={{ '--i': i }} />
              ))}
            </div>
          </div>
          
          <div className="profile-info">
            <h3>Mohammad Soleiman</h3>
            <p>Full Stack Developer</p>
            
            <div className="profile-contacts">
              <div className="contact-item">
                <span className="icon">📧</span>
                <span>mohammadsoleiman6@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="icon">📱</span>
                <span>+961 70639058</span>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>Beirut, Lebanon</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info Section */}
        <div className="info-section">
          {/* Tabs */}
          <motion.div 
            className="tabs-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    className="tab-highlight"
                    layoutId="tab-highlight"
                    transition={{ type: "spring" }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div 
            className="tab-content"
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "professional" && (
              <div className="professional-content">
                <h3>Professional Summary</h3>
                <p>
                  Full Stack Developer with hands-on projects in Laravel, React, and MySQL. 
                  Skilled in building responsive applications with modern tools. 
                  Currently training in full-stack web development and seeking an entry-level developer role.
                </p>
                
                <div className="highlight-grid">
                  <div className="highlight-item">
                    <div className="highlight-icon">⚡</div>
                    <div>
                      <h4>Modern Tech Stack</h4>
                      <p>Expert in MERN, LAMP, and modern frameworks</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">🎯</div>
                    <div>
                      <h4>Agile Development</h4>
                      <p>Experience with Jira, sprints, and retrospectives</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">🔐</div>
                    <div>
                      <h4>Security Focus</h4>
                      <p>RBAC, 2FA, and secure authentication flows</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">🚀</div>
                    <div>
                      <h4>Performance</h4>
                      <p>Optimized, scalable applications</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "approach" && (
              <div className="approach-content">
                <h3>My Development Approach</h3>
                <p>
                  I follow a structured approach combining best practices with cutting-edge technologies.
                </p>
                
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-marker" />
                    <div className="timeline-content">
                      <h4>Planning & Architecture</h4>
                      <p>Design patterns, SOLID principles, system architecture</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker" />
                    <div className="timeline-content">
                      <h4>Development</h4>
                      <p>Clean code, TDD, pair programming when applicable</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker" />
                    <div className="timeline-content">
                      <h4>Testing & Security</h4>
                      <p>Unit testing, security audits, penetration testing</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker" />
                    <div className="timeline-content">
                      <h4>Deployment & DevOps</h4>
                      <p>Docker, CI/CD, monitoring, and optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "philosophy" && (
              <div className="philosophy-content">
                <h3>Development Philosophy</h3>
                <p>
                  I believe in building software that not only works but excels in performance, 
                  maintainability, and user experience.
                </p>
                
                <div className="philosophy-grid">
                  <div className="philosophy-card">
                    <h4>Code Quality</h4>
                    <p>Clean, maintainable, and well-documented code</p>
                  </div>
                  <div className="philosophy-card">
                    <h4>User-Centric</h4>
                    <p>Intuitive interfaces and exceptional UX</p>
                  </div>
                  <div className="philosophy-card">
                    <h4>Performance</h4>
                    <p>Optimized for speed and scalability</p>
                  </div>
                  <div className="philosophy-card">
                    <h4>Continuous Learning</h4>
                    <p>Always evolving with new technologies</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="about-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p>Interested in working together?</p>
            <a href="#contact" className="cta-button">
              Let's Connect
              <motion.div 
                className="arrow"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="about-bg-elements">
        <div className="bg-circle circle-1" />
        <div className="bg-circle circle-2" />
        <div className="bg-circle circle-3" />
      </div>
    </motion.section>
  );
}