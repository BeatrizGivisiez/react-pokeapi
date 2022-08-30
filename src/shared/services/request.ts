export const API_LIST_LIMIT = 6;

// getting Pokémon list by page limiting results by "API_LIST_LIMIT"
export const getPokemonList = (pageNumber: number, limit = API_LIST_LIMIT) => {
  return `/pokemon?offset=${pageNumber * limit}&limit=${limit}`;
};
