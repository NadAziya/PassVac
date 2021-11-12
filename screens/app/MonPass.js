import React, { useContext, useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Button,
  Image,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from "react-native";
import firebase from "firebase";
import "@firebase/auth";
import AuthContext from "../../auth/context";
import AuthStorage from "../../auth/storage";
import Colors from "../../constants/colors/Colors";
import { Backdrop } from "react-native-backdrop";

//import { QRCode } from "react-native-custom-qr-codes-expo";
import QRCode from "react-native-qrcode-svg";
import DetailPass from "../../components/DetailPass";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const MonPass = ({ props, navigation }) => {
  const { user, setUser } = useContext(AuthContext).user;
  const { info, setInfo } = useContext(AuthContext).info;
  const [loading, setLoading] = useState(false);

  const [userInfo, setUserInfo] = useState([]);
  const [visible, setVisible] = useState(false);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

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
      if (userInfo.etat == "Negatif(ve)" || userInfo.etat == "/") {
        return (
          <QRCode
            value={[
              {
                data: `   Invalid ${userInfo.nom} ${userInfo.prenom}`,
                nom: `${userInfo.nom}`,
                prenom: `${userInfo.prenom}`,
              },
            ]}
            color="black"
            size={200}
          />
        );
      } else {
        return (
          <QRCode
            value={[
              {
                data: `  Invalid ${userInfo.nom} ${userInfo.prenom}`,
                nom: `${userInfo.nom}`,
                prenom: `${userInfo.prenom}`,
              },
            ]}
            size={200}
            color="red"
          />
        );
      }
    } else {
      if (
        (userInfo.etat == "Negatif(ve)" || userInfo.etat == "/") &&
        userInfo.date_2dose == "00-00-0000"
      ) {
        return (
          <QRCode
            value={[
              {
                data: ` Invalid ${userInfo.nom} ${userInfo.prenom}`,
                nom: `${userInfo.nom}`,
                prenom: `${userInfo.prenom}`,
              },
            ]}
            color="orange"
            size={200}
          />
        );
      } else if (
        userInfo.etat == "Positif(ve)" &&
        userInfo.date_2dose == "00-00-0000"
      ) {
        return (
          <QRCode
            value={[
              {
                data: ` Invalid ${userInfo.nom} ${userInfo.prenom}`,
                nom: `${userInfo.nom}`,
                prenom: `${userInfo.prenom}`,
              },
            ]}
            color="red"
            size={200}
          />
        );
      } else {
        if (
          (userInfo.etat == "Negatif(ve)" || userInfo.etat == "/") &&
          userInfo.date_2dose !== "00-00-0000"
        ) {
          return (
            <QRCode
              value={[
                {
                  data: `valide ${userInfo.nom} ${userInfo.prenom}`,
                  nom: `${userInfo.nom}`,
                  prenom: `${userInfo.prenom}`,
                },
              ]}
              color="green"
              logo={require("../../assets/img/valide.png")}
              logoSize={50}
              size={200}
            />
          );
        } else if (
          userInfo.etat == "Positif(ve)" &&
          userInfo.date_2dose !== "00-00-0000"
        ) {
          return (
            <QRCode
              value={[
                {
                  data: ` Invalid ${userInfo.nom} ${userInfo.prenom}`,
                  nom: `${userInfo.nom}`,
                  prenom: `${userInfo.prenom}`,
                },
              ]}
              color="red"
              logo={require("../../assets/img/valide.png")}
              logoSize={50}
              size={200}
            />
          );
        }
      }
    }
  };

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
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
          <View
            style={{
              height: "20%",

              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DetailPass
              vaccination={userInfo.vaccination}
              dose={userInfo.date_2dose}
              onPress={() => setVisible(true)}
            />
          </View>
          <View
            style={{
              flexDirection: "column",

              height: "30%",
            }}
          >
            <View style={{ alignItems: "center" }}>
              {renderElement()}

              <Text style={{ color: "#C0C0C0" }}>h251gdqs6gf4th94qs68f4</Text>
            </View>
            <View style={{ height: "45%", alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: Colors.third,
                  borderRadius: 60,
                  borderColor: "transparent",
                  height: 40,
                  width: 350,

                  justifyContent: "center",

                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 18,
                  }}
                >
                  Information personnelle
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  marginHorizontal: 30,
                }}
              >
                <Image
                  style={{ width: 90, height: 90, borderRadius: 45 }}
                  source={{ uri: userInfo.imageUri }}
                />
              </View>
              <View>
                <Text style={{ color: "gray", fontSize: 16 }}>Nom :</Text>
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 18,
                    marginBottom: 15,
                  }}
                >
                  {userInfo.nom}
                </Text>
                <Text style={{ color: "gray", fontSize: 16 }}>Prénom :</Text>
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 18,
                    marginBottom: 15,
                  }}
                >
                  {userInfo.prenom}
                </Text>
                <Text style={{ color: "gray", fontSize: 16 }}>
                  Date de naissance :
                </Text>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  {userInfo.date_de_naissance}
                </Text>
              </View>
            </View>

            {/*   <Button
              title="Logout"
              onPress={async () => {
                await firebase.auth().signOut();
                AuthStorage.removeUser();
                setUser(false);
                setInfo(false);
              }}
            />*/}
          </View>
          <Backdrop
            visible={visible}
            handleOpen={handleOpen}
            handleClose={handleClose}
            onClose={() => {}}
            swipeConfig={{
              velocityThreshold: 0.3,
              directionalOffsetThreshold: 80,
            }}
            animationConfig={{
              speed: 14,
              bounciness: 4,
            }}
            yarn
            overlayColor="rgba(0,0,0,0.8)"
            backdropStyle={{
              backgroundColor: "#fff",
            }}
          >
            <View
              style={{
                justifyContent: "space-around",
                marginLeft: 10,
                padding: 10,
                height: 300,
                marginBottom: 10,
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      marginRight: 10,
                      color: "green",
                    }}
                  >
                    Preuve de vaccination
                  </Text>
                  {userInfo.vaccination === "vacciné(e)" ? (
                    <MaterialIcons name="verified" size={40} color="green" />
                  ) : (
                    <Entypo name="circle-with-cross" size={40} color="red" />
                  )}
                </View>
                <Text
                  numberOfLines={1}
                  style={{
                    textAlign: "center",
                    color: "#C0C0C0",
                    fontWeight: "300",
                  }}
                >
                  _________________________________
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 18, color: "gray", fontWeight: "300" }}
                >
                  Vaccination :
                </Text>
                <Text
                  style={{ fontSize: 18, fontWeight: "500", marginLeft: 10 }}
                >
                  {userInfo.vaccination}{" "}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 18, color: "gray", fontWeight: "300" }}
                >
                  Type du vaccin :
                </Text>
                <Text
                  style={{ fontSize: 18, fontWeight: "500", marginLeft: 10 }}
                >
                  {userInfo.type_vaccin}{" "}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 18, color: "gray", fontWeight: "300" }}
                >
                  Date dose 1 :
                </Text>
                <Text
                  style={{ fontSize: 18, fontWeight: "500", marginLeft: 10 }}
                >
                  {userInfo.date_1dose}{" "}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 18, color: "gray", fontWeight: "300" }}
                >
                  Date dose 2 :
                </Text>
                <Text
                  style={{ fontSize: 18, fontWeight: "500", marginLeft: 10 }}
                >
                  {userInfo.date_2dose}{" "}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 18, color: "gray", fontWeight: "300" }}
                >
                  Centre de vaccination :
                </Text>
                <Text
                  style={{ fontSize: 18, fontWeight: "500", marginLeft: 10 }}
                >
                  {userInfo.centre_vacc}{" "}
                </Text>
              </View>
            </View>
          </Backdrop>
        </ScrollView>
      )}
    </View>
  );
};

export default MonPass;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
    height: "100%",
  },
});
