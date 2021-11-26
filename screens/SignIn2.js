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
  Image,
} from "react-native";
import DatePicker from "react-native-datepicker";

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
    let cDate = new Date(dateNes);
    try {
      console.log(firebase.auth().currentUser);

      if (nom && prenom && dateNes && selectedImage) {
        await db.collection("users").doc(currentUser.phoneNumber).set({
          nom: nom,
          prenom: prenom,
          date_de_naissance: dateNes,
          vaccination: "Non-vacciné(e)",
          type_vaccin: "/",
          date_1dose: "00-00-0000",
          date_2dose: "00-00-0000",
          centre_vacc: "/",
          etat: "/",
          date_test: "00-00-0000",
          centre_test: "/",
          num_lot1: "/",
          num_lot2: "/",
          imageUri: selectedImage,
        });
        setIsLoading(false);
        props.navigation.navigate("Info");
      } else {
        setIsLoading(false);
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
      <View style={{ height: "35%" }}>
        <Header onImageTaken={imageTakenHandler} id={currentUser.phoneNumber} />
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={{ height: "70%" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 10,
            }}
          >
            <Image
              style={{
                width: 50,
                height: 50,
              }}
              source={require("../assets/img/logo.png")}
            />
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: Colors.secondary,
                marginLeft: 5,
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
                  marginBottom: 20,
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
                  marginBottom: 20,
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
              <DatePicker
                style={{ width: "85%" }}
                date={dateNes}
                mode="date"
                placeholder="Selectionner une date"
                format="DD-MM-YYYY"
                minDate="01-01-1900"
                maxDate="01-01-2022"
                confirmBtnText="Confirmer"
                cancelBtnText="Annuler"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 7,
                    marginLeft: 5,
                  },
                  dateInput: {
                    width: "70%",
                    height: 50,
                    backgroundColor: "#F6F6F6",
                    borderColor: "transparent",
                    borderRadius: 14,
                    marginTop: 10,
                  },
                }}
                onDateChange={(date) => setDateNes(date)}
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
                  marginTop: 30,
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
    marginTop: 45,
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
    //fontWeight: "bold",
  },
});
