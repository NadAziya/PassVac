import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Button } from "react-native";
import tailwind from "tailwind-rn";
import Colors from "../constants/colors/Colors";

export default function Navigation({ navigation }) {
  return (
    <View style={tailwind("mt-20")}>
      <Button onPress={() => navigation.navigate("Welcome")} title="Welcome" />
      <Button
        onPress={() => navigation.navigate("Using")}
        title="Select user"
      />
      <Button
        color={Colors.primary}
        onPress={() => navigation.navigate("Auth")}
        title="Auth"
      />
      <Button
        color={Colors.secondary}
        onPress={() => navigation.navigate("Otp")}
        title="Otp"
      />
      <Button onPress={() => navigation.navigate("SignIn")} title="SignIn" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
