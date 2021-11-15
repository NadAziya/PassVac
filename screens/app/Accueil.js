import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  RefreshControl,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import firebase from "firebase";
import "@firebase/auth";

import { Card } from "react-native-shadow-cards";
import { MaterialIcons } from "@expo/vector-icons";

import { Fontisto } from "@expo/vector-icons";

import { QRCode } from "react-native-custom-qr-codes-expo";

import MaSante from "../../components/AccueilComponents/MaSante";
import Colors from "../../constants/colors/Colors";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Accueil = (props, navigation) => {
  const [loading, setLoading] = useState(false);

  const [userInfo, setUserInfo] = useState([]);

  const [refreshing, setRefreshing] = useState(false);
  const db = firebase.firestore();

  const getUser = useCallback(async () => {
    setLoading(true);
    setRefreshing(true);
    try {
      let currentUser = firebase.auth().currentUser;
      const profile = db
        .collection("users")
        .doc(currentUser.phoneNumber)
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
            setUserInfo(snapshot.data());

            setLoading(false);
            setRefreshing(false);
          } else {
          }
        });
    } catch (err) {
      console.log(err.message);
    }
  });

  useEffect(() => {
    getUser();
  }, []);

  const renderElement = () => {
    if (userInfo.vaccination == "Non vacciné(e)") {
      if (userInfo.etat == "Négatif(ve)" || userInfo.etat == "/") {
        return (
          <MaSante
            style={{ backgroundColor: "#9D99C9" }}
            children=" Rendez-vous au centre de vaccination, "
            text="afin de vous munir d'un code QR
      valide"
          />
        );
      } else {
        return (
          <MaSante
            style={{ backgroundColor: "red" }}
            children="Isolemment recommandé,"
            text=" Veuillez patienter 03mois pour être vacciné(e), respectez les gestes barriéres et protégez ainsi vos proches;"
          />
        );
      }
    } else {
      if (
        (userInfo.etat == "Négatif(ve)" || userInfo.etat == "/") &&
        userInfo.date_2dose == "00-00-0000"
      ) {
        return (
          <MaSante
            style={{ backgroundColor: "orange" }}
            children="Vacciné(e) d'une seule dose,"
            text="N'oubliez pas votre rappel ! restez vigilant en respectant toujours les gestes barriéres. "
          />
        );
      } else if (
        userInfo.etat == "Positif(ve)" &&
        userInfo.date_2dose == "00-00-0000"
      ) {
        return (
          <MaSante
            style={{ backgroundColor: "red" }}
            children="Isolemment recommandé, vacciné(e) d'une seule dose,"
            text=" Je m'isole immédiatement après 
        avoir reçu mon résultat. "
          />
        );
      } else {
        if (
          (userInfo.etat == "Négatif(ve)" || userInfo.etat == "/") &&
          userInfo.date_2dose !== "00-00-0000"
        ) {
          return (
            <MaSante
              style={{ backgroundColor: "green" }}
              children="Mon Pass sanitaire est valide,"
              text="je présente mon GoPass en ayant éffectué(e) mon vaccin et étant négatif(ve) au COVID-19."
            />
          );
        } else if (
          userInfo.etat == "Positif(ve)" &&
          userInfo.date_2dose !== "00-00-0000"
        ) {
          return (
            <MaSante
              style={{ backgroundColor: "red" }}
              children="Isolemment recommandé, vacciné(e) totalement,"
              text=" Je m'isole immédiatement après 
        avoir reçu mon résultat. "
            />
          );
        }
      }
    }
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        height: "100%",
        flexDirection: "column",
      }}
    >
      {loading ? (
        <ActivityIndicator
          size="large"
          color="black"
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        />
      ) : (
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getUser} />
          }
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              padding: 5,
              paddingLeft: 15,
            }}
          >
            Ma Santé
          </Text>

          {renderElement()}
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              padding: 5,
              paddingLeft: 15,
              marginTop: 15,
            }}
          >
            Pass sanitaire
          </Text>
          <TouchableOpacity
            style={{ justifyContent: "center", alignItems: "center" }}
            onPress={() => {
              props.navigation.navigate("Setting");
            }}
          >
            <Card style={styles.card}>
              <View
                style={{
                  height: 75,
                  width: 75,
                  borderRadius: 40,
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 59,
                    height: 90,
                  }}
                  source={require("../../assets/img/passe.png")}
                />
                <View style={{ marginLeft: 10 }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      marginBottom: 5,
                    }}
                  >
                    Ouvrir mon GoPass
                  </Text>
                  <Text>accéder à mon certificat de vaccination. </Text>
                </View>
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ justifyContent: "center", alignItems: "center" }}
            onPress={() => {
              props.navigation.navigate("Vaccin");
            }}
          >
            <Card style={styles.card}>
              <View style={styles.viewIcon}>
                <Fontisto name="injection-syringe" size={40} color="white" />
              </View>
              <View style={{ marginLeft: 10, flex: 3 }}>
                <Text style={styles.titleCard}>
                  Quels sont les vaccins disponible?
                </Text>
                <Text>
                  afficher les informations sur les vaccins disponibles en
                  Algérie.
                </Text>
              </View>
            </Card>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              padding: 5,
              paddingLeft: 15,
            }}
          >
            Historique
          </Text>
          <TouchableOpacity
            style={{ justifyContent: "center", alignItems: "center" }}
            onPress={() => {
              props.navigation.navigate("Donnees");
            }}
          >
            <Card style={styles.card}>
              <View style={styles.viewIcon}>
                <MaterialIcons name="history" size={40} color="white" />
              </View>
              <View style={{ marginLeft: 10, flex: 3 }}>
                <Text style={styles.titleCard}>
                  Voir l'historique de mes tests PCR
                </Text>
                <Text>afficher les données relative 0 mes tests.</Text>
              </View>
            </Card>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
};
export default Accueil;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
    height: "100%",
    flexDirection: "column",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",

    borderRadius: 20,
    padding: 10,
    height: 105,
    width: "96%",
    marginBottom: 18,
  },
  titleCard: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  viewIcon: {
    height: 75,
    width: 75,
    borderRadius: 40,
    backgroundColor: Colors.third,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
