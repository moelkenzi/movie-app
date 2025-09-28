import { StyleSheet, Text, View } from "react-native";
import InfoRow from "./InfoRow";
import { MediaInfoProps } from "./mediaInfo.types";
import Section from "./Section";
import { useMediaInfo } from "./useMediaInfo";

const MediaInfo = ({ movieDetails, tvShowDetails }: MediaInfoProps) => {
  const { details, allInfo } = useMediaInfo(movieDetails, tvShowDetails);

  if (!details) return null;

  return (
    <View style={styles.container}>
      {details.overview && (
        <Section title='Overview'>
          <Text style={styles.overview}>{details.overview}</Text>
        </Section>
      )}

      <Section title='Details'>
        {allInfo.map((item, index) => (
          <InfoRow key={index} label={item.label} value={item.value} />
        ))}
      </Section>

      {/* {hasSpokenLanguages && (
        <Section title='Available In'>
          <Text style={styles.languages}>{spokenLanguages}</Text>
        </Section>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    paddingBottom: 24,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  overview: {
    fontSize: 16,
    lineHeight: 24,
    color: "white",
  },
  languages: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default MediaInfo;
