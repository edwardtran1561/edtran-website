"use client";
import Container from "../ui/container";
import ModeToggle from "./mode-toggler";
import Navigation from "./navigation";
import SearchBox from "./search-box";
import Link from "next/link";

interface HeaderBrandProps {
  title: string;
  desc: string;
}

const Header: React.FC = () => {
  return (
    <header className="relative bg-white shadow-lg dark:bg-gray-900 mb-5 z-100">
      <Container>
        <div className="flex flex-row justify-between items-center gap-5">
          <HeaderBrand title="Edward Tran" desc="Share good things" />
          <SearchBox className="hidden sm:flex sm:flex-1" />
          <div className="flex items-center gap-3">
            <Navigation />
            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
};

const HeaderBrand: React.FC<HeaderBrandProps> = ({ title, desc }) => {
  return (
    <Link href="/" className="shrink-0 py-3 text-center">
      <h1 className="text-2xl font-bold leading-none mb-1 text-blue-600">
        {title}
      </h1>
      <p className="line-clamp-none leading-none text-gray-700 dark:text-gray-500">
        {desc}
      </p>
    </Link>
  );
};

export default Header;
