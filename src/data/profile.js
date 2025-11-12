export const profile = {
  name: "Mohammad Suleiman",
  title: "Full-Stack Developer (MERN & Laravel)",
  summary:
    "Full-stack developer building clean, modern, and responsive web apps with React, Node.js, and Laravel. Focused on performance, UX, and maintainable code.",
  links: {
    github: "https://github.com/Mohammadsoleiman",
    linkedin: "https://www.linkedin.com/in/mohammad-suleiman",
    cv: "/MohammadSuleiman-CV.pdf", // ضع ملف الCV داخل public بنفس الاسم
  },

  // صور مؤقتة — بدّلها لاحقًا بصورك داخل public/projects
  projects: [
    {
      name: "Vehicle POS & Accounting System",
      description:
        "Multi-role POS (Admin/Accountant/Clerk) with inventory, expenses, and financial dashboards.",
      tech: ["MERN", "RBAC", "Inventory", "Accounting"],
      image: "/projects/pos.jpg",
      links: {
        github: "https://github.com/Mohammadsoleiman/mern-pos-vehicles",
        demo: "#",
      },
    },
    {
      name: "LAM Shopping (Laravel)",
      description:
        "Modern e-commerce with role-based CMS, dynamic content, and clean checkout flow.",
      tech: ["Laravel", "Blade", "MySQL"],
      image: "/projects/lam.jpg",
      links: {
        github: "https://github.com/Ali-Naji-3/LAM-Shopping",
        demo: "#",
      },
    },
    {
      name: "Medical Center System",
      description:
        "Appointments, medication posting, and admin dashboard for a medical center.",
      tech: ["Laravel", "Bootstrap", "JS"],
      image: "/projects/medical.jpg",
      links: {
        github: "#",
        demo: "#",
      },
    },
  ],

  skills: [
    "JavaScript", "PHP", "HTML", "CSS",
    "React", "Node.js", "Express", "Laravel",
    "MongoDB", "MySQL", "Git/GitHub", "Docker"
  ],
};
