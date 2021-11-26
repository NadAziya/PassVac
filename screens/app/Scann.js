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

import Colors from "../../constants/colors/Colors";
import AlertVerifV from "../../components/AlertVerifV";
import AlertVerifNV from "../../components/AlertVerifNV";
import AlertVerifInit from "../../components/AlertVerifInit";

export default function Accueil() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState();
  const [text2, setText2] = useState();
  const [text3, setText3] = useState();
  const [text4, setText4] = useState();
  const [text5, setText5] = useState();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = (qrdata) => {
    const { data, nom, prenom, dateVac, dateTest } = JSON.parse(qrdata.data);
    setScanned(true);
    setText(data);
    setText2(nom);
    setText3(prenom);
    setText4(dateVac);
    setText5(dateTest);
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
        <AlertVerifV
          text="GoPass valide"
          etat={text}
          nom={text2}
          prenom={text3}
          dateVac={text4}
          dateTest={text5}
          style={{ backgroundColor: "green" }}
        />
      );
    }
    if (text == "Donnée non existante") {
      return (
        <AlertVerifInit
          text="GoPass invalide"
          etat={text}
          nom={text2}
          prenom={text3}
          style={{ backgroundColor: "red" }}
        />
      );
    }

    if (text == "Vacciné(e) Positif(ve)") {
      return (
        <AlertVerifV
          text="GoPass Invalide"
          etat={text}
          dateVac={text4}
          dateTest={text5}
          nom={text2}
          prenom={text3}
          style={{ backgroundColor: "red" }}
        />
      );
    }

    if (text == "Non vacciné(e) Positif(ve)") {
      return (
        <AlertVerifNV
          text="GoPass Invalide"
          etat={text}
          dateTest={text5}
          nom={text2}
          prenom={text3}
          style={{ backgroundColor: "red" }}
        />
      );
    }
    if (text == "Non vacciné(e) Négatif(ve)") {
      return (
        <AlertVerifNV
          text="GoPass Invalide"
          etat={text}
          dateTest={text5}
          nom={text2}
          prenom={text3}
          style={{ backgroundColor: "red" }}
        />
      );
    }
    if (text == "Vacciné(e) 1dose Négatif(ve)") {
      return (
        <AlertVerifNV
          text="GoPass Invalide"
          etat={text}
          dateTest={text5}
          nom={text2}
          prenom={text3}
          style={{ backgroundColor: "red" }}
        />
      );
    }
    if (text == "Vacciné(e) 1dose Positif(ve)") {
      return (
        <AlertVerifNV
          text="GoPass Invalide"
          etat={text}
          dateTest={text5}
          nom={text2}
          prenom={text3}
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
