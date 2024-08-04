"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
   const pathname: string = usePathname();
   const [showMenu, setShowMenu] = useState<boolean>(false);

   const prefixNumber = (value: number): string => {
      if (value < 10) return Number(0).toString().concat(value.toString());

      return value.toString();
   };
   
   return (
      <header className="z-30 flex h-[88px] w-full justify-between md:h-1200 md:justify-normal xl:h-[136px]">
         <div className="relative flex items-center justify-start px-300 py-300 md:px-500 md:py-300 xl:w-full xl:pb-300 xl:pl-800 xl:pt-800">
            <Link href="/">
               <Logo />
            </Link>
            <hr className="absolute -right-400 hidden h-[1px] w-4/5 border-none bg-white opacity-25 xl:block" />
         </div>
         <div className="isolate flex items-center justify-end md:w-full md:justify-center md:bg-white/5 md:backdrop-blur-lg xl:mt-500">
            <div
               className={`${showMenu ? "transition-transform translate-x-0 bg-[#0B0D17]/15" : "translate-x-full bg-[#0B0D17]/15"} fixed right-0 top-0 z-20 flex h-screen w-full max-w-[15.875rem] flex-col pl-400 backdrop-blur-lg duration-500 ease-in-out md:relative md:right-unset md:top-unset md:z-auto md:block md:h-unset md:w-unset md:max-w-unset md:translate-x-0 md:bg-[#0B0D17]/0 md:p-unset md:opacity-[unset] md:backdrop-blur-none md:transition-none transition-none`}
            >
               <div className="mb-600 flex justify-end py-400 pr-300 md:hidden">
                  <Close
                     className="cursor-pointer"
                     onClick={() => setShowMenu(false)}
                  />
               </div>
               <nav className={`${showMenu ? "flex" : "hidden"} md:flex h-[172px] w-[222px] flex-col items-start gap-400 md:relative md:h-unset md:w-unset md:flex-row md:items-center md:gap-600`}>
                  {menuItems.map((item, i: number) => (
                     <Link
                        key={item.slug}
                        href={item.slug}
                        className="flex w-full items-center gap-150 md:w-unset"
                     >
                        <li className="group relative flex w-full items-center gap-150 md:h-1200 md:w-unset lg:gap-100">
                           <span
                              className={`${i === 0 ? "block md:hidden lg:block" : "block"} text-preset-8-bold text-white`}
                           >
                              {prefixNumber(i)}
                           </span>
                           <p
                              className={`${i === 0 ? "md:tracking-[2px]" : ""} text-preset-8 uppercase text-white`}
                           >
                              {item.text}
                           </p>
                           <hr
                              className={`${pathname === item.slug ? "opacity-100" : "opacity-0 group-hover:opacity-50"} absolute bottom-0 right-0 h-full w-[3px] border-none bg-white transition-opacity md:left-0 md:h-[3px] md:w-full`}
                           />
                        </li>
                     </Link>
                  ))}
               </nav>
            </div>
            <div className="flex p-300 md:hidden">
               <Hamburger
                  onClick={() => setShowMenu(true)}
                  className="cursor-pointer"
               />
            </div>
         </div>
      </header>
   );
}
