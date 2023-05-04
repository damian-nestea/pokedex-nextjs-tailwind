import React from "react";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <header className=" h-1/5 bg-slate-400 flex flex-col py-4 items-center justify-between">
        <p>LOGO DE POKEMON</p>
        <Navbar />
      </header>
      <main className=" h-screen bg-orange-300">{children}</main>
    </>
  );
};

export default Layout;
