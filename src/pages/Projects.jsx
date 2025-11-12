import { motion } from "framer-motion";
import "../styles/projects.css";

const projects = [
  {
    title: "LAM Shopping",
    description:
      "E-commerce platform built with Laravel 12 featuring dynamic categories, admin panel, roles & permissions.",
    image: "/projects/lam.png",
    tech: ["Laravel", "Blade", "MySQL", "Bootstrap"],
    github: "https://github.com/Mohammadsoleiman",
    live: "#",
  },
  {
    title: "Vehicle POS System",
    description:
      "Full POS system for vehicle sales with multi-role dashboards, inventory management & accounting — MERN Stack.",
    image: "/projects/pos.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Mohammadsoleiman",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern personal portfolio featuring animations, transitions, responsive UI and motion effects.",
    image: "/projects/portfolio.png",
    tech: ["React", "Framer Motion", "CSS"],
    github: "https://github.com/Mohammadsoleiman",
    live: "#",
  },
];

export default function Projects() {
  return (
    <motion.section
      className="projects"
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -35 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="container">

        <motion.h1
          className="projects-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h1>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.15 }}
              whileHover={{ translateY: -10 }}
            >
              <div className="project-img-wrapper">
                <img src={p.image} alt={p.title} className="project-img"/>
              </div>

              <h2>{p.title}</h2>
              <p className="desc">{p.description}</p>

              <div className="tech-row">
                {p.tech.map((t, j) => (
                  <span key={j}>{t}</span>
                ))}
              </div>

              <div className="links">
                <a href={p.live} target="_blank" className="btn live">Live Demo</a>
                <a href={p.github} target="_blank" className="btn github">GitHub</a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
