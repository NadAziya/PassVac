import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import ButtonMain from "../components/MainButton";

export default function Otp(props, navigation) {
  let lengthInput = 6;
  let textInput = useRef(null);
  const [code, setCode] = useState("");
  const onChangeText = (val) => {
    setCode(val);
  };

  const onPressVerifyCode = () => {
    if (code) {
      props.navigation.navigate("SignIn");
    }
  };
  useEffect(() => {
    textInput.focus();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
      style={styles.container}
    >
      <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
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
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 15,
          }}
        >
          <TextInput
            ref={(input) => (textInput = input)}
            onChangeText={onChangeText}
            value={code}
            blurOnSubmit
            keyboardType="phone-pad"
            maxLength={lengthInput}
            style={{
              height: 0,
              width: 0,
            }}
          />
          <View style={styles.inputContainer}>
            {Array(lengthInput)
              .fill()
              .map((data, index) => (
                <View
                  key={index}
                  style={[
                    styles.phoneView,
                    {
                      borderBottomColor:
                        index === code.length ? "#FB6C6A" : "#234DB7",
                    },
                  ]}
                >
                  <Text
                    style={styles.phoneText}
                    onPress={() => textInput.focus()}
                  >
                    {code && code.length > 0 ? code[index] : ""}
                  </Text>
                </View>
              ))}
          </View>
        </View>

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
          <ButtonMain style={{ width: 100 }} onPress={onPressVerifyCode}>
            Vérifier
          </ButtonMain>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  phoneView: {
    paddingVertical: 11,
    width: 40,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1.5,
  },
  phoneText: {
    textAlign: "center",
    fontSize: 16,
  },
});
