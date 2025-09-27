import { fetchTrendingTVShowsDetails } from "@/services/tvshows";
import { useQuery } from "@tanstack/react-query";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
export default function TVShowDetails() {
  const { id } = useLocalSearchParams();

  const { data: tvshowDetails } = useQuery({
    queryKey: ["tvshow-details", id],
    queryFn: () => fetchTrendingTVShowsDetails(id as string),
  });

  return (
    <View>
      <Text className='text-white'>TVShowDetails {id}</Text>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${tvshowDetails?.backdrop_path}`,
        }}
        style={{
          width: "100%",
          height: 300,
          resizeMode: "cover",
        }}
        transition={300}
      />
    </View>
  );
}
