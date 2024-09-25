"use client";
import { useTransitionRouter } from 'next-view-transitions'
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";

export default function Home() {
  const router = useTransitionRouter();

  return (
    <main className="flex min-h-screen w-full flex-col bg-blue-900 bg-mobile-home bg-cover bg-no-repeat md:bg-tablet-home lg:bg-desktop-home">
      <Navbar />
      <section className="flex flex-1 flex-col items-center justify-center p-2 sm:flex-auto sm:px-4 sm:py-9 md:gap-10 lg:gap-5 xl:flex-row xl:items-end">
        <div className="flex w-full max-w-3 flex-col gap-4 text-center xl:max-w-4 xl:items-start xl:justify-start xl:text-left">
          <span className="text-preset-6 md:text-preset-5-lg uppercase text-blue-300">
            So, you want to travel to
          </span>
          <h1 className="text-preset-1 md:text-preset-1-lg uppercase text-white">
            Space
          </h1>
          <p className="text-preset-9 md:text-preset-9-md lg:text-preset-9-lg text-blue-300">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex max-h-1 w-full flex-1 items-center justify-center sm:flex-auto sm:items-start xl:max-w-4 xl:justify-end">
          <Button onClick={() => router.push("/destination")}>Explore</Button>
        </div>
      </section>
    </main>
  );
}
