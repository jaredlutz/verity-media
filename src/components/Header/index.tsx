"use client";
import useScrollY from "@/hooks/useScrollY";
import Image from "next/image";
import Link from "next/link";

import { HeaderBellIcon, HeaderSearchIcon } from "@/svg";
import MobileMenuDropdown from "./mobileMenuDropdown";
import ProfileDropdown from "./profileDropdown";

const Header = () => {
  const isScrolled = useScrollY();

  return (
    <header
      className={`${
        isScrolled && "bg-[#141414]"
      } fixed top-0 z-50 w-full px-4 py-2 text-white transition duration-500 header-gradient sm:px-8 md:py-5 lg:px-12`}
    >
      <div className="flex items-center justify-between ">
        <div className="flex flex-shrink-0 items-center space-x-6 md:space-x-8 lg:space-x-12">
          <Link href="/">
            <Image
              src="./logo.svg"
              priority
              alt="Netflux logo"
              height={40}
              width={100}
              className="flex-shrink-0"
            />
          </Link>
          <ul className="hidden items-center space-x-4 md:flex lg:space-x-6">
            <li className="header-link font-semibold">Home</li>
            <li className="header-link">TV Shows</li>
            <li className="header-link">Movies</li>
            <li className="header-link">New & Popular</li>
            <li className="header-link">My List</li>
          </ul>
          <div className="relative flex items-center justify-center">
            <MobileMenuDropdown />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button>
            <HeaderSearchIcon
              strokeWidth={2}
              className="h-4 w-4 text-white md:h-5 md:w-5"
            />
          </button>
          <button>
            <HeaderBellIcon
              strokeWidth={2}
              className="h-4 w-4 text-white md:h-5 md:w-5"
            />
          </button>
          <div className="relative flex items-center justify-center">
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
