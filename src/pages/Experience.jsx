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

const projects = [
  {
    title: "The Digital Hub – Web Platform & Admin Dashboard",
    description: "Built an end-to-end web platform with secure admin dashboard featuring RBAC, 2FA, and automated email processes.",
    tech: ["NestJS", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker"],
    achievements: [
      "Role-based access control (RBAC) and protected authentication flows",
      "Optional two-factor authentication (2FA) implementation",
      "Automated email processes (password recovery, notifications)",
      "Student/user management and CV upload/download system",
      "PDF profile generation and dynamic content management"
    ]
  },
  {
    title: "Vehicles Management System",
    description: "Complete POS and Accounting System with role-based dashboards for Admin, Accountant, and Clerk.",
    tech: ["MERN Stack", "MongoDB", "Express", "React", "Node.js"],
    achievements: [
      "Role-based access with separate dashboards",
      "Full inventory and expense tracking modules",
      "Financial management and reporting system",
      "Responsive UI with real-time updates"
    ]
  },
  {
    title: "LAM Online Shopping",
    description: "E-commerce website with role-based CMS for content management.",
    tech: ["Laravel", "Blade", "MySQL", "Bootstrap"],
    achievements: [
      "Full-featured e-commerce platform",
      "Role-based content management system",
      "Shopping cart and payment integration",
      "Admin panel for order and user management"
    ]
  }
];

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <motion.section 
      className="experience-section"
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
          Experience & <span className="gradient-text">Projects</span>
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

          {/* Project Showcase */}
          <motion.div 
            className="projects-showcase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="projects-title">Featured Projects</h3>
            
            <div className="projects-grid">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  className="project-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="project-header">
                    <h4>{project.title}</h4>
                    <div className="project-tech">
                      {project.tech.map((tech, j) => (
                        <span key={j} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="project-desc">{project.description}</p>
                  
                  <div className="project-achievements">
                    <h5>Achievements:</h5>
                    <ul>
                      {project.achievements.map((achievement, j) => (
                        <li key={j}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="project-links">
                    <a href="#" className="link-btn">View Details</a>
                    <a href="#" className="link-btn github">GitHub</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
          {`const experience = { years: 3, projects: 20+ }`}
        </motion.div>
      </div>
    </motion.section>
  );
}