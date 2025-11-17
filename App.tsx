import React from "react";
import RegistrationScreen from "./src/screen/registrationScreen";
import ThemeProvider from "./src/themes/themeContext";

export default function App() {
  return (
    <ThemeProvider>
      <RegistrationScreen />
    </ThemeProvider>
  );
}
