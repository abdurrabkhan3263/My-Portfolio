"use client";
import React from "react";
import Link from "next/link";
import { kauchan } from "./ui/font";
import NavLinks from "./ui/nav-link";
import { Menu } from "lucide-react";
import { useDispatch } from "react-redux";
import { setNav } from "../lib/feature/navSlice";
import MobileNav from "./ui/MobileNav";

function Nav() {
  const dispatch = useDispatch();

  return (
    <>
      <MobileNav />
      <div className="flex h-[80px] w-full select-none items-center justify-between px-12 lg:px-24">
        <div className="hidden lg:block">
          <Link
            href={"/"}
            className={`${kauchan.className} text-5xl text-white`}
          >
            Portfolio
          </Link>
        </div>
        <div className="flex w-full items-center justify-between lg:hidden">
          <Link
            href={"/"}
            className={`${kauchan.className} text-4xl text-white`}
          >
            Portfolio
          </Link>
          <div className="h-11 w-11 rounded-md">
            <Menu
              className="h-11 w-11 text-white"
              onClick={() => {
                dispatch(setNav(true));
              }}
            />
          </div>
        </div>
        <div className="hidden gap-24 lg:flex">
          <NavLinks />
        </div>
      </div>
    </>
  );
}

export default Nav;
