import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../styles/loader.css";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Loading portfolio...");

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        const texts = [
          "Loading portfolio...",
          "Initializing animations...",
          "Setting up components...",
          "Almost there..."
        ];
        const currentIndex = texts.indexOf(prev);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <motion.div 
      className="loader-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background */}
      <div className="loader-particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Loader */}
      <div className="loader-container">
        {/* Orb */}
        <motion.div 
          className="loader-orb"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Rings */}
        <motion.div 
          className="loader-ring ring-1"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="loader-ring ring-2"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="loader-ring ring-3"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Icons */}
        {["🚀", "💻", "⚡", "🎯"].map((icon, i) => (
          <motion.div
            key={i}
            className="floating-icon"
            style={{
              position: 'absolute',
              fontSize: '24px',
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.sin(i) * 30, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="loader-content">
        <motion.h1 
          className="loader-title"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          MOHAMMAD SOLEIMAN
        </motion.h1>
        
        <motion.p 
          className="loader-subtitle"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {loadingText}
        </motion.p>
      </div>

      {/* Progress Bar */}
      <div className="loader-progress">
        <motion.div 
          className="progress-bar"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Code Lines */}
      <div className="loader-code">
        <motion.div
          animate={{ y: [0, -100], opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {`const portfolio = { 
  name: "Mohammad Soleiman", 
  role: "Full Stack Developer" 
};`}
        </motion.div>
      </div>
    </motion.div>
  );
}