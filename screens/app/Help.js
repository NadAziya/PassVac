import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Help = (props, navigation) => {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          props.navigation.navigate("HelpPass");
        }}
      >
        <Text style={styles.text}>Comment avoir mon GoPass ?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          props.navigation.navigate("HelpScan");
        }}
      >
        <Text style={styles.text}>Qui peut scanner mon GoPass ?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          props.navigation.navigate("HelpHisto");
        }}
      >
        <Text style={styles.text}>
          Comment je peut accéder aux tests que j'ai effectuer ?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          props.navigation.navigate("HelpDetailCentre");
        }}
      >
        <Text style={styles.text}>
          Comment afficher plus de détails d'un centre de vaccination ?
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Help;
const styles = StyleSheet.create({
  touchable: {
    height: 75,
    padding: 5,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#9e9e9e",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  text: {
    fontSize: 17,
    fontWeight: "400",
  },
});
