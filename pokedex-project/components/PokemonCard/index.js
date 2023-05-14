import React from "react";
import Image from "next/image";

const PokemonCard = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <article className=" flex flex-col gap-8">
      <div>{pokemon.name}</div>
    </article>
  );
};

export default PokemonCard;
