import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  Modal,
} from "react-native";

import { BarCodeScanner } from "expo-barcode-scanner";
import AlertVerif from "../../components/AlertVerif";
import Colors from "../../constants/colors/Colors";

export default function Accueil() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = (qrdata) => {
    const { data, nom, prenom } = JSON.parse(qrdata.data);
    setScanned(true);
    setText(data);
    setText2(nom);
    setText3(prenom);

    console.log(data);
    console.log(nom);
    console.log(prenom);
    //alert(` L'état du patient : ${data} ` );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const Verify = () => {
    if (text == "Vacciné(e) Négatif(ve)") {
      return (
        <AlertVerif
          text="GoPass valide"
          etat={text}
          style={{ backgroundColor: "green" }}
        />
      );
    } else {
      return (
        <AlertVerif
          text="GoPass invalide"
          etat={text}
          style={{ backgroundColor: "red" }}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      >
        {!scanned && (
          <View style={{ alignItems: "center" }}>
            <Text style={styles.description}>Scan your QR code</Text>
            <Image
              style={styles.qr}
              source={require("../../assets/img/QR.png")}
            />
          </View>
        )}
      </BarCodeScanner>

      {scanned && Verify()}
      {scanned && (
        <Button
          title={"Tapez pour scanner encore"}
          onPress={() => setScanned(false)}
          color={Colors.third}
        />
      )}
    </View>
  );
}
const { width } = Dimensions.get("window");
const qrSize = width * 0.7;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  barCodeView: {
    width: "100%",
    height: "50%",
    marginBottom: 40,
  },
  description: {
    fontSize: 25,
    marginTop: "10%",
    textAlign: "center",
    width: "70%",
    color: "white",
    fontWeight: "500",
  },
  qr: {
    marginTop: "20%",
    marginBottom: "20%",
    width: qrSize,
    height: qrSize,
  },
});
