import "react-native-gesture-handler";
import React, { useContext } from "react";
import { TouchableOpacity, View, Image, Button } from "react-native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Accueil from "../screens/app/Accueil";

import MonPass from "../screens/app/MonPass";

import Donnee from "../screens/app/DonnéesScreen";
import Scanner from "../screens/app/Scann";
import Colors from "../constants/colors/Colors";
import AvantScan from "../screens/app/AvantScan";
import CentreVac from "../screens/app/CentreVac";
import Vaccin from "../screens/app/VaccinType";
import Logout from "../screens/app/Logout";

import firebase from "firebase";
import "@firebase/auth";

import AuthContext from "../auth/context";
import AuthStorage from "../auth/storage";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <View style={{ marginLeft: 10 }}>
          <Ionicons name="ios-menu" size={30} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const GoBackFunction = (props) => {
  const goBack = () => {
    props.navigationProps.goBack();
  };
  return (
    <TouchableOpacity
      style={{ marginLeft: 10, marginTop: 2 }}
      onPress={() => goBack()}
    >
      <AntDesign name="arrowleft" size={30} color="black" />
    </TouchableOpacity>
  );
};

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

  switch (routeName) {
    case "Accueil":
      return "Accueil";
    case "Scann":
      return "Vérification";
    case "Donnee":
      return "Données sur la santé";
  }
};

function Home() {
  return (
    <Stack.Navigator initialRouteName="Accueil">
      <Stack.Screen
        options={{
          title: "Accueil",
          headerShown: false,
        }}
        name="Accueil"
        component={Accueil}
      />
    </Stack.Navigator>
  );
}

function Historique({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Donnees">
      <Stack.Screen
        options={{
          headerTitle: "Mon Historique ",
          headerLeft: () => <GoBackFunction navigationProps={navigation} />,
        }}
        name="Donnees"
        component={Donnee}
      />
    </Stack.Navigator>
  );
}

function VaccinType({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="TypeVaccin">
      <Stack.Screen
        options={{
          headerTitle: "Les types des vaccins ",
          headerLeft: () => <GoBackFunction navigationProps={navigation} />,
        }}
        name="TypeVaccin"
        component={Vaccin}
      />
    </Stack.Navigator>
  );
}

function Setting({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="MonPass">
      <Stack.Screen
        options={{
          headerTitle: "MonPass",
          headerLeft: () => <GoBackFunction navigationProps={navigation} />,
        }}
        name="MonPass"
        component={MonPass}
      />
    </Stack.Navigator>
  );
}

function CentreVaccination({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="CentreVac">
      <Stack.Screen
        options={{
          headerTitle: "Les centres de vaccination",
          headerLeft: () => <GoBackFunction navigationProps={navigation} />,
        }}
        name="CentreVac"
        component={CentreVac}
      />
    </Stack.Navigator>
  );
}

function Scann() {
  return (
    <Stack.Navigator initialRouteName="AvantScan">
      <Stack.Screen
        options={{
          headerTitle: "Vérification",
          headerShown: false,
        }}
        name="AvantScan"
        component={AvantScan}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Scanner"
        component={Scanner}
      />
    </Stack.Navigator>
  );
}

function Deconnexion({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="TypeVaccin">
      <Stack.Screen name="deconnexion" component={Logout} />
    </Stack.Navigator>
  );
}

function Navigator() {
  return (
    <Tab.Navigator
      initialRouteName="Accueil"
      tabBarOptions={{
        activeTintColor: Colors.third,
      }}
    >
      <Tab.Screen
        name="Accueil"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "Accueil",
          tabBarIcon: () => <Ionicons name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Scann"
        component={Scann}
        options={{
          headerShown: false,
          tabBarLabel: "Scann",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HomeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="Navigator"
        component={Navigator}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),

          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),

          headerTintColor: "black", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const HomeNavigation = () => {
  const { user, setUser } = useContext(AuthContext).user;
  const { info, setInfo } = useContext(AuthContext).info;

  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 5 },
      }}
    >
      <Drawer.Screen
        name="HomeScreenStack"
        options={{ drawerLabel: "Accueil", headerShown: false }}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="Setting"
        options={{ drawerLabel: "MonPass", headerShown: false }}
        component={Setting}
      />
      <Drawer.Screen
        name="CentreVac"
        options={{ drawerLabel: "Centre de Vaccination", headerShown: false }}
        component={CentreVaccination}
      />
      <Drawer.Screen
        name="Donnees"
        options={{ drawerLabel: "Mon historique", headerShown: false }}
        component={Historique}
      />
      <Drawer.Screen
        name="Vaccin"
        options={{ drawerLabel: "Les types des vaccins", headerShown: false }}
        component={VaccinType}
      />
    </Drawer.Navigator>
  );
};
export default HomeNavigation;
