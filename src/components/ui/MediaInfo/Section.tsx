import { label } from "@bacons/apple-colors";
import { StyleSheet, Text, View } from "react-native";
import { SectionProps } from "./mediaInfo.types";

const Section = ({ title, children }: SectionProps) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionContent}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: label,
    marginBottom: 12,
  },
  sectionContent: {
    backgroundColor: "rgba(120,120,128,0.12)",
    borderRadius: 10,
    padding: 12,
  },
});

export default Section;
