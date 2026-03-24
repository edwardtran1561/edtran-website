"use client";

import {
  PhoneCall,
  Pen,
  Menu,
  CircleX,
  Toolbox,
  FileBraces,
  Smile,
  type LucideProps,
} from "lucide-react";

import type { ForwardRefExoticComponent, RefAttributes } from "react";

import { useState } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Link from "next/link";
import Button from "../ui/button";

interface NavigationItemProps {
  label: string;
  url: string;
  icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref">> &
    RefAttributes<SVGSVGElement>;
  isActive?: boolean;
}

const NAVIGATION_ITEMS: NavigationItemProps[] = [
  {
    label: "About me",
    url: "/",
    icon: Smile,
  },
  {
    label: "Contact",
    url: "/contact",
    icon: PhoneCall,
  },
  {
    label: "Projects",
    url: "/projects",
    icon: FileBraces,
  },
  {
    label: "Tools",
    url: "/tools",
    icon: Toolbox,
  },
  {
    label: "Blog",
    url: "/blog",
    icon: Pen,
  },
] as const;

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const isActiveRoute = (url: string) => {
    if (url === "/") return pathname === "/";
    return pathname.startsWith(url);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Button
        variant={isOpen ? "primary" : "secondary"}
        type="button"
        onClick={handleToggle}
        className="lg:hidden ml-auto"
      >
        {isOpen ? <CircleX size={20} /> : <Menu size={20} />}
      </Button>
      <nav
        className={classNames({
          "absolute top-full left-0 right-0 lg:relative lg:flex basis-auto": true,
          "flex flex-col px-2 pb-2 bg-white dark:bg-gray-900 shadow-lg lg:bg-transparent lg:shadow-none lg:p-0":
            isOpen,
          hidden: !isOpen,
        })}
      >
        <ul className="flex flex-col lg:flex-row list-none lg:gap-3 lg:items-center">
          {NAVIGATION_ITEMS.map((props) => (
            <NavigationItem
              key={props.url}
              {...props}
              isActive={isActiveRoute(props.url)}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};

const NavigationItem: React.FC<NavigationItemProps> = (props) => {
  const linkClassses = classNames({
    "flex items-center gap-2 px-5 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-sm transition shadow-none!": true,
    "bg-indigo-600 text-white hover:bg-indigo-600! font-bold": props.isActive,
  });

  return (
    <li className="relative">
      <Link className={linkClassses} href={props.url}>
        {props.icon && <props.icon size={16} />}
        {props.label}
      </Link>
    </li>
  );
};

export default Navigation;
