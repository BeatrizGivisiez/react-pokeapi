import React, { FC } from "react";
import { Footer } from "../../shared/components/Footer";

import { Header } from "../../shared/components/Header";
import { PokemonDetail } from "../../shared/components/PokemonDetail";

export const Pokemon: FC = () => {
  return (
    <>
      <Header />
      <PokemonDetail />
      <Footer />
    </>
  );
};
