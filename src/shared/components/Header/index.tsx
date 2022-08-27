import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import logoPokemon from "../../assets/logo.png";
import { useStyles } from "./styles";

export default function Header() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box
            component="img"
            className={classes.header__image}
            alt="Logo Pokémon"
            src={logoPokemon}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
