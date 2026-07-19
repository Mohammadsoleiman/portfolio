import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {
  SiAmazonaws,
  SiDocker,
  SiGit,
  SiJira,
  SiKubernetes,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSupabase,
  SiTrello,
  SiTypescript,
} from "react-icons/si";
import Button from "../components/Button";
import TechBubbles from "../components/TechBubbles";
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
    
    // Animated entrance
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
          try {
            const cvFileName = 'MohammadSoleimanCV.pdf';
const cvUrl = `${import.meta.env.BASE_URL}${cvFileName}`;
            
            console.log('Attempting to download:', cvUrl);
            
            const link = document.createElement('a');
            link.href = cvUrl;
            link.download = 'Mohammad_Soleiman_CV.pdf'; // الاسم الذي سيظهر للمستخدم
            link.target = '_blank';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            setTimeout(() => {
              window.open(cvUrl, '_blank');
            }, 300);
            
          } catch (error) {
            console.error('Download error:', error);
            
            const testUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
            window.open(testUrl, '_blank');
          }
          
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
    { Icon: SiReact, label: "React", tone: "tone-react", size: 56, top: "8%", left: "50%", xDrift: 10, yDrift: 10, spin: 7, duration: 6.4, delay: 0.1 },
    { Icon: SiNextdotjs, label: "Next.js", tone: "tone-next", size: 54, top: "18%", left: "82%", xDrift: -10, yDrift: 8, spin: -5, duration: 7.2, delay: 0.35 },
    { Icon: SiTypescript, label: "TypeScript", tone: "tone-ts", size: 52, top: "50%", left: "92%", xDrift: -12, yDrift: 10, spin: -7, duration: 7.6, delay: 0.75 },
    { Icon: SiLaravel, label: "Laravel", tone: "tone-laravel", size: 54, top: "82%", left: "76%", xDrift: -8, yDrift: 10, spin: -6, duration: 7.8, delay: 0.6 },
    { Icon: SiDocker, label: "Docker", tone: "tone-docker", size: 54, top: "84%", left: "24%", xDrift: 8, yDrift: 10, spin: 6, duration: 6.6, delay: 0.2 },
    { Icon: SiNodedotjs, label: "Node.js", tone: "tone-node", size: 56, top: "50%", left: "8%", xDrift: 12, yDrift: 10, spin: 8, duration: 6.8, delay: 0.5 },
    { Icon: SiMongodb, label: "MongoDB", tone: "tone-mongo", size: 52, top: "18%", left: "20%", xDrift: 9, yDrift: 8, spin: 5, duration: 7.1, delay: 0.45 },
  ];
  const bgFlyers = [
    { Icon: SiReact, tone: "tone-react", top: "18%", duration: 18, delay: 0 },
    { Icon: SiDocker, tone: "tone-docker", top: "36%", duration: 20, delay: 2 },
    { Icon: SiNodedotjs, tone: "tone-node", top: "56%", duration: 22, delay: 4 },
    { Icon: SiTypescript, tone: "tone-ts", top: "74%", duration: 24, delay: 1.5 },
  ];
  const techStack = [
    { label: "React", Icon: SiReact, tone: "tone-react" },
    { label: "Next.js", Icon: SiNextdotjs, tone: "tone-next" },
    { label: "Laravel", Icon: SiLaravel, tone: "tone-laravel" },
    { label: "Node.js", Icon: SiNodedotjs, tone: "tone-node" },
    { label: "TypeScript", Icon: SiTypescript, tone: "tone-ts" },
    { label: "MySQL", Icon: SiMysql, tone: "tone-mysql" },
    { label: "MongoDB", Icon: SiMongodb, tone: "tone-mongo" },
    { label: "Docker", Icon: SiDocker, tone: "tone-docker" },
    { label: "Kubernetes", Icon: SiKubernetes, tone: "tone-k8s" },
    { label: "AWS", Icon: SiAmazonaws, tone: "tone-aws" },
    { label: "Git", Icon: SiGit, tone: "tone-git" },
    { label: "Trello", Icon: SiTrello, tone: "tone-trello" },
    { label: "Supabase", Icon: SiSupabase, tone: "tone-supabase" },
    { label: "Jira", Icon: SiJira, tone: "tone-jira" },
  ];

  return (
      <motion.section
      className="home-hero text-gray-900 dark:text-white transition-colors duration-300"
      animate={controls}
      initial={{ opacity: 0, y: 20 }}
    >
      <div className="hero-bg-flyers" aria-hidden>
        {bgFlyers.map((item, i) => (
          <motion.div
            key={`${item.top}-${i}`}
            className="hero-bg-flyer"
            style={{ top: item.top }}
            animate={{ x: ["-8vw", "80vw", "-8vw"], y: [0, -10, 0, 8, 0], rotate: [0, 6, 0, -6, 0] }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <item.Icon className={`hero-bg-flyer-icon ${item.tone}`} />
          </motion.div>
        ))}
      </div>

      <TechBubbles />

      <div className="home-container">
        {/* Left Content */}
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
            {/* Button 1: Get In Touch - Normal Button */}
            <Button
              as="a"
              href="#contact"
              className="btn-primary"
              onClick={() => setActiveSection("contact")}
            >
              <span>Get In Touch</span>
              <div className="btn-spark" />
            </Button>
            
            {/* Button 2: Download CV - Advanced Animation Button */}
            <motion.div 
              className={`download-btn-custom ${isDownloading ? 'loading' : ''} ${showSuccess ? 'success' : ''}`}
              whileHover={!isDownloading ? { scale: 1.05 } : {}}
              whileTap={!isDownloading ? { scale: 0.95 } : {}}
              onClick={handleDownloadCV}
              style={{ position: 'relative' }}
            >
              {/* Normal State */}
              <div className="btn-download-content">
                <svg className="download-icon" viewBox="0 0 24 24">
                  <path d="M12 16L8 11H11V4H13V11H16L12 16Z" />
                </svg>
                <span>Download CV</span>
              </div>
              
              {/* Loading State */}
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
              
              {/* Success State */}
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
              
              {/* Progress Bar */}
              <div className="download-progress" style={{ width: `${downloadProgress}%` }} />
            </motion.div>
          </motion.div>

        </div>

        {/* Right Content - 3D Profile */}
        <div className="home-right">
          <motion.div 
            className="profile-3d-container"
            initial={{ scale: 0, rotateY: 180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="profile-3d">
              <img src={`${import.meta.env.BASE_URL}img/MohammadSoleiman.png`} alt="Mohammad Soleiman" className="profile-image" />
              <div className="profile-glow" />
              <div className="profile-reflection" />
            </div>
            
            {/* Floating Icons */}
            {floatingIcons.map((item, i) => (
              <div
                key={item.label}
                className="floating-icon-anchor"
                style={{ top: item.top, left: item.left }}
              >
                <motion.div 
                  className="floating-icon-3d"
                  style={{ "--size": `${item.size}px` }}
                  title={item.label}
                  animate={{
                    x: [0, item.xDrift, 0, -item.xDrift, 0],
                    y: [0, -item.yDrift, 0, item.yDrift, 0],
                    rotate: [0, item.spin, 0, -item.spin, 0],
                    scale: [1, 1.05, 1, 0.98, 1],
                  }}
                  transition={{
                    duration: item.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item.delay,
                  }}
                  whileHover={{ scale: 1.12 }}
                >
                  <item.Icon className={`floating-tech-icon ${item.tone}`} aria-hidden />
                  <div className="icon-trail" />
                </motion.div>
              </div>
            ))}

            {/* Animated Rings */}
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
        </div>
      </div>

      <motion.div 
        className="hero-bottom"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.25 }}
      >
        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-item">
            <h3>4</h3>
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
        </div>

        <div className="hero-tech-carousel">
          <motion.div
            className="hero-tech-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <span key={`${tech.label}-${i}`} className="tech-tag">
                <tech.Icon className={`tech-tag-icon ${tech.tone}`} aria-hidden />
                <span>{tech.label}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
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