export interface Response<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface VidResponse {
  id: number;
  results: VidResult[];
}

export interface VidResult {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
