import { motion, AnimatePresence } from "framer-motion";
import "../styles/education.css";

const education = [
  {
    institution: "The Digital Hub | UNRWA",
    degree: "Full-Stack Web Development Training",
    period: "Aug 2025 - Present",
    location: "Beirut, Lebanon",
    highlights: [
      "Built and deployed web applications using full-stack technologies",
      "Designed RESTful APIs with Express.js, Next.js, and Laravel",
      "Developed fintech dashboards and multi-role systems",
      "Agile SDLC with Jira, sprints, and retrospectives",
      "Design patterns and SOLID principles",
      "UI/UX best practices implementation"
    ],
    tech: ["MERN", "Next.js", "Laravel", "PostgreSQL", "Docker", "Jira"]
  },
  {
    institution: "Lebanese International University",
    degree: "Bachelor's in Computer Science",
    period: "Oct 2022 - June 2024",
    location: "Saida, Lebanon",
    highlights: [
      "Mobile Application Development",
      "Web Development",
      "Data Structures & Algorithms",
      "Information Systems Development",
      "Database Management",
      "Software Engineering"
    ],
    tech: ["Java", "Python", "SQL", "Data Structures", "OOP"]
  },
  {
    institution: "Sibline Training Center",
    degree: "Management Information System",
    period: "Oct 2020 - July 2022",
    location: "Saida, Lebanon",
    highlights: [
      "Machine Learning & Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Agent Systems",
      "Multi-Agent Systems",
      "Data Analysis"
    ],
    tech: ["Python", "TensorFlow", "OpenCV", "NLP", "AI/ML"]
  }
];

const certifications = [
  { title: "Cyber Security", issuer: "Sibline Training Center", year: "2024" },
  { title: "Robotics Training", issuer: "DOT Program", year: "2021" }
];

export default function Education() {
  return (
    <motion.section 
      className="education-section"
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
          <span>🎓 Education & Certifications</span>
        </motion.div>
        
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Academic <span className="gradient-text">Journey</span>
        </motion.h2>
      </div>

      <div className="education-container">
        {/* Education Timeline */}
        <div className="education-timeline">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="education-header">
                <div className="education-title">
                  <h3>{edu.degree}</h3>
                  <div className="institution">{edu.institution}</div>
                </div>
                
                <div className="education-meta">
                  <span className="period">{edu.period}</span>
                  <span className="location">{edu.location}</span>
                </div>
              </div>
              
              <div className="education-content">
                <div className="education-highlights">
                  {edu.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      className="highlight-point"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <div className="highlight-icon">✓</div>
                      <p>{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="education-tech">
                {edu.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="tech-badge"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div 
          className="certifications-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="certifications-title">Certifications & Training</h3>
          
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="certification-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="certification-icon">
                  {cert.title.includes("Security") ? "🔐" : "🤖"}
                </div>
                
                <div className="certification-content">
                  <h4>{cert.title}</h4>
                  <p className="issuer">{cert.issuer}</p>
                  <p className="year">{cert.year}</p>
                </div>
              </motion.div>
            ))}
            
            {/* Additional Skills Card */}
            <motion.div
              className="certification-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              whileHover={{ y: -10 }}
            >
              <div className="certification-icon">🌐</div>
              
              <div className="certification-content">
                <h4>Additional Skills</h4>
                <p className="issuer">Languages & Tools</p>
                <div className="additional-skills">
                  <span className="skill-tag">Arabic (Native)</span>
                  <span className="skill-tag">English (Fluent)</span>
                  <span className="skill-tag">Agile/Scrum</span>
                  <span className="skill-tag">Git/GitHub</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animated Elements */}
      <div className="education-bg-elements">
        <motion.div 
          className="floating-book"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          📚
        </motion.div>
        
        <motion.div 
          className="floating-book"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          🎓
        </motion.div>
        
        <motion.div 
          className="floating-book"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 20, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          💻
        </motion.div>
      </div>
    </motion.section>
  );
}