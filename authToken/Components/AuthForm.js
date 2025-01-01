import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Input from "./Input";

const AuthForm = ({ isLogin }) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  function updateInput(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredEmail);
        break;
      case "password":
        setEnteredPassword(enteredPassword);
        break
    }
  }
  return (
    <View>
      <Input
        label="Email"
        keyboardType="email-address"
        onUpdateValue={updateInput.bind(this, "email")}
        value={enteredEmail}
      />
            <Input
        label="Şifre"
        secure
        onUpdateValue={updateInput.bind(this, "password")}
        value={enteredPassword}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AuthForm;
