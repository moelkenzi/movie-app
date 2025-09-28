import { VidResult } from "@/types/main";
import { label } from "@bacons/apple-colors";
import { ScrollView, Text, View } from "react-native";
import VideoCard from "../ui/VidCard";

export default function MediaVid({ videos }: { videos: VidResult[] }) {
  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <View className='pb-6 gap-5'>
      <HorizontalList title='Videos'>
        {videos.map((video) => (
          <VideoCard key={video.key} video={video} />
        ))}
      </HorizontalList>
    </View>
  );
}

export function HorizontalList({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={{ marginBottom: 24 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          color: label,
          marginBottom: 12,
          paddingHorizontal: 16,
        }}
      >
        {title}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 12 }}
      >
        {children}
      </ScrollView>
    </View>
  );
}
