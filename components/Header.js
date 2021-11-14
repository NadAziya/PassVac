import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
  Button,
} from "react-native";
import { Avatar } from "react-native-image-avatars";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors/Colors";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import firebase from "firebase";

export default function Header(props) {
  const [pickedImage, setPickedImage] = useState();

  const storage = firebase.storage();
  const ref = firebase.storage().ref();
  const db = firebase.firestore();

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA);

    if (result.status !== "granted") {
      Alert.alert(
        "Insufficiant permissions!",
        "You need to grant camera permissions to use this app.",
        [{ text: "Ok" }]
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async (uri) => {
    const hasPermissions = await verifyPermissions();
    if (!hasPermissions) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [30, 23],
      quality: 0.5,
    });

    setPickedImage(image.uri);
    props.onImageTaken(image.uri);
    //const response = await fetch(uri);
    // const blob = await response.blob();

    const imageRef = ref.child(props.id.concat(".jpg"));

    ref
      .putFile(imageRef)
      .then((snapshot) => {
        return snapshot.ref.getDownloadURL();
      })
      .then(async (downloadURL) => {
        console.log(downloadURL);
        try {
          await db.collection("users").doc(props.id).update({
            imageuri: downloadURL,
          });
          props.onImageTaken(url);
          console.log("hiiii");
        } catch (err) {
          console.log(err);
        }
        return downloadURL;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // imageRef.getDownloadURL().then(async (url) => {
  // console.log(url);

  //};

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={takeImageHandler}
          style={{
            backgroundColor: Colors.third,
            width: 150,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 5,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Ajouter une photo
          </Text>
        </TouchableOpacity>

        {!pickedImage ? (
          <Image
            style={styles.image}
            source={require("../assets/img/user.png")}
          />
        ) : (
          <Image style={styles.image} source={{ uri: pickedImage }} />
        )}
        <Text style={{ color: "red", textAlign: "center" }}>
          *La photo est obligatoire pour confirmer votre identité
        </Text>

        {/*<Ionicons.Button
          name="add-circle"
          size={40}
          color="grey"
          onPress={takeImageHandler}
          backgroundColor="transparent"
        />*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "transparent",
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    height: "100%",
    padding: 12,
    paddingTop: 50,
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 60,
  },
});
