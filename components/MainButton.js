import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors/Colors";

const ButtonMain = (props) => {
  return (
    <TouchableOpacity>
      <View style={{ ...styles.button, ...props.style }}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonMain;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    backgroundColor: Colors.secondary,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  buttonText: {
    color: "white",
    fontFamily: "muli",
    fontSize: 15,
    paddingVertical: 8,
    paddingHorizontal: 10,
    textAlign: "center",
  },
});
