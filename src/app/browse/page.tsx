import { Header, Hero, Row } from "@/components";
import requests from "@/utils/constants/requests";

import { IMovieAPIResponse } from "@/types";

async function getData() {
  const res = await fetch(requests.fetchTrending);

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Browse = async () => {
  const data: IMovieAPIResponse = await getData();

  return (
    <main className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511]">
      <Header />
      <main>
        <Hero movies={data.results} />
        <section className="mt-8 flex flex-col gap-12">
          <Row title="Trending Now" items={data.results} />
          <Row title="Popular Movies" items={data.results} />
          <Row title="Discover Movies" items={data.results} />
          <Row title="Top Rated Movies" items={data.results} />
        </section>
      </main>
    </main>
  );
};

export default Browse;
