import MediaVideos from "@/components/custom/MediaVid";
import { ScrollContext } from "@/components/custom/ParallaxImageWrapper";
import { MediaInfo } from "@/components/ui/MediaInfo";
import MovieDetailsHero from "@/components/ui/MovieDetailsHero";
import { fetchMediaVideos } from "@/services/MediaVid";
import { fetchMovieDetails } from "@/services/movies";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator } from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";

export default function MovieDetails() {
  const { id } = useLocalSearchParams();
  const aref = useAnimatedRef<Animated.ScrollView>();

  const { data: movieDetails, isLoading } = useQuery({
    queryKey: ["movie-details", id],
    queryFn: () => fetchMovieDetails(Number(id)),
  });

  const { data: videos } = useQuery({
    queryKey: ["movie-videos", id],
    queryFn: () => fetchMediaVideos("movie", id as string),
  });

  if (isLoading) {
    return <ActivityIndicator />;
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
    </Animated.ScrollView>
  );
}
