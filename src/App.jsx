import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {loading && <Loader />}
      
      {/* Animated Background Elements */}
      <div className="animated-bg">
        <div className="particle-field" />
        <div className="gradient-orb" style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
        }} />
      </div>
      
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <AnimatePresence mode="wait">
        <main className="main-content">
          <div 
            className="scroll-tracker" 
            style={{ transform: `rotate(${mousePosition.x * 15}deg)` }}
          />
          
          <section id="home" className="section-wrapper">
            <Home setActiveSection={setActiveSection} />
          </section>
          
          <section id="about" className="section-wrapper">
            <About />
          </section>
          
          <section id="experience" className="section-wrapper">
            <Experience />
          </section>
          
          <section id="education" className="section-wrapper">
            <Education />
          </section>
          
          <section id="skills" className="section-wrapper">
            <Skills />
          </section>
          
          <section id="projects" className="section-wrapper">
            <Projects />
          </section>
          
          <section id="contact" className="section-wrapper">
            <Contact />
          </section>
        </main>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}