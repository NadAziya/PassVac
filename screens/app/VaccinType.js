import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "react-native-shadow-cards";
import { Fontisto } from "@expo/vector-icons";

const Vaccin = (props) => {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Text
        style={{
          fontSize: 35,
          fontWeight: "600",
          color: "blue",
          padding: 20,
        }}
      >
        Vaccins disponible en Algérie, cliquez pour en savoir plus.
      </Text>
      <View style={{ flexDirection: "column", marginTop: 30 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginBottom: 50,
          }}
        >
          <Card style={styles.card}>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => {
                props.navigation.navigate("Sinovac");
              }}
            >
              <View style={styles.view}>
                <Fontisto name="injection-syringe" size={35} color="blue" />
              </View>
              <Text style={styles.text}>Sinovac-CoronaVac</Text>
            </TouchableOpacity>
          </Card>
          <Card style={styles.card}>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => {
                props.navigation.navigate("Astrazeneca");
              }}
            >
              <View style={styles.view}>
                <Fontisto name="injection-syringe" size={35} color="blue" />
              </View>
              <Text style={styles.text}>Astrazeneca</Text>
            </TouchableOpacity>
          </Card>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Card style={styles.card}>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => {
                props.navigation.navigate("Jandj");
              }}
            >
              <View style={styles.view}>
                <Fontisto name="injection-syringe" size={35} color="blue" />
              </View>
              <Text style={styles.text}>Johnson & Johnson</Text>
            </TouchableOpacity>
          </Card>

          <Card style={styles.card}>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => {
                props.navigation.navigate("Spoutnik");
              }}
            >
              <View style={styles.view}>
                <Fontisto name="injection-syringe" size={35} color="blue" />
              </View>
              <Text style={styles.text}>Sputnik V</Text>
            </TouchableOpacity>
          </Card>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#caf0f8",
  },
  touch: {
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    fontWeight: "600",
    fontSize: 18,
    marginTop: 10,
  },
  card: {
    margin: 5,
    height: 150,
    flexDirection: "row",
    width: "35%",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Vaccin;
