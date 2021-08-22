import React, { useState } from "react";
import { StyleSheet, View, Text, Platform } from "react-native";

import Header from "../components/Header";
import ButtonMain from "../components/MainButton";
import Input from "../components/Input";

import { CheckBox } from "react-native-elements";

export default function SignInCostum(props, navigation) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [dateNes, setDateNes] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  console.log(nom);
  console.log(prenom);
  console.log(dateNes);
  const onSigninHandler = () => {
    if (nom && prenom && dateNes) {
      props.navigation.navigate("Info");
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ height: "35%" }}>
        <Header />
      </View>

      <View style={{}}>
        <View style={styles.viewInput}>
          <Input
            value={nom}
            onChangeText={(value) => setNom(value)}
            style={{
              marginBottom: 15,
              width: "85%",
              height: 40,
              backgroundColor: "white",
              borderColor: "white",
            }}
            placeholder="Nom"
            autoCapitalize="sentences"
            blurOnSubmit
          />

          <Input
            value={prenom}
            onChangeText={(value) => setPrenom(value)}
            style={{
              marginBottom: 15,
              width: "85%",
              height: 40,
              backgroundColor: "white",
              borderColor: "white",
            }}
            placeholder="Prénom"
            autoCapitalize="sentences"
            blurOnSubmit
          />

          <Input
            value={dateNes}
            onChangeText={(value) => setDateNes(value)}
            placeholder="12 / 12 / 1998"
            autoCapitalize="sentences"
            blurOnSubmit
            style={{
              marginBottom: 15,
              width: "85%",
              height: 40,
              backgroundColor: "white",
              borderColor: "white",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            height: "10%",
          }}
        >
          <CheckBox
            center
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={toggleCheckBox}
            onPress={(newValue) => setToggleCheckBox(newValue)}
          />

          <Text style={{ marginTop: 18 }}>
            J'accepte tous les termes et les conditions
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonMain
            onPress={onSigninHandler}
            style={{
              display: "flex",
              width: 150,
              height: 50,
              justifyContent: "center",
            }}
          >
            S'enregistrer
          </ButtonMain>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: "100%", width: "100%" },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    height: "35%",
  },
  viewInput: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,

    width: "100%",
    height: "25%",
  },
});
