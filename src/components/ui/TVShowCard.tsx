import { usePrefetchMedia } from "@/hooks/usePrefetchMedia";
import { TVShows } from "@/types/tvshows.types";
import * as AC from "@bacons/apple-colors";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const POSTER_WIDTH = 140;
const POSTER_HEIGHT = 210;

export default function TVCard({ item }: { item: TVShows }) {
  const { prefetchTVShow } = usePrefetchMedia();

  const handlePress = useCallback(() => {
    router.push(`/tvshow/${item.id}`);
  }, [item.id]);

  const handleHoverIn = useCallback(() => {
    prefetchTVShow(item.id);
  }, [item.id, prefetchTVShow]);

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
            backgroundColor: "black",
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
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: AC.systemBlue,
            }}
          >
            {item.vote_average && "★ " + item.vote_average.toFixed(1)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
