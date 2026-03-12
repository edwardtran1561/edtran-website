"use client";

import {
  Home,
  User,
  PhoneCall,
  Pen,
  Menu,
  CircleX,
  type LucideProps,
} from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { useState } from "react";
import Button from "../ui/button";
import SearchBox from "./search-box";

interface NavigationItemProps {
  label: string;
  url: string;
  icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref">> &
    RefAttributes<SVGSVGElement>;
  isActive?: boolean;
}

const NAVIGATION_ITEMS: NavigationItemProps[] = [
  {
    label: "Home",
    url: "/",
    icon: Home,
  },
  {
    label: "About",
    url: "/about",
    icon: User,
  },
  {
    label: "Contact",
    url: "/contact",
    icon: PhoneCall,
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
    <div>
      <Button
        variant={isOpen ? "primary" : "secondary"}
        type="button"
        onClick={handleToggle}
        className="lg:hidden"
      >
        {isOpen ? <CircleX size={20} /> : <Menu size={20} />}
      </Button>
      <nav
        className={classNames({
          "absolute top-full left-0 right-0 lg:relative lg:flex": true,
          "flex flex-col px-3 pb-3 bg-white dark:bg-gray-900 shadow-lg lg:bg-transparent lg:shadow-none lg:p-0":
            isOpen,
          hidden: !isOpen,
        })}
      >
        <SearchBox className="sm:hidden mb-3" />
        <ul className="flex flex-col lg:flex-row list-none gap-2 lg:items-center">
          {NAVIGATION_ITEMS.map((props) => (
            <NavigationItem
              key={props.url}
              {...props}
              isActive={isActiveRoute(props.url)}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

const NavigationItem: React.FC<NavigationItemProps> = (props) => {
  const linkClassses = classNames({
    "flex items-center gap-2 px-5 py-3 rounded-tl-lg rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700": true,
    "bg-blue-600 text-white hover:bg-blue-600!": props.isActive,
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
