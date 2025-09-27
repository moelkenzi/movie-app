import { TMDB_CONFIG } from "@/constants";
import { Response } from "@/types/main";
import { Movie, MovieDetails } from "@/types/movies.types";

export const fetchTrendingMovies = async (): Promise<Movie[]> => {
  const endpoint = `${TMDB_CONFIG.BASE_URL}/trending/movie/day`;

  const res = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch top rated movies");
  }

  const data: Response<Movie> = await res.json();
  return data.results;
};

export const fetchMovieDetails = async (id: number): Promise<MovieDetails> => {
  const endpoint = `${TMDB_CONFIG.BASE_URL}/movie/${id}`;

  const res = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch movie details");
  }

  const data: MovieDetails = await res.json();
  return data;
};
