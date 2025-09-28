import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BackBtn() {
  const { top } = useSafeAreaInsets();

  return (
    <TouchableOpacity
      onPress={() => router.back()}
      className='absolute top-2 left-5 z-10 bg-gray-900 rounded-lg p-2 opacity-[0.85]'
      style={{
        marginTop: top + 10,
        shadowColor: "white",
        borderWidth: 1,
        borderColor: "#ffffff80",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
      }}
    >
      <Entypo name='chevron-left' size={24} color='white' />
    </TouchableOpacity>
  );
}
