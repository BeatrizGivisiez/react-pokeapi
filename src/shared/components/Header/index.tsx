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
        <div className={classes.header__icon}>
          <Tooltip title="Home">
            <Link className={classes.header__logo} variant="button" href="/">
              <House size={34} color="#3660A7" />
            </Link>
          </Tooltip>
          <Tooltip title="Favorites">
            <Link
              className={classes.header__logo}
              variant="button"
              href="/favorites"
            >
              <Star size={34} color="#3660A7" />
            </Link>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
};
