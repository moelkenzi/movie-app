import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
export default function PlayBtn() {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className='absolute right-4 top-8 z-10 w-16 h-16 rounded-xl items-center justify-center bg-sky-500/80 border border-sky-300'
      style={{
        shadowColor: "#ffffff",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.4,
        shadowRadius: 30,
        elevation: 5,
      }}
    >
      <FontAwesome5 name='play' size={24} color='white' />
    </TouchableOpacity>
  );
}
