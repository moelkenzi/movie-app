import { label, secondaryLabel } from "@bacons/apple-colors";
import { StyleSheet, Text, View } from "react-native";
import { InfoRowProps } from "./mediaInfo.types";

const InfoRow = ({ label, value }: InfoRowProps) => (
  <View style={styles.infoRow}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value} numberOfLines={2} ellipsizeMode='tail'>
      {value || "N/A"}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(120,120,128,0.1)",
  },
  label: {
    fontSize: 16,
    color: secondaryLabel,
    flex: 1,
    marginRight: 12,
  },
  value: {
    fontSize: 16,
    color: label,
    flex: 2,
    textAlign: "right",
  },
});

export default InfoRow;
