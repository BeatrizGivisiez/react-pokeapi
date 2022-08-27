import React, { FC } from "react";
import Header from "../../shared/components/Header";
import { PokemonList } from "../../shared/components/PokemonList";

export const Home: FC = () => {
  return (
    <>
      <Header />
      <PokemonList />
    </>
  );
};
