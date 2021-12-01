import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from "react-native";
import firebase from "firebase";
import { Card } from "react-native-shadow-cards";
import { Backdrop } from "react-native-backdrop";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

import { SearchBar } from "react-native-elements";

const CentreVac = (props) => {
  const [centre, setCentre] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [visible, setVisible] = useState(false);
  const [cent, setCent] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setRefreshing(true);
    const db = firebase.firestore();
    const data = await db.collection("centre").get();
    setCentre(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setSearchFilter(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
    setRefreshing(false);
  });

  const searchFilteritem = (text) => {
    if (text) {
      const newData = centre.filter((cent) => {
        const itemData = cent.nomCentre
          ? cent.nomCentre.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setSearchFilter(newData);
      setSearchTerm(text);
    } else {
      setSearchFilter(centre);
      setSearchTerm(text);
    }
  };

  const handleOpen = (cent) => {
    setVisible(true);
    setCent(cent);
  };

  const handleClose = ({}) => {
    setVisible(false);
    setCent({});
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{ backgroundColor: "#e3e6f4", height: "100%" }}>
      <SearchBar
        placeholder="rechercher le centre ou la wilaya.."
        value={searchTerm}
        onChangeText={(text) => {
          searchFilteritem(text);
        }}
      />
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
          {searchFilter.map((cent, index) => (
            <Card
              key={index}
              style={{
                margin: 5,
                height: 120,
                flexDirection: "row",
                width: "97%",
                justifyContent: "space-between",
                padding: 10,
                backgroundColor: "white",
              }}
            >
              <View
                style={{
                  flexDirection: "column",

                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 20,
                    color: "black",
                    marginBottom: 5,
                  }}
                >
                  <MaterialCommunityIcons
                    name="hospital-marker"
                    size={35}
                    color="blue"
                  />
                  {cent.nomCentre}
                </Text>

                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: 16,
                    color: "black",
                  }}
                >
                  <View style={{ marginRight: 10 }}>
                    <FontAwesome
                      name="location-arrow"
                      size={20}
                      color="black"
                    />
                  </View>
                  {cent.wilaya}
                </Text>
                <Text
                  style={{ fontWeight: "400", fontSize: 16, color: "black" }}
                >
                  <View style={{ marginRight: 10 }}>
                    <Foundation name="telephone" size={20} color="black" />
                  </View>
                  0{cent.tel}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => handleOpen(cent)}
                style={{
                  justifyContent: "center",
                }}
              >
                <AntDesign name="rightcircle" size={35} color="blue" />
              </TouchableOpacity>
            </Card>
          ))}
        </ScrollView>
      )}
      <Backdrop
        cent={cent}
        visible={visible}
        handleOpen={() => handleOpen(cent)}
        handleClose={() => handleClose({})}
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
                  fontSize: 20,
                  fontWeight: "600",
                  marginRight: 50,
                  color: "blue",
                }}
              >
                <MaterialCommunityIcons
                  name="hospital-marker"
                  size={35}
                  color="blue"
                />
                {cent.nomCentre}
              </Text>
            </View>
            <Text
              numberOfLines={1}
              style={{
                textAlign: "center",
                color: "#9e9e9e",
                fontWeight: "300",
              }}
            >
              _________________________________
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>Wilaya :</Text>
            <Text style={styles.textInfo}>{cent.wilaya}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>tel :</Text>
            <Text style={styles.textInfo}>0{cent.tel}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>Numéro d'agrement :</Text>
            <Text style={styles.textInfo}>{cent.numAgrement}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>Adresse :</Text>
            <Text style={styles.textInfo}>{cent.adresse}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>Code Postal :</Text>
            <Text style={styles.textInfo}>{cent.codePostal}</Text>
          </View>
        </View>
      </Backdrop>
    </View>
  );
};

export default CentreVac;
const styles = StyleSheet.create({
  text: { fontSize: 18, color: "gray", fontWeight: "300" },
  textInfo: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 10,
    color: "black",
  },
});
