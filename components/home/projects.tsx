"use client";

import Container from "../ui/container";
import Card from "../ui/card";
import Badge from "../ui/badge";
import Button from "../ui/button";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "@/constants/projects";

const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 4);

const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Badge variant="primary" size="md">
              Portfolio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              Here are some of my recent projects that showcase my skills and
              experience in building web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} hoverable className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

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

          <div className="flex justify-center pt-8">
            <Button
              variant="outlined"
              size="lg"
              onClick={() => (window.location.href = "/projects")}
            >
              View All Projects
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
