import React, { useContext } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { ThemeContext } from "../themes/themeContext";

interface InputFieldProps {
  label: string;
  value: string;
  placeholder?: string;
  onChangeText: (value: string) => void;
  error?: boolean;
}

export default function InputField({
  label,
  value,
  placeholder,
  onChangeText,
  error = false,
}: InputFieldProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: theme.inputBackground,
            borderColor: error ? "red" : theme.border,
            color: theme.text,
          },
        ]}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#888"
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 14 },
  label: { fontSize: 14, marginBottom: 4 },
  input: { borderWidth: 1, borderRadius: 6, padding: 10 },
});
