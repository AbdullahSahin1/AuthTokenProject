import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const Input = ({ label, keyboardType, onUpdateValue, value,secure }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        autoCapitalize="none"
        keyboardType={keyboardType}
        onChangeText={onUpdateValue}
        value={value}
        secureTextEntry={secure}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Input;
