import React from "react";

import { Header } from "../../shared/components/Header";
import { PokemonList } from "../../shared/components/PokemonList";
import { Footer } from "../../shared/components/Footer";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <PokemonList />
      <Footer />
    </>
  );
};
