import { Footer } from "@/components";
import { FAQ, Features, Navbar } from "@/components/client";
import { Input } from "@/components/Form";
import { ChevronRightIcon } from "@/svg";
import Image from "next/image";

const Home = () => {
  return (
    <main className="">
      <Navbar user={null} />
      <div className="home-hero-bg relative flex h-[85vh] w-full items-center justify-center">
        <Image
          src="/images/homebg.jpg"
          alt="background image"
          fill={true}
          loading="eager"
          priority={true}
          className="-z-10 object-cover opacity-60"
        />
        <div className="absolute flex flex-col items-center justify-center gap-4 text-center text-white">
          <h1 className="text-5xl font-black">
            Unlimited movies, TV shows and more.
          </h1>
          <h2 className="text-2xl">Watch anywhere. Cancel anytime.</h2>
          <p className="text-lg">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form className="flex w-full max-w-xl items-center">
            {/* <input type="email" name="" id="" /> */}
            <Input
              placeholder="Email address"
              colorMode="light"
              className="rounded-tr-none rounded-br-none"
            />
            <button
              type="button"
              className="flex h-full flex-shrink-0 items-center gap-2 rounded-tr rounded-br bg-[#e50914] py-3.5 px-8 text-lg"
            >
              <span>Get Started</span>
              <ChevronRightIcon className="h-4 w-4" strokeWidth={3} />
            </button>
          </form>
        </div>
      </div>
      <div className="h-2 w-full bg-zinc-800"></div>
      <Features />
      <div className="h-2 w-full bg-zinc-800"></div>
      <FAQ />
      <div className="h-2 w-full bg-zinc-800"></div>
      <Footer />
    </main>
  );
};

export default Home;
