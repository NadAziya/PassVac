import React from "react";
import { View, ScrollView, Text } from "react-native";

const Spoutnik = () => {
  return (
    <ScrollView
      style={{
        padding: 8,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "600", color: "blue" }}>
        Vaccin Sputnik contre la COVID-19 : ce qu’il faut savoir
      </Text>
      <View
        style={{ flexDirection: "column", paddingTop: 20, paddingLeft: 15 }}
      >
        <Text style={{ color: "#424242", paddingBottom: 5, color: "blue" }}>
          Utilisation prévue:
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - Recommandé pour les personnes âgées de 40 ans et plus, (peut aussi
          être administré pour les personnes âgées de 18 ans et plus).
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - Sputnik appartient à la classe: Vecteur viral vivant non réplicatif.
        </Text>
      </View>
      <View
        style={{ flexDirection: "column", paddingTop: 20, paddingLeft: 15 }}
      >
        <Text style={{ color: "#424242", paddingBottom: 5, color: "blue" }}>
          Administration:
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - La posologie recommandée est de deux doses (0.5ml) administrées par
          voie intramusculaire dans le deltoïde.
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - les deux doses vaccinales peuvent être administrées en respectant un
          intervalle 21 jours d'intervalle.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Spoutnik;
