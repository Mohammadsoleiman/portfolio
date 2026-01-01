import { motion } from "framer-motion";
import "../styles/skills.css";

export default function Skills() {
  const technicalSkills = [
    { name: "JavaScript", level: 92, category: "frontend" },
    { name: "React", level: 88, category: "frontend" },
    { name: "Next.js", level: 85, category: "frontend" },
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "PHP", level: 85, category: "backend" },
    { name: "Laravel", level: 80, category: "backend" },
    { name: "Node.js", level: 85, category: "backend" },
    { name: "Express.js", level: 82, category: "backend" },
    { name: "MySQL", level: 88, category: "database" },
    { name: "MongoDB", level: 75, category: "database" },
    { name: "PostgreSQL", level: 80, category: "database" },
    { name: "Docker", level: 70, category: "devops" },
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "TypeScript", level: 75, category: "frontend" },
    { name: "REST APIs", level: 90, category: "backend" },
    { name: "UI/UX Design", level: 78, category: "design" }
  ];

  const techStack = [
    { name: "React", icon: "/icons/react.png" },
    { name: "Next.js", icon: "/icons/nextjs.png" },
    { name: "Laravel", icon: "/icons/laravel.png" },
    { name: "Node.js", icon: "/icons/node.png" },
    { name: "TypeScript", icon: "/icons/typescript.png" },
    { name: "MongoDB", icon: "/icons/mongodb.png" },
    { name: "PostgreSQL", icon: "/icons/postgresql.png" },
    { name: "Docker", icon: "/icons/docker.png" },
    { name: "AWS", icon: "/icons/aws.png" },
    { name: "Git", icon: "/icons/git.png" },
    { name: "Figma", icon: "/icons/figma.png" },
    { name: "Jira", icon: "/icons/jira.png" }
  ];

  const devopsSkills = [
    { icon: "🐳", name: "Docker", description: "Containerization & Orchestration" },
    { icon: "⚙️", name: "CI/CD", description: "Automated Deployment Pipelines" },
    { icon: "☁️", name: "Cloud", description: "AWS & Cloud Services" },
    { icon: "🚀", name: "Deployment", description: "Production Deployment & Scaling" }
  ];

  const softSkills = [
    { icon: "🤝", name: "Teamwork", description: "Collaboration & Communication" },
    { icon: "💡", name: "Problem Solving", description: "Analytical & Critical Thinking" },
    { icon: "⚡", name: "Adaptability", description: "Quick Learning & Flexibility" },
    { icon: "🎯", name: "Time Management", description: "Efficient Task Prioritization" }
  ];

  return (
    <motion.section 
      className="skills-section"
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
          <span>⚡ Technical Expertise</span>
        </motion.div>
        
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Skills & <span className="gradient-text">Technologies</span>
        </motion.h2>
      </div>

      <div className="skills-container">
        {/* Skills Grid */}
        <div className="skills-grid">
          {/* Frontend Skills */}
          <motion.div 
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="category-header">
              <div className="category-icon">🎨</div>
              <h3 className="category-title">Frontend</h3>
            </div>
            
            <div className="skill-items">
              {technicalSkills.filter(skill => skill.category === 'frontend').map((skill, i) => (
                <motion.div 
                  key={i}
                  className="skill-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="skill-name">
                    <span>{skill.name}</span>
                    <span className="percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div 
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="category-header">
              <div className="category-icon">⚙️</div>
              <h3 className="category-title">Backend</h3>
            </div>
            
            <div className="skill-items">
              {technicalSkills.filter(skill => skill.category === 'backend').map((skill, i) => (
                <motion.div 
                  key={i}
                  className="skill-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="skill-name">
                    <span>{skill.name}</span>
                    <span className="percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Database & DevOps */}
          <motion.div 
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="category-header">
              <div className="category-icon">🗄️</div>
              <h3 className="category-title">Database & DevOps</h3>
            </div>
            
            <div className="skill-items">
              {technicalSkills.filter(skill => skill.category === 'database' || skill.category === 'devops').map((skill, i) => (
                <motion.div 
                  key={i}
                  className="skill-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <div className="skill-name">
                    <span>{skill.name}</span>
                    <span className="percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 + i * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div 
          className="tech-stack"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="stack-title">Tech Stack</h3>
          
          <div className="stack-grid">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                className="tech-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05 }}
                whileHover={{ y: -10 }}
              >
                <img src={tech.icon} alt={tech.name} className="tech-icon" />
                <span className="tech-name">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* DevOps Skills */}
        <motion.div 
          className="devops-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="devops-title">DevOps & Tools</h3>
          
          <div className="devops-grid">
            {devopsSkills.map((skill, i) => (
              <motion.div
                key={i}
                className="devops-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="devops-icon">{skill.icon}</div>
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div 
          className="soft-skills"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="soft-skills-title">Soft Skills</h3>
          
          <div className="soft-skills-grid">
            {softSkills.map((skill, i) => (
              <motion.div
                key={i}
                className="soft-skill-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="soft-skill-icon">{skill.icon}</div>
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated Elements */}
      <div className="skills-bg-elements">
        <motion.div 
          className="floating-code-block"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {`const skills = { 
  frontend: ["React", "Next.js"], 
  backend: ["Node.js", "Laravel"] 
}`}
        </motion.div>
        
        <motion.div 
          className="floating-code-block"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          {`function Developer() {
  return "Full Stack Developer";
}`}
        </motion.div>
      </div>
    </motion.section>
  );
}