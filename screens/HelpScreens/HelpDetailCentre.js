import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

const HelpDetaiCentre = () => {
  return (
    <ScrollView style={{ height: "100%", backgroundColor: "white" }}>
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
      <Text style={{ padding: 10, textAlign: "justify", lineHeight: 20 }}>
        cliquer sur l'option Centre de Vaccination qui se trouve dans le Menu.
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Image
          style={{ height: 250, width: 250 }}
          source={require("../../assets/img/helpVac.jpg")}
        />
      </View>
      <Text style={{ padding: 10, textAlign: "justify", lineHeight: 20 }}>
        pour afficher plus de détails du centre cliquer sur cette icone fléché
        en bleue.
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginVertical: 10,
          marginBottom: 10,
        }}
      >
        <Image
          style={{ height: 200, width: 310 }}
          source={require("../../assets/img/helpVac2.jpg")}
        />
      </View>
    </ScrollView>
  );
};
export default HelpDetaiCentre;
