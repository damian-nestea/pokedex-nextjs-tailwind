import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { navigationLinks } from "../../utils/data";

const Navbar = () => {
  const router = useRouter();

  const verifyPath = (linkPath) => {
    if (linkPath === "/" && router.pathname !== "/") return false;
    if (router.pathname.indexOf(linkPath) === 0) return true;
    return false;
  };

  return (
    <ul className=" flex justify-evenly px-8 py-4 uppercase text-xl text-metal-color font-bold">
      {navigationLinks.map((link, index) => (
        <li
          className={verifyPath(link.path) && " text-intense-red"}
          key={index}
        >
          <Link className=" group transition duration-300" href={link.path}>
            {link.label}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-intense-red"></span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
