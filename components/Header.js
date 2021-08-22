import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Avatar } from "react-native-image-avatars";
import { Ionicons } from "@expo/vector-icons";

import WavyHeader from "./WavyHeader";

import Colors from "../constants/colors/Colors";

export default function Header() {
  return (
    <View style={styles.container}>
      <WavyHeader customStyles={styles.svgCurve} />
      <View style={styles.headerContainer}>
        <Avatar
          imageUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          size="medium"
          borderColor="#f2f2f2"
        />
        <Ionicons
          name="add-circle"
          size={40}
          color="grey"
          style={{ position: "absolute", top: 120, left: 210 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  container: {
    backgroundColor: "#fff",
  },
  headerContainer: {
    marginTop: 100,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
