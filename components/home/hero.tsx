"use client";

import { Fragment } from "react";
import Container from "../ui/container";
import Image from "next/image";
import Button from "../ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-32 overflow-hidden">
      <HeroBackground />
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row flex-nowrap items-center gap-10">
          <HeroGreeting />
          <HeroMedia />
        </div>
      </Container>
    </section>
  );
};

const HeroGreeting: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 basis-auto animate-slideInUp">
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800">
          <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
            👋 Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Edward
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300">
          Fullstack Developer & Creative Problem Solver
        </h2>

        <p className="text-lg font-normal text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
          I&apos;m passionate about building beautiful, functional web applications
          that solve real-world problems. With expertise in modern web
          technologies, I turn ideas into scalable, efficient solutions.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button
          variant="primary"
          size="lg"
          className="flex items-center justify-center gap-2"
        >
          View My Work
          <ArrowRight size={20} />
        </Button>
        <Button
          variant="outlined"
          size="lg"
          className="flex items-center justify-center gap-2"
        >
          Get In Touch
        </Button>
      </div>

      {/* Location */}
      <div className="flex items-center gap-3 pt-4">
        <span className="text-2xl">🇻🇳</span>
        <p className="text-gray-600 dark:text-gray-400">
          Based in Ha Noi, Vietnam
        </p>
      </div>
    </div>
  );
};

const HeroMedia: React.FC = () => {
  return (
    <div className="relative flex justify-end min-w-[320px] gap-4 items-center animate-fadeInScale">
      {/* Main Image */}
      <div className="basis-auto relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        <Image
          className="rounded-lg shadow-2xl ring-1 ring-black/10 dark:ring-white/10 hover:scale-105 transition-transform duration-300 relative z-10"
          src="/profile.jpeg"
          width={300}
          height={500}
          alt="Edward Tran"
          priority
        />
      </div>

      {/* Side Images */}
      <div className="basis-auto flex flex-col gap-4 relative">
        <div className="group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur-lg opacity-0 group-hover:opacity-15 transition-opacity duration-300" />
          <Image
            className="rounded-lg shadow-xl ring-1 ring-black/10 dark:ring-white/10 hover:scale-105 transition-transform duration-300 relative z-10"
            src="/profile-2.jpeg"
            width={140}
            height={220}
            alt="Edward Tran"
          />
        </div>
        <div className="group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur-lg opacity-0 group-hover:opacity-15 transition-opacity duration-300" />
          <Image
            className="rounded-lg shadow-xl ring-1 ring-black/10 dark:ring-white/10 hover:scale-105 transition-transform duration-300 relative z-10"
            src="/profile-3.jpeg"
            width={300}
            height={500}
            alt="Edward Tran"
          />
        </div>
      </div>

      {/* Right Side Images */}
      <div className="basis-auto flex flex-col gap-4 relative">
        <div className="group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur-lg opacity-0 group-hover:opacity-15 transition-opacity duration-300" />
          <Image
            className="rounded-lg shadow-xl ring-1 ring-black/10 dark:ring-white/10 hover:scale-105 transition-transform duration-300 relative z-10"
            src="/profile-4.jpeg"
            width={300}
            height={500}
            alt="Edward Tran"
          />
        </div>
        <div className="group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur-lg opacity-0 group-hover:opacity-15 transition-opacity duration-300" />
          <Image
            className="rounded-lg shadow-xl ring-1 ring-black/10 dark:ring-white/10 hover:scale-105 transition-transform duration-300 relative z-10"
            src="/profile-5.jpeg"
            width={300}
            height={500}
            alt="Edward Tran"
          />
        </div>
      </div>
    </div>
  );
};

const HeroBackground: React.FC = () => {
  return (
    <Fragment>
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 text-gray-400 dark:text-gray-600 mask-[radial-gradient(ellipse_at_center,black_40%,transparent_100%)]">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 -z-10">
        <div className="w-96 h-96 dark:bg-indigo-400 bg-indigo-500 opacity-10 blur-3xl rounded-full animate-pulseGlow" />
      </div>

      <div className="absolute bottom-0 right-0 -z-10">
        <div className="w-80 h-80 dark:bg-purple-400 bg-purple-500 opacity-10 blur-3xl rounded-full animate-pulseGlow" />
      </div>

      <div className="absolute top-1/2 right-1/4 -z-10">
        <div className="w-72 h-72 dark:bg-pink-400 bg-pink-500 opacity-5 blur-3xl rounded-full animate-pulseGlow" />
      </div>
    </Fragment>
  );
};

export default Hero;
