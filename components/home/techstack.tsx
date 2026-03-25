import Container from "../ui/container";
import {
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiShadcnui,
  SiMui,
  SiAntdesign,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiNextdotjs,
  SiReact,
  SiPnpm,
  SiYarn,
  SiNestjs,
  SiNeovim,
  SiTmux,
} from "@icons-pack/react-simple-icons";

type Skill = {
  title: string;
  icon: React.ReactNode;
  color?: string;
};
type SkillGroup = {
  title: string;
  items: Skill[];
};
type SkillProps = {
  [name: string]: SkillGroup;
};

const ICON_SIZE = 20;

const SKILLS: SkillProps = {
  frontend: {
    title: "Frontend",
    items: [
      {
        title: "HTML5",
        icon: <SiHtml5 color="#E34C26" size={ICON_SIZE} />,
      },
      {
        title: "CSS3",
        icon: <SiCss color="#3C99DC" size={ICON_SIZE} />,
      },
      {
        title: "Javascript",
        icon: <SiJavascript color="#F0DB4F" size={ICON_SIZE} />,
      },
      {
        title: "Typescript",
        icon: <SiTypescript color="#3178C6" size={ICON_SIZE} />,
      },
      {
        title: "Tailwind CSS",
        icon: <SiTailwindcss color="#38bdf8" size={ICON_SIZE} />,
      },
      {
        title: "Shadcn UI",
        icon: (
          <SiShadcnui className="text-black dark:text-white" size={ICON_SIZE} />
        ),
      },
      {
        title: "Material UI",
        icon: <SiMui color="#007FFF" size={ICON_SIZE} />,
      },
      {
        title: "Ant Design",
        icon: <SiAntdesign color="#1677FF" size={ICON_SIZE} />,
      },
      {
        title: "Redux",
        icon: <SiRedux color="#764abc" size={ICON_SIZE} />,
      },
      {
        title: "ReactJS",
        icon: <SiReact color="#61dbfb" size={ICON_SIZE} />,
      },
      {
        title: "NextJS",
        icon: (
          <SiNextdotjs
            className="text-gray-800 dark:text-gray-200"
            size={ICON_SIZE}
          />
        ),
      },
    ],
  },
  backend: {
    title: "Backend",
    items: [
      {
        title: "NodeJS",
        icon: <SiNodedotjs color="#6CC24A" size={ICON_SIZE} />,
      },
      {
        title: "Express",
        icon: <SiExpress color="#6CC24A" size={ICON_SIZE} />,
      },
      {
        title: "NestJS",
        icon: <SiNestjs color="#E0234E" size={ICON_SIZE} />,
      },
    ],
  },
  database: {
    title: "Database",
    items: [
      {
        title: "MongoDB",
        icon: <SiMongodb color="#47A248" size={ICON_SIZE} />,
      },
      {
        title: "MySQL",
        icon: <SiMysql color="#4479A1" size={ICON_SIZE} />,
      },
    ],
  },
  tools: {
    title: "Tools",
    items: [
      {
        title: "Git",
        icon: <SiGit color="#F1502F" size={ICON_SIZE} />,
      },
      {
        title: "Github",
        icon: (
          <SiGithub
            className="text-gray-900 dark:text-gray-200"
            size={ICON_SIZE}
          />
        ),
      },
      {
        title: "PNPM",
        icon: <SiPnpm color="#F69220" size={ICON_SIZE} />,
      },
      {
        title: "Yarn",
        icon: <SiYarn color="#2C8EBB" size={ICON_SIZE} />,
      },
      {
        title: "Tmux",
        icon: <SiTmux color="#1BB91F" size={ICON_SIZE} />,
      },
    ],
  },
  ide: {
    title: "IDEs",
    items: [
      {
        title: "Neovim",
        icon: <SiNeovim color="#57A143" size={ICON_SIZE} />,
      },
    ],
  },
};

const Techstack: React.FC = () => {
  return (
    <Container className="py-10">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col justify-center items-start gap-2">
          <h2 className="text-4xl font-black text-gray-800 dark:text-gray-200">
            Skills &amp; Tools
          </h2>
          <p className="text-xl text-gray-400">
            Technologies I use to build scalable products.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {Object.values(SKILLS).map((group) => {
            return (
              <div className="flex flex-col gap-5" key={group.title}>
                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">
                  {group.title}
                </h3>
                <div className="gap-3 flex flex-row flex-wrap">
                  {group.items.map((itemProps) => (
                    <div
                      className="basis-auto px-4 py-2 rounded-4xl border border-gray-200 dark:border-gray-700 flex flex-row gap-3 items-center transition hover:-translate-y-1 cursor-pointer select-none"
                      key={itemProps.title}
                    >
                      <div className="transition">{itemProps.icon}</div>
                      <span className="text-md text-gray-600 dark:text-gray-400">
                        {itemProps.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Techstack;
