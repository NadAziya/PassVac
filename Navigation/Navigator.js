import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Auth from "../screens/Auth";
import Otp from "../screens/Otp";

import SignInCostum from "../screens/SignIn2";
import Info from "../screens/app/info";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInCostum">
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{
            headerTitle: "Authentifiez-vous",
          }}
        />
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{
            headerTitle: "Vérifier le code",
          }}
        />

        <Stack.Screen
          name="SignInCostum"
          component={SignInCostum}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Info"
          component={Info}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
