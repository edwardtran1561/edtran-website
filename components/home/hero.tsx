import Container from "../ui/container";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-32 inset-shadow-lg inset-shadow-gray-500">
      <div className="absolute inset-0 z-10 opacity-30 text-gray-500 mask-[radial-gradient(ellipse_at_center,black_40%,transparent_100%)]">
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
    <div className="flex flex-col gap-5 basis-auto">
      <div className="flex flex-col gap-3">
        <h2 className="text-5xl flex items-end gap-3 font-bold text-gray-900 dark:text-gray-100 leading-none">
          Hi, I&#39;m Edward 👋
        </h2>
        <h2 className="text-2xl flex items-center gap-3 leading-none text-gray-500 dark:text-gray-200">
          Fullstack Developer
        </h2>
        <p className="text-lg font-normal text-gray-600 dark:text-gray-300 leading-normal">
          I’m a developer driven by curiosity and a deep passion for
          programming. I love turning ideas into clean, efficient, and
          meaningful code.
        </p>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <span className="text-3xl align-middle relative">🇻🇳</span>
        <p>Ha Noi, Viet Nam </p>
      </div>
    </div>
  );
};

const HeroMedia: React.FC = () => {
  return (
    <div className="relative flex justify-end min-w-[320px] gap-4 items-center">
      <div className="basis-auto relative">
        <Image
          className="rounded-md shadow-xl ring-1 ring-black/10 dark:ring-white/10 hover:scale-[1.02] transition"
          src="/profile.jpeg"
          width={300}
          height={500}
          alt="Edward Tran"
        />
      </div>
      <div className="basis-auto flex flex-col gap-4 relative">
        <Image
          className="rounded-md shadow-xl ring-1 ring-black/10 dark:ring-white/10 hover:scale-[1.02] transition"
          src="/profile-2.jpeg"
          width={140}
          height={220}
          alt="Edward Tran"
        />
        <Image
          className="rounded-md shadow-xl ring-1 ring-black/10 dark:ring-white/10 hover:scale-[1.02] transition"
          src="/profile-3.jpeg"
          width={300}
          height={500}
          alt="Edward Tran"
        />
      </div>
      <div className="basis-auto flex flex-col gap-4 relative">
        <Image
          className="rounded-md shadow-xl ring-1 ring-black/10 dark:ring-white/10 hover:scale-[1.02] transition"
          src="/profile-4.jpeg"
          width={300}
          height={500}
          alt="Edward Tran"
        />
        <Image
          className="rounded-md shadow-xl ring-1 ring-black/10 dark:ring-white/10 hover:scale-[1.02] transition"
          src="/profile-5.jpeg"
          width={300}
          height={500}
          alt="Edward Tran"
        />
      </div>
    </div>
  );
};

export default Hero;
