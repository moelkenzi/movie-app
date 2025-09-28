import { formatCurrency, formatDate, formatRuntime } from "@/lib/utils";
import { useMemo } from "react";
import { InfoItem } from "./mediaInfo.types";

export const useMediaInfo = (movieDetails?: any, tvShowDetails?: any) => {
  const isTVShow = !!tvShowDetails;
  const details = movieDetails || tvShowDetails;

  const commonInfo = useMemo<InfoItem[]>(
    () => [
      {
        label: isTVShow ? "First Air Date" : "Release Date",
        value: formatDate(
          isTVShow ? tvShowDetails?.first_air_date : movieDetails?.release_date
        ),
      },
      {
        label: "Status",
        value: details?.status,
      },
      {
        label: "Original Language",
        value: details?.original_language
          ? details.original_language.toUpperCase()
          : "N/A",
      },
      {
        label: "Genres",
        value: details?.genres?.map((g: { name: string }) => g.name).join(", "),
      },
    ],
    [details, isTVShow, movieDetails, tvShowDetails]
  );

  const movieSpecificInfo = useMemo<InfoItem[]>(
    () => [
      {
        label: "Runtime",
        value: formatRuntime(movieDetails?.runtime),
        hideForTV: true,
      },
      {
        label: "Budget",
        value: formatCurrency(movieDetails?.budget),
        hideForTV: true,
      },
      {
        label: "Revenue",
        value: formatCurrency(movieDetails?.revenue),
        hideForTV: true,
      },
    ],
    [movieDetails]
  );

  const tvShowSpecificInfo = useMemo<InfoItem[]>(
    () => [
      {
        label: "Seasons",
        value: tvShowDetails?.number_of_seasons,
        hideForMovie: true,
      },
      {
        label: "Episodes",
        value: tvShowDetails?.number_of_episodes,
        hideForMovie: true,
      },
      {
        label: "Episode Runtime",
        value: tvShowDetails?.episode_run_time?.[0]
          ? `${tvShowDetails.episode_run_time[0]} min`
          : "N/A",
        hideForMovie: true,
      },
      {
        label: "Last Air Date",
        value: formatDate(tvShowDetails?.last_air_date),
        hideForMovie: true,
      },
      {
        label: "Type",
        value: tvShowDetails?.type,
        hideForMovie: true,
      },
    ],
    [tvShowDetails]
  );

  const productionInfo = useMemo<InfoItem[]>(
    () => [
      {
        label: "Production Companies",
        value: details?.production_companies
          ?.map((c: { name: string }) => c.name)
          .join(", "),
      },
      {
        label: "Production Countries",
        value: details?.production_countries
          ?.map((c: { name: string }) => c.name)
          .join(", "),
      },
    ],
    [details]
  );

  const allInfo = useMemo(
    () =>
      [
        ...commonInfo,
        ...(isTVShow ? tvShowSpecificInfo : movieSpecificInfo),
        ...productionInfo,
      ].filter((item) => !(isTVShow ? item.hideForTV : item.hideForMovie)),
    [
      commonInfo,
      isTVShow,
      movieSpecificInfo,
      productionInfo,
      tvShowSpecificInfo,
    ]
  );

  return {
    details,
    allInfo,
    hasSpokenLanguages: details?.spoken_languages?.length > 0,
    spokenLanguages: details?.spoken_languages
      ?.map((lang: { name: string }) => lang.name)
      .join(" • "),
  };
};
