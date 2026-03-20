import Container from "../ui/container";
import ModeToggle from "./mode-toggler";
import Navigation from "./navigation";
import Link from "next/link";

interface HeaderBrandProps {
  title: string;
  desc: string;
}

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-18.75 bg-white shadow-lg dark:bg-gray-900 z-100 flex items-center">
      <Container>
        <div className="flex flex-row justify-between items-center gap-3 lg:gap-5 max-w-full">
          <HeaderBrand title="Edward Tran" desc="Share good things" />
          <Navigation />
          <ModeToggle />
        </div>
      </Container>
    </header>
  );
};

const HeaderBrand: React.FC<HeaderBrandProps> = ({ title, desc }) => {
  return (
    <Link href="/" className="shrink-0 text-center group">
      <div className="flex flex-row items-center gap-2">
        <Logo className="w-15 h-15" />
      </div>
    </Link>
  );
};

export const Logo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <g stroke="currentColor" strokeWidth="7" strokeLinecap="round">
      <path d="M25 25 H75" />
      <path d="M50 25 V75" />
      <path d="M25 40 H50" />
      <path d="M25 55 H45" />
      <path d="M25 70 H50" />
    </g>
  </svg>
);
export default Header;
