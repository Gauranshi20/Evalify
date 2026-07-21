import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({
  children,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (
      savedTheme === "light" ||
      savedTheme === "dark"
    ) {
      setTheme(savedTheme);
    }
  }, []);

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used within ThemeProvider"
    );
  }

  return context;
}