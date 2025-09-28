import MediaVideos from "@/components/custom/MediaVid";
import { ScrollContext } from "@/components/custom/ParallaxImageWrapper";
import Skeleton from "@/components/global/Skeleton";
import MediaCastCard from "@/components/ui/MediaCast";
import { MediaInfo } from "@/components/ui/MediaInfo";
import MovieDetailsHero from "@/components/ui/MovieDetailsHero";
import { fetchMediaCast } from "@/services/Cast";
import { fetchMediaVideos } from "@/services/MediaVid";
import { fetchMovieDetails } from "@/services/movies";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import Animated, { useAnimatedRef } from "react-native-reanimated";

export default function MovieDetails() {
  const { id } = useLocalSearchParams();
  const aref = useAnimatedRef<Animated.ScrollView>();

  const {
    data: movieDetails,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["movie-details", id],
    queryFn: () => fetchMovieDetails(Number(id)),
  });

  const { data: videos } = useQuery({
    queryKey: ["movie-videos", id],
    queryFn: () => fetchMediaVideos("movie", id as string),
  });

  const { data: castData } = useQuery({
    queryKey: ["cast", id],
    queryFn: () => fetchMediaCast({ type: "movie", id: id as string }),
  });

  if (isLoading && isFetching) {
    return <Skeleton />;
  }

  return (
    <Animated.ScrollView
      ref={aref}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
    >
      <ScrollContext.Provider value={aref}>
        <MovieDetailsHero movieDetails={movieDetails!} />
      </ScrollContext.Provider>
      <MediaInfo movieDetails={movieDetails!} />
      <MediaVideos videos={videos!} />
      <MediaCastCard data={castData!} />
    </Animated.ScrollView>
  );
}
