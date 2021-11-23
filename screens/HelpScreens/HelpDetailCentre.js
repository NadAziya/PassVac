import React from "react";
import { View, Text } from "react-native";

const HelpDetaiCentre = () => {
  return (
    <View style={{ height: "100%", backgroundColor: "white" }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          padding: 10,
          textAlign: "center",
          color: "blue",
          marginBottom: 15,
        }}
      >
        Comment afficher plus de détails d'un centre de vaccination ?
      </Text>
    </View>
  );
};
export default HelpDetaiCentre;
