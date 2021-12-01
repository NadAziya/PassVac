import React, { useState, useRef, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

import firebase from "firebase";

import ButtonMain from "../components/MainButton";
import Input from "../components/Input";
import AuthContext from "../auth/context";
import AuthStorage from "../auth/storage";

export default function Auth(props, navigation) {
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(" ");
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);

  const { user, setUser } = useContext(AuthContext).user;

  const recaptchaVerifier = useRef(null);

  const db = firebase.firestore();

  const sendVerification = () => {
    if (phoneNumber.length < 13) {
      Alert.alert(
        "Erreur",
        "Veuillez saisir un numero précéder de +213 et la suite de votre numero sans 0",
        [{ text: "OK" }]
      );
    } else {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      phoneProvider
        .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
        .then(setVerificationId);
    }
  };

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)

      .then(async (result) => {
        setIsLoading(true);
        try {
          await db.collection("users").doc(result.user.phoneNumber).set({
            nom: "null",
            prenom: "null",
            date_de_naissance: "00/00/0000",
            type_vaccin: "/",
            date_1dose: "00/00/0000",
            date_2dose: "00/00/0000",
            centre_vacc: "Null",
            etat: "/",
            date_test: "00/00/0000",
            centre_test: "/",
          });
          setIsLoading(false);
          AuthStorage.storeUser(result.user.uid);
          setUser(result.user.uid);

          props.navigation.navigate("SignInCostum");
        } catch (e) {
          console.log(e);
        }
      })
      .catch((err) => {
        if (err) {
          return alert("Code incorrect");
        }
        console.log(err);
      });
  };

  if (!verificationId)
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebase.app().options}
        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 40,
                height: "30%",
              }}
            >
              <Image
                style={styles.image}
                source={require("../assets/img/confirmed.png")}
              />
            </View>
            <Text
              style={{ textAlign: "center", fontWeight: "700", fontSize: 18 }}
            >
              Entrez votre numéro de téléphone
            </Text>
            <Text
              style={{
                fontFamily: "open-sens",
                fontSize: 15,
                color: "gray",
                textAlign: "center",
                marginHorizontal: 16,
                marginVertical: 25,
              }}
            >
              Vous recevrez un code à 6 chiffres pour effectuer la validation
            </Text>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Input
                placeholder="+213000000000"
                blurOnSubmit
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                secureTextEntry={false}
                style={{ width: "80%", height: 55, marginBottom: 15 }}
              />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <ButtonMain
                style={{ width: 130, height: 40 }}
                onPress={sendVerification}
              >
                Continuer
              </ButtonMain>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  else
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
        style={styles.container}
      >
        <View
          style={{ width: "100%", height: "100%", backgroundColor: "white" }}
        >
          <Text
            style={{
              fontFamily: "open-sens-bold",
              fontSize: 24,
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Saisir le code de confirmation
          </Text>
          <Text
            style={{
              fontFamily: "open-sens",
              color: "gray",
              textAlign: "center",
              marginTop: 45,
            }}
          >
            Un SMS a été envoyé au {phoneNumber}
          </Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 15,
            }}
          >
            <Input
              style={{ height: 55, width: 220 }}
              placeholder="saisissez le code reçu"
              onChangeText={setCode}
              keyboardType="number-pad"
            />
          </View>

          <Text
            style={{
              marginTop: 25,
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
              marginTop: 40,
            }}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="black" />
            ) : (
              <ButtonMain
                style={{ width: 150, height: 40 }}
                onPress={confirmCode}
              >
                Vérifier
              </ButtonMain>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
  container: { width: "100%", height: "100%", backgroundColor: "white" },
  image: {
    width: 150,
    height: 200,
  },
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
