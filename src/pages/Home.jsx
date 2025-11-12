import React from "react";
import { motion } from "framer-motion";
import FloatingIcons from "../components/FloatingIcons";
import { profile } from "../data/profile";
import "../styles/home.css";

export default function Home() {
  const skillList = [
    "/icons/html.png",
    "/icons/css.png",
    "/icons/js.png",
    "/icons/react.png",
    "/icons/node.png",
    "/icons/laravel.png",
  ];
const titleContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const wordAnim = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -35 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="home"
    >
      {/* خلفية الأيقونات */}
      <FloatingIcons />

      <div className="home-inner">

        {/* ----- LEFT TEXT ----- */}
        <div className="home-text">
          <p className="hello">
            Hello, I'm <span className="name">{profile.name.split(" ")[0]}</span> 👋
          </p>
<motion.h1
  className="big-title"
  variants={titleContainer}
  initial="hidden"
  animate="show"
>
  {["Code.", "Build.", "Deliver."].map((word, i) => (
    <motion.span key={i} variants={wordAnim} className="word">
      {word}
    </motion.span>
  ))}
</motion.h1>


          <p className="subtitle">
            Full-stack developer specializing in modern, fast and scalable web applications.
          </p>

          <div className="buttons">
            <a href="/projects" className="btn btn-red">View Projects</a>
            <a href={profile.links.cv} className="btn btn-outline">Download CV</a>
          </div>
        </div>

        {/* ----- PROFILE + ICONS ----- */}
        <div className="profile-area">

          <div className="profile-box">
            <span className="glow"></span>
<div className="profile-shine-wrapper">
  <motion.img
    src="/img/me.png"
    alt="profile"
    className="profile-img"
    initial={{ opacity: 0, scale: 0.88 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
  />
  <span className="shine"></span>
</div>

          </div>

          {/* skill icons under profile */}
          <div className="skill-icons">
            {skillList.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                className="skill-icon"
                animate={{ y: ["0px", "-8px", "0px"] }}
                transition={{
                  duration: 1.5 + i * 0.25,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

        </div>

      </div>
    </motion.section>
  );
}
