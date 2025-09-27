import { TMDB_CONFIG } from "@/constants";
import { Response } from "@/types/main";
import { TVShows, TVShowsDetails } from "@/types/tvshows.types";

export const fetchTrendingTVShows = async (): Promise<TVShows[]> => {
  const endpoint = `${TMDB_CONFIG.BASE_URL}/trending/tv/day`;

  const res = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch top rated tv shows");
  }

  const data: Response<TVShows> = await res.json();
  return data.results;
};

export const fetchTrendingTVShowsDetails = async (
  id: string
): Promise<TVShowsDetails> => {
  const endpoint = `${TMDB_CONFIG.BASE_URL}/tv/${id}`;

  const res = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch TV show details");
  }

  const data: TVShowsDetails = await res.json();
  return data;
};
