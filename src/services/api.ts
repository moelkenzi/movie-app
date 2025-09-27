import { TMDB_CONFIG } from "@/constants";
import { Response } from "@/types";
import { Movie } from "@/types/movies";

export const fetchTopRatedMovies = async (): Promise<Movie[]> => {
  const endpoint = `${TMDB_CONFIG.BASE_URL}/movie/top_rated?api_key=${TMDB_CONFIG.API_KEY}`;

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
