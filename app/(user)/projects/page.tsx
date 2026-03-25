"use client";

import Container from "@/components/ui/container";
import Badge from "@/components/ui/badge";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  stats?: {
    stars?: number;
    forks?: number;
  };
}

const PROJECTS: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with product catalog and payment integration.",
    longDescription:
      "A comprehensive e-commerce solution built with Next.js and Node.js. Features include product catalog, shopping cart, user authentication, payment processing with Stripe, and admin dashboard for managing products and orders.",
    tags: ["Next.js", "React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    stats: {
      stars: 245,
      forks: 42,
    },
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management with real-time updates and team features.",
    longDescription:
      "A real-time collaborative task management application. Users can create projects, assign tasks, set deadlines, and collaborate with team members. Features include real-time notifications, file attachments, and activity tracking.",
    tags: ["React", "Firebase", "Tailwind CSS", "TypeScript", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    stats: {
      stars: 189,
      forks: 31,
    },
  },
  {
    id: "3",
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts and data visualization.",
    longDescription:
      "A comprehensive analytics dashboard that displays real-time data with interactive charts. Built with Chart.js for visualization, it provides insights into user behavior, traffic patterns, and performance metrics.",
    tags: ["Next.js", "Chart.js", "PostgreSQL", "Express", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stats: {
      stars: 156,
      forks: 28,
    },
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
    stats: {
      stars: 312,
      forks: 67,
    },
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
    stats: {
      stars: 98,
      forks: 15,
    },
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
    stats: {
      stars: 134,
      forks: 22,
    },
  },
];

export default function ProjectsPage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Container>
          <div className="flex flex-col gap-6 max-w-2xl">
            <Badge variant="primary" size="md">
              Portfolio
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A collection of projects I&apos;ve built over the years. Each project
              represents my passion for creating innovative solutions and
              learning new technologies.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <Container>
          <div className="flex flex-col gap-12">
            {/* Section Header */}
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                My most recent and notable projects
              </p>
            </div>

            {/* Featured Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <Card
                  key={project.id}
                  hoverable
                  className="flex flex-col gap-6 overflow-hidden"
                >
                  {/* Project Header */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-col gap-2 flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Long Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Stats */}
                  {project.stats && (
                    <div className="flex gap-6 py-4 border-y border-gray-200 dark:border-gray-700">
                      {project.stats.stars !== undefined && (
                        <div className="flex items-center gap-2">
                          <Star size={18} className="text-yellow-500" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {project.stats.stars}
                          </span>
                        </div>
                      )}
                      {project.stats.forks !== undefined && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {project.stats.forks} forks
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {project.liveUrl && (
                      <Button
                        variant="primary"
                        size="sm"
                        className="flex-1 flex items-center justify-center gap-2"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outlined"
                        size="sm"
                        className="flex-1 flex items-center justify-center gap-2"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github size={16} />
                        Code
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Other Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="flex flex-col gap-12">
            {/* Section Header */}
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                Other Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                More projects I&apos;ve worked on
              </p>
            </div>

            {/* Other Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <Card key={project.id} hoverable className="flex flex-col gap-4">
                  {/* Project Header */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Stats */}
                  {project.stats && (
                    <div className="flex gap-4 py-3 border-y border-gray-200 dark:border-gray-700">
                      {project.stats.stars !== undefined && (
                        <div className="flex items-center gap-1">
                          <Star size={16} className="text-yellow-500" />
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                            {project.stats.stars}
                          </span>
                        </div>
                      )}
                      {project.stats.forks !== undefined && (
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                            {project.stats.forks}F
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" size="sm">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" size="sm">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-3 border-t border-gray-200 dark:border-gray-700">
                    {project.liveUrl && (
                      <Button
                        variant="primary"
                        size="sm"
                        className="flex-1 flex items-center justify-center gap-1"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink size={14} />
                        Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outlined"
                        size="sm"
                        className="flex-1 flex items-center justify-center gap-1"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github size={14} />
                        Code
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <Container>
          <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                Interested in working together?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I&apos;m always open to new opportunities and collaborations. Feel
                free to reach out!
              </p>
            </div>
            <Button
              variant="primary"
              size="lg"
              onClick={() => (window.location.href = "/contact")}
            >
              Get In Touch
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

