import { TMDB_CONFIG } from "@/constants";
import { Cast, CastResponse } from "@/types/main";
import { Image } from "expo-image";
import React, { memo, useCallback, useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HorizontalList } from "../custom/MediaVid";

// Constants
const CARD_WIDTH = 100;
const CARD_HEIGHT = 150;
const CARD_MARGIN = 8;
const PLACEHOLDER_IMAGE = "https://via.placeholder.com/100x150";

// Types
interface MediaCastCardProps {
  data?: CastResponse;
  maxItems?: number;
}

interface CastCardProps {
  person: Cast;
  onPress?: (id: number) => void;
}

// Memoized CastCard component to prevent unnecessary re-renders
const CastCard = memo(({ person, onPress }: CastCardProps) => {
  const handlePress = useCallback(() => {
    if (onPress && person.id) {
      onPress(person.id);
    }
  }, [onPress, person.id]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.castCard}
      onPress={handlePress}
      accessibilityLabel={`View ${person.name}'s profile`}
      accessibilityRole='button'
    >
      <Image
        source={{
          uri: person.profile_path
            ? `${TMDB_CONFIG.IMAGE_URL_SMALL}${person.profile_path}`
            : PLACEHOLDER_IMAGE,
        }}
        style={styles.castImage}
        cachePolicy='memory-disk'
        // placeholder={require('@/assets/placeholder.jpg')}
        transition={200}
        contentFit='cover'
        accessibilityIgnoresInvertColors
      />
      <View style={styles.textContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {person.name}
        </Text>
        {person.character && (
          <Text style={styles.character} numberOfLines={1}>
            {person.character}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
});

CastCard.displayName = "CastCard";

const MediaCastCard = ({ data, maxItems = 10 }: MediaCastCardProps) => {
  // Filter and limit the number of cast members to render
  const castMembers = useMemo(() => {
    if (!data?.cast?.length) return [];
    return data.cast
      .filter((person) => person?.profile_path)
      .slice(0, maxItems);
  }, [data?.cast, maxItems]);

  const handleCastPress = useCallback((id: number) => {
    // Handle navigation to person details
    // router.push(`/person/${id}`);
  }, []);

  if (!castMembers.length) {
    return null;
  }

  return (
    <HorizontalList title='Cast & Crew'>
      {castMembers.map((person) => (
        <CastCard
          key={`${person.id}-${person.order || 0}`}
          person={person}
          onPress={handleCastPress}
        />
      ))}
    </HorizontalList>
  );
};

const styles = StyleSheet.create({
  castCard: {
    width: CARD_WIDTH,
    marginHorizontal: CARD_MARGIN / 2,
    alignItems: "center",
  },
  castImage: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 8,
    backgroundColor: "#1a1a1a",
  },
  textContainer: {
    width: "100%",
    marginTop: 4,
  },
  name: {
    fontSize: 12,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
  character: {
    fontSize: 10,
    color: "#9ca3af",
    textAlign: "center",
  },
});

export default memo(MediaCastCard);
