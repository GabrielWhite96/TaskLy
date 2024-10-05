import React, { useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import {
  ThemeProvider as CustomThemeProvider,
  ThemeContext,
} from "./utils/ThemeContext";
import { AppRoutes } from "./routes/AppRoutes";
import ThemeButton from './components/ThemeButton';
import GlobalStyles from "./styles/GlobalStyles";

export default function App() {
  return (
    <CustomThemeProvider>
      <ThemedApp />
    </CustomThemeProvider>
  );
}

function ThemedApp() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      <ThemeButton />
      <AppRoutes />
    </StyledThemeProvider>
  );
}
