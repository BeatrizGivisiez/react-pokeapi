import axios from "axios";

// creating axios instance
export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
