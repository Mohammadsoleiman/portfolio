export const projects = [
  {
    title: "The Digital Hub Platform",
    description: `
End-to-end web platform with a public website and secure admin dashboard.
Includes role-based access control (RBAC), authentication, optional 2FA,
email automation, and dynamic content management.
    `,
    features: [
      "Role-based access control (RBAC)",
      "Secure authentication & optional 2FA",
      "Admin-managed programs and events",
      "CV upload/download & PDF profile generation",
      "Automated emails (password recovery, notifications, contact)"
    ],
    tech: ["NestJS", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker"],
    category: "Full Stack",
    link: ""
  },
  {
    title: "Vehicles Management System (POS & Accounting)",
    description: `
Complete POS and Accounting System with multiple dashboards
for Admin, Accountant, and Clerk.
    `,
    features: [
      "Role-based dashboards",
      "Inventory and expense tracking",
      "Financial management modules"
    ],
    tech: ["MongoDB", "Express", "React", "Node.js"],
    category: "MERN Stack",
    link: ""
  },
  {
    title: "LAM Online Shopping",
    description: `
E-commerce website with role-based CMS allowing full content management.
    `,
    features: [
      "Role-based CMS",
      "Product & content management"
    ],
    tech: ["Laravel", "MySQL", "HTML", "CSS"],
    category: "E-commerce",
    link: ""
  },
  {
    title: "Medical Center Management System",
    description: `
System for appointment booking and pharmacy services.
    `,
    features: [
      "Appointment booking",
      "Pharmacy management"
    ],
    tech: ["Laravel", "JavaScript", "Bootstrap"],
    category: "Healthcare",
    link: ""
  }
];
