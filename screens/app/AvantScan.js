import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/colors/Colors";

const AvantScan = (props, navigation) => {
  return (
    <ScrollView style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 350, height: 350 }}
          source={require("../../assets/img/scanme.jpg")}
        />
      </View>

      <View>
        <Text
          style={{
            fontSize: 22,
            textAlign: "center",
            padding: 4,
            fontWeight: "500",
            marginTop: 10,
          }}
        >
          Vérification des preuves de vaccination et de test
        </Text>

        <Text
          style={{
            fontWeight: "400",
            fontSize: 18,
            textAlign: "center",
            marginTop: 18,
            marginBottom: 35,
          }}
        >
          Seules les autorités compétentes sont autorisées a scanner et a
          vérifier cette preuve !
        </Text>
      </View>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <TouchableHighlight
          style={styles.btnClickContain}
          onPress={() => {
            props.navigation.navigate("Scanner");
          }}
        >
          <View style={styles.btnContainer}>
            <Ionicons
              style={styles.btnIcon}
              name="qr-code-outline"
              size={24}
              color="white"
            />
            <Text style={styles.btnText}> Ouvrir le vérificateur</Text>
          </View>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  btnClickContain: {
    backgroundColor: Colors.third,
    width: 250,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    fontSize: 18,
    color: "white",
  },
});

export default AvantScan;
