import MediaVid from "@/components/custom/MediaVid";
import { ScrollContext } from "@/components/custom/ParallaxImageWrapper";
import BackBtn from "@/components/global/BackBtn";
import { MediaInfo } from "@/components/ui/MediaInfo";
import TVShowDetailsHero from "@/components/ui/TVShowDetailsHero";
import { fetchMediaVideos } from "@/services/MediaVid";
import { fetchTrendingTVShowsDetails } from "@/services/tvshows";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator } from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";
export default function TVShowDetails() {
  const { id, isLoading } = useLocalSearchParams();
  const aref = useAnimatedRef<Animated.ScrollView>();

  const { data: tvshowDetails } = useQuery({
    queryKey: ["tvshow-details", id],
    queryFn: () => fetchTrendingTVShowsDetails(id as string),
  });

  const { data: videos } = useQuery({
    queryKey: ["tvshow-videos", id],
    queryFn: () => fetchMediaVideos("tv", id as string),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <Animated.ScrollView
      ref={aref}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
    >
      <BackBtn />
      <ScrollContext.Provider value={aref}>
        <TVShowDetailsHero tvShowDetails={tvshowDetails!} />
      </ScrollContext.Provider>
      <MediaInfo tvShowDetails={tvshowDetails!} />
      {/*  */}
      <MediaVid videos={videos!} />
    </Animated.ScrollView>
  );
}
