import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="./logo.svg"
        priority
        alt="netflux logo"
        height={40}
        width={100}
        className="flex-shrink-0"
      />
    </Link>
  );
};
