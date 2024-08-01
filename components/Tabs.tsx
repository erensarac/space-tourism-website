"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const list = [
   {
      text: "Moon",
      query: "moon"
   },
   {
      text: "Mars",
      query: "mars"
   },
   {
      text: "Europa",
      query: "europa"
   },
   {
      text: "Titan",
      query: "titan"
   },
]

export default function Tabs() {
   const searchParams = useSearchParams()
   const params = new URLSearchParams(searchParams.toString())
   const planet = params.get("planet");

   return (
      <div className="flex gap-400">
         {list.map(item => (
            <div key={item.query} className="group flex h-400 relative">
               <Link className="text-preset-8 uppercase text-blue-300" href={{
                  pathname: '/destination',
                  query: { planet: item.query },
               }}>
                  {item.text}
               </Link>
               <hr className={`${planet === item.query ? 'bg-white' : 'group-hover:bg-white/50 bg-white/0'} absolute left-0 bottom-0 w-full h-[3px] border-none`} />
            </div>
         ))}
      </div>
   )
}