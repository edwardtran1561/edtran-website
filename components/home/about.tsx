import Container from "../ui/container";
import Badge from "../ui/badge";

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <Container>
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col gap-4">
            <Badge variant="primary" size="md">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
              Who I Am
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              I&apos;m a passionate fullstack developer with a love for creating
              beautiful, functional web applications.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  My Journey
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  I started my programming journey with a curiosity about how
                  things work. Over the years, I&apos;ve developed a deep passion
                  for building scalable, efficient, and user-friendly
                  applications. I believe in writing clean code and following
                  best practices.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  What I Do
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  I specialize in building full-stack web applications using
                  modern technologies like React, Next.js, Node.js, and various
                  databases. I focus on creating intuitive user experiences and
                  robust backend systems.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  My Approach
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  I approach every project with a focus on understanding the
                  user&apos;s needs and delivering solutions that exceed
                  expectations. I&apos;m committed to continuous learning and staying
                  updated with the latest industry trends.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  Beyond Code
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  When I&apos;m not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col gap-2">
              <p className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                5+
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Years Experience
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                20+
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Projects Completed
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                15+
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Happy Clients
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                100%
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Dedication
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
