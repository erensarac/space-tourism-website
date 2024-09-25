"use client";
import { useTransitionRouter } from 'next-view-transitions'
import { useSearchParams } from "next/navigation";
import { planets } from "@/app/constants";

export default function Tabs() {
  const router = useTransitionRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const planet = params.get("planet");

  return (
    <div className="flex gap-6 cursor-pointer ">
      {planets
        .sort((a, b) => a.order - b.order)
        .map((item) => (
          <div key={item.query} className="group relative flex h-3">
            <a className="text-preset-8 md:text-preset-8-lg uppercase text-blue-300" onClick={() => {
              router.push(`/destination?planet=${item.query}`, { scroll: false })
            }}>{item.name}</a>
            <hr
              className={`${planet === item.query || (!planet && item.query === "moon") ? "bg-white" : "bg-white/0 group-hover:bg-white/50"} absolute bottom-0 left-0 h-2 w-full border-none`}
            />
          </div>
        ))}
    </div>
  );
}
