import React, { FC } from "react";

import { Header } from "../../shared/components/Header";
import { PokemonDetail } from "../../shared/components/PokemonDetail";
import { Footer } from "../../shared/components/Footer";

export const Pokemon: FC = () => {
  return (
    <>
      <Header />
      <PokemonDetail />
      <Footer />
    </>
  );
};
