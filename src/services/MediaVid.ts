import { TMDB_CONFIG } from "@/constants";
import { VidResponse, VidResult } from "@/types/main";

export const fetchMediaVideos = async (
  type: string,
  id: string
): Promise<VidResult[]> => {
  const endpoint = `${TMDB_CONFIG.BASE_URL}/${type}/${id}/videos`;

  const res = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch media videos");
  }

  const data: VidResponse = await res.json();
  return data.results;
};
