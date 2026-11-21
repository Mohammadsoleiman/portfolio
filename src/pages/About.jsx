import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/about.css";
import { FiLayers, FiLock, FiMail, FiMapPin, FiPhone, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

export default function About() {
  const [activeTab, setActiveTab] = useState("professional");

  const tabs = [
    { id: "professional", label: "Professional" },
    { id: "approach", label: "How I Work" }
  ];


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
          <span><FiUser aria-hidden /> About Me</span>
        </motion.div>
        
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          About <span className="gradient-text">Me</span>
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
            <img src={`${import.meta.env.BASE_URL}img/mohammad-soleiman.jpg`} alt="Mohammad Soleiman" />
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
                <span className="icon"><FiMail aria-hidden /></span>
                <span className="contact-email">mohammadsoleiman6@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="icon"><FiPhone aria-hidden /></span>
                <span>+961 70639058</span>
              </div>
              <div className="contact-item">
                <span className="icon"><FiMapPin aria-hidden /></span>
                <span>Lebanon</span>
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
                  Full Stack Developer with a BSc in Computer Science. I build business software end to end:
                  a retail point of sale now in testing at shops, a clinic booking platform that is live,
                  and systems for car dealers and online stores. I trained at The Digital Hub (UNRWA) in 2025
                  and I am looking for a full-time developer role.
                </p>
                
                <div className="highlight-grid">
                  <div className="highlight-item">
                    <div className="highlight-icon"><FiLayers aria-hidden /></div>
                    <div>
                      <h4>Full-Stack Range</h4>
                      <p>Laravel, React, Node.js and .NET, with MySQL, PostgreSQL or MongoDB</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon"><FiTarget aria-hidden /></div>
                    <div>
                      <h4>Agile Development</h4>
                      <p>Experience with Jira, sprints, and retrospectives</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon"><FiLock aria-hidden /></div>
                    <div>
                      <h4>Security Built In</h4>
                      <p>Roles and permissions, PIN and two-factor sign-in, audit logs</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon"><FiTrendingUp aria-hidden /></div>
                    <div>
                      <h4>Arabic and English</h4>
                      <p>Right-to-left screens, two languages and two currencies</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "approach" && (
              <div className="approach-content">
                <h3>How I Work</h3>
                <p>
                  The same four steps on every project, from the first talk with the owner to the last fix.
                </p>
                
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-marker" />
                    <div className="timeline-content">
                      <h4>Understand the business</h4>
                      <p>Sit with the people who will use it and write down their real day</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker" />
                    <div className="timeline-content">
                      <h4>Design the data</h4>
                      <p>Database, roles and permissions first, then the screens</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker" />
                    <div className="timeline-content">
                      <h4>Build and test</h4>
                      <p>APIs and React screens, tested on the devices people really use</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker" />
                    <div className="timeline-content">
                      <h4>Ship and support</h4>
                      <p>Installers and live sites, then fixes from real use</p>
                    </div>
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