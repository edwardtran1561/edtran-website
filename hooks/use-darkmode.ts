"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function useDarkmode() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    }
    if (theme === "dark") {
      setTheme("system");
    }
    if (theme === "system") {
      setTheme("light");
    }
  };

  return { theme, handleToggle };
}
