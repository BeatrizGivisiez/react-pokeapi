import React from "react";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { PokemonCard } from "../PokemonCard";
import { useStyles } from "./styles";
import { PokemonDetail } from "../../interfaces/pokemon";

export const FavoriteList: React.FC = () => {
  const pokemons = JSON.parse(localStorage.getItem("@pokefavorite") as any);
  const classes = useStyles();

  return (
    <main>
      <Container className={classes.pokemonList} maxWidth="md">
        <Grid container spacing={4}>
          {pokemons.length > 0 ? (
            pokemons.map((pokemon: PokemonDetail) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`}
              />
            ))
          ) : (
            <div className={classes.No__FavoriteMsg}>
              <Typography variant="h6" component="h2">
                You don't have favorite Pokémons!
              </Typography>
            </div>
          )}
        </Grid>
      </Container>
    </main>
  );
};
