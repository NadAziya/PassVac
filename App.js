import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Navigator from "./Navigation/Navigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sens": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sens-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    muli: require("./assets/fonts/muli.regular.ttf"),
    "muli-bold": require("./assets/fonts/Muli-Bold.ttf"),
    "segoe-ui": require("./assets/fonts/Segoe-UI.ttf"),
    "segeo-ui-bold": require("./assets/fonts/Segoe-UI-Bold.ttf"),
  });
};

export default function App(props) {
  const [fontLoad, setFontLoad] = useState(false);

  if (!fontLoad) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoad(true)}
        onError={console.warn}
      />
    );
  }

  return <Navigator />;
}
