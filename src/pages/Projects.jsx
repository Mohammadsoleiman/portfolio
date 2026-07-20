import {
  AnimatePresence,
  motion as Motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../styles/projects.css";

const projects = [
  {
    id: 1,
    title: "The Digital Hub Platform",
    description:
      "A web platform and admin dashboard for managing digital training programs and participant services.",
    category: "fullstack",
    image: `${import.meta.env.BASE_URL}projects/digital-hub.webp`,
    imageAlt: "Students collaborating with laptops in a digital learning space",
    features: [
      "Role-based access control",
      "Optional two-factor authentication",
      "Automated email workflows",
    ],
    tech: ["NestJS", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker"],
  },
  {
    id: 2,
    title: "Medical Center",
    description:
      "A healthcare management system for coordinating appointments and pharmacy services.",
    category: "fullstack",
    image: `${import.meta.env.BASE_URL}projects/medical-center.webp`,
    imageAlt: "Healthcare professional using a mobile device in a clinic",
    features: [
      "Appointment booking",
      "Pharmacy management",
      "Patient management",
    ],
    tech: ["Laravel", "JavaScript", "Bootstrap", "MySQL"],
  },
  {
    id: 3,
    title: "Vehicles Management System",
    description:
      "A POS and accounting system for managing vehicle inventory, expenses, and financial records.",
    category: "fullstack",
    image: `${import.meta.env.BASE_URL}projects/vehicles-management.webp`,
    imageAlt: "Rows of vehicles organized in a dealership inventory",
    features: [
      "Role-based dashboards",
      "Inventory and expense tracking",
      "Financial reporting",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    id: 4,
    title: "LAM Online Shopping",
    description:
      "An e-commerce website with role-based tools for managing products and store content.",
    category: "fullstack",
    image: `${import.meta.env.BASE_URL}projects/lam-shopping.webp`,
    imageAlt: "Modern clothing store interior with fashion products on display",
    features: [
      "Role-based content management",
      "Product and content management",
      "Shopping cart",
    ],
    tech: ["Laravel", "Blade", "MySQL", "Bootstrap"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeProject, setActiveProject] = useState(0);
  const [cardStep, setCardStep] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardGap, setCardGap] = useState(30);
  const [trackStart, setTrackStart] = useState(0);
  const [verticalTravel, setVerticalTravel] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(76);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const usesPinnedScroll = isDesktop && !shouldReduceMotion;
  const trackX = useTransform(
    scrollYProgress,
    [0, 0.12, 0.25, 0.37, 0.5, 0.62, 0.75, 0.87, 1],
    [
      trackStart,
      trackStart,
      trackStart - cardStep,
      trackStart - cardStep,
      trackStart - cardStep * 2,
      trackStart - cardStep * 2,
      trackStart - cardStep * 3,
      trackStart - cardStep * 3,
      trackStart - cardStep * 3,
    ],
  );
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (!usesPinnedScroll) return;

    const nextActive =
      progress < 0.19 ? 0 :
      progress < 0.44 ? 1 :
      progress < 0.69 ? 2 : 3;
    setActiveProject(nextActive);
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1px)");
    const wideQuery = window.matchMedia("(min-width: 769px) and (min-height: 601px)");

    const measure = () => {
      const desktop = mediaQuery.matches;
      const isWide = wideQuery.matches;
      setIsDesktop(desktop);

      if (!desktop || shouldReduceMotion || !viewportRef.current || !trackRef.current) {
        setCardWidth(0);
        setCardGap(30);
        setCardStep(0);
        setTrackStart(0);
        setVerticalTravel(0);
        return;
      }

      const viewportWidth = viewportRef.current.clientWidth;
      const navbar = document.querySelector(".navbar");
      const firstCard = trackRef.current.firstElementChild;

      let nextCardWidth;
      if (isWide) {
        // Desktop / laptop only
        nextCardWidth = Math.round(
          Math.min(760, Math.max(560, viewportWidth * 0.48), viewportWidth - 32),
        );
      } else {
        // Phone: measure real card width so the last-card transform stays centered.
        // CSS uses vw units (window width), not the padded container width.
        const measuredWidth = firstCard
          ? Math.round(firstCard.getBoundingClientRect().width)
          : 0;
        const windowWidth = window.innerWidth;
        const cssFallback =
          windowWidth <= 330
            ? Math.min(windowWidth * 0.82, 300)
            : windowWidth <= 600
              ? Math.min(windowWidth * 0.78, 340)
              : Math.min(860, Math.max(560, viewportWidth * 0.68), viewportWidth - 32);
        nextCardWidth =
          measuredWidth > 0 ? measuredWidth : Math.round(cssFallback);
      }

      const nextTrackStart = Math.round((viewportWidth - nextCardWidth) / 2);
      const nextCardGap = Math.max(
        viewportWidth < 601 ? 16 : 30,
        nextTrackStart + (viewportWidth < 601 ? 8 : 24),
      );
      const nextCardStep = nextCardWidth + nextCardGap;
      setCardWidth(nextCardWidth);
      setCardGap(nextCardGap);
      setCardStep(nextCardStep);
      setTrackStart(nextTrackStart);
      setNavbarHeight(Math.ceil(navbar?.getBoundingClientRect().height || 76));
      setVerticalTravel(
        Math.max(window.innerHeight * 4.2, 2800),
      );
    };

    const resizeObserver = new ResizeObserver(measure);
    if (viewportRef.current) resizeObserver.observe(viewportRef.current);
    if (trackRef.current) resizeObserver.observe(trackRef.current);
    const navbar = document.querySelector(".navbar");
    if (navbar) resizeObserver.observe(navbar);

    mediaQuery.addEventListener("change", measure);
    wideQuery.addEventListener("change", measure);
    window.addEventListener("resize", measure);
    measure();

    return () => {
      resizeObserver.disconnect();
      mediaQuery.removeEventListener("change", measure);
      wideQuery.removeEventListener("change", measure);
      window.removeEventListener("resize", measure);
    };
  }, [shouldReduceMotion]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || usesPinnedScroll) return undefined;

    const updateActiveProject = () => {
      const firstCard = trackRef.current?.firstElementChild;
      if (!firstCard) return;
      const gap = parseFloat(getComputedStyle(trackRef.current).gap) || 0;
      const step = firstCard.getBoundingClientRect().width + gap;
      setActiveProject(
        Math.min(projects.length - 1, Math.max(0, Math.round(viewport.scrollLeft / step))),
      );
    };

    viewport.addEventListener("scroll", updateActiveProject, { passive: true });
    updateActiveProject();
    return () => viewport.removeEventListener("scroll", updateActiveProject);
  }, [usesPinnedScroll]);

  return (
    <>
      <Motion.section
        ref={sectionRef}
        className={`projects-section${usesPinnedScroll ? " is-pinned" : " is-static"}`}
        style={
          usesPinnedScroll
            ? {
                "--projects-scroll-distance": `${verticalTravel}px`,
                // Keep JS width in sync with the track transform (needed for last card)
                ...(cardWidth > 0 ? { "--project-card-width": `${cardWidth}px` } : {}),
                "--project-card-gap": `${cardGap}px`,
                "--projects-navbar-height": `${navbarHeight}px`,
              }
            : undefined
        }
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="projects-sticky">
          <div className="section-header projects-section-header">
            <Motion.div
              className="section-badge"
              initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span>🚀 Featured Projects</span>
            </Motion.div>

            <Motion.h2
              className="section-title"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              My <span className="gradient-text">Portfolio</span>
            </Motion.h2>
          </div>

          <div className="project-journey" aria-label={`Project ${activeProject + 1} of ${projects.length}`}>
            <div className="project-journey-line">
              <span
                className="project-journey-progress"
                style={{ transform: `scaleX(${activeProject / (projects.length - 1)})` }}
              />
              {projects.map((project, index) => (
                <span
                  key={project.id}
                  className={`project-journey-dot${index === activeProject ? " active" : ""}${index < activeProject ? " complete" : ""}`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>

          <div className="projects-viewport" ref={viewportRef}>
            <Motion.div
              className="projects-track"
              ref={trackRef}
              style={{ x: usesPinnedScroll ? trackX : 0 }}
            >
              {projects.map((project, index) => (
                <Motion.article
                  key={project.id}
                  className="project-item"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -15 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      width="1200"
                      height="800"
                      loading="lazy"
                    />
                    <div className="project-overlay">
                      <div className="project-tags">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span key={tech} className="project-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-header">
                      <h3>{project.title}</h3>
                      <span className="project-type">Full Stack</span>
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="project-features">
                      <h4 className="features-title">Key Features:</h4>
                      <ul className="features-list">
                        {project.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-tech">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-stack">{tech}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <button
                        type="button"
                        className="project-link"
                        onClick={(event) => {
                          event.stopPropagation();
                          setSelectedProject(project);
                        }}
                      >
                        <span className="link-icon">→</span>
                        View Details
                      </button>
                    </div>
                  </div>
                </Motion.article>
              ))}
            </Motion.div>
          </div>

          <p className="projects-explore-hint" aria-hidden="true">
            <span>{usesPinnedScroll ? "Scroll to explore" : "Swipe to explore"}</span>
            <span className="explore-arrow">→</span>
          </p>
        </div>

        <div className="projects-bg-elements" aria-hidden="true">
          <Motion.div
            className="floating-project"
            animate={shouldReduceMotion ? undefined : { y: [0, -30, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <Motion.div
            className="floating-project"
            animate={shouldReduceMotion ? undefined : { y: [0, -40, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
      </Motion.section>

      <AnimatePresence>
        {selectedProject && (
          <Motion.div
            className="project-modal active"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <Motion.div
              className="modal-content"
              initial={shouldReduceMotion ? false : { scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="modal-close"
                aria-label="Close project details"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              <div className="modal-image">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  width="1200"
                  height="800"
                />
              </div>

              <div className="modal-body">
                <div className="modal-header">
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.description}</p>
                </div>

                <div className="modal-details">
                  <div className="detail-section">
                    <h4>Features</h4>
                    <ul>
                      {selectedProject.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h4>Technologies Used</h4>
                    <div className="modal-tech">
                      {selectedProject.tech.map((tech) => (
                        <span key={tech} className="tech-stack">{tech}</span>
                      ))}
                    </div>

                    <h4 className="project-type-heading">Project Type</h4>
                    <p>Full Stack Web Application</p>
                  </div>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
