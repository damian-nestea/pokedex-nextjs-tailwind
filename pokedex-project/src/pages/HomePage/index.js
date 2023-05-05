import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <section className=" py-8 flex flex-col items-center">
        <Image
          src={"/../public/img/pokemonBackground.png"}
          width={1000}
          height={1000}
          alt="Pokemon Wallpaper"
        />
      </section>
    </>
  );
};

export default HomePage;
