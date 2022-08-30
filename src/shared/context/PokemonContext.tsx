import { createContext, ReactNode, useState } from "react";
import { PokemonDetail } from "../interfaces/pokemon";

interface PokemonProviderProps {
  children: ReactNode;
}

interface PokemonContextProps {
  pokemonData: PokemonDetail;
  handlePokemonData(apiData: PokemonDetail): void;
}

const initialValue: PokemonContextProps = {
  pokemonData: {} as PokemonDetail,
  handlePokemonData: () => {},
};

// Creating context PokemonContext
export const PokemonContext = createContext(initialValue);

export const PokemonProvider: React.FC<PokemonProviderProps> = ({
  children,
}) => {
  const [pokemonData, setPokemonData] = useState<PokemonDetail>(
    {} as PokemonDetail
  );
  const handlePokemonData = (apiData: PokemonDetail) => {
    setPokemonData(apiData);
  };

  return (
    <PokemonContext.Provider value={{ pokemonData, handlePokemonData }}>
      {children}
    </PokemonContext.Provider>
  );
};
