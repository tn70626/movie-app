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
