import Header from "@/components/layout/Header";
import MovieCard from "@/components/ui/MovieCard";
import { Loading } from "@/components/ui/Skeleton";
import { fetchTrendingMovies } from "@/services/movies";
import { fetchTrendingTVShows } from "@/services/tvshows";
import { Movie } from "@/types/movies";
import { TVShows } from "@/types/tvshows";
import { useQuery } from "@tanstack/react-query";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const { data: movies, isLoading } = useQuery<Movie[]>({
    queryKey: ["trending-movies"],
    queryFn: fetchTrendingMovies,
  });

  const { data: tvShows } = useQuery<TVShows[]>({
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
            data={tvShows}
            horizontal
            renderItem={({ item }) => <MovieCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
