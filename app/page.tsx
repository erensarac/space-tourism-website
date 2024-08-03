'use client'
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";

export default function Home() {
  const router = useRouter()

  return (
    <main
      className="bg-mobile-home md:bg-tablet-home lg:bg-desktop-home bg-cover bg-no-repeat flex flex-col min-h-screen w-full bg-blue-900"
    >
      <Navbar />
      <section className="flex-1 sm:flex-auto p-300 sm:px-500 gap-[66px] lg:gap-[30px] sm:py-[128px] flex flex-col xl:flex-row items-center xl:items-end justify-center">
        <div className="text-center xl:text-left  max-w-[560px] xl:max-w-[540px] xl:items-start xl:justify-start w-full flex flex-col gap-300">
          <span className="leading-[1.1875rem] md:leading-[2.125rem] uppercase text-preset-5 text-blue-300">So, you want to travel to</span>
          <h1 className="lg:indent-[-10px] uppercase text-preset-1 text-white">Space</h1>
          <p className="text-preset-9 text-blue-300">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className="flex-1 items-center sm:items-start sm:flex-auto flex justify-center xl:justify-end xl:max-w-[540px] w-full">
          <Button onClick={() => router.push('/destination')}>Explore</Button>
        </div>
      </section>
    </main>
  );
}
