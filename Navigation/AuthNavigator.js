import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Auth from "../screens/Auth";

import SignInCostum from "../screens/SignIn2";
import Info from "../screens/app/info";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{
          headerTitle: "Authentifiez-vous",
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
  );
};

export default AuthNavigator;
