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
    if (userInfo.vaccination == "Non vacciné(e)")
      return (
        <QRCode
          value={[
            {
              data: `"Invalid" ${userInfo.nom} ${userInfo.prenom}`,
              nom: `${userInfo.nom}`,
              prenom: `${userInfo.prenom}`,
            },
          ]}
          color="red"
          size={200}
        />
      );
    else if (userInfo.vaccination == "vacciné(e)") {
      return (
        <QRCode
          value={[{ data: `"valide" ${userInfo.nom} ${userInfo.prenom}` }]}
          color="green"
          size={200}
        />
      );
    }
    //if (userInfo.vaccination == "vacciné(e)" && userInfo.test == "positif") {
    // return (
    //  <QRCode
    //  logo={require("../../assets/img/valide.png")}
    //  logoSize={50}
    //    color="red"
    //  />
    //   );
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

            <Button
              title="Logout"
              onPress={async () => {
                await firebase.auth().signOut();
                AuthStorage.removeUser();
                setUser(false);
                setInfo(false);
              }}
            />
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
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Text
                style={{ marginBottom: 5, fontSize: 16, fontWeight: "600" }}
              >
                Vaccination : {userInfo.vaccination}
              </Text>
              <Text
                style={{ marginBottom: 5, fontSize: 16, fontWeight: "600" }}
              >
                Centre de vaccination : {userInfo.centre_vacc}
              </Text>
              <Text
                style={{ marginBottom: 5, fontSize: 16, fontWeight: "600" }}
              >
                Date de la 1ere dose: {userInfo.date_1dose}
              </Text>
              <Text
                style={{ marginBottom: 5, fontSize: 16, fontWeight: "600" }}
              >
                Date de la 2eme dose: {userInfo.date_2dose}
              </Text>
              <Text
                style={{ marginBottom: 5, fontSize: 16, fontWeight: "600" }}
              >
                Type du vaccin : {userInfo.type_vaccin}
              </Text>
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
