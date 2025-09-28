import { ScrollContext } from "@/components/custom/ParallaxImageWrapper";
import Header from "@/components/layout/Header";
import MovieCard from "@/components/ui/MovieCard";
import { Loading } from "@/components/ui/Skeleton";
import TVCard from "@/components/ui/TVShowCard";
import { fetchTrendingMovies } from "@/services/movies";
import { fetchTrendingTVShows } from "@/services/tvshows";
import { Movie } from "@/types/movies.types";
import { TVShows } from "@/types/tvshows.types";
import { useQuery } from "@tanstack/react-query";
import { FlatList, Text, View } from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const aref = useAnimatedRef<Animated.ScrollView>();
  const { data: movies } = useQuery<Movie[]>({
    queryKey: ["trending-movies"],
    queryFn: fetchTrendingMovies,
  });

  const { data, isLoading } = useQuery<TVShows[]>({
    queryKey: ["trending-tv-shows"],
    queryFn: fetchTrendingTVShows,
  });

  if (isLoading) {
    return (
      <SafeAreaView className='flex-1'>
        <Loading />
      </SafeAreaView>
    );
  }

  return (
    <View className='flex-1'>
      <Animated.ScrollView
        ref={aref}
        className='flex-col gap-3'
        showsVerticalScrollIndicator={false}
      >
        <ScrollContext.Provider value={aref}>
          <Header />
        </ScrollContext.Provider>
        <View className='flex-col gap-3'>
          <Text className='text-2xl px-2 font-bold text-white'>
            Top Rated Movies
          </Text>
          <FlatList
            data={movies}
            horizontal
            renderItem={({ item }) => <MovieCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View className='flex-col mb-3 gap-3'>
          <Text className='text-2xl px-2 font-bold text-white'>
            Trending TV Shows
          </Text>
          <FlatList
            data={data}
            renderItem={({ item }) => <TVCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </Animated.ScrollView>
    </View>
  );
}
