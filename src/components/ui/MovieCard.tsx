import { usePrefetchMedia } from "@/hooks/usePrefetchMedia";
import { Movie } from "@/types/movies.types";
import { TVShows } from "@/types/tvshows.types";
import * as AC from "@bacons/apple-colors";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useCallback } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("window");

const POSTER_WIDTH = width / 3.2;
const POSTER_HEIGHT = POSTER_WIDTH * 1.5;

const MovieCard = ({ item }: { item: TVShows | Movie }) => {
  const { prefetchMovie } = usePrefetchMedia();

  const handlePress = useCallback(() => {
    router.push(`/movie/${item.id}`);
  }, [item.id]);

  const handleHoverIn = useCallback(() => {
    prefetchMovie(item.id);
  }, [item.id, prefetchMovie]);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{ marginHorizontal: 4 }}
      onPress={handlePress}
      onPressIn={handleHoverIn}
    >
      <View
        style={{
          width: POSTER_WIDTH,
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            width: POSTER_WIDTH,
            height: POSTER_HEIGHT,
            backgroundColor: AC.systemGray5,
            borderRadius: 12,
          }}
        >
          {item.poster_path && (
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
              }}
              style={{ borderRadius: 12, width: "100%", height: "100%" }}
              transition={200}
            />
          )}
        </View>
        <View style={{ padding: 8 }}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: "white",
              marginBottom: 4,
            }}
          >
            {"title" in item ? item.title : item.name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: AC.systemBlue,
            }}
          >
            {"vote_average" in item && "★ " + item.vote_average.toFixed(1)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
