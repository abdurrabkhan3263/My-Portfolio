"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navList = [
  {
    name: "About",
    link: "/",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Projects",
    link: "/projects",
  },
];

function NavLinks() {
  const pathName = usePathname();
  return (
    <>
      {navList.map(({ name, link }) => (
        <Link
          key={name}
          href={link}
          className={`text-base font-semibold text-white ${
            pathName === link ? "bg-red-500" : "border"
          } rounded-full border-white px-8 py-2 font-medium`}
        >
          {name}
        </Link>
      ))}
    </>
  );
}

export default NavLinks;
