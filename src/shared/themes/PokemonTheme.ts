import { createTheme } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";

export const PokemonTheme = createTheme({
  palette: {
    primary: {
      main: yellow[700],
      dark: yellow[800],
      light: yellow[500],
      contrastText: "#ffffff",
    },
    secondary: {
      main: grey[700],
      dark: grey[800],
      light: grey[500],
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#F1F1F1",
    },
  },
});
