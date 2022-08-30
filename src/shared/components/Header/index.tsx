import React from "react";
import { AppBar, Box, Toolbar, Link, Tooltip } from "@mui/material";
import { House, Star } from "phosphor-react";

import logoPokemon from "../../assets/logo.png";
import { useStyles } from "./styles";

export const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.header__toolbar}>
        <Box
          component="img"
          className={classes.header__image}
          alt="Logo Pokémon"
          src={logoPokemon}
        />
        <div>
          <Tooltip title="Home">
            <Link className={classes.header__logo} variant="button" href="/">
              <House size={44} color="#3761A8" />
            </Link>
          </Tooltip>
          <Tooltip title="Favorites">
            <Link className={classes.header__logo} variant="button" href="/">
              <Star size={44} color="#3761A8" />
            </Link>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
};
