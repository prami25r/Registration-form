import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../styles/formatStyles";

export default function SubmitButton({
  onPress,
  bg,
  color,
}: {
  onPress: () => void;
  bg: string;
  color: string;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: bg }]}
    >
      <Text style={[styles.buttonText, { color }]}>{`Submit`}</Text>
    </TouchableOpacity>
  );
}
