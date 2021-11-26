import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const HelpHisto = () => {
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
        Comment je peut accéder aux tests que j'ai effectuer ?
      </Text>
      <Text style={{ padding: 10, textAlign: "justify", lineHeight: 20 }}>
        vous pouvez accéder à l'historique de vos tests PCR en cliquant sur la
        card 'historique' qui se trouve à l'écran d'accueil.
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
          style={{ height: 360, width: 205 }}
          source={require("../../assets/img/help_accesHisto.jpg")}
        />
      </View>
      <Text style={{ padding: 10, textAlign: "justify", lineHeight: 20 }}>
        ou bien y accédé en cliquant sur l'option Mon Historique.
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
          style={{ height: 250, width: 175 }}
          source={require("../../assets/img/help_Histo.jpg")}
        />
      </View>
      <Text
        style={{
          padding: 10,
          textAlign: "justify",
          lineHeight: 20,
          marginTop: 15,
        }}
      >
        pour afficher plus de détails concernant vos résultats, cliquer sur
        l'îcone fléche en bleue.
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginBottom: 40,
        }}
      >
        <Image
          style={{ height: 150, width: 330 }}
          source={require("../../assets/img/helpHisto2.jpg")}
        />
      </View>
    </ScrollView>
  );
};
export default HelpHisto;
