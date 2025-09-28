export const TMDB_CONFIG = {
  IMAGE_URL: "https://image.tmdb.org/t/p/w500",
  IMAGE_URL_ORIGINAL: "https://image.tmdb.org/t/p/original/",
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};
