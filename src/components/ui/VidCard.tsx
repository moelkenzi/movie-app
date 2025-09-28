import { Image } from "expo-image";
import { Text, View } from "react-native";

export default function VideoCard({ video }: { video?: any }) {
  return (
    <View style={{ width: 280, marginHorizontal: 4 }}>
      <Image
        source={{ uri: `https://img.youtube.com/vi/${video.key}/0.jpg` }}
        style={{ width: "100%", height: 157, borderRadius: 8 }}
        transition={300}
      />
      <Text
        style={{ color: "white" }}
        className='text-sm font-medium mt-4 px-2'
        numberOfLines={1}
      >
        {video.name}
      </Text>
    </View>
  );
}
