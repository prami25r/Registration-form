import React from "react";
import InputField from "./inputField";
import Dropdown from "./dropdown";

export default function FormFields({
  form,
  errors,
  onChange,
}: any) {
  return (
    <>
      <InputField
        label="First Name"
        value={form.firstName}
        placeholder="Enter first name"
        error={errors.firstName}
        onChangeText={(t) => onChange("firstName", t)}
      />

      <InputField
        label="Last Name"
        value={form.lastName}
        placeholder="Enter last name"
        error={errors.lastName}
        onChangeText={(t) => onChange("lastName", t)}
      />

      <Dropdown
        label="Gender"
        selectedValue={form.gender}
        options={["Male", "Female", "Other"]}
        error={errors.gender}
        onValueChange={(v) => onChange("gender", v)}
      />

      <Dropdown
        label="Marital Status"
        selectedValue={form.maritalStatus}
        options={["Married", "Unmarried"]}
        error={errors.maritalStatus}
        onValueChange={(v) => onChange("maritalStatus", v)}
      />

      <InputField
        label="Age"
        value={form.age}
        placeholder="Enter age"
        error={errors.age}
        onChangeText={(t) => onChange("age", t)}
      />

      <InputField
        label="Date of Birth"
        value={form.dob}
        placeholder="YYYY-MM-DD"
        error={errors.dob}
        onChangeText={(t) => onChange("dob", t)}
      />

      <InputField
        label="Bank Branch Name"
        value={form.bankBranch}
        placeholder="Enter branch name"
        error={errors.bankBranch}
        onChangeText={(t) => onChange("bankBranch", t)}
      />

      <InputField
        label="Account Number"
        value={form.accountNo}
        placeholder="Enter account number"
        error={errors.accountNo}
        onChangeText={(t) => onChange("accountNo", t)}
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
        onValueChange={(v) => onChange("scheme", v)}
      />
    </>
  );
}
