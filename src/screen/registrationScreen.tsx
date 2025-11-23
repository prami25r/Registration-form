import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Switch,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Toast from "react-native-simple-toast";
import InputField from "../components/inputField";
import Dropdown from "../components/dropdown";
import styles from "../styles/formatStyles";
import { ThemeContext } from "../themes/themeContext";

interface FormState {
  firstName: string;
  lastName: string;
  age: string;
  dob: string;
  gender: string;
  maritalStatus: string;
  bankBranch: string;
  accountNo: string;
  scheme: string;
}

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  age: "",
  dob: "",
  gender: "",
  maritalStatus: "",
  bankBranch: "",
  accountNo: "",
  scheme: "",
};

export default function RegistrationScreen() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<{ [K in keyof FormState]?: boolean }>({});
  const { theme, mode, toggleTheme } = useContext(ThemeContext);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm({ ...form, [field]: value });
    setErrors({ ...errors, [field]: false });
  };

  const validateForm = () => {
    const newErrors: { [K in keyof FormState]?: boolean } = {};

    Object.entries(form).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key as keyof FormState] = true;
    });

    if (form.age && isNaN(Number(form.age))) newErrors.age = true;
    if (form.accountNo && form.accountNo.length < 6) newErrors.accountNo = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    const valid = validateForm();
    if (!valid) {
      Toast.show("Please fill all required fields", Toast.LONG);
      return;
    }

    Toast.show("Form Submitted!", Toast.SHORT);
    console.log(JSON.stringify(form, null, 2));

    setForm(initialForm);
    setErrors({});
  };

  return (
    <SafeAreaView style={[local.container, { backgroundColor: theme.background }]}>
      <ScrollView style={styles.container}>
        <View style={local.themeRow}>
          <Text style={[local.themeText, { color: theme.text }]}>
            {mode === "light" ? "Light Mode" : "Dark Mode"}
          </Text>
          <Switch value={mode === "dark"} onValueChange={toggleTheme} />
        </View>

        <Text style={[styles.title, { color: theme.text }]}>Bank Registration Form</Text>

        <InputField
          label="First Name"
          value={form.firstName}
          placeholder="Enter first name"
          error={errors.firstName}
          onChangeText={(t) => handleChange("firstName", t)}
        />

        <InputField
          label="Last Name"
          value={form.lastName}
          placeholder="Enter last name"
          error={errors.lastName}
          onChangeText={(t) => handleChange("lastName", t)}
        />

        <Dropdown
          label="Gender"
          selectedValue={form.gender}
          options={["Male", "Female", "Other"]}
          error={errors.gender}
          onValueChange={(v) => handleChange("gender", v)}
        />

        <Dropdown
          label="Marital Status"
          selectedValue={form.maritalStatus}
          options={["Married", "Unmarried"]}
          error={errors.maritalStatus}
          onValueChange={(v) => handleChange("maritalStatus", v)}
        />

        <InputField
          label="Age"
          value={form.age}
          placeholder="Enter age"
          error={errors.age}
          onChangeText={(t) => handleChange("age", t)}
        />

        <InputField
          label="Date of Birth"
          value={form.dob}
          placeholder="YYYY-MM-DD"
          error={errors.dob}
          onChangeText={(t) => handleChange("dob", t)}
        />

        <InputField
          label="Bank Branch Name"
          value={form.bankBranch}
          placeholder="Enter branch name"
          error={errors.bankBranch}
          onChangeText={(t) => handleChange("bankBranch", t)}
        />

        <InputField
          label="Account Number"
          value={form.accountNo}
          placeholder="Enter account number"
          error={errors.accountNo}
          onChangeText={(t) => handleChange("accountNo", t)}
        />

        <Dropdown
          label="Scheme Selection"
          selectedValue={form.scheme}
          options={[
            "Savings Account",
            "Current Account",
            "Fixed Deposit",
            "Recurring Deposit",
          ]}
          error={errors.scheme}
          onValueChange={(v) => handleChange("scheme", v)}
        />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.buttonBackground }]}
          onPress={handleSubmit}
        >
          <Text style={[styles.buttonText, { color: theme.buttonText }]}>Submit</Text>
        </TouchableOpacity>

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const local = StyleSheet.create({
  container: { flex: 1 },
  themeRow: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  themeText: { marginRight: 8, fontSize: 16 },
});
