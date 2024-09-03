"use client";

import React from "react";
import Link from "next/link";
import { kauchan } from "./ui/font";
import NavLinks from "./ui/nav-link";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

gsap.registerPlugin(useGSAP);

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathName = usePathname();

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.to(".fixed", { top: 0, ease: "power2.inOut" });
    } else {
      gsap.to(".fixed", { top: "-100%", ease: "power2.inOut" });
    }
  }, [isMenuOpen]);

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

  return (
    <>
      {
        <div className="fixed -top-full z-30 h-full w-full bg-[#0E0C38] px-6 pt-6 text-white">
          <X
            className="h-11 w-11"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          />
          <div>
            {navList.map(({ name, link }) => (
              <div key={name} className="overflow-hidden">
                <Link
                  href={link}
                  className={`my-6 block ${pathName === link ? "font-semibold" : "font-medium"} text-7xl font-semibold text-white`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      }
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
              onClick={() => setIsMenuOpen(true)}
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
