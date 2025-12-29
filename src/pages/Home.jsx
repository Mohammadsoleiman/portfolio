import React, { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import "../styles/home.css";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const orbitIcons = [
    "/icons/html.png",
    "/icons/css.png",
    "/icons/js.png",
    "/icons/react.png",
    "/icons/node.png",
    "/icons/laravel.png",
  ];

  const handleDownload = () => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = profile.links.cv;
      link.download = "CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setLoading(false);
    }, 1800);
  };

  return (
    <section className="home">
      <div className="home-inner">

        {/* LEFT TEXT */}
        <div className="home-text">
          <p className="hello">
            Hello, I'm <span className="name">{profile.name.split(" ")[0]}</span> 👋
          </p>

          <h1 className="big-title">
            <span className="word">Code.</span>
            <span className="word">Build.</span>
            <span className="word">Deliver.</span>
          </h1>

          <p className="subtitle">
            Full-stack developer specializing in modern, fast and scalable web applications.
          </p>

          {/* DOWNLOAD BUTTON */}
          <div className="buttons">
            <motion.button
              className={`download-btn ${loading ? "loading" : ""}`}
              onClick={handleDownload}
              disabled={loading}
              whileTap={{ scale: 0.97 }}
            >
              {!loading ? (
                <>
                  <span className="btn-text">Download CV</span>
                  <span className="btn-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 16l4-5h-3V4h-2v7H8z" />
                    </svg>
                  </span>
                </>
              ) : (
                <span className="circle-loader"></span>
              )}
            </motion.button>
          </div>
        </div>

        {/* RIGHT PROFILE + ORBIT ICONS */}
        <div className="profile-area">
          <div className="orbit-container">

            {orbitIcons.map((icon, i) => (
              <span
                key={i}
                className="orbit-icon"
                style={{ "--i": i }}
              >
                <img src={icon} alt="" />
              </span>
            ))}

            <div className="profile-box">
              <img
                src="/img/me.png"
                alt="profile"
                className="profile-img"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
