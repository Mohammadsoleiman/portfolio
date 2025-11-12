import { motion } from "framer-motion";
import { profile } from "../data/profile";
import "../styles/about.css";

export default function About() {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -35 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="about-inner">

        {/* IMAGE */}
        <motion.div
          className="about-img-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-glow"></div>
          <img src="/img/me.png" alt="profile" className="about-img" />
        </motion.div>

        {/* TEXT */}
        <div className="about-text">
          <h1>About Me</h1>

          <p>
            I’m a <span className="highlight">Full-Stack Developer</span> who transforms ideas into real, 
            scalable products. I focus on building modern, fast, and user-centered applications 
            using technologies like React, Node.js, and Laravel.
          </p>

          <p>
            I enjoy solving practical problems, improving performance, and writing clean, 
            maintainable code that lasts. My work is driven by real-world value — not just code.
          </p>

          <h3>What I Do Best</h3>
          <ul className="skills-list">
            <li>⚡ Full-Stack Web Apps</li>
            <li>⚡ REST APIs & Database Design</li>
            <li>⚡ UI / UX & Component Architecture</li>
          </ul>

          <div className="about-buttons">
            <a href={profile.links.github} target="_blank" className="btn btn-outline">GitHub</a>
            <a href={profile.links.linkedin} target="_blank" className="btn btn-red">LinkedIn</a>
          </div>

        </div>

      </div>
    </motion.section>
  );
}
