import React from "react";
import { View, Text } from "react-native";

const HelpScan = () => {
  return (
    <View style={{ height: "100%", backgroundColor: "white", padding: 10 }}>
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
        Qui peut scanner mon GoPass ?
      </Text>
      <Text
        style={{ fontSize: 16, fontWeight: "300", padding: 7, lineHeight: 25 }}
      >
        Toute autorité compétante par exemple: (Agent de frontiére, responsable
        du cinéma, d'un stade ou tout autre lieux éxigeant une preuve vaccinale)
        est autorisé a scanner votre Passe sanitaire afin de validé ou invalider
        votre entré.
      </Text>
    </View>
  );
};
export default HelpScan;
