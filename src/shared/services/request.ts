//getting Pokémon list by page
export const API_LIST_LIMIT = 6;
export const getPokemonList = (pageNumber: number, limit = API_LIST_LIMIT) => {
  return `/pokemon?offset=${pageNumber * limit}&limit=${limit}`;
};
