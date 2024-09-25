"use client"

import { useTransitionRouter } from 'next-view-transitions'
import Image from "next/image";
import { members } from "@/app/constants";
import Navbar from "@/components/Navbar";

export default function Crew({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const router = useTransitionRouter();
  const memberParam = searchParams.member;
  const member = memberParam
    ? members.find((member) => member.query === memberParam)!
    : members[0];

  return (
    <main className="flex min-h-screen w-full flex-col bg-blue-900 bg-mobile-crew bg-cover bg-no-repeat md:bg-tablet-crew lg:bg-desktop-crew">
      <Navbar />
      <section className="flex flex-1 flex-col p-2 sm:p-4 lg:px-0 lg:py-6">
        <div className="flex w-full max-w-6 flex-1 flex-col gap-4 lg:mx-auto xl:max-w-7">
          <h1 className="text-preset-6 md:text-preset-5-md lg:text-preset-5-lg flex items-center justify-center gap-4 text-center uppercase leading-[1.188em] text-white sm:justify-start sm:text-left md:leading-[1.2em] lg:leading-[1.2145em]">
            <span className="opacity-25">02</span>
            Meet Your Crew
          </h1>
          <div className="flex w-full flex-1 flex-col gap-6 xl:flex-row">
            <div className="mx-auto flex max-w-3 flex-col items-center gap-4 pt-4 xl:mx-unset xl:max-w-unset xl:flex-1 xl:pt-unset">
              <div className="flex flex-1 flex-col justify-center gap-4">
                <div className="flex flex-col-reverse items-center gap-3 text-center text-white xl:items-start xl:text-left">
                  <h1 className="text-preset-3 md:text-preset-3-md lg:text-preset-3-lg uppercase leading-[1.167em] md:leading-[1.15em] lg:leading-[1.143em]">
                    {member.name}
                  </h1>
                  <h2 className="text-preset-4 md:text-preset-4-md lg:text-preset-4-lg uppercase leading-[1.167em] opacity-50 md:leading-[1.167em] lg:leading-[1.1565em]">
                    {member.rank}
                  </h2>
                </div>
                <p className="text-preset-9 md:text-preset-9-md lg:text-preset-9-lg h-9 text-center leading-[1.8em] text-blue-300 md:h-6 md:leading-[1.813em] lg:leading-[1.778em] xl:text-left">
                  {member.description}
                </p>
              </div>
              <div className="flex w-full xl:pb-6">
                <div className="mx-auto flex flex-row gap-7 xl:mx-unset">
                  {members.map((member) => (
                    <button
                      key={member.order}
                      onClick={() => router.push(`./crew?member=${member.query}`, {scroll: false})}
                      className={`${memberParam === member.query || (!memberParam && member.order === 1) ? "bg-white" : "bg-white/15"} size-[10px] rounded-full bg-white lg:size-[15px]`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="relative mx-auto flex min-h-1 w-full max-w-2 flex-1 sm:mx-unset sm:min-h-3 sm:max-w-unset">
              <figure className="size-full">
                <Image
                  className="object-contain sm:!top-[10%] xl:!top-0"
                  fill
                  src={member.imageSource}
                  alt={member.imageAlt}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
