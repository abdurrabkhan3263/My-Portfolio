"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import style from "./style.module.css";

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
          className={`text-white font-semibold text-base ${
            pathName === link ? "bg-red-500 " : "border"
          } px-8 py-2 border-white rounded-full font-medium`}
        >
          {name}
        </Link>
      ))}
    </>
  );
}

export default NavLinks;
