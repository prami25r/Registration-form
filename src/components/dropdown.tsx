import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ThemeContext } from "../themes/themeContext";

interface DropdownProps {
  label: string;
  selectedValue: string;
  onValueChange: (value: string) => void;
  options: string[];
}

export default function Dropdown({
  label,
  selectedValue,
  onValueChange,
  options,
}: DropdownProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={[styles.label, { color: theme.text }]}>{label}</Text>

      <View
        style={[
          styles.pickerWrapper,
          { backgroundColor: theme.inputBackground, borderColor: theme.border },
        ]}
      >
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          dropdownIconColor={theme.text}
          style={{ color: theme.text }}
        >
          {options.map((opt, idx) => (
            <Picker.Item key={idx} label={opt} value={opt} />
          ))}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 14, marginBottom: 4 },
  pickerWrapper: {
    borderWidth: 1,
    borderRadius: 6,
  },
});
