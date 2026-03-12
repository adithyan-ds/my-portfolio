// src/data/constants.js

// src/data/constants.js

export const PROJECTS = [
  {
    id: 1,
    title: "Health Care System",
    description: "A comprehensive full-stack application for managing healthcare operations, featuring a robust database schema and efficient data handling.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    image: "/healthcare.jpg.png", // Make sure this matches your file name
    liveLink: "https://health-tech-platform-two.vercel.app", 
    githubLink: "https://github.com/adithyan-ds/health-tech-platform.git",
  },
  {
    id: 2,
    title: "AI Sentiment Analysis",
    description: "An intelligent web application that analyzes text sentiment by integrating third-party AI models into a web environment.",
    techStack: ["React", "Node.js", "Express", "Hugging Face API"],
    image: "/sentiment.jpg.png", 
    liveLink: "https://sentiment-analysis-murex-beta.vercel.app",
    githubLink: "https://github.com/adithyan-ds/sentiment_analysis.git",
  },
  {
    id: 3,
    title: "Employee Management System",
    description: "A full-stack management dashboard for handling employee records with responsive UI and efficient backend routing for CRUD operations.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    image: "/employee.jpg.png", 
    liveLink: "https://employee-management-system-gamma-five.vercel.app",
    githubLink: "https://github.com/adithyan-ds/employee-management-system.git",
  },
  {
    id: 4,
    title: "E-Commerce Storefront",
    description: "A frontend-focused shopping application demonstrating UI/UX design, state management, and data persistence.",
    techStack: ["React", "JavaScript", "Local Storage"],
    image: "/ecommerce.jpg.png", 
    liveLink: "https:react-ecom-admin-dashboard.vercel.app",
    githubLink: "https://github.com/adithyan-ds/react-ecom-admin-dashboard.git",
  }
];

// ... keep your SKILLS array below this ...

// Add this below your existing PROJECTS array in src/data/constants.js

// Replace the SKILLS array in src/data/constants.js

export const SKILLS = [
  { id: 'html', title: 'HTML' },
  { id: 'css', title: 'CSS' },
  { id: 'bootstrap', title: 'Bootstrap' },
  { id: 'js', title: 'JavaScript' },
  { id: 'react', title: 'React' },
  { id: 'git', title: 'Git' },
  { id: 'github', title: 'GitHub' },
  { id: 'tailwind', title: 'Tailwind' },
];