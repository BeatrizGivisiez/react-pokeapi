import React, { FC } from "react";

import { AppPagination } from "../Pagination";
import { PokemonCard } from "../PokemonCard";

export const PokemonList: FC = () => {
  return (
    <>
      <main>
        <AppPagination />
        <PokemonCard />
      </main>
    </>
  );
};
