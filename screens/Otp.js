import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { OTP } from "react-native-otp-form";
import ButtonMain from "../components/MainButton";

export default function Otp() {
  return (
    <View>
      <Text
        style={{
          fontFamily: "open-sens-bold",
          fontSize: 26,
          textAlign: "center",
          marginTop: 16,
        }}
      >
        Saisir le code de confirmation
      </Text>
      <Text
        style={{
          fontFamily: "open-sens",
          color: "gray",
          textAlign: "center",
          marginTop: 24,
        }}
      >
        Un SMS a été envoyé au 0552 12 15 42
      </Text>
      <OTP
        codeCount={6}
        containerStyle={{ marginTop: 24 }}
        otpStyles={{
          backgroundColor: "#DEDFE2",
          borderRadius: 6,
          shadowColor: "#470000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.2,
          elevation: 1,
        }}
      />

      <Text
        style={{
          marginTop: 24,
          fontFamily: "open-sens",
          color: "gray",
          textAlign: "center",
        }}
      >
        Vous n'avez pas reçu de code?
      </Text>
      <TouchableOpacity>
        <Text
          style={{
            marginTop: 8,
            fontFamily: "open-sens-bold",
            color: "black",
            textAlign: "center",
          }}
        >
          Renvoyer un code
        </Text>
      </TouchableOpacity>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 24,
        }}
      >
        <ButtonMain style={{ width: 100 }}>Vérifier</ButtonMain>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
