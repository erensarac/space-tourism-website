"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import { useState } from "react";

import Logo from "@/components/Logo";
import Close from "@/components/icons/Close";
import Hamburger from "@/components/icons/Hamburger";

const menuItems = [
  { text: "Home", slug: "/" },
  { text: "Destination", slug: "/destination" },
  { text: "Crew", slug: "/crew" },
  { text: "Technology", slug: "/technology" },
];

export default function Navbar() {
  const router = useTransitionRouter();
  const pathname: string = usePathname();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const prefixNumber = (value: number): string => {
    if (value < 10) return Number(0).toString().concat(value.toString());

    return value.toString();
  };

  return (
    <header className="z-30 flex h-4 w-full justify-between md:h-5 md:justify-normal xl:h-7">
      <div className="relative flex items-center justify-start px-2 py-2 md:px-4 md:py-2 xl:w-full xl:pb-2 xl:pl-7 xl:pt-7">
        <Link aria-label="Homepage" href="/">
          <Logo />
        </Link>
        <hr className="absolute -right-[32px] hidden h-1 w-4/5 border-none bg-white opacity-25 xl:block" />
      </div>
      <div className="isolate flex items-center justify-end md:w-full md:justify-center md:bg-white/5 md:backdrop-blur-lg xl:mt-[40px]">
        <div
          className={`${showMenu ? "translate-x-0 bg-[#0B0D17]/15 transition-transform" : "translate-x-full bg-[#0B0D17]/15"} fixed right-0 top-0 z-20 flex h-screen w-full max-w-1 flex-col pl-3 backdrop-blur-lg transition-none duration-500 ease-in-out md:relative md:right-unset md:top-unset md:z-auto md:block md:h-unset md:w-unset md:max-w-unset md:translate-x-0 md:bg-[#0B0D17]/0 md:p-unset md:opacity-[unset] md:backdrop-blur-none md:transition-none`}
        >
          <div className="mb-4 flex justify-end py-3 pr-2 md:hidden">
            <Close
              className="cursor-pointer"
              onClick={() => setShowMenu(false)}
            />
          </div>
          <nav>
            <ul
              className={`${showMenu ? "flex" : "hidden"} h-10 w-2 flex-col items-start gap-6 md:relative md:flex md:h-unset md:w-unset md:flex-row md:items-center md:gap-8`}
            >
              {menuItems.map((item, i: number) => (
                <li
                  key={item.slug}
                  className="flex w-full items-center gap-2 md:w-unset"
                >
                  <button
                    className="group relative flex w-full items-center gap-2 md:h-5 md:w-unset lg:gap-1"
                    onClick={() =>
                      router.push(`./${item.slug}`, { scroll: true })
                    }
                  >
                    <span
                      className={`${i === 0 ? "block md:hidden lg:block" : "block"} text-preset-8-bold-lg text-white`}
                    >
                      {prefixNumber(i)}
                    </span>
                    <p
                      className={`${i === 0 ? "md:tracking-[2px]" : ""} text-preset-8-lg uppercase text-white`}
                    >
                      {item.text}
                    </p>
                    <hr
                      className={`${pathname === item.slug ? "opacity-100" : "opacity-0 group-hover:opacity-50"} absolute bottom-0 right-0 h-full w-1 border-none bg-white transition-opacity md:left-0 md:h-2 md:w-full`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex p-2 md:hidden">
          <Hamburger
            onClick={() => setShowMenu(true)}
            className="cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}
