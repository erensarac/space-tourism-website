import Image from "next/image";
import { planets } from "@/app/constants";
import Navbar from "@/components/Navbar";
import Tabs from "@/components/Tabs";

export default function Destination({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const planetParam = searchParams.planet;
  const planet = planetParam
    ? planets.find((planet) => planet.query === planetParam)!
    : planets[0];

  return (
    <main className="flex min-h-screen w-full flex-col bg-blue-900 bg-mobile-destination bg-cover bg-no-repeat md:bg-tablet-destination lg:bg-desktop-destination">
      <Navbar />
      <section className="flex flex-col p-4 lg:py-6">
        <div className="flex flex-col gap-4 lg:mx-auto lg:max-w-7">
          <h1 className="text-preset-5-lg text-center uppercase text-white sm:text-left">
            <span className="mr-1 opacity-25">01</span>
            Pick Your Destination
          </h1>
          <div className="flex w-full flex-col items-center gap-6 lg:flex-row">
            <figure className="relative my-3 size-6 xs:size-8 lg:mx-2 lg:my-5 lg:size-9">
              <Image
                className="object-contain"
                fill
                src={planet.imageSource}
                alt={planet.imageAlt}
              />
            </figure>
            <div className="flex flex-1 flex-col items-center justify-center gap-7 py-1 xl:px-5 xl:py-10">
              <div className="flex max-w-3 flex-col items-center gap-4 lg:items-start lg:gap-7">
                <Tabs />
                <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
                  <h1 className="text-preset-2 md:text-preset-2-md lg:text-preset-2-lg uppercase">
                    {planet.name}
                  </h1>
                  <p className="text-preset-9 md:text-preset-9-md lg:text-preset-9-lg h-7 text-blue-300 lg:h-auto">
                    {planet.description}
                  </p>
                </div>
                <hr className="h-1 w-full border-none bg-white/25" />
                <div className="flex w-full flex-col gap-4 text-center sm:flex-row lg:text-left">
                  <div className="flex flex-1 flex-col gap-2">
                    <span className="text-preset-7-lg uppercase text-blue-300">
                      Avg. Distance
                    </span>
                    <h3 className="text-preset-6-lg uppercase">
                      {planet.averageDistance}
                    </h3>
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <span className="text-preset-7-lg uppercase text-blue-300">
                      Est. Travel Time
                    </span>
                    <h3 className="text-preset-6-lg uppercase">
                      {planet.travelTime}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
