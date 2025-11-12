import { motion } from "framer-motion";
import "../styles/skills.css";

export default function Skills() {
  const skills = [
    { name: "HTML", level: 95, icon: "/icons/html.png" },
    { name: "CSS", level: 90, icon: "/icons/css.png" },
    { name: "JavaScript", level: 92, icon: "/icons/js.png" },
    { name: "React", level: 88, icon: "/icons/react.png" },
    { name: "Node.js", level: 85, icon: "/icons/node.png" },
    { name: "Laravel", level: 80, icon: "/icons/laravel.png" },
  ];

  return (
    <motion.section
      className="skills"
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -35 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="skills-inner">

        <h1 className="skills-title">My Skills</h1>
        <p className="skills-subtitle">Technologies I work with:</p>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="skill-card"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
            >
              <img src={skill.icon} alt={skill.name} className="skill-icon-img" />

              <h3>{skill.name}</h3>

              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
              </div>

              <span className="skill-level">{skill.level}%</span>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
