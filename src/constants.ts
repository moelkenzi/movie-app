export const TMDB_CONFIG = {
  IMAGE_URL: "https://image.tmdb.org/t/p/w500",
  IMAGE_URL_ORIGINAL_HD: "https://image.tmdb.org/t/p/original/",
  IMAGE_URL_SMALL: "https://image.tmdb.org/t/p/w185/",
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};
