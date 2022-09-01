import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Card,
  Grid,
  Typography,
  CardMedia,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";
import { Star } from "phosphor-react";

import { useStyles } from "./styles";
import { PokemonContext } from "../../context/PokemonContext";
import { PokemonDetail as IPokemonDetail } from "../../interfaces/pokemon";

export const PokemonDetail: React.FC = () => {
  const [favorites, setFavorites] = useState<IPokemonDetail[]>(
    JSON.parse(localStorage.getItem("@pokefavorite") as any) || []
  );
  const { pokemonData } = useContext(PokemonContext);
  const navigate = useNavigate();
  const classes = useStyles();

  // storing favorite Pokemon in localStorage
  const handleFavorite = (id: number) => {
    const favoriteList = JSON.parse(
      localStorage.getItem("@pokefavorite") as any
    );
    const pokemonIndex = favoriteList.findIndex(
      (item: IPokemonDetail) => item.id === id
    );
    if (pokemonIndex > -1) {
      favoriteList.splice(pokemonIndex, 1);
    } else {
      favoriteList.push(pokemonData);
    }
    localStorage.setItem("@pokefavorite", JSON.stringify(favoriteList));
    setFavorites(favoriteList);
  };

  // create localStorage key if it doesn't exist
  useEffect(() => {
    if (!localStorage.getItem("@pokefavorite")) {
      const favoritePokemons: number[] = [];
      localStorage.setItem("@pokefavorite", JSON.stringify(favoritePokemons));
      setFavorites([]);
    }
  }, []);

  // if user accesses the route without selecting a Pokemon, navigates to "/"
  useEffect(() => {
    if (!pokemonData.name) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <main className={classes.pokemonDetail}>
      <Card className={classes.pokemonDetail__card}>
        <Container
          maxWidth="md"
          sx={{
            bgcolor: "background.paper",
          }}
        >
          <div className={classes.pokemonDetail__containerMenu}>
            <div className={classes.containerMenu__name}>
              <Typography variant="h4" sx={{ fontWeight: 500 }}>
                {pokemonData.name}
              </Typography>
            </div>
            <div className={classes.containerMenu__icon}>
              <Star
                onClick={() => {
                  handleFavorite(pokemonData.id);
                }}
                size={40}
                color="#3761A8"
                weight={
                  favorites.findIndex(
                    (item: IPokemonDetail) => item.id === pokemonData.id
                  ) > -1
                    ? "fill"
                    : "regular"
                }
              />
            </div>
          </div>

          <Grid className={classes.pokemonDetail__containerGrid}>
            <Box className={classes.containerGrid}>
              <CardMedia
                className={classes.containerGrid__image}
                component="img"
                image={
                  pokemonData?.sprites?.other?.["official-artwork"]
                    .front_default
                }
              />
            </Box>
            <List className={classes.containerGrid__list}>
              <Box>
                <ListItem>
                  <ListItemText
                    primary={pokemonData?.stats?.[0].stat?.name}
                    secondary={pokemonData?.stats?.[0].base_stat}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={pokemonData?.stats?.[1].stat?.name}
                    secondary={pokemonData?.stats?.[1].base_stat}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={pokemonData?.stats?.[2].stat?.name}
                    secondary={pokemonData?.stats?.[2].base_stat}
                  />
                </ListItem>
              </Box>
              <Box>
                <ListItem>
                  <ListItemText
                    primary={pokemonData?.stats?.[3].stat?.name}
                    secondary={pokemonData?.stats?.[3].base_stat}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={pokemonData?.stats?.[4].stat?.name}
                    secondary={pokemonData?.stats?.[4].base_stat}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={pokemonData?.stats?.[5].stat?.name}
                    secondary={pokemonData?.stats?.[5].base_stat}
                  />
                </ListItem>
              </Box>
            </List>
          </Grid>
        </Container>
      </Card>
    </main>
  );
};
