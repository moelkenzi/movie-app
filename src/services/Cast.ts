import { TMDB_CONFIG } from "@/constants";
import { CastResponse } from "@/types/main";

type MediaType = "movie" | "tv";

export const fetchMediaCast = async ({
  type = "movie",
  id,
}: {
  type: MediaType;
  id: string;
}): Promise<CastResponse> => {
  const endpoint = `${TMDB_CONFIG.BASE_URL}/${type}/${id}/credits`;

  const res = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch top rated movies");
  }

  const data: CastResponse = await res.json();
  return data;
};
