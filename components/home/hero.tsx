import { Facebook, Instagram, Linkedin } from "lucide-react";
import Container from "../ui/container";
import Image from "next/image";
import Button from "../ui/button";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative py-10 bg-linear-to-br from-primary/5 via-background to-secondary/5">
      <Container>
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
    <div className="flex flex-col gap-3 md:w-[50%]">
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl flex items-center gap-3 font-black leading-none">
          Hi, I'm <span className="text-blue-600 dark:text-blue-300">Đức</span>{" "}
          (Edward)
        </h2>
        <h2 className="text-2xl flex items-center gap-3 font-bold leading-none">
          - a Passionate Developer
        </h2>
        <p className="text-lg font-normal text-gray-600 dark:text-gray-300 leading-normal">
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
        className="rounded-lg border-2 border-gray-300 dark:border-gray-600"
        src="/profile.jpg"
        width={300}
        height={300}
        alt="Edward Tran"
      />
    </div>
  );
};

const HeroSocialMedia: React.FC = () => {
  return (
    <div className="flex flex-row gap-3">
      <Button variant="outlined" as={Link} href="#">
        <Facebook />
      </Button>
      <Button variant="outlined" as={Link} href="#">
        <Instagram />
      </Button>
      <Button variant="outlined" as={Link} href="#">
        <Linkedin />
      </Button>
    </div>
  );
};

export default Hero;
