import { Header, Hero, Row } from "@/components";
import requests from "@/utils/requests";

import { IMovieAPIResponse } from "@/types";

type DataResponseType = {
  trendingNow: IMovieAPIResponse;
  popularMovies: IMovieAPIResponse;
  discoverMovies: IMovieAPIResponse;
  topRatedMovies: IMovieAPIResponse;
  actionMovies: IMovieAPIResponse;
};

async function getData() {
  const res = await fetch(requests.fetchTrending);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // const p1 = new Promise(async (resolve, reject) => {
  //   const res = await fetch(requests.fetchTrending);

  //   if (!res.ok) {
  //     // This will activate the closest `error.js` Error Boundary
  //     return reject(new Error("Failed to fetch data"));
  //   }

  //   return resolve(res.json());
  // });
  // const p2 = new Promise(async (resolve, reject) => {
  //   const res = await fetch(requests.fetchPopularMovies);

  //   if (!res.ok) {
  //     // This will activate the closest `error.js` Error Boundary
  //     return reject(new Error("Failed to fetch data"));
  //   }

  //   return resolve(res.json());
  // });
  // const p3 = new Promise(async (resolve, reject) => {
  //   const res = await fetch(requests.fetchDiscoverMovies);

  //   if (!res.ok) {
  //     // This will activate the closest `error.js` Error Boundary
  //     return reject(new Error("Failed to fetch data"));
  //   }

  //   return resolve(res.json());
  // });
  // const p4 = new Promise(async (resolve, reject) => {
  //   const res = await fetch(requests.fetchTopRatedMovies);

  //   if (!res.ok) {
  //     // This will activate the closest `error.js` Error Boundary
  //     return reject(new Error("Failed to fetch data"));
  //   }

  //   return resolve(res.json());
  // });
  // const p5 = new Promise(async (resolve, reject) => {
  //   const res = await fetch(requests.fetchActionMovies);

  //   if (!res.ok) {
  //     // This will activate the closest `error.js` Error Boundary
  //     return reject(new Error("Failed to fetch data"));
  //   }

  //   return resolve(res.json());
  // });

  // const [
  //   trendingNow,
  //   popularMovies,
  //   discoverMovies,
  //   topRatedMovies,
  //   actionMovies,
  // ] = await Promise.all([p1, p2, p3, p4, p5]);

  // return {
  //   trendingNow,
  //   popularMovies,
  //   discoverMovies,
  //   topRatedMovies,
  //   actionMovies
  // };

  // const [
  //   trendingNow,
  //   popularMovies,
  //   discoverMovies,
  //   topRatedMovies,
  //   actionMovies,
  //   comedyMovies,
  //   horrorMovies,
  //   romanceMovies,
  //   documentaries,
  // ] = await Promise.all([
  //   fetch(requests.fetchTrending)
  //     .then((res) => res.json())
  //     .catch((err) => console.error(err)),
  //   fetch(requests.fetchPopularMovies)
  //     .then((res) => res.json())
  //     .catch((err) => console.error(err)),
  //   fetch(requests.fetchDiscoverMovies)
  //     .then((res) => res.json())
  //     .catch((err) => console.error(err)),
  //   fetch(requests.fetchTopRatedMovies)
  //     .then((res) => res.json())
  //     .catch((err) => console.error(err)),
  //   fetch(requests.fetchActionMovies)
  //     .then((res) => res.json())
  //     .catch((err) => console.error(err)),
  //   fetch(requests.fetchComedyMovies)
  //     .then((res) => res.json())
  //     .catch((err) => console.error(err)),
  //   fetch(requests.fetchHorrorMovies)
  //     .then((res) => res.json())
  //     .catch((err) => console.error(err)),
  //   fetch(requests.fetchRomanceMovies)
  //     .then((res) => res.json())
  //     .catch((err) => console.error(err)),
  //   fetch(requests.fetchDocumentaries)
  //     .then((res) => res.json())
  //     .catch((err) => console.error(err)),
  // ]);

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home = async () => {
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

export default Home;
