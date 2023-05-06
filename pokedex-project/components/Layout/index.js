import React from "react";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <header className=" h-1/5 flex flex-col py-4 items-center justify-between">
        <img className=" w-40" src="img/pokemon.png" alt="Logo Pokemon" />
        <Navbar />
      </header>
      <main className=" h-screen">{children}</main>
    </>
  );
};

export default Layout;
