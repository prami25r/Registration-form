import React, { createContext } from "react";
import lightTheme from "./light";

export const ThemeContext = createContext({
  theme: lightTheme,
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={{ theme: lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
