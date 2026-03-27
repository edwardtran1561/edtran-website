import { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product catalog and payment integration.",
    longDescription:
      "A comprehensive e-commerce solution built with Next.js and Node.js. Features include product catalog, shopping cart, user authentication, payment processing with Stripe, and admin dashboard for managing products and orders.",
    tags: ["Next.js", "React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    stats: { stars: 245, forks: 42 },
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Collaborative task management with real-time updates and team features.",
    longDescription:
      "A real-time collaborative task management application. Users can create projects, assign tasks, set deadlines, and collaborate with team members. Features include real-time notifications, file attachments, and activity tracking.",
    tags: ["React", "Firebase", "Tailwind CSS", "TypeScript", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    stats: { stars: 189, forks: 31 },
  },
  {
    id: "3",
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts and data visualization.",
    longDescription:
      "A comprehensive analytics dashboard that displays real-time data with interactive charts. Built with Chart.js for visualization, it provides insights into user behavior, traffic patterns, and performance metrics.",
    tags: ["Next.js", "Chart.js", "PostgreSQL", "Express", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stats: { stars: 156, forks: 28 },
  },
  {
    id: "4",
    title: "Social Media App",
    description: "Social networking platform with messaging and feed functionality.",
    longDescription:
      "A full-featured social networking platform with user profiles, real-time messaging, feed system, and social interactions. Includes image uploads, notifications, and user discovery features.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    stats: { stars: 312, forks: 67 },
  },
  {
    id: "5",
    title: "Weather Forecast App",
    description: "Real-time weather forecasting application with location-based services.",
    longDescription:
      "A weather application that provides real-time weather data, forecasts, and alerts. Uses geolocation to provide location-specific weather information and includes features like weather alerts and historical data.",
    tags: ["React", "OpenWeather API", "Tailwind CSS", "Axios"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stats: { stars: 98, forks: 15 },
  },
  {
    id: "6",
    title: "Blog Platform",
    description: "Headless CMS blog platform with Markdown support and SEO optimization.",
    longDescription:
      "A modern blog platform built with Next.js and Notion API. Supports Markdown content, automatic SEO optimization, dark mode, and fast static generation for optimal performance.",
    tags: ["Next.js", "Notion API", "Markdown", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stats: { stars: 134, forks: 22 },
  },
];
