import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const AlertVerif = (props) => {
  return (
    <View
      style={{
        borderRadius: 10,
        borderColor: "transparent",
        width: "75%",
        height: "20%",
        backgroundColor: "white",
        padding: 10,
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginBottom: 50,
        backgroundColor: "#58CA4E",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <AntDesign name="Safety" size={25} color="white" />
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            fontWeight: "500",
            color: "white",
          }}
        >
          {props.text}
        </Text>
      </View>

      <Text numberOfLines={1} style={{ textAlign: "center", color: "white" }}>
        _________________________________
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        {/*<AntDesign name="exclamationcircleo" size={24} color="black" />*/}
        <AntDesign name="checkcircleo" size={25} color="white" />
        <Text style={{ textAlign: "center", fontSize: 15, color: "white" }}>
          {props.nom}
        </Text>
        <Text style={{ textAlign: "center", fontSize: 15, color: "white" }}>
          {props.prenom}
        </Text>
      </View>
    </View>
  );
};

export default AlertVerif;
