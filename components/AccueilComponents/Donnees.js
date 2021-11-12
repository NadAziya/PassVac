import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import Colors from "../../constants/colors/Colors";

const Donnees = (props, navigation) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.viewContainer}>
        <View style={{ flexDirection: "column", justifyContent: "center" }}>
          <Text style={{ marginVertical: 5, fontWeight: "700", fontSize: 18 }}>
            test PCR {props.TestResult}
          </Text>
          <Text style={{ color: "#9e9e9e", fontSize: 15 }}>
            {props.TestDate}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingRight: 10,
          }}
        >
          <MaterialIcons name="arrow-forward-ios" size={33} color="blue" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: "row",
    width: "100%",
    paddingLeft: 15,
    height: 80,
    borderWidth: 0.4,
    borderBottomColor: "blue",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
});

export default Donnees;
