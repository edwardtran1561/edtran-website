"use client";
import { useEffect, useState } from "react";
import { Moon, Sun, Loader, Monitor } from "lucide-react";
import Button from "../ui/button";
import useDarkmode from "@/hooks/use-darkmode";

const ModeToggle: React.FC = () => {
  const { theme, handleToggle } = useDarkmode();
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
      {(() => {
        if (theme === "dark") {
          return <Moon size={20} />;
        }
        if (theme === "light") {
          return <Sun size={20} />;
        }

        return <Monitor size={20} />;
      })()}
    </Button>
  );
};

export default ModeToggle;
