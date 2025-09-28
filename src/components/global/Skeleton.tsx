import { MotiView } from "moti";
import { ScrollView, View } from "react-native";
import { Easing } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const _loadingColorOne = "rgba(120,120,128,0.11)"; // Lighter state
const _loadingColorWashedOne = "rgba(120,120,128,0.14)"; // Darker state

const _loadingColorTwo = "rgba(120,120,128,0.19)"; // Lighter state
const _loadingColorWashedTwo = "rgba(120,120,128,0.14)"; // Darker state

const loadingAnimationOne = {
  from: { backgroundColor: _loadingColorWashedOne }, // Start with darker
  animate: { backgroundColor: _loadingColorOne }, // Animate to lighter
  transition: {
    type: "timing" as const,
    duration: 1000,
    loop: true,
    repeatReverse: true,
    easing: Easing.inOut(Easing.ease),
  } as const,
};

const createLoadingAnimation = (delay = 0) => ({
  from: { backgroundColor: _loadingColorWashedTwo },
  animate: { backgroundColor: _loadingColorTwo },
  transition: {
    type: "timing" as const,
    duration: 900,
    delay,
    loop: true,
    repeatReverse: true,
    easing: Easing.inOut(Easing.ease),
  } as const,
});

export default function Skeleton() {
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MovieSkeleton />
      </ScrollView>
    </SafeAreaView>
  );
}

function MovieSkeleton() {
  return (
    <View>
      {/* Hero Section */}
      <MotiView
        style={{ height: 300, backgroundColor: _loadingColorOne }}
        {...loadingAnimationOne}
      />

      {/* Overview Section */}
      <View style={{ padding: 16, gap: 8 }}>
        <MotiView
          style={{
            height: 16,
            width: "90%",
            backgroundColor: _loadingColorTwo,
            borderRadius: 4,
          }}
          {...createLoadingAnimation(0)}
        />
        <MotiView
          style={{
            height: 16,
            width: "80%",
            backgroundColor: _loadingColorTwo,
            borderRadius: 4,
          }}
          {...createLoadingAnimation(150)}
        />
        <MotiView
          style={{
            height: 16,
            width: "85%",
            backgroundColor: _loadingColorTwo,
            borderRadius: 4,
          }}
          {...createLoadingAnimation(300)}
        />
      </View>

      {/* About Section */}
      <View style={{ padding: 16 }}>
        <MotiView
          style={{
            height: 24,
            width: 80,
            backgroundColor: _loadingColorTwo,
            borderRadius: 4,
            marginBottom: 12,
          }}
          {...createLoadingAnimation(0)}
        />
        <MotiView
          style={{
            backgroundColor: _loadingColorTwo,
            borderRadius: 10,
            gap: 1,
          }}
          {...createLoadingAnimation(0)}
        >
          {[...Array(8)].map((_, i) => (
            <MotiView
              key={i}
              style={{
                padding: 12,
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "rgba(120,120,128,0.08)",
              }}
              {...createLoadingAnimation(i * 150)}
            >
              <MotiView
                style={{
                  height: 16,
                  width: 100,
                  backgroundColor: "rgba(120,120,128,0.12)",
                  borderRadius: 4,
                }}
                {...createLoadingAnimation(i * 150)}
              />
              <MotiView
                style={{
                  height: 16,
                  width: 150,
                  backgroundColor: "rgba(120,120,128,0.12)",
                  borderRadius: 4,
                }}
                {...createLoadingAnimation(i * 150)}
              />
            </MotiView>
          ))}
        </MotiView>
      </View>

      {/*  */}
      <View style={{ padding: 16, gap: 8 }}>
        <MotiView
          style={{
            height: 16,
            width: "90%",
            backgroundColor: _loadingColorTwo,
            borderRadius: 4,
          }}
          {...createLoadingAnimation(0)}
        />
        <MotiView
          style={{
            height: 16,
            width: "80%",
            backgroundColor: _loadingColorTwo,
            borderRadius: 4,
          }}
          {...createLoadingAnimation(150)}
        />
        <MotiView
          style={{
            height: 16,
            width: "85%",
            backgroundColor: _loadingColorTwo,
            borderRadius: 4,
          }}
          {...createLoadingAnimation(300)}
        />
      </View>
    </View>
  );
}
