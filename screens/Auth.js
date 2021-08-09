import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import ButtonMain from "../components/MainButton";
import Input from "../components/Input";

export default function Auth() {
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
          height: "25%",
        }}
      >
        <Image
          style={styles.image}
          source={require("../assets/img/confirmed.png")}
        />
      </View>
      <Text
        style={{
          fontFamily: "open-sens",
          fontSize: 15,
          color: "gray",
          textAlign: "center",
          marginHorizontal: 16,
          marginVertical: 30,
        }}
      >
        Vous recevrez un code à 6 chiffres pour effectuer la validation
      </Text>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Input
          placeholder="Entrez votre numero"
          blurOnSubmit
          keyboardType="phone-pad"
          style={{ width: "80%", height: 45, marginBottom: 15 }}
        />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <ButtonMain style={{ width: 100 }}>Continuer</ButtonMain>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 200,
  },
});
