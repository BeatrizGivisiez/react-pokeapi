import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { PokemonTheme } from "./shared/themes";
import { ThemeProvider } from "@mui/material";
import { PokemonProvider } from "./shared/context/PokemonContext";

export const App: React.FC = () => {
  return (
    <PokemonProvider>
      <ThemeProvider theme={PokemonTheme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </PokemonProvider>
  );
};
