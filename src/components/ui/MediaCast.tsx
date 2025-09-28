import { TMDB_CONFIG } from "@/constants";
import { Cast, CastResponse } from "@/types/main";
import { label } from "@bacons/apple-colors";
import { Image } from "expo-image";
import { Text, TouchableOpacity } from "react-native";
import { HorizontalList } from "../custom/MediaVid";

export default function MediaCastCard({ data }: { data?: CastResponse }) {
  console.log(JSON.stringify(data?.cast, null, 2));
  if (!data?.cast?.length) {
    return null; // Return nothing if no data or empty cast
  }

  return (
    <HorizontalList title='Cast & Crew'>
      {data.cast
        .filter((person) => person?.profile_path) // Filter out people with no profile image
        .map((person) => (
          <CastCard key={person.id} person={person} />
        ))}
    </HorizontalList>
  );
}

export function CastCard({ person }: { person?: Cast }) {
  return (
    //   <Link href={`/person/${person.id}`} asChild push>
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ width: 100, marginHorizontal: 4 }}
    >
      <Image
        source={{
          uri: person?.profile_path
            ? `${TMDB_CONFIG.IMAGE_URL_ORIGINAL}/${person?.profile_path}`
            : "https://via.placeholder.com/100x150",
        }}
        style={{ width: 100, height: 150, borderRadius: 8 }}
        transition={300}
      />
      <Text
        style={{ fontSize: 14, color: label, marginTop: 4 }}
        numberOfLines={1}
      >
        {person?.name}
      </Text>
      <Text
        style={{ fontSize: 12, color: label, opacity: 0.7 }}
        numberOfLines={1}
      >
        {person?.character}
      </Text>
    </TouchableOpacity>
    //   </Link>
  );
}
