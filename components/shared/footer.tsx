import Container from "../ui/container";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your-email@example.com",
    },
  ];

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <footer className="relative bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <Container className="py-12">
        <div className="flex flex-col gap-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                Edward Tran
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Fullstack Developer | Building amazing web experiences
              </p>
            </div>

            {/* Links Section */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                Navigation
              </h4>
              <nav className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social Links Section */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                Connect
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      aria-label={social.name}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 dark:border-gray-800" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Edward Tran. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

