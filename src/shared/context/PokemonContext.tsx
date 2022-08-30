import { createContext, ReactNode, useState } from "react";
import { PokemonDetail } from "../interfaces/pokemon";

/**
 * This context was created to manage data from the pokeapi
 */

interface PokemonProviderProps {
  children: ReactNode;
}

interface PokemonContextProps {
  pokemonData: PokemonDetail;
  handlePokemonData(apiData: PokemonDetail): void;
}

// context initial value
const initialValue: PokemonContextProps = {
  pokemonData: {} as PokemonDetail,
  handlePokemonData: () => {},
};

// creating context PokemonContext
export const PokemonContext = createContext(initialValue);

// creating Provider to wrap application
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
