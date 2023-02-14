"use client";
import { useRef, useState } from "react";

import Thumbnail from "../Thumbnail";

import { ChevronLeftIcon, ChevronRightIcon } from "@/svg";
import { IMovie } from "@/types";

type RowProps = {
  title: string;
  items: IMovie[];
};

const Row = ({ title, items }: RowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleClick = (direction: string) => {
    setIsScrolled(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth, onscroll } = rowRef.current;
      console.log(onscroll);

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="group flex w-full flex-col">
      <div className="flex w-full items-center gap-1 px-4 sm:px-8 lg:px-12">
        <h2 className="cursor-pointer text-left text-base font-semibold text-[#e5e5e5] hover:text-white md:text-lg">
          {title}
        </h2>
        <ChevronRightIcon className="hidden h-4 w-4 text-cyan-400 group-hover:block" />
      </div>
      <main className="group relative flex w-full items-center gap-2 text-white">
        <button
          onClick={() => handleClick("left")}
          className={`absolute top-0 bottom-0 left-0 z-20 m-auto flex h-full w-12 items-center justify-center bg-gradient-to-l from-gray-900/50 to-gray-900/75 opacity-0 transition duration-200 ease-linear group-hover:opacity-100 ${
            !isScrolled && "hidden"
          }`}
        >
          <ChevronLeftIcon className="h-12 w-12" />
        </button>
        <div
          className="flex w-full items-center gap-4 overflow-x-hidden py-4 pl-4 scrollbar-hide sm:pl-8 lg:pl-12"
          ref={rowRef}
        >
          {items.map((item) => (
            <Thumbnail key={item.id} item={item} />
          ))}
        </div>
        <button
          onClick={() => handleClick("right")}
          className="absolute top-0 bottom-0 right-0 z-20 m-auto flex h-full w-12 items-center justify-center bg-gradient-to-r from-gray-900/50 to-gray-900/75 opacity-0 transition duration-200 ease-linear group-hover:opacity-100"
        >
          <ChevronRightIcon className="h-12 w-12" />
        </button>
      </main>
    </div>
  );
};

export default Row;
