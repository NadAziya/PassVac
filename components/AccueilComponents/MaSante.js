import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
const MaSante = (props) => {
  return (
    <Animatable.View
      animation="pulse"
      easing="ease-out"
      iterationCount="infinite"
      style={{ ...styles.card, ...props.style }}
    >
      <Image
        style={{
          width: 80,
          height: 80,
        }}
        source={require("../../assets/img/surgeon.png")}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 18,
            color: "white",
          }}
        >
          {props.children}
        </Text>
        <Text style={{ textAlign: "center", fontSize: 14, color: "white" }}>
          {props.text}
        </Text>
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: 25,
    borderColor: "transparent",
    width: "100%",
    height: "20%",
    padding: 10,

    alignItems: "center",
    justifyContent: "center",
  },
});

export default MaSante;
