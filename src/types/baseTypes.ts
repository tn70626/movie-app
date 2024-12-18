type Genre = {
  id: number;
  name: string;
};

export type Cast = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
  genres: Genre[];
  runtime: number;
};

export type SearchResult = {
  results: Movie[];
  total_pages: number;
  total_results: number;
  page: number;
};

export type FeaturedMovieType = {
  loading: boolean;
  movie: Movie;
  error: string;
};
