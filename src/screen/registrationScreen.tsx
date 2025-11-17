import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert, Switch } from "react-native";
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
  const [errorMessage, setErrorMessage] = useState<string>("");

  // THEME CONTEXT USED INSIDE COMPONENT ✔
  const { theme, mode, toggleTheme } = useContext(ThemeContext);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const validateForm = () => {
    if (!form.firstName.trim()) return "First name is required";
    if (!form.lastName.trim()) return "Last name is required";
    if (!form.gender) return "Gender selection is required";
    if (!form.maritalStatus) return "Marital status is required";
    if (!form.age.trim() || isNaN(Number(form.age))) return "Valid age is required";
    if (!form.dob.trim()) return "Date of birth is required";
    if (!form.bankBranch.trim()) return "Bank branch name is required";
    if (!form.accountNo.trim() || form.accountNo.length < 6)
      return "Valid account number is required";
    if (!form.scheme) return "Scheme selection is required";

    return "";
  };

  const handleSubmit = () => {
    const error = validateForm();

    if (error) {
      setErrorMessage(error);
      return;
    }

    setErrorMessage("");

    Alert.alert("Form Submitted Successfully", JSON.stringify(form, null, 2));

    setForm(initialForm); // reset form
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* THEME TOGGLE SWITCH */}
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
        <Text style={{ color: theme.text, marginRight: 8, fontSize: 16 }}>
          {mode === "light" ? "Light Mode" : "Dark Mode"}
        </Text>
        <Switch value={mode === "dark"} onValueChange={toggleTheme} />
      </View>

      <Text style={[styles.title, { color: theme.text }]}>Bank Registration Form</Text>

      {errorMessage ? (
        <Text style={{ color: "red", marginBottom: 12, fontSize: 14 }}>{errorMessage}</Text>
      ) : null}

      <InputField
        label="First Name"
        value={form.firstName}
        placeholder="Enter first name"
        onChangeText={(t) => handleChange("firstName", t)}
      />

      <InputField
        label="Last Name"
        value={form.lastName}
        placeholder="Enter last name"
        onChangeText={(t) => handleChange("lastName", t)}
      />

      <Dropdown
        label="Gender"
        selectedValue={form.gender}
        onValueChange={(v) => handleChange("gender", v)}
        options={["Male", "Female", "Other"]}
      />

      <Dropdown
        label="Marital Status"
        selectedValue={form.maritalStatus}
        onValueChange={(v) => handleChange("maritalStatus", v)}
        options={["Married", "Unmarried"]}
      />

      <InputField
        label="Age"
        value={form.age}
        placeholder="Enter age"
        onChangeText={(t) => handleChange("age", t)}
      />

      <InputField
        label="Date of Birth"
        value={form.dob}
        placeholder="YYYY-MM-DD"
        onChangeText={(t) => handleChange("dob", t)}
      />

      <InputField
        label="Bank Branch Name"
        value={form.bankBranch}
        placeholder="Enter branch name"
        onChangeText={(t) => handleChange("bankBranch", t)}
      />

      <InputField
        label="Account Number"
        value={form.accountNo}
        placeholder="Enter account number"
        onChangeText={(t) => handleChange("accountNo", t)}
      />

      <Dropdown
        label="Scheme Selection"
        selectedValue={form.scheme}
        onValueChange={(v) => handleChange("scheme", v)}
        options={["Savings Account", "Current Account", "Fixed Deposit", "Recurring Deposit"]}
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.buttonBackground }]}
        onPress={handleSubmit}
      >
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
