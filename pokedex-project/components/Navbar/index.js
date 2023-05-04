import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { navigationLinks } from "../../utils/data";

const Navbar = () => {
  const router = useRouter();
  return (
    <ul className=" flex gap-6">
      {navigationLinks.map((link, index) => (
        <li key={index}>
          <Link href={link.path}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
