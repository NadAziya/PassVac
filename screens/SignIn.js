import React, { useState } from "react";
import { StyleSheet, View, Text, CheckBox } from "react-native";
import { Avatar } from "react-native-image-avatars";
import { Ionicons } from "@expo/vector-icons";

import ButtonMain from "../components/MainButton";
import Input from "../components/Input";
import Colors from "../constants/colors/Colors";
//import CheckBox from "@react-native-community/checkbox";

export default function SignIn() {
  //const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "white" }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 16,
          height: "25%",
        }}
      >
        <Avatar
          imageUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          size="medium"
          borderColor="#f2f2f2"
        />
        <Ionicons
          name="add-circle"
          size={40}
          color={Colors.secondary}
          style={{ position: "absolute", top: 115, left: 200 }}
        />
      </View>
      <View style={styles.viewInput}>
        <Input
          style={{ marginBottom: 10, width: "85%", height: 40 }}
          placeholder="Nom"
          autoCapitalize="sentences"
          blurOnSubmit
        />

        <Input
          style={{ marginBottom: 10, width: "85%", height: 40 }}
          placeholder="Prénom"
          autoCapitalize="sentences"
          blurOnSubmit
        />

        <Input
          placeholder="12 / 12 / 1998"
          autoCapitalize="sentences"
          blurOnSubmit
          style={{ marginBottom: 10, width: "85%", height: 40 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "10%",
        }}
      >
        {/* <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        /> */}
        <Text
          style={{
            marginTop: 2,
          }}
        >
          J'accepte tous les termes et les conditions
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonMain style={{ width: 100 }}>Sign in</ButtonMain>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 10,
    width: "100%",
    height: "30%",
  },
});
