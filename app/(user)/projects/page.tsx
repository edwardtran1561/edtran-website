"use client";

import Container from "@/components/ui/container";
import Badge from "@/components/ui/badge";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";
import { PROJECTS } from "@/constants/projects";

const featuredProjects = PROJECTS.filter((p) => p.featured);
const otherProjects = PROJECTS.filter((p) => !p.featured);

export default function ProjectsPage() {
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
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                My most recent and notable projects
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <Card
                  key={project.id}
                  hoverable
                  className="flex flex-col gap-6 overflow-hidden"
                >
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.longDescription}
                  </p>

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
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {project.stats.forks} forks
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>

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
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                Other Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                More projects I&apos;ve worked on
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <Card key={project.id} hoverable className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

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
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          {project.stats.forks}F
                        </span>
                      )}
                    </div>
                  )}

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
