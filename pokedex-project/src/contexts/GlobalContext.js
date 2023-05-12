import { BASE_URL } from "@/constants/url";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalState = ({ children }) => {
  const [pokemonList, setPokemonList] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      setPokemonList(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const data = {
    pokemonList,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
