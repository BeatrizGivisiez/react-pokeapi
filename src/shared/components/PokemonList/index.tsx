import React, { FC } from "react";

import { Pagination } from "../Pagination";
import { PokemonCard } from "../PokemonCard";

export const PokemonList: FC = () => {
  return (
    <>
      <main>
        <Pagination />
        <PokemonCard />
      </main>
    </>
  );
};
