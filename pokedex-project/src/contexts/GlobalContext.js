import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalState = ({ children }) => {
  const [pokemonList, setPokemonList] = useState("Lista de pokemons");

  const data = {
    pokemonList,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
