import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Navigation from "./Navigation";
import Welcome from "../screens/Welcome";
import Using from "../screens/Using";
import Auth from "../screens/Auth";
import Otp from "../screens/Otp";
import SignIn from "../screens/SignIn";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Using" component={Using} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
