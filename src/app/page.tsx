"use client";
import { FAQ, Footer, Header } from "@/components";
import Features from "@/components/Features";
import { Input } from "@/components/Form";
import { ChevronRightIcon } from "@/svg";
import Image from "next/image";

const Home = () => {
  return (
    <main className="">
      <Header />
      <div className="relative flex h-[80vh] w-full items-center justify-center">
        <Image
          src="/images/homebg.jpeg"
          alt="background image"
          fill={true}
          loading="eager"
          priority={true}
          className="-z-10 object-cover opacity-50"
        />
        <div className="absolute flex flex-col items-center justify-center gap-4 text-center text-white">
          <h1 className="max-w-lg text-5xl font-semibold">
            Unlimited movies, TV shows and more.
          </h1>
          <h2 className="text-2xl">Watch anywhere. Cancel anytime.</h2>
          <p className="text-lg">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form className="flex w-full items-center">
            {/* <input type="email" name="" id="" /> */}
            <Input
              placeholder="Email address"
              colorMode="light"
              className="rounded-tr-none rounded-br-none"
            />
            <button className="flex h-full flex-shrink-0 items-center gap-2 rounded-tr rounded-br bg-[#e50914] py-3.5 px-8 text-lg">
              <span>Get Started</span>
              <ChevronRightIcon className="h-4 w-4" strokeWidth={3} />
            </button>
          </form>
        </div>
      </div>
      <div className="h-2 w-full bg-zinc-800"></div>
      <Features />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Home;
