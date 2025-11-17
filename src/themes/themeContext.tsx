import React, { createContext, useState, useEffect } from "react";
import { Appearance } from "react-native";
import lightTheme from "./light";
import darkTheme from "./dark";

export interface ThemeType {
  background: string;
  text: string;
  inputBackground: string;
  border: string;
  buttonBackground: string;
  buttonText: string;
}

interface ThemeContextProps {
  theme: ThemeType;
  mode: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: lightTheme,
  mode: "light",
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = Appearance.getColorScheme();
  const [mode, setMode] = useState<"light" | "dark">(
    systemColorScheme === "dark" ? "dark" : "light"
  );

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
