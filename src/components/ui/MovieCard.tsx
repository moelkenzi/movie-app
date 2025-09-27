import { Movie } from "@/types/movies";
import { TVShows } from "@/types/tvshows";
import * as AC from "@bacons/apple-colors";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const POSTER_WIDTH = 140;
const POSTER_HEIGHT = 210;

const MovieCard = ({ item }: { item: TVShows | Movie }) => (
  <TouchableOpacity
    activeOpacity={0.9}
    style={{ marginHorizontal: 4 }}
    onPress={() => router.push(`/movie/${item.id}`)}
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
          numberOfLines={2}
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

export default MovieCard;
