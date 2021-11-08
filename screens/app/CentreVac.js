import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import firebase from "firebase";
import { Card } from "react-native-shadow-cards";
import { Backdrop } from "react-native-backdrop";
import { AntDesign } from "@expo/vector-icons";

import { SearchBar } from 'react-native-elements';

const CentreVac = (props) => {
  const [centre, setCentre] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [visible, setVisible] = useState(false);
  const [cent, setCent] = useState({});
   const [search, setSearch] = useState('')

 const  updateSearch = (search) => {
    setSearch( search )
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    setRefreshing(true);
    const db = firebase.firestore();
    const data = await db.collection("centre").get();
    setCentre(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
    setRefreshing(false);
  });
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
    <View style={{ backgroundColor: "white", height: "100%" }}>
        <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        inputContainerStyle={{color: '#f2516'}}
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
          {centre.map((cent) => (
            <Card
              key={cent.nomCentre}
              style={{
                margin: 5,
                flexDirection: "row",
                width: "95%",
                justifyContent: "space-between",
                padding: 5,
              }}
            >
              <View>
                <Text>Nom du centre:{cent.nomCentre}</Text>
                <Text>Wilaya:{cent.wilaya}</Text>
                <Text>tel:{cent.tel}</Text>
              </View>
              <TouchableOpacity
                onPress={() => handleOpen(cent)}
                style={{
                  justifyContent: "center",
                }}
              >
                <AntDesign name="rightcircle" size={24} color="green" />
              </TouchableOpacity>
            </Card>
          ))}

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
            <Text>Nom du centre :{cent.nomCentre}</Text>
            <Text>Wilaya:{cent.wilaya}</Text>
            <Text>tel :{cent.tel}</Text>
            <Text>Numéro d'agrement :{cent.numAgrement}</Text>
            <Text>Adresse :{cent.adresse}</Text>
            <Text>Code Postal :{cent.codePostal}</Text>
          </Backdrop>
        </ScrollView>
      )}
    </View>
  );
};

export default CentreVac;
