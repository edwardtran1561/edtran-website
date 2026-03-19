import { Facebook, Instagram, Linkedin } from "lucide-react";

import Container from "../ui/container";
import Button from "../ui/button";

import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-32">
      <div className="absolute inset-0 z-10 opacity-30 text-gray-500">
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
      <div className="absolute top-40 left-1/2 -translate-x-1/2 -z-10">
        <div className="w-100 h-100 dark:bg-indigo-400 bg-indigo-500 opacity-10 blur-3xl rounded-full animate-pulseGlow" />
      </div>
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row flex-nowrap items-center gap-3">
          <HeroGreeting />
          <HeroMedia />
        </div>
      </Container>
    </section>
  );
};

const HeroGreeting: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 md:w-[50%]">
      <div className="flex flex-col gap-3">
        <h2 className="text-6xl flex items-end gap-3 font-bold text-gray-900 dark:text-gray-100 leading-none">
          Edward Tran
        </h2>
        <h2 className="text-2xl flex items-center gap-3 leading-none text-gray-400">
          Building clean, scalable & meaningful products.
        </h2>
        <p className="text-lg font-normal text-gray-600 dark:text-gray-200 leading-normal">
          I’m a developer driven by curiosity and a deep passion for
          programming. I love turning ideas into clean, efficient, and
          meaningful code.
        </p>
      </div>
      <HeroSocialMedia />
    </div>
  );
};

const HeroMedia: React.FC = () => {
  return (
    <div className="relative flex justify-end w-[50%]">
      <Image
        className="rounded-md shadow-xl ring-1 ring-black/10 dark:ring-white/10 hover:scale-[1.02] transition"
        src="/profile.jpg"
        width={400}
        height={400}
        alt="Edward Tran"
      />
    </div>
  );
};

const HeroSocialMedia: React.FC = () => {
  return (
    <div className="flex flex-row gap-3">
      <Button
        variant="secondary"
        as={Link}
        href="#"
        className="hover:bg-[#1877f2]! hover:text-white hover:scale-105 hover:drop-shadow"
      >
        <Facebook />
      </Button>
      <Button
        variant="secondary"
        as={Link}
        href="#"
        className="hover:bg-linear-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] hover:text-white hover:scale-105 hover:drop-shadow"
      >
        <Instagram />
      </Button>
      <Button
        variant="secondary"
        as={Link}
        href="#"
        className="hover:bg-[#0A66C2]! hover:drop-shadow hover:scale-105 hover:text-white"
      >
        <Linkedin />
      </Button>
    </div>
  );
};

export default Hero;
