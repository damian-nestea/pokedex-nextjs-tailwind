import { GlobalContext } from "@/contexts/GlobalContext";
import React, { useContext } from "react";

const HomePage = () => {
  const context = useContext(GlobalContext);
  const { pokemonList } = context;

  console.log(pokemonList);
  return (
    <>
      <section className=" w-full flex flex-col items-center">
        <div className=" w-4/5 h-screen bg-pokemon-background-home bg-contain bg-no-repeat px-24 py-24 flex flex-col justify-evenly rounded-r-md border-0 hover:border-2 hover:border-intense-red">
          <p className=" w-1/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            consequat pellentesque accumsan. Etiam quis lacinia massa. Mauris
            sit amet tortor lobortis, dignissim turpis sed, varius dui. Sed
            placerat varius luctus.
          </p>
          <button className=" px-8 py-4 bg-intense-red self-start text-white uppercase font-bold rounded-sm hover:opacity-80">
            Pokemon List
          </button>
        </div>
      </section>
      <section className=" mt-5 flex flex-col items-center">
        <h2 className=" text-2xl uppercase font-bold text-dark-metal-color">
          A maneira mais divertida de conhecer os Pokemons!
        </h2>
        <div className=" h-60vh w-4/5 bg-red-300"></div>
      </section>
    </>
  );
};

export default HomePage;
