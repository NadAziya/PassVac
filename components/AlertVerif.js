import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const AlertVerif = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <AntDesign name="Safety" size={25} color="white" />
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            fontWeight: "500",
            color: "white",
          }}
        >
          {props.text}
        </Text>
      </View>
    </View>
  );
};

export default AlertVerif;
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: "transparent",
    width: "75%",
    height: "20%",
    backgroundColor: "white",
    padding: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginBottom: 50,
    //backgroundColor: "#58CA4E",
  },
});
