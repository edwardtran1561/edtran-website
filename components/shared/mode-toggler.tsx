"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import Button from "../ui/button";

const ModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useLocalStorage<boolean>("dark-mode", false, {
    initializeWithValue: false,
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.add("color-scheme-dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("color-scheme-dark");
    }
  }, [isDark]);

  const handleToggle = () => {
    const next = !isDark;
    setIsDark(next);

    document.documentElement.classList.toggle("dark");
    document.documentElement.classList.toggle("color-scheme-dark");
  };

  return (
    <Button variant="secondary" type="button" onClick={handleToggle}>
      {isDark ? <Moon size={20} /> : <Sun size={20} />}
    </Button>
  );
};

export default ModeToggle;
