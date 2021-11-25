import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const HelpPass = () => {
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
        Comment avoir mon GoPass ?
      </Text>
      <Text style={{ padding: 10, textAlign: "justify", lineHeight: 20 }}>
        A la création de votre compte sur GoPass un état initial vous est généré
        automatiquement.
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Image
          style={{ height: 250, width: 200 }}
          source={require("../../assets/img/helpPass.jpg")}
        />
      </View>
      <Text style={{ padding: 10, textAlign: "justify", lineHeight: 20 }}>
        Vous devez vous rendre au plus vite à un centre disposant de notre
        système GoPass, vous serrez aussitôt mis à jour. Un CODE QR unique vous
        est généré selon votre état face au COVID-19.
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Image
          style={{ height: 250, width: 200 }}
          source={require("../../assets/img/helpPass1.jpg")}
        />
      </View>
      <Text style={{ padding: 10, textAlign: "justify", lineHeight: 20 }}>
        Cliquer ici pour afficher plus de détails concernant votre vaccination.
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Image
          style={{ height: 250, width: 200 }}
          source={require("../../assets/img/helpPass2.jpg")}
        />
      </View>
    </ScrollView>
  );
};
export default HelpPass;
