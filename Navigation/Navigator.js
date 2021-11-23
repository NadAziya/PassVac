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
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Accueil from "../screens/app/Accueil";
import MonPass from "../screens/app/MonPass";
import Donnee from "../screens/app/DonnéesScreen";
import Scanner from "../screens/app/Scann";
import Colors from "../constants/colors/Colors";
import AvantScan from "../screens/app/AvantScan";
import CentreVac from "../screens/app/CentreVac";
import Vaccin from "../screens/app/VaccinType";
import Help from "../screens/app/Help";

import Sinovac from "../screens/app/Sinovac";
import Astrazeneca from "../screens/app/Astrazeneca";
import Spoutnik from "../screens/app/Spoutnik";
import Jandj from "../screens/app/Jandj";

import CustomDrawer from "../components/CustomDrawer";

import firebase from "firebase";
import "@firebase/auth";

import AuthContext from "../auth/context";
import AuthStorage from "../auth/storage";
import HelpPass from "../screens/HelpScreens/HelpPass";
import HelpScan from "../screens/HelpScreens/HelpScan";
import HelpDetaiCentre from "../screens/HelpScreens/HelpDetailCentre";
import HelpHisto from "../screens/HelpScreens/HelpHisto";

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
      <AntDesign name="arrowleft" size={35} color="black" />
    </TouchableOpacity>
  );
};

const GoBackTypeVaccin = (props) => {
  const goBack = () => {
    props.navigation.navigate("TypeVaccin");
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

const GoBackHelp = (props) => {
  const goBack = () => {
    props.navigation.navigate("Help");
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
      <Stack.Screen
        options={{
          headerTitle: "Sinovac",
          headerLeft: () => <GoBackTypeVaccin navigation={navigation} />,
        }}
        name="Sinovac"
        component={Sinovac}
      />
      <Stack.Screen
        options={{
          headerTitle: "Spoutnik",
          headerLeft: () => <GoBackTypeVaccin navigation={navigation} />,
        }}
        name="Spoutnik"
        component={Spoutnik}
      />
      <Stack.Screen
        options={{
          headerTitle: "Jonhson & Jonhson",
          headerLeft: () => <GoBackTypeVaccin navigation={navigation} />,
        }}
        name="Jandj"
        component={Jandj}
      />
      <Stack.Screen
        options={{
          headerTitle: "Astrazeneca",
          headerLeft: () => <GoBackTypeVaccin navigation={navigation} />,
        }}
        name="Astrazeneca"
        component={Astrazeneca}
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
      <Stack.Screen
        options={{
          headerTitle: "Aide",
          headerLeft: () => <GoBackHelp navigation={navigation} />,
        }}
        name="HelpPass"
        component={HelpPass}
      />
      <Stack.Screen
        options={{
          headerTitle: "Aide",
          headerLeft: () => <GoBackHelp navigation={navigation} />,
        }}
        name="HelpScan"
        component={HelpScan}
      />
      <Stack.Screen
        options={{
          headerTitle: "Aide",
          headerLeft: () => <GoBackHelp navigation={navigation} />,
        }}
        name="HelpDetailCentre"
        component={HelpDetaiCentre}
      />
      <Stack.Screen
        options={{
          headerTitle: "Aide",
          headerLeft: () => <GoBackHelp navigation={navigation} />,
        }}
        name="HelpHisto"
        component={HelpHisto}
      />
    </Stack.Navigator>
  );
}
function Aide({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Help">
      <Stack.Screen
        options={{
          headerTitle: "Aide",
          headerLeft: () => <GoBackFunction navigationProps={navigation} />,
        }}
        name="Help"
        component={Help}
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
    <Stack.Navigator initialRouteName="Accueil">
      <Stack.Screen
        name="Accueil"
        component={Navigator}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),

          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),

          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
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
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="HomeScreenStack"
        options={{
          drawerLabel: "Accueil",
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="Setting"
        options={{
          drawerLabel: "Mon Pass",
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Ionicons name="qr-code" size={22} color={color} />
          ),
        }}
        component={Setting}
      />
      <Drawer.Screen
        name="CentreVac"
        options={{
          drawerLabel: "Centre de Vaccination",
          headerShown: false,
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="hospital-symbol" size={22} color={color} />
          ),
        }}
        component={CentreVaccination}
      />
      <Drawer.Screen
        name="Donnees"
        options={{
          drawerLabel: "Mon historique",
          headerShown: false,
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="history" size={22} color={color} />
          ),
        }}
        component={Historique}
      />
      <Drawer.Screen
        name="Vaccin"
        options={{
          drawerLabel: "Les types des vaccins",
          headerShown: false,
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="syringe" size={22} color={color} />
          ),
        }}
        component={VaccinType}
      />
      <Drawer.Screen
        name="HelpAide"
        options={{
          drawerLabel: "Aide et FAQ",
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Entypo name="help-with-circle" size={22} color={color} />
          ),
        }}
        component={Aide}
      />
    </Drawer.Navigator>
  );
};
export default HomeNavigation;
