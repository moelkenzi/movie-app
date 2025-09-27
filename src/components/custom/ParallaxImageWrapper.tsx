import React from "react";
import Animated, {
  AnimatedRef,
  interpolate,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

const HEADER_HEIGHT = 300;
// const ANIM_START = HEADER_HEIGHT * 0.66;

export const ScrollContext =
  React.createContext<AnimatedRef<Animated.ScrollView> | null>(null);

export function ParallaxImageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = React.use(ScrollContext);
  const scrollOffset = useScrollViewOffset(ref);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
            "clamp"
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          height: HEADER_HEIGHT,
        },
        headerAnimatedStyle,
      ]}
    >
      {children}
    </Animated.View>
  );
}
