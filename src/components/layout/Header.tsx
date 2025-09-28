import { TMDB_CONFIG } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, ImageBackground, View } from "react-native";
import { ParallaxImageWrapper } from "../custom/ParallaxImageWrapper";

const { width, height } = Dimensions.get("screen");

export default function Header() {
  return (
    <View className='pb-44'>
      <ImageHero />
    </View>
  );
}

function ImageHero() {
  return (
    <ParallaxImageWrapper>
      <ImageBackground
        source={{
          uri: `${TMDB_CONFIG.IMAGE_URL_ORIGINAL_HD}/s94NjfKkcSczZ1FembwmQZwsuwY.jpg`,
        }}
        style={{ width, height: height * 0.5 }}
        className='rounded-b-2xl'
      >
        {/* Top Gradient - Subtle fade for status bar area */}
        <LinearGradient
          colors={["rgba(0,0,0,0.7)", "transparent"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: height * 0.1,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />

        {/* Bottom Gradient - Stronger fade for content overlay */}
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.1)", "rgba(0,0,0,1)"]}
          locations={[0, 0.5, 1]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: height * 0.3,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
      </ImageBackground>
    </ParallaxImageWrapper>
  );
}
