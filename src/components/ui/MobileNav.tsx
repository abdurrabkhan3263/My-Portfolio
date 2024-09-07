import { setNav } from "@/lib/feature/navSlice";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

function MobileNav() {
  const selector = useSelector((state: any) => state.isNavOpen);
  const pathName = usePathname();
  const navLinks = useRef<HTMLAnchorElement[]>([]);
  const dispatch = useDispatch();

  useGSAP(() => {
    if (selector) {
      gsap.to(".fixed", { top: 0, ease: "power2.inOut" });
      gsap.to(navLinks.current, {
        delay: 0.4,
        translateY: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.2,
        ease: "power1.out",
      });
    } else {
      gsap.to(".fixed", { top: "-100%", ease: "power2.inOut" });
      gsap.to(navLinks.current, {
        translateY: "140%",
        opacity: 0,
        duration: 0.1,
        ease: "power1.in",
      });
    }
  }, [selector]);

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
    <div className="fixed -top-full z-[3] h-full w-full bg-[#0E0C38] px-6 pt-6 text-white">
      <X
        className="h-11 w-11"
        onClick={() => {
          dispatch(setNav(false));
        }}
      />
      <div className="mt-10">
        {navList.map(({ name, link }, i) => (
          <div key={name} className="overflow-hidden">
            <Link
              href={link}
              className={`my-3 block ${pathName === link ? "font-semibold" : "font-medium"} translate-y-[140%] text-6xl font-semibold text-white opacity-0`}
              onClick={() => dispatch(setNav(false))}
              ref={(el: HTMLAnchorElement) => {
                if (el) {
                  navLinks.current[i] = el;
                }
              }}
            >
              {name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobileNav;
