"use client";

import { baseUrl } from "@/constants/movie";
import { InfoIcon, PlayIcon } from "@/svg";
import { IMovie } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

type IHero = {
  movies: IMovie[];
};

const Hero = ({ movies }: IHero) => {
  const [randomMovie, setRandomMovie] = useState<IMovie | null>(null);

  useEffect(() => {
    setRandomMovie(movies[Math.floor(Math.random() * movies.length)]);
  }, [movies]);

  return (
    <main className="h-[70vh] px-4 pb-16 sm:px-8 lg:px-12">
      <div className="h-full">
        <div className="absolute inset-0 -z-10 h-[90vh] w-screen">
          {randomMovie && (
            <Image
              src={`${baseUrl}${
                randomMovie?.backdrop_path || randomMovie?.poster_path
              }`}
              alt={randomMovie?.title}
              fill={true}
              loading="eager"
              priority={true}
              className="object-cover"
            />
          )}
        </div>
        <section className="flex h-full max-w-lg flex-col items-start justify-end space-y-4">
          <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            {randomMovie?.title}
          </h1>
          <p className="text-sm text-white line-clamp-3 md:text-base">
            {randomMovie?.overview}
          </p>
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-4 rounded bg-white px-4 py-2 text-black transition duration-300 hover:bg-white/75 md:px-6">
              <PlayIcon className="h-5 w-5 md:h-6 md:w-6" fill="#000" />
              <p className="text-sm md:text-base md:font-medium">Play</p>
            </button>
            <button className="flex items-center space-x-4 rounded bg-[#6d6d6eb3] px-4 py-2 text-white transition duration-300 hover:bg-[#6d6d6e66] md:px-6">
              <InfoIcon className="h-5 w-5 md:h-6 md:w-6" fill="#fff" />
              <p className="text-sm md:text-base md:font-medium">More Info</p>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;
