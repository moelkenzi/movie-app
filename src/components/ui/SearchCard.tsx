import { Movie } from "@/types/movies.types";
import { View } from "react-native";
import MovieCard from "./MovieCard";
export default function SearchCard({ item }: { item: Movie }) {
  return (
    <View>
      {/* <Text className='text-white'>{item.title}</Text> */}
      <MovieCard item={item} />
    </View>
  );
}
