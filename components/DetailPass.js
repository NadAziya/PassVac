import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

import { Card } from "react-native-shadow-cards";
import { AntDesign } from "@expo/vector-icons";

const DetailPass = (props) => {
  return (
    <Card style={{ ...styles.card, ...props.style }}>
      <View>
        <Image
          style={{
            width: 75,
            height: 75,
            borderRadius: 40,
            borderWidth: 2,
            borderColor: "blue",
          }}
          source={require("../assets/img/vaccin.png")}
        />
      </View>

      <View style={{ marginTop: 6, width: "60%" }}>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 15,
            textAlign: "center",
          }}
        >
          {props.vaccination}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
        }}
        onPress={props.onPress}
      >
        <AntDesign name="downcircle" size={40} color="blue" />
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
    padding: 10,
    height: 92,
    width: "96%",
  },
});

export default DetailPass;
