import { motion, AnimatePresence } from "framer-motion";  // FIXED: Added AnimatePresence
import { useState } from "react";
import "../styles/experience.css";

const experiences = [
  {
    company: "The Digital Hub | UNRWA",
    position: "Full Stack Developer Trainee",
    period: "Aug 2025 - Present",
    location: "Beirut, Lebanon",
    achievements: [
      "Built and deployed web applications using full-stack technologies including MERN, Next.js, and Laravel",
      "Designed RESTful APIs through Express.js, Next.js, and Laravel to optimize backend efficiency",
      "Developed large dashboards and informative web solutions targeting fintech and multi-role setups",
      "Operated under Agile SDLC practices utilizing Jira, sprints, and retrospectives",
      "Applied design patterns and SOLID guidelines for structured codebases",
      "Implemented UI/UX best practices for responsive and intuitive design"
    ],
    tech: ["React", "Next.js", "Laravel", "TypeScript", "PostgreSQL", "Docker"],
    type: "education"
  },
  {
    company: "Freelance Web Developer",
    position: "Web Developer",
    period: "Dec 2024 – Feb 2025",
    location: "Afkar Al Tatweer, Remote",
    achievements: [
      "Built websites using front-end and back-end languages",
      "Collaborated with clients to deliver custom web solutions",
      "Implemented responsive designs and optimized performance"
    ],
    tech: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    type: "work"
  },
  {
    company: "Al Moasat Association",
    position: "IT Support Intern",
    period: "May 2023 – July 2023",
    location: "Saida, Lebanon",
    achievements: [
      "Assisted in project planning and collaborated with team on design and testing",
      "Resolved technical IT issues and provided user support",
      "Participated in system maintenance and troubleshooting"
    ],
    tech: ["IT Support", "Troubleshooting", "System Maintenance"],
    type: "work"
  }
];

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <motion.section 
      className="experience-section text-gray-900 dark:text-white transition-colors duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="section-header">
        <motion.div 
          className="section-badge"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span>💼 Professional Journey</span>
        </motion.div>
        
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Professional <span className="gradient-text">Experience</span>
        </motion.h2>
      </div>

      <div className="experience-container">
        {/* Timeline Navigation */}
        <motion.div 
          className="timeline-nav"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="timeline-line">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className={`timeline-dot ${activeExp === i ? "active" : ""} ${exp.type}`}
                onClick={() => setActiveExp(i)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="dot-core" />
                <div className="dot-glow" />
                <div className="dot-label">{exp.company.split("|")[0]}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Details */}
        <div className="experience-details">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExp}
              className="experience-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="exp-header">
                <div className="exp-title">
                  <h3>{experiences[activeExp].position}</h3>
                  <div className="company-badge">
                    <span>{experiences[activeExp].company}</span>
                  </div>
                </div>
                <div className="exp-meta">
                  <span className="period">{experiences[activeExp].period}</span>
                  <span className="location">{experiences[activeExp].location}</span>
                </div>
              </div>

              <div className="exp-achievements">
                <h4>Key Responsibilities & Achievements:</h4>
                <ul>
                  {experiences[activeExp].achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="bullet">▸</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="exp-tech">
                {experiences[activeExp].tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* Animated Elements */}
      <div className="exp-bg-elements">
        <motion.div 
          className="floating-code"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {`const experience = { years: 3, projects: 4 }`}
        </motion.div>
      </div>
    </motion.section>
  );
}