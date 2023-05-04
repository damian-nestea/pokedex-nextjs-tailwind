import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { navigationLinks } from "../../utils/data";

const Navbar = () => {
  const router = useRouter();

  const verifyPath = (linkPath) => {
    if(linkPath ==='/' && router.pathname !=='/') return false;
    if(router.pathname.indexOf(linkPath) === 0) return true;
    return false
  }

  return (
    <ul className=" flex gap-36 px-8 py-4 uppercase">
      {navigationLinks.map((link, index) => (
        <li className={(verifyPath(link.path) && ' text-red-600')} key={index}>
          <Link href={link.path}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
