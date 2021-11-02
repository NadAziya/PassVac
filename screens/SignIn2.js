import React, { useState, useCallback, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  ScrollView,
  Alert,
} from "react-native";
import DatePicker from "@dietime/react-native-date-picker";

import { useDispatch } from "react-redux";

import firebase from "firebase";

import * as userActions from "../store/Actions/userAction";

import Header from "../components/Header";
import ButtonMain from "../components/MainButton";
import Input from "../components/Input";

import { CheckBox } from "react-native-elements";
import Colors from "../constants/colors/Colors";
import { useNavigation } from "@react-navigation/core";

export default function SignInCostum(props, navigation) {
  const [isLoading, setIsLoading] = useState(false);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [dateNes, setDateNes] = useState("");

  const dispatch = useDispatch();

  const [selectedImage, setImage] = useState();

  const imageTakenHandler = (imagePath) => {
    setImage(imagePath);
    console.log(imagePath);
  };
  const db = firebase.firestore();
  let currentUser = firebase.auth().currentUser;
  const onSigninHandler = async () => {
    setIsLoading(true);
    try {
      console.log(firebase.auth().currentUser);

      if (nom && prenom && dateNes && selectedImage) {
        await db.collection("users").doc(currentUser.phoneNumber).set({
          nom: nom,
          prenom: prenom,
          date_de_naissance: dateNes,
          vaccination: "Non vacciné(e)",
          type_vaccin: "/",
          date_1dose: "00-00-0000",
          date_2dose: "00-00-0000",
          centre_vacc: "Null",
          etat: "/",
          date_test: "00-00-0000",
          centre_test: "/",
          imageUri: selectedImage,
        });
        setIsLoading(false);
        props.navigation.navigate("Info");
      } else {
        Alert.alert("ERREUR !", "Veuillez remplir les champs correctement.", [
          { text: "Ok" },
        ]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ height: "30%" }}>
        <Header onImageTaken={imageTakenHandler} id={currentUser.phoneNumber} />
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={{ height: "70%" }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: Colors.third,
              }}
            >
              GoPass
            </Text>
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.label}>Nom </Text>
            <View style={styles.inputCenter}>
              <Input
                value={nom}
                onChangeText={(value) => setNom(value)}
                style={{
                  marginBottom: 15,
                  width: "85%",
                  height: 50,
                  backgroundColor: "#F6F6F6",
                  borderColor: "transparent",
                  borderRadius: 14,
                }}
                autoCapitalize="sentences"
                blurOnSubmit
              />
            </View>
            <Text style={styles.label}>Prénom </Text>
            <View style={styles.inputCenter}>
              <Input
                value={prenom}
                onChangeText={(value) => setPrenom(value)}
                style={{
                  marginBottom: 15,
                  width: "85%",
                  height: 50,
                  backgroundColor: "#F6F6F6",
                  borderColor: "transparent",
                  borderRadius: 14,
                }}
                autoCapitalize="sentences"
                blurOnSubmit
              />
            </View>
            <Text style={styles.label}>Date de naissance </Text>
            <View style={styles.inputCenter}>
              <Input
                value={dateNes}
                onChangeText={(value) => setDateNes(value)}
                autoCapitalize="sentences"
                blurOnSubmit
                style={{
                  marginBottom: 15,
                  width: "85%",
                  height: 50,
                  backgroundColor: "#F6F6F6",
                  borderColor: "transparent",
                  borderRadius: 14,
                }}
              />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            {isLoading ? (
              <ActivityIndicator size="small" color="black" />
            ) : (
              <ButtonMain
                onPress={onSigninHandler}
                style={{
                  display: "flex",
                  width: 330,
                  height: 50,
                  justifyContent: "center",
                  marginTop: 15,
                }}
              >
                S'enregistrer
              </ButtonMain>
            )}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: "100%", width: "100%", backgroundColor: "white" },
  viewInput: {
    marginTop: 70,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  inputCenter: { alignItems: "center", justifyContent: "center" },
  label: {
    marginLeft: 33,
    marginBottom: 5,
    color: "gray",
    fontWeight: "bold",
  },
});
