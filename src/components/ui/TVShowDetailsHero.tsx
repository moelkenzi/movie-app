import { TVShowsDetails } from "@/types/tvshows.types";
import * as AC from "@bacons/apple-colors";
import { label } from "@bacons/apple-colors";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import { ParallaxImageWrapper } from "../custom/ParallaxImageWrapper";
import { FadeIn } from "../global/FadeIn";

export default function TVShowDetailsHero({
  tvShowDetails,
}: {
  tvShowDetails: TVShowsDetails;
}) {
  return (
    <FadeIn>
      <View>
        <ParallaxImageWrapper>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${tvShowDetails?.backdrop_path}`,
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
                uri: `https://image.tmdb.org/t/p/w500${tvShowDetails?.poster_path}`,
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
                {tvShowDetails?.name}
              </Text>
              <Text style={{ fontSize: 15, color: label, opacity: 0.8 }}>
                {tvShowDetails?.tagline}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </FadeIn>
  );
}
