import React from "react";

const HomePage = () => {
  return (
    <>
      <section className=" w-full flex flex-col items-center">
        <div className=" w-4/5 h-screen bg-pokemon-background-home bg-contain bg-no-repeat px-24 flex">
          <button className=" px-8 py-4 bg-red-600 self-center text-white uppercase font-bold">Lista de Pokemons</button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
