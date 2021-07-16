import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import tailwind from "tailwind-rn";

export default function Using() {
  return (
    <View style={tailwind("mt-20")}>
      <Text>helloooo using</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
