"use client";

import Container from "../ui/container";
import Button from "../ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-900 dark:to-indigo-950">
      <Container>
        <div className="flex flex-col gap-8 items-center text-center">
          {/* Heading */}
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-indigo-100">
              I&apos;m always interested in hearing about new projects and
              opportunities. Feel free to reach out if you&apos;d like to
              collaborate!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              variant="secondary"
              size="lg"
              className="flex items-center justify-center gap-2"
              onClick={() =>
                (window.location.href = "mailto:your-email@example.com")
              }
            >
              <Mail size={20} />
              Send Me an Email
            </Button>
            <Button
              variant="outlined"
              size="lg"
              className="flex items-center justify-center gap-2 border-white text-white hover:bg-white/10"
              onClick={() => window.open("https://linkedin.com", "_blank")}
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-8 border-t border-indigo-400/30">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-200 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-200 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your-email@example.com"
              className="text-white hover:text-indigo-200 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
