import "react-native-gesture-handler";
import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import userReducer from "./store/Reducers/userReducer";

import * as firebase from "firebase";

import "@firebase/auth";

import HomeNavigation from "./Navigation/Navigator";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./Navigation/AuthNavigator";
import AuthContext from "./auth/context";
import AuthStorage from "./auth/storage";
import SignIn2 from "./screens/SignIn2";

const rootReducer = combineReducers({
  users: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App(props) {
  const [fontLoad, setFontLoad] = useState(false);
  const [user, setUser] = useState(false);
  const [info, setInfo] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyB9vOF7fgNTrP7tElOi2PYdsHW8pjX2i-Q",
    authDomain: "gopass-de5b1.firebaseapp.com",
    projectId: "gopass-de5b1",
    storageBucket: "gopass-de5b1.appspot.com",
    messagingSenderId: "812338762944",
    appId: "1:812338762944:web:6a74c5dec525e23ed60925",
    measurementId: "G-NJ2NB561KL",
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const fetchFonts = async () => {
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     setUser(user);
    //   }
    // });

    const infoBackup = await AuthStorage.getInfo();
    const userBackup = await AuthStorage.getUser();

    if (!userBackup) {
      setUser(false);
    } else {
      setUser(userBackup);
    }

    if (!infoBackup) {
      setInfo(false);
    } else {
      setInfo(true);
    }

    return Font.loadAsync({
      "open-sens": require("./assets/fonts/OpenSans-Regular.ttf"),
      "open-sens-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
      muli: require("./assets/fonts/muli.regular.ttf"),
      "muli-bold": require("./assets/fonts/Muli-Bold.ttf"),
      "segoe-ui": require("./assets/fonts/Segoe-UI.ttf"),
      "segeo-ui-bold": require("./assets/fonts/Segoe-UI-Bold.ttf"),
    });
  };

  if (!fontLoad) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoad(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <AuthContext.Provider
        value={{
          user: { user, setUser },
          info: { info, setInfo },
        }}
      >
        <NavigationContainer>
          {user && info ? <HomeNavigation /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
  );
}
