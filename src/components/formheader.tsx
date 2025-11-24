import React from "react";
import { Text } from "react-native";
import styles from "../styles/formatStyles";

export default function FormHeader({ color }: { color: string }) {
  return (
    <Text style={[styles.title, { color }]}>Bank Registration Form</Text>
  );
}
