import React, { useContext } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import firebase from "firebase";
import "@firebase/auth";
import AuthContext from "../auth/context";
import AuthStorage from "../auth/storage";

const CustomDrawer = (props) => {
  const { user, setUser } = useContext(AuthContext).user;
  const { info, setInfo } = useContext(AuthContext).info;

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 5, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity
          onPress={async () => {
            await firebase.auth().signOut();
            AuthStorage.removeUser();
            setUser(false);
            setInfo(false);
          }}
          style={{ paddingVertical: 15, marginLeft: 10 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,

                marginLeft: 6,
              }}
            >
              Deconnexion
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
