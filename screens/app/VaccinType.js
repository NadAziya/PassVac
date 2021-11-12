import React from "react";
import { View, ScrollView, Text } from "react-native";
import Colors from "../../constants/colors/Colors";
import { Card } from "react-native-shadow-cards";

const Vaccin = (props) => {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "600",
          color: "#2666d9",
          padding: 20,
        }}
      >
        Cliquez sur l'un des vaccins pour afficher ces informations
      </Text>
      <View style={{ flexDirection: "column", marginTop: 30 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginBottom: 50,
          }}
        >
          <Card
            style={{
              margin: 5,
              height: 120,
              flexDirection: "row",
              width: "35%",
              justifyContent: "space-between",
              padding: 10,
              backgroundColor: "white",
            }}
          ></Card>
          <Card
            style={{
              margin: 5,
              height: 120,
              flexDirection: "row",
              width: "35%",
              justifyContent: "space-between",
              padding: 10,
              backgroundColor: "white",
            }}
          ></Card>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Card
            style={{
              margin: 5,
              height: 120,
              flexDirection: "row",
              width: "35%",
              justifyContent: "space-between",
              padding: 10,
              backgroundColor: "white",
            }}
          ></Card>
          <Card
            style={{
              margin: 5,
              height: 120,
              flexDirection: "row",
              width: "35%",
              justifyContent: "space-between",
              padding: 10,
              backgroundColor: "white",
            }}
          ></Card>
        </View>
      </View>
    </View>
  );
};

export default Vaccin;
