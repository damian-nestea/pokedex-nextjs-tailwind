import React from "react";

const HomePage = () => {
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
    </>
  );
};

export default HomePage;
