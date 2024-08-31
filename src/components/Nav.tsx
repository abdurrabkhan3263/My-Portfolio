import React from "react";
import Link from "next/link";
import { kauchan } from "./ui/font";
import NavLinks from "./ui/nav-link";

function Nav() {
  return (
    <div className="w-full flex justify-between items-center px-24 h-[80px] select-none">
      <div>
        <Link href={"/"} className={`${kauchan.className} text-5xl text-white`}>
          Portfolio
        </Link>
      </div>
      <div className="flex gap-24">
        <NavLinks />
      </div>
    </div>
  );
}

export default Nav;
