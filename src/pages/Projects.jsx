import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { SiGithub } from "react-icons/si";
import { FiArrowUpRight, FiExternalLink, FiFolder, FiLock, FiX } from "react-icons/fi";
import "../styles/projects.css";

const img = (file) => `${import.meta.env.BASE_URL}projects/${file}`;

// Real screenshots only. A project without one shows a plain title panel
// until a real screenshot is added to public/projects/.
const projects = [
  {
    id: "pos",
    title: "MIS POS",
    subtitle: "Retail point of sale for shops",
    description:
      "An offline point of sale and retail management system for clothing and household shops. It runs on the shop's own computer, in Arabic and English, with US dollars and Lebanese pounds side by side.",
    image: img("pos.jpg"),
    imageAlt: "MIS POS till screen with an item in the cart, totals in dollars and Lebanese pounds",
    imagePosition: "top right",
    features: [
      "Barcode selling, returns and exchanges",
      "Stock with FIFO cost, purchases and suppliers",
      "Shifts, cash drawer and end-of-day sheet",
      "Roles, PIN sign-in and audit log",
      "Profit, best-seller and inventory reports",
    ],
    tech: [".NET", "ASP.NET Core", "React", "TypeScript", "SQLite"],
    status: "In testing at shops",
    featured: true,
    story: {
      problem:
        "Small clothing and household shops in Lebanon work in two currencies, often without stable internet, and most point-of-sale systems do not handle either well.",
      built:
        "A Windows app that runs fully on the shop's computer: barcode selling, returns and exchanges, stock with FIFO cost, shifts and cash drawer, reports, and roles with PIN sign-in. Prices and change work in US dollars and Lebanese pounds at the same time.",
      result:
        "Version 1.2.4 runs on shop laptops for testing, with a one-file installer, encrypted data and automatic backups.",
    },
    gallery: [
      { src: img("pos-products.jpg"), alt: "MIS POS products list with barcodes, prices and stock" },
      { src: img("pos-receipt.jpg"), alt: "MIS POS receipt in Arabic and English with totals in dollars and Lebanese pounds" },
    ],
  },
  {
    id: "cww",
    title: "CWW · Care Without Waiting",
    subtitle: "Clinic booking and queue platform",
    description:
      "A platform for outpatient clinics: patients book online, reception runs the day's queue, doctors send prescriptions, and the pharmacy receives them. Arabic and English.",
    image: img("cww.jpg"),
    imageAlt: "CWW reception screen with today's appointments and the waiting queue",
    features: [
      "Online booking and live waiting queue",
      "Reception, doctor and pharmacy screens",
      "Prescriptions sent to the pharmacy",
      "Row-level security in PostgreSQL",
    ],
    tech: ["Next.js", "React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    live: "https://cww.care",
    status: "Live",
    featured: true,
    story: {
      problem:
        "Patients wait in crowded clinic rooms, and prescriptions travel to the pharmacy on paper or by phone.",
      built:
        "One platform for the whole visit: online booking, a live queue for reception, a doctor's screen that writes and sends prescriptions, and a pharmacy inbox. Arabic and English, with each clinic's data kept apart by row-level security in PostgreSQL.",
      result: "Live at cww.care with a free trial for clinics.",
    },
    gallery: [
      { src: img("cww-booking-phone.jpg"), alt: "CWW booking on a phone: choosing a date and time with a doctor", tall: true },
      { src: img("cww-doctor.jpg"), alt: "CWW doctor screen: prescription written and sent to the pharmacy" },
    ],
  },
  {
    id: "vehicles",
    title: "Vehicles Management System",
    subtitle: "POS and accounting for car dealers",
    description:
      "Sales, stock, maintenance and purchases for a car dealership, with dashboards and reports for each role.",
    image: img("vehicles.jpg"),
    imageAlt: "Vehicles Management System sales screen with cars, prices and customers",
    features: ["Role-based dashboards", "Inventory and expense tracking", "Financial reporting"],
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/Mohammadsoleiman/mern-pos-vehicles",
    featured: true,
  },
  {
    id: "medical",
    title: "Medical Center",
    abbr: "MC",
    subtitle: "Clinic and pharmacy management",
    description: "Appointment booking, patient records and the pharmacy of a medical center in one system.",
    features: ["Appointment booking", "Patient management", "Pharmacy management"],
    tech: ["Laravel", "JavaScript", "Bootstrap", "MySQL"],
    github: "https://github.com/Mohammadsoleiman/AL-SAFOURI-CLINIC",
  },
  {
    id: "lam",
    title: "LAM Online Shopping",
    abbr: "LAM",
    subtitle: "Clothing e-commerce store",
    description: "An online clothing store with a cart, and an admin side where staff manage products and content by role.",
    features: ["Shopping cart", "Product management", "Role-based content management"],
    tech: ["Laravel", "Blade", "MySQL", "Bootstrap"],
    github: "https://github.com/Mohammadsoleiman/E-commerce11",
  },
  {
    id: "digital-hub",
    title: "The Digital Hub Platform",
    abbr: "DH",
    subtitle: "Training programs dashboard",
    description:
      "A web platform and admin dashboard for running training programs and participant services, built during the Digital Hub program.",
    features: ["Role-based access control", "Optional two-factor sign-in", "Automated email workflows"],
    tech: ["NestJS", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker"],
  },
];

function Cover({ project }) {
  if (project.image) {
    return (
      <div className="project-image">
        <img
          src={project.image}
          alt={project.imageAlt}
          width="1200"
          height="750"
          loading="lazy"
          style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
        />
      </div>
    );
  }
  return (
    <div className="project-image project-cover" aria-hidden="true">
      <span className="project-cover-mark">{project.abbr}</span>
      <span className="project-cover-stack">{project.tech.slice(0, 3).join(" · ")}</span>
    </div>
  );
}

function Links({ project, inModal = false }) {
  return (
    <>
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className={`project-link live${inModal ? " modal-code-link" : ""}`}
          onClick={(event) => event.stopPropagation()}
        >
          <FiExternalLink aria-hidden />
          {inModal ? "Open the live site" : "Live site"}
        </a>
      )}
      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className={`project-link github${inModal ? " modal-code-link" : ""}`}
          aria-label={`View ${project.title} code on GitHub`}
          onClick={(event) => event.stopPropagation()}
        >
          <SiGithub aria-hidden />
          {inModal ? "View code on GitHub" : "Code"}
        </a>
      ) : (
        <span className={`project-private${inModal ? " in-modal" : ""}`}>
          <FiLock aria-hidden />
          Private code
        </span>
      )}
    </>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!selectedProject) return undefined;
    const onKey = (event) => event.key === "Escape" && setSelectedProject(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedProject]);

  return (
    <>
      <section className="projects-section projects-grid-section">
        <div className="section-header projects-section-header">
          <Motion.div
            className="section-badge"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span>
              <FiFolder aria-hidden /> Featured Projects
            </span>
          </Motion.div>

          <Motion.h2
            className="section-title"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            My <span className="gradient-text">Projects</span>
          </Motion.h2>
          <p className="projects-intro">
            Business software I designed and built: two products of my own, and four full-stack systems.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Motion.article
              key={project.id}
              className={`project-item${project.featured ? " is-featured" : ""}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.06 }}
              onClick={() => setSelectedProject(project)}
            >
              <Cover project={project} />

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  {project.status && <span className="project-status">{project.status}</span>}
                </div>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-stack">
                      {tech}
                    </span>
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
                    {project.story ? "Case study" : "Details"}
                    <FiArrowUpRight aria-hidden />
                  </button>
                  <Links project={project} />
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </section>

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
              role="dialog"
              aria-modal="true"
              aria-label={selectedProject.title}
              initial={shouldReduceMotion ? false : { scale: 0.96, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="modal-close"
                aria-label="Close project details"
                onClick={() => setSelectedProject(null)}
              >
                <FiX aria-hidden />
              </button>

              {selectedProject.image && (
                <div className="modal-image">
                  <img src={selectedProject.image} alt={selectedProject.imageAlt} width="1200" height="750" />
                </div>
              )}

              <div className="modal-body">
                <div className="modal-header">
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.description}</p>
                </div>

                {selectedProject.story && (
                  <div className="case-study">
                    <div>
                      <h4>The problem</h4>
                      <p>{selectedProject.story.problem}</p>
                    </div>
                    <div>
                      <h4>What I built</h4>
                      <p>{selectedProject.story.built}</p>
                    </div>
                    <div>
                      <h4>Where it is now</h4>
                      <p>{selectedProject.story.result}</p>
                    </div>
                  </div>
                )}

                {selectedProject.gallery && (
                  <div className="case-gallery">
                    {selectedProject.gallery.map((shot) => (
                      <figure key={shot.src} className={shot.tall ? "is-tall" : undefined}>
                        <img src={shot.src} alt={shot.alt} loading="lazy" />
                      </figure>
                    ))}
                  </div>
                )}

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
                        <span key={tech} className="tech-stack">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="modal-links">
                      <Links project={selectedProject} inModal />
                    </div>
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
