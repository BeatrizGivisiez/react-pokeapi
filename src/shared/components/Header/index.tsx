import React, { FC } from "react";
import { AppBar, Box, Toolbar, CssBaseline } from "@mui/material";

import logoPokemon from "../../assets/logo.png";
import { useStyles } from "./styles";

export const Header: FC = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Box
            component="img"
            className={classes.header__image}
            alt="Logo Pokémon"
            src={logoPokemon}
          />
        </Toolbar>
      </AppBar>
    </>
  );
};
