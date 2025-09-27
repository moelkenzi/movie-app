import { fetchTopRatedMovies } from "@/services/api";
import { Movie } from "@/types/movies";
import { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const movies = await fetchTopRatedMovies();
      setMovies(movies);
    };

    fetchMovie();
  }, []);

  // console.log(movies);
  return (
    <SafeAreaView>
      <ScrollView>
        <View className='flex-1'>
          <Text className='text-2xl font-bold'>Movies</Text>
          <FlatList
            data={movies}
            renderItem={({ item }) => <Text>{item.title}</Text>}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
          />

          {/* <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movies[]}`,
            }}
            className='w-full h-64'
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
