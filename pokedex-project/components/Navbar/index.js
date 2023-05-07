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
          <Link href={link.path}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
