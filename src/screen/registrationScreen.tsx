import React, { useState, useContext } from "react";
import { ScrollView, SafeAreaView, StyleSheet, View } from "react-native";
import Toast from "react-native-simple-toast";
import { ThemeContext } from "../themes/themeContext";
import FormHeader from "../components/formheader";
import FormFields from "../components/formfields";
import SubmitButton from "../components/submitbutton";
import JsonPopUp from "../components/jsonpopUp";
import styles from "../styles/formatStyles";

const initialForm = {
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
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<any>({});
  const [submittedJson, setSubmittedJson] = useState<string | null>(null);
  const { theme } = useContext(ThemeContext);

  const onChange = (field: string, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p: any) => ({ ...p, [field]: false }));
  };

  const validate = () => {
    const e: any = {};
    Object.entries(form).forEach(([k, v]) => {
      if (!v.trim()) e[k] = true;
    });
    if (form.age && isNaN(Number(form.age))) e.age = true;
    if (form.accountNo && form.accountNo.length < 6) e.accountNo = true;

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (!validate()) {
      Toast.show("Please fill all required fields", Toast.LONG);
      return;
    }

    setSubmittedJson(JSON.stringify(form, null, 2));
    Toast.show("Form Submitted!", Toast.SHORT);

    setForm(initialForm);
    setErrors({});
  };

  return (
    <SafeAreaView style={[local.container, { backgroundColor: theme.background }]}>
      <ScrollView style={styles.container}>

        <FormHeader color={theme.text} />

        {submittedJson && (
          <JsonPopUp json={submittedJson} onClose={() => setSubmittedJson(null)} />
        )}

        <FormFields form={form} errors={errors} onChange={onChange} />

        <SubmitButton
          onPress={submit}
          bg={theme.buttonBackground}
          color={theme.buttonText}
        />

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const local = StyleSheet.create({
  container: { flex: 1 },
});
