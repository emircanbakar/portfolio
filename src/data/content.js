// ═══════════════════════════════════════════════════
// PORTFOLIO CONTENT — All text, data, and links
// ═══════════════════════════════════════════════════

export const meta = {
  name: "Emircan Bakar",
  title: "Frontend Developer",
  domain: "ecbakar.dev",
  email: "ecbakar.dev@gmail.com",
};

export const hero = {
  title: "Frontend Developer",
  subtitle: "Building interactive web experiences",
  name: "Emircan Bakar",
};

export const about = {
  intro:
    "I am a passionate Frontend Developer dedicated to crafting high-end digital experiences at the intersection of design and engineering. I specialize in building interactive web applications, focusing on intuitive user interfaces, fluid motion, and performance optimization. My goal is to transform complex problems into elegant, immersive, and accessible digital products.",
  timeline: [
    {
      year: "2022",
      role: "System Support",
      company: "LDAP",
      description: "Provided technical support, maintained IT infrastructure, and ensured smooth daily operations."
    },
    {
      year: "2023",
      role: "UI Developer Intern",
      company: "Jotform",
      description: "Contributed to building modern, responsive, and accessible UI components. Collaborated with design and engineering teams to enhance user experience across core products."
    },
    {
      year: "2024",
      role: "Frontend Developer",
      company: "Istanbul Metropolitan Municipality",
      current: true,
      description: "Developing scalable frontend architectures and data-driven mapping applications for millions of citizens. Working extensively with React, MapLibre GL, and modern UI libraries."
    },
  ],
};

export const projects = [
  {
    title: "harita.istanbul",
    description:
      "Interactive city map platform serving millions of Istanbul residents. Real-time geospatial data visualization with layer management and urban planning tools.",
    tech: ["React", "MapLibre GL", "GeoJSON", "WebGL"],
    link: "https://harita.istanbul",
    color: "#e5e5e5",
    image: "/project-harita.png",
  },
  {
    title: "Coffee Shop",
    description:
      "Modern, responsive landing experience for a specialty coffee brand. Smooth scroll animations and elegant product showcasing.",
    tech: ["React", "CSS Animations", "Responsive Design"],
    link: "https://kahvem-coffee-website.vercel.app",
    color: "#a3a3a3",
    image: "/project-coffee.png",
  },
  {
    title: "Restaurant",
    description:
      "Full-featured restaurant website with immersive food photography, menu browsing, and reservation interface.",
    tech: ["React", "Framer Motion", "Vite"],
    link: "https://yemekle-restaurant-website.vercel.app",
    color: "#737373",
    image: "/project-restaurant.png",
  },
];

export const skills = {
  featured: ["React", "Next.js", "JavaScript", "Node.js", "TypeScript"],
  core: [
    "WebGL",
    "Three.js",
    "HTML5 / CSS3",
    "Framer Motion",
    "Tailwind CSS",
    "GSAP",
    "MaplibreGL",
    "Git",
    "REST APIs",
    "Responsive Design",
    "Performance",
    "UI/UX",
  ],
};

export const contact = {
  heading: "Let's create something extraordinary",
  subtitle:
    "Open to collaborations, creative projects, and new opportunities.",
  links: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/emircanbakar/",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      url: "https://github.com/emircanbakar",
      icon: "github",
    },
    {
      label: "Resume",
      url: "/emircanbakar_cv.pdf",
      icon: "file",
      download: true,
    },
  ],
};
