//getting Pokémon list by page
export const getPokemonList = (pageNumber: number, limit = 6) => {
  return `/pokemon?offset=${pageNumber * limit}&limit=${limit}`;
};
