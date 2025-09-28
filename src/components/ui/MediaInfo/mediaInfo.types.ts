import { MovieDetails } from "@/types/movies.types";
import { TVShowsDetails } from "@/types/tvshows.types";

export interface MediaInfoProps {
  movieDetails?: MovieDetails;
  tvShowDetails?: TVShowsDetails;
}

export interface InfoItem {
  label: string;
  value: string | number | null | undefined;
  hideForTV?: boolean;
  hideForMovie?: boolean;
}

export interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export interface InfoRowProps {
  label: string;
  value: string | number | null | undefined;
}
