import { ThemeProvider } from "@mui/material";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes";
import { PokemonTheme } from "./shared/themes";

export const App: FC = () => {
  return (
    //Using pokemon custom theme
    <ThemeProvider theme={PokemonTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
