"use client";
import Image from "next/image";
import Link from "next/link";
import useScrollY from "@/hooks/useScrollY";

import { HeaderBellIcon, HeaderSearchIcon } from "@/svg";

const Header = () => {
  const isScrolled = useScrollY();

  return (
    <header
      className={`${
        isScrolled && "bg-[#141414]"
      } fixed top-0 z-50 w-full bg-gradient-to-t from-gray-900/0 to-gray-900/50 p-4 text-white transition duration-500`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-16">
          <Link href="/">
            <Image
              src="./logo.svg"
              priority
              alt="Netflux logo"
              height={40}
              width={100}
            />
          </Link>
          <ul className="flex items-center gap-8">
            <li className="header-link font-semibold">Home</li>
            <li className="header-link">TV Shows</li>
            <li className="header-link">Movies</li>
            <li className="header-link">New & Popular</li>
            <li className="header-link">My List</li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <button>
            <HeaderSearchIcon />
          </button>
          <button>
            <HeaderBellIcon />
          </button>
          <div className="overflow-hidden rounded-sm">
            <Image
              src="/images/user.png"
              priority
              alt="User Profile Icon"
              height={32}
              width={32}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
