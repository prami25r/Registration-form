import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function JsonPopup({
  json,
  onClose,
}: {
  json: string;
  onClose: () => void;
}) {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>Submitted Data</Text>
      <Text style={styles.jsonText}>{json}</Text>

      <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
        <Text style={styles.closeText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  jsonText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
  closeBtn: {
    alignSelf: "flex-end",
    backgroundColor: "#007bff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  closeText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
