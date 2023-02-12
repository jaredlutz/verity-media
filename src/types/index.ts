export interface IMovieAPIResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  media_type?: "movie";
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
