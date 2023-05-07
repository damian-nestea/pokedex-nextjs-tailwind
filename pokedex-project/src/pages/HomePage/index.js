import React from "react";

const HomePage = () => {
  return (
    <>
      <section className=" w-full flex flex-col items-center">
        <div className=" w-4/5 h-screen bg-pokemon-background-home bg-contain bg-no-repeat px-24 flex rounded-r-md border-2">
          <button className=" px-8 py-4 bg-intense-red self-center text-white uppercase font-bold rounded-sm hover:opacity-80">
            Pokemon List
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
