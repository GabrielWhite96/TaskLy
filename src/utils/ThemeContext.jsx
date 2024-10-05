import React, { createContext } from "react";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import greenDark from "../styles/themes/greenDark";
import blueDark from "../styles/themes/blueDark";
import usePersistedState from "./usePersistedState";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
