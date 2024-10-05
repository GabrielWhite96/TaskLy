import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../../utils/ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Switch
      onChange={toggleTheme}
      checked={theme.title === "light"}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      offColor={theme.colors.primary}
      onColor={theme.colors.primary}
    />
  );
};

export default ThemeButton;
