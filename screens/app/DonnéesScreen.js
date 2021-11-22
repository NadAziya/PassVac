import React, { useState, useEffect, useCallback } from "react";
import {
  ScrollView,
  StyleSheet,
  Pressable,
  Modal,
  Text,
  View,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import Donnees from "../../components/AccueilComponents/Donnees";
import Colors from "../../constants/colors/Colors";
import firebase from "firebase";
import "@firebase/auth";

const Donnee = (props) => {
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [test, setTest] = useState([]);
  const [tes, setTes] = useState({});
  const db = firebase.firestore();

  const fetchData = useCallback(async () => {
    setLoading(true);
    setRefreshing(true);
    try {
      let currentUser = firebase.auth().currentUser;

      const data = await db
        .collection("users")
        .doc(currentUser.phoneNumber)
        .collection("historique")
        .get();

      setTest(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
      setRefreshing(false);
    } catch (err) {
      console.log(err.message);
    }
  });

  const ouvrirModal = (tes) => {
    setModalVisible(true);
    setTes(tes);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={{ height: "100%" }}>
      <Modal
        tes={tes}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Test PCR Covid-19</Text>

            <Text style={{ fontWeight: "600", fontSize: 19, marginBottom: 4 }}>
              Date du Test :{" "}
            </Text>
            <Text style={{ marginBottom: 25, color: "grey", fontSize: 16 }}>
              {tes.date_test}
            </Text>

            <Text style={{ fontWeight: "600", fontSize: 19, marginBottom: 4 }}>
              Centre de Test :{" "}
            </Text>
            <Text style={{ marginBottom: 25, color: "grey", fontSize: 16 }}>
              {tes.centre_test}
            </Text>

            <Text style={{ fontWeight: "600", fontSize: 19, marginBottom: 4 }}>
              Résultat du Test :{" "}
            </Text>
            <Text style={{ marginBottom: 30, color: "red", fontSize: 16 }}>
              {tes.etat}
            </Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="black"
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        />
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={fetchData} />
          }
        >
          {test.map((tes, index) => (
            <Donnees
              key={index}
              TestResult={tes.etat}
              TestDate={tes.date_test}
              onPress={() => {
                ouvrirModal(tes);
              }}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 50,
    color: Colors.third,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 25,
  },
});

export default Donnee;
