import React, { useEffect, useState } from "react";
import { api } from "../../services";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import { getPokemonList, API_LIST_LIMIT } from "../../services/request";
import { Pagination } from "../Pagination";
import { PokemonCard } from "../PokemonCard";

import { useStyles } from "./styles";

interface PokemonCardProps {
  name: string;
  url: string;
}

export const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonCardProps[]>([]);
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const classes = useStyles();

  useEffect(() => {
    api.get(getPokemonList(page)).then((response) => {
      setPokemons(response.data.results);
      if (!totalPages) {
        setTotalPages(response.data.count / API_LIST_LIMIT);
      }
    });
  }, [page]);

  return (
    <main>
      <Pagination handlePage={setPage} totalPages={totalPages} />

      <Container className={classes.pokemonList} maxWidth="md">
        <Grid container spacing={4}>
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </Grid>
      </Container>
    </main>
  );
};
