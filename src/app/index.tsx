import Header from "@/components/layout/Header";
import MovieCard from "@/components/ui/MovieCard";
import { Loading } from "@/components/ui/Skeleton";
import TVCard from "@/components/ui/TVShowCard";
import { fetchTrendingMovies } from "@/services/movies";
import { fetchTrendingTVShows } from "@/services/tvshows";
import { Movie } from "@/types/movies.types";
import { TVShows } from "@/types/tvshows.types";
import { useQuery } from "@tanstack/react-query";
import { FlatList, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const { data: movies, isLoading } = useQuery<Movie[]>({
    queryKey: ["trending-movies"],
    queryFn: fetchTrendingMovies,
  });

  const { data } = useQuery<TVShows[]>({
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
    <SafeAreaView className='flex-1'>
      <View className='flex-col gap-3'>
        <View className='flex-col gap-3'>
          {/*  */}
          <Header />
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
      </View>
    </SafeAreaView>
  );
}
