import { ScrollContext } from "@/components/custom/ParallaxImageWrapper";
import { FadeIn } from "@/components/global/FadeIn";
import MovieDetailsHero from "@/components/ui/MovieDetailsHero";
import { fetchMovieDetails } from "@/services/movies";
import * as AC from "@bacons/apple-colors";
import { label } from "@bacons/apple-colors";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";

export default function MovieDetails() {
  const { id } = useLocalSearchParams();
  const aref = useAnimatedRef<Animated.ScrollView>();

  const { data: movieDetails, isLoading } = useQuery({
    queryKey: ["movie-details", id],
    queryFn: () => fetchMovieDetails(Number(id)),
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
      {/*  */}
      <FadeIn>
        <View
          style={{
            backgroundColor: AC.systemGroupedBackground,
            paddingBottom: 24,
            paddingHorizontal: 16,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 16, color: label, lineHeight: 24 }}>
            {movieDetails?.overview}
          </Text>
        </View>
      </FadeIn>

      {/*  */}

      <FadeIn>
        <View
          style={{
            paddingBottom: 24,
            paddingHorizontal: 16,
            backgroundColor: AC.systemGroupedBackground,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: label,
              marginBottom: 12,
            }}
          >
            About
          </Text>
          <View
            style={{
              backgroundColor: "rgba(120,120,128,0.12)",
              borderRadius: 10,
            }}
          >
            {[
              {
                label: "Release Date",
                value: movieDetails?.release_date
                  ? new Date(movieDetails?.release_date).toLocaleDateString()
                  : "N/A",
              },
              {
                label: "Age Rating",
                value: movieDetails?.adult ? "Adult" : "All Ages",
              },
              {
                label: "Runtime",
                value: `${movieDetails?.runtime} minutes`,
              },
              {
                label: "Budget",
                value: movieDetails?.budget
                  ? `$${(movieDetails?.budget / 1000000).toFixed(1)}M`
                  : "N/A",
              },
              {
                label: "Revenue",
                value: movieDetails?.revenue
                  ? `$${(movieDetails?.revenue / 1000000).toFixed(1)}M`
                  : "N/A",
              },
              {
                label: "Countries",
                value: movieDetails?.production_countries
                  .map((c: { name: string }) => c.name)
                  .join(", "),
              },
              {
                label: "Languages",
                value: movieDetails?.spoken_languages
                  .map((l: { name: string }) => l.name)
                  .join(", "),
              },
              {
                label: "Genres",
                value: movieDetails?.genres
                  .map((g: { name: string }) => g.name)
                  .join(", "),
              },
            ].map((item, index, array) => (
              <View
                key={item.label}
                style={{
                  padding: 12,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomWidth: index === array.length - 1 ? 0 : 0.5,
                  borderBottomColor: "rgba(120,120,128,0.2)",
                }}
              >
                <Text
                  style={{ fontSize: 16, color: label, opacity: 0.8, flex: 1 }}
                >
                  {item.label}
                </Text>
                <Text style={{ fontSize: 16, color: label, flex: 2 }}>
                  {item.value}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </FadeIn>
    </Animated.ScrollView>
  );
}
