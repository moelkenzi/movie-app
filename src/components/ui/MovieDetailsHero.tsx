import { MovieDetails } from "@/types/movies";
import * as AC from "@bacons/apple-colors";
import { label } from "@bacons/apple-colors";
import { Entypo } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ParallaxImageWrapper } from "../custom/ParallaxImageWrapper";
import { FadeIn } from "../global/FadeIn";

export default function MovieDetailsHero({
  movieDetails,
}: {
  movieDetails: MovieDetails;
}) {
  const { top } = useSafeAreaInsets();

  return (
    <FadeIn>
      <View>
        <TouchableOpacity
          onPress={() => router.back()}
          className='absolute top-2 left-2 z-10 bg-[#0784ff] rounded-lg p-2 opacity-[0.85]'
          style={{
            marginTop: top + 10,
            shadowColor: "black",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <Entypo name='chevron-left' size={24} color='white' />
        </TouchableOpacity>
        <ParallaxImageWrapper>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${movieDetails?.backdrop_path}`,
            }}
            style={{
              width: "100%",
              height: 300,
              resizeMode: "cover",
            }}
            transition={300}
          />
        </ParallaxImageWrapper>
        {/*  */}
        <View
          style={{
            padding: 16,
            marginTop: -60,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              top: 80,

              backgroundColor: AC.systemGroupedBackground,
            }}
          />
          <View
            style={{
              shadowColor: "#ffffff90",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.3,
              shadowRadius: 30,
              elevation: 5,
            }}
          >
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`,
              }}
              style={{
                width: 100,
                height: 150,
                borderRadius: 8,
                marginRight: 16,
                borderWidth: 1,
                borderColor: "#ffffff40",
              }}
              transition={300}
            />
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color: label,
                  marginBottom: 8,
                }}
              >
                {movieDetails?.title}
              </Text>
              <Text style={{ fontSize: 15, color: label, opacity: 0.8 }}>
                {movieDetails?.tagline}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </FadeIn>
  );
}
