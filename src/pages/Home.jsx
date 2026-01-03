import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import "../styles/home.css";

export default function Home({ setActiveSection }) {
  const [textIndex, setTextIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const controls = useAnimation();
  
  const roles = [
    "Full Stack Developer",
    "Laravel Specialist",
    "React Developer",
    "Next.js Enthusiast",
    "MERN Stack Developer"
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530);
    
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 }
    });

    return () => {
      clearInterval(cursorInterval);
      clearInterval(textInterval);
    };
  }, [controls]);

  const handleDownloadCV = () => {
    if (isDownloading) return;
    
    setIsDownloading(true);
    setDownloadProgress(0);
    setShowSuccess(false);
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setShowSuccess(true);
          
          setTimeout(() => {
            window.open("https://mohammadsoleiman.github.io/MohammadSoleimanCV.pdf", "_blank");
            
            setTimeout(() => {
              setIsDownloading(false);
              setDownloadProgress(0);
              setShowSuccess(false);
            }, 2000);
          }, 800);
          
          return 100;
        }
        return newProgress;
      });
    }, 120);
  };

  const floatingIcons = [
    { icon: "/icons/react.png", delay: 0, size: 60 },
    { icon: "/icons/laravel.png", delay: 0.2, size: 55 },
    { icon: "/icons/nextjs.png", delay: 0.4, size: 58 },
    { icon: "/icons/node.png", delay: 0.6, size: 52 },
    { icon: "/icons/typescript.png", delay: 0.8, size: 56 },
    { icon: "/icons/docker.png", delay: 1, size: 54 },
  ];

  return (
    <motion.section 
      animate={controls}
      initial={{ opacity: 0, y: 20 }}
    >
      <div className="home-container">
        <div className="home-left">
          <motion.div 
            className="intro-badge"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span>🚀 Full Stack Developer</span>
            <div className="badge-glow" />
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="gradient-text">Mohammad</span>
            <br />
            <span className="highlight-text">Soleiman</span>
          </motion.h1>

          <motion.div 
            className="typing-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span className="role-text">{roles[textIndex]}</span>
            <span className={`cursor ${cursorVisible ? "visible" : ""}`}>|</span>
          </motion.div>

          <motion.p 
            className="hero-description"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Building scalable web applications with Laravel, React, and modern DevOps tools. 
            Specializing in full-stack solutions with focus on performance, security, and user experience.
          </motion.p>

          <motion.div 
            className="action-buttons"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <motion.a 
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection("contact")}
            >
              <span>Get In Touch</span>
              <div className="btn-spark" />
            </motion.a>
            
            <motion.div 
              className={`download-btn-custom ${isDownloading ? 'loading' : ''} ${showSuccess ? 'success' : ''}`}
              whileHover={!isDownloading ? { scale: 1.05 } : {}}
              whileTap={!isDownloading ? { scale: 0.95 } : {}}
              onClick={handleDownloadCV}
              style={{ position: 'relative' }}
            >
              <div className="btn-download-content">
                <svg className="download-icon" viewBox="0 0 24 24">
                  <path d="M12 16L8 11H11V4H13V11H16L12 16Z" />
                </svg>
                <span>Download CV</span>
              </div>
              
              {isDownloading && !showSuccess && (
                <div className="loading-state">
                  <div className="spinner-dots">
                    <div className="spinner-dot"></div>
                    <div className="spinner-dot"></div>
                    <div className="spinner-dot"></div>
                  </div>
                  <span className="progress-text">{Math.round(downloadProgress)}%</span>
                </div>
              )}
              
              {showSuccess && (
                <div className="success-state">
                  <div className="success-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                  <span>Opening CV...</span>
                </div>
              )}
              
              <div className="download-progress" style={{ width: `${downloadProgress}%` }} />
            </motion.div>
          </motion.div>

          <motion.div 
            className="stats-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <div className="stat-item">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Technologies</p>
            </div>
            <div className="stat-item">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
          </motion.div>
        </div>

        <div className="home-right">
          <motion.div 
            className="profile-3d-container"
            initial={{ scale: 0, rotateY: 180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="profile-3d">
              <img src="/img/me.png" alt="Mohammad Soleiman" className="profile-image" />
              <div className="profile-glow" />
              <div className="profile-reflection" />
            </div>
            
            {floatingIcons.map((item, i) => (
              <motion.div 
                key={i}
                className="floating-icon-3d"
                style={{ '--delay': item.delay, '--size': `${item.size}px` }}
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  delay: item.delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img src={item.icon} alt="" />
                <div className="icon-trail" />
              </motion.div>
            ))}

            <motion.div 
              className="ring ring-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="ring ring-2"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          <motion.div 
            className="tech-carousel"
            animate={{ x: [0, -1000] }}
            transition={{ 
              x: { 
                repeat: Infinity, 
                duration: 20, 
                ease: "linear" 
              }
            }}
          >
            {["React", "Next.js", "Laravel", "Node.js", "TypeScript", "MySQL", "MongoDB", "Docker", "Kubernetes", "AWS"].map((tech, i) => (
              <span key={i} className="tech-tag">{tech}</span>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => setActiveSection("about")}
      >
        <div className="mouse">
          <div className="wheel" />
        </div>
        <span>Scroll Down</span>
      </motion.div>
    </motion.section>
  );
}