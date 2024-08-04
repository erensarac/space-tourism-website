"use client"

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Tabs from "@/components/Tabs";

const planets = [
  { order: 1, name: "moon", description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.", averageDistance: "384,400 km", travelTime: "3 days", imageSource: '/assets/destination/image-moon.png', imageAlt: "Moon Image" },
  { order: 2, name: "mars", description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!", averageDistance: "225 mil. km", travelTime: "9 months", imageSource: '/assets/destination/image-mars.png', imageAlt: "Mars Image" },
  { order: 3, name: "europa", description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.", averageDistance: "628 mil. km", travelTime: "3 years", imageSource: '/assets/destination/image-europa.png', imageAlt: "Europa Image" },
  { order: 4, name: "titan", description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.", averageDistance: "1.6 bil. km", travelTime: "7 years", imageSource: '/assets/destination/image-titan.png', imageAlt: "Titan Image" },
]

export default function Destination() {
  const searchParams = useSearchParams()
  const planetParam = searchParams.get('planet');
  const activePlanet = planetParam ? planets.find(planet => planet.name === planetParam)! : planets[0]

  return (
    <main
      className="bg-mobile-destination md:bg-tablet-destination lg:bg-desktop-destination bg-cover bg-no-repeat flex flex-col min-h-screen w-full bg-blue-900"
    >
      <Navbar />
      <section className="flex flex-col p-500 lg:py-600">
        <div className="flex flex-col gap-300 lg:mx-auto lg:max-w-[69.375rem]">
          <h1 className="text-center sm:text-left leading-[1.2em] uppercase text-2xl text-preset-5 text-white">
            <span className="mr-300 opacity-25">01</span>
            Pick Your Destination
          </h1>
          <div className="w-full flex flex-col lg:flex-row gap-400 items-center">
            <figure className="relative size-[150px] xs:size-[300px] lg:size-[480px] my-[42px] lg:my-[127px] lg:mx-[29.5px]">
              <Image className="z-auto !h-unset" fill objectFit="contain" src={activePlanet.imageSource} alt={activePlanet.imageAlt} />
            </figure>
            <div className="py-[11.5px] xl:py-[133px] xl:px-[47px] flex flex-1 flex-col gap-500 items-center justify-center">
              <div className="max-w-lg flex flex-col items-center lg:items-start gap-300 lg:gap-500">
                <Tabs />
                <div className="text-center lg:text-left flex flex-col items-center lg:items-start  gap-200">
                  <h1 className="uppercase text-preset-2">{activePlanet.name}</h1>
                  <p className="text-preset-9 text-blue-300">
                    {activePlanet.description}
                  </p>
                </div>
                <hr className="border-none h-[1px] bg-white/25 w-full" />
                <div className="w-full text-center lg:text-left flex flex-col sm:flex-row gap-300">
                  <div className="flex flex-1 flex-col gap-150">
                    <span className="text-preset-7 text-blue-300 uppercase">Avg. Distance</span>
                    <h3 className="text-preset-6 uppercase">{activePlanet.averageDistance}</h3>
                  </div>
                  <div className="flex flex-1 flex-col gap-150">
                    <span className="text-preset-7 text-blue-300 uppercase">Est. Travel Time</span>
                    <h3 className="text-preset-6 uppercase">{activePlanet.travelTime}</h3>
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
