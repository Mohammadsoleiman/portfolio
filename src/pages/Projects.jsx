import { motion, AnimatePresence } from "framer-motion";  // FIXED: Added AnimatePresence
import { useState } from "react";
import "../styles/projects.css";

const projects = [
  {
    id: 1,
    title: "The Digital Hub Platform",
    description: "End-to-end web platform with admin dashboard featuring RBAC, 2FA, and automated email processes.",
    category: "fullstack",
    image: "/projects/digital-hub.png",
    features: [
      "Role-based access control (RBAC)",
      "Two-factor authentication (2FA)",
      "Automated email notifications",
      "Student/user management system",
      "PDF profile generation",
      "Dynamic content management"
    ],
    tech: ["NestJS", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker"],
    github: "https://github.com/Mohammadsoleiman",
    demo: "#",
    type: "web-app"
  },
  {
    id: 2,
    title: "Vehicles Management System",
    description: "Complete POS and Accounting System with role-based dashboards for Admin, Accountant, and Clerk.",
    category: "fullstack",
    image: "/projects/vehicle-pos.png",
    features: [
      "Multi-role dashboards (Admin, Accountant, Clerk)",
      "Full inventory management",
      "Expense tracking system",
      "Financial reporting",
      "Real-time updates",
      "Responsive UI"
    ],
    tech: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "Redux"],
    github: "https://github.com/Mohammadsoleiman",
    demo: "#",
    type: "web-app"
  },
  {
    id: 3,
    title: "LAM Online Shopping",
    description: "E-commerce website with role-based CMS for content management and product administration.",
    category: "fullstack",
    image: "/projects/lam-shopping.png",
    features: [
      "Full e-commerce functionality",
      "Role-based content management",
      "Shopping cart system",
      "Payment integration",
      "Order management",
      "Admin panel"
    ],
    tech: ["Laravel", "Blade", "MySQL", "Bootstrap", "JavaScript", "jQuery"],
    github: "https://github.com/Mohammadsoleiman",
    demo: "#",
    type: "web-app"
  },
  {
    id: 4,
    title: "Medical Center Management",
    description: "Appointment booking and pharmacy management system for medical centers.",
    category: "fullstack",
    image: "/projects/medical-system.png",
    features: [
      "Appointment scheduling",
      "Patient management",
      "Pharmacy inventory",
      "Doctor scheduling",
      "Billing system",
      "Medical records"
    ],
    tech: ["Laravel", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    github: "https://github.com/Mohammadsoleiman",
    demo: "#",
    type: "web-app"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Modern portfolio with complex animations, responsive design, and interactive elements.",
    category: "frontend",
    image: "/projects/portfolio.png",
    features: [
      "Complex animations with Framer Motion",
      "Responsive design",
      "Interactive elements",
      "Smooth transitions",
      "Performance optimized",
      "Modern UI/UX"
    ],
    tech: ["React", "Framer Motion", "CSS3", "JavaScript", "Vite", "Tailwind"],
    github: "https://github.com/Mohammadsoleiman",
    demo: "#",
    type: "website"
  },
  {
    id: 6,
    title: "Fintech Dashboard",
    description: "Financial dashboard for tracking investments, expenses, and financial analytics.",
    category: "frontend",
    image: "/projects/fintech-dashboard.png",
    features: [
      "Real-time data visualization",
      "Investment tracking",
      "Expense analytics",
      "Financial reports",
      "Interactive charts",
      "User authentication"
    ],
    tech: ["React", "Chart.js", "Material-UI", "REST API", "Axios", "Context API"],
    github: "https://github.com/Mohammadsoleiman",
    demo: "#",
    type: "web-app"
  }
];

const categories = ["all", "fullstack", "frontend", "web-app", "website"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => 
        project.category === activeCategory || project.type === activeCategory
      );

  return (
    <motion.section 
      className="projects-section"
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
          <span>🚀 Featured Projects</span>
        </motion.div>
        
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          My <span className="gradient-text">Portfolio</span>
        </motion.h2>
      </div>

      {/* Filters */}
      <motion.div 
        className="projects-filters"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        {categories.map(category => (
          <motion.button
            key={category}
            className={`filter-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category === "all" ? "All Projects" : 
             category === "fullstack" ? "Full Stack" : 
             category === "frontend" ? "Frontend" : 
             category === "web-app" ? "Web Apps" : "Websites"}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ y: -15 }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-tags">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="project-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-type">
                  {project.category === "fullstack" ? "Full Stack" : "Frontend"}
                </span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4 className="features-title">Key Features:</h4>
                <ul className="features-list">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-stack">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a 
                  href={project.github} 
                  className="project-link github"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="link-icon">🐙</span>
                  GitHub
                </a>
                <a 
                  href={project.demo} 
                  className="project-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                >
                  <span className="link-icon">🚀</span>
                  View Details
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              
              <div className="modal-body">
                <div className="modal-header">
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.description}</p>
                </div>
                
                <div className="modal-details">
                  <div className="detail-section">
                    <h4>Features</h4>
                    <ul>
                      {selectedProject.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Technologies Used</h4>
                    <div className="modal-tech">
                      {selectedProject.tech.map((tech, i) => (
                        <span key={i} className="tech-stack">{tech}</span>
                      ))}
                    </div>
                    
                    <h4 style={{ marginTop: '20px' }}>Project Type</h4>
                    <p>{selectedProject.category === "fullstack" ? "Full Stack Web Application" : "Frontend Application"}</p>
                  </div>
                </div>
                
                <div className="modal-links">
                  <a 
                    href={selectedProject.github} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="link-icon">🐙</span>
                    View on GitHub
                  </a>
                  <a 
                    href={selectedProject.demo} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="link-icon">🚀</span>
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <motion.div 
        className="projects-cta"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="cta-glow" />
        
        <h3 className="cta-title">Have a Project in Mind?</h3>
        <p className="cta-description">
          I'm always open to discussing new opportunities and interesting projects. 
          Let's work together to bring your ideas to life!
        </p>
        
        <motion.a 
          href="#contact"
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Collaborate
        </motion.a>
      </motion.div>

      {/* Animated Elements */}
      <div className="projects-bg-elements">
        <motion.div 
          className="floating-project"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="floating-project"
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </motion.section>
  );
}