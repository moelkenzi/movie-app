import SearchCard from "@/components/ui/SearchCard";
import { Loading } from "@/components/ui/Skeleton";
import { useDebounce } from "@/lib/utils";
import { fetchTrendingMovies } from "@/services/movies";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function SearchScreen() {
  const { top } = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery, 500);

  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ["search", debouncedQuery],
    queryFn: ({ pageParam }) =>
      fetchTrendingMovies({
        query: searchQuery,
        pageParam,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length === 0) return undefined;
      return pages.length + 1;
    },
    enabled: !!debouncedQuery,
  });

  // useEffect(() => {
  //   if (searchQuery) {

  // }, [searchQuery])

  // console.log(data);
  const movies = data?.pages.flat();

  if (isLoading) {
    return (
      <SafeAreaView
        style={{
          marginTop: top,
        }}
      >
        <Loading />
      </SafeAreaView>
    );
  }

  // console.log(movies);

  return (
    <View
      style={{
        marginTop: top,
      }}
    >
      <FlatList
        ListHeaderComponent={
          <View className='px-2 pt-8 pb-10 gap-4'>
            <Text className='text-white text-4xl font-bold'>Search</Text>
            <View className='flex-row items-center gap-2'>
              <TextInput
                placeholder='Shows, Movies, and More...'
                placeholderTextColor='#98989F'
                className='bg-[#1c1c1f] text-xl flex-1 text-white rounded-xl px-6 py-3.5'
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
          </View>
        }
        data={movies}
        renderItem={({ item }) => <SearchCard item={item} />}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        // scrollEnabled={false}
        contentContainerStyle={{ gap: 4 }}
        onEndReached={() => fetchNextPage()}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
