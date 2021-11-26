import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const AlertVerifInit = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            borderBottomWidth: 1,
            borderBottomColor: "white",
            marginBottom: 10,
          }}
        >
          <AntDesign name="Safety" size={25} color="white" />
          <Text
            style={{
              textAlign: "center",
              fontSize: 22,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {props.text}
          </Text>
        </View>

        <View>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 17,
              fontWeight: "500",
              marginBottom: 30,
            }}
          >
            {props.etat}
          </Text>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: "white",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
                marginTop: 5,
              }}
            >
              {props.nom} {props.prenom}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AlertVerifInit;
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: "transparent",
    width: "80%",
    height: "25%",
    backgroundColor: "white",
    padding: 8,
    flexDirection: "column",

    marginBottom: 50,
    //backgroundColor: "#58CA4E",
  },
});
