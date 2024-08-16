"use client";
import Link from "next/link";
import { getImageProps } from "next/image";
import { useSearchParams } from "next/navigation";
import { technologies } from "@/app/constants";
import Navbar from "@/components/Navbar";

export default function Technology() {
  const searchParams = useSearchParams();
  const technologyParam = searchParams.get("q");
  const technology = technologyParam
    ? technologies.find((technology) => technology.name === technologyParam)!
    : technologies[0];

  const {
    props: { srcSet: portrait },
  } = getImageProps({
    alt: technology.portrait.alt,
    width: 608,
    height: 600,
    src: technology.portrait.src,
  });

  const {
    props: { srcSet: landscape, ...rest },
  } = getImageProps({
    alt: technology.landspace.alt,
    fill: true,
    src: technology.landspace.src,
  });

  return (
    <main className="flex min-h-screen w-full flex-col bg-blue-900 bg-mobile-technology bg-cover bg-no-repeat md:bg-tablet-technology lg:bg-desktop-technology">
      <Navbar />
      <section className="flex max-w-8 flex-1 flex-col justify-center py-2 md:py-4 xl:ml-auto xl:px-0 xl:py-6">
        <div className="mx-auto flex w-full flex-1 flex-col gap-6 xl:gap-4">
          <h1 className="text-preset-6 md:text-preset-5-md lg:text-preset-5-lg mx-1 flex items-center justify-center gap-4 text-center uppercase leading-[1.188em] text-white sm:justify-start sm:text-left md:mx-[40px] md:leading-[1.2em] lg:leading-[1.2145em] xl:mx-0">
            <span className="opacity-25">03</span>
            SPACE LAUNCH 101
          </h1>
          <div className="flex w-full flex-1 flex-col-reverse items-center justify-center gap-[32px] xl:flex-row xl:justify-start">
            <div className="flex max-w-5 flex-col items-center gap-7 px-2 md:px-4 xl:flex-row xl:gap-9 xl:px-0">
              <ul className="flex flex-row gap-3 xl:flex-col xl:gap-6">
                {technologies.map((technology) => (
                  <li
                    key={technology.order}
                    className={`${technologyParam === technology.name || (!technologyParam && technology.order === 1) ? "bg-white text-blue-900" : "border border-white/25 text-white"} text-preset-4 md:text-preset-4-md xl:text-preset-4-lg flex size-[40px] rounded-full text-center md:size-[56px] xl:size-[80px]`}
                  >
                    <Link
                      className="flex w-full items-center justify-center"
                      scroll={false}
                      href={{
                        pathname: "/technology",
                        query: { q: technology.name },
                      }}
                    >
                      {technology.order}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex max-w-3 flex-col gap-3 text-center xl:max-w-full xl:gap-4 xl:text-left">
                <h2 className="text-preset-3 md:text-preset-3-md xl:text-preset-3-lg flex flex-col gap-3 uppercase leading-[1.167em] md:leading-[1.15em] xl:leading-[1.143em]">
                  <span className="text-preset-4 md:text-preset-4-md xl:text-preset-4-lg leading-[1.167em] opacity-50 xl:leading-[1.1565em]">
                    THE TERMINOLOGY…
                  </span>
                  {technology.title}
                </h2>
                <p className="text-preset-9 md:text-preset-9-md xl:text-preset-9-lg text-blue-300 md:h-8 md:leading-[1.813em] xl:h-auto xl:leading-[1.778em]">
                  {technology.description}
                </p>
              </div>
            </div>
            <div className="flex w-full items-center xl:py-8">
              <picture className="relative h-11 w-full md:h-12 xl:h-13 xl:w-3">
                <source media="(max-width: 1280px)" srcSet={landscape} />
                <source media="(min-width: 1280px)" srcSet={portrait} />
                <img className="object-cover object-center" {...rest} />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
