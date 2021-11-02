import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowRadius: 10,
    borderRadius: 75,
    elevation: 2,
    width: "90%",
  },
});
