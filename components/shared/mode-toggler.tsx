"use client";

import { useMemo, useSyncExternalStore } from "react";
import { Moon, Sun, Loader, Monitor } from "lucide-react";
import Button from "../ui/button";
import useDarkmode from "@/hooks/use-darkmode";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

const ModeToggle: React.FC = () => {
  const { theme, handleToggle } = useDarkmode();
  const isMounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const ThemeIcon = useMemo(() => {
    if (theme === "dark") {
      return <Moon size={20} />;
    }
    if (theme === "light") {
      return <Sun size={20} />;
    }

    return <Monitor size={20} />;
  }, [theme]);

  if (!isMounted) {
    return (
      <Button variant="secondary">
        <Loader className="animate-spin" size={20} />
      </Button>
    );
  }

  return (
    <Button variant="secondary" type="button" onClick={handleToggle}>
      {ThemeIcon}
    </Button>
  );
};

export default ModeToggle;
