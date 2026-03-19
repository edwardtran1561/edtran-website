"use client";
import { useEffect, useState } from "react";
import { Moon, Sun, Loader } from "lucide-react";
import Button from "../ui/button";
import useDarkmode from "@/hooks/use-darkmode";

const ModeToggle: React.FC = () => {
  const { isDark, handleToggle } = useDarkmode();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="secondary">
        <Loader className="animate-spin" size={20} />
      </Button>
    );
  }

  return (
    <Button variant="secondary" type="button" onClick={handleToggle}>
      {isDark ? <Moon size={20} /> : <Sun size={20} />}
    </Button>
  );
};

export default ModeToggle;
