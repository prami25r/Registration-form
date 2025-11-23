import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ThemeContext } from "../themes/themeContext";

interface DropdownProps {
  label: string;
  selectedValue: string;
  onValueChange: (value: string) => void;
  options: string[];
  error?: boolean;
}

export default function Dropdown({
  label,
  selectedValue,
  onValueChange,
  options,
  error = false,
}: DropdownProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: theme.text }]}>{label}</Text>

      <View
        style={[
          styles.wrapper,
          {
            backgroundColor: theme.inputBackground,
            borderColor: error ? "red" : theme.border,
          },
        ]}
      >
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          dropdownIconColor={theme.text}
          style={{ color: theme.text }}
        >
          <Picker.Item label="Select..." value="" />

          {options.map((opt, idx) => (
            <React.Fragment key={idx}>
              <Picker.Item label={opt} value={opt} />
            </React.Fragment>
          ))}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 14 },
  label: { fontSize: 14, marginBottom: 4 },
  wrapper: { borderWidth: 1, borderRadius: 6 },
});

