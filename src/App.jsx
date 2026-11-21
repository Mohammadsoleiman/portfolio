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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  // The menu follows the section in the middle of the screen while scrolling.
  useEffect(() => {
    if (loading || !("IntersectionObserver" in window)) return undefined;
    const sections = document.querySelectorAll("main .section-wrapper[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [loading]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {loading && <Loader />}
      
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <AnimatePresence mode="wait">
        <main className="main-content">
          <section id="home" className="section-wrapper">
            <Home setActiveSection={setActiveSection} />
          </section>
          
          <section id="about" className="section-wrapper">
            <About />
          </section>
          
          <section id="projects" className="section-wrapper">
            <Projects />
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
          
          <section id="contact" className="section-wrapper">
            <Contact />
          </section>
        </main>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}