import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import ButtonMain from "../components/MainButton";
import Input from "../components/Input";

export default function Auth(props, navigation) {
  const [phoneNumber, setPhoneNumber] = useState();

  const onChangePhoneHandler = (number) => {
    setPhoneNumber(number);
  };

  const onPressContinue = () => {
    if (phoneNumber && phoneNumber.length === 10) {
      props.navigation.navigate("Otp");
    } else {
      Alert.alert("Erreur", "Veuillez saisir un numero de 10 chiffres", [
        { text: "OK" },
      ]);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
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
              value={phoneNumber}
              onChangeText={onChangePhoneHandler}
              secureTextEntry={false}
              style={{ width: "80%", height: 45, marginBottom: 15 }}
            />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <ButtonMain
              style={{ width: 120, height: 40 }}
              onPress={onPressContinue}
            >
              Continuer
            </ButtonMain>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", height: "100%", backgroundColor: "white" },
  image: {
    width: 150,
    height: 200,
  },
});
