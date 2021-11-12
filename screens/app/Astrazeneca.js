import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

const Astrazeneca = () => {
  return (
    <ScrollView
      style={{
        padding: 8,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "600", color: "blue" }}>
        Vaccin Astrazeneca contre la COVID-19 : ce qu’il faut savoir
      </Text>
      <View
        style={{ flexDirection: "column", paddingTop: 20, paddingLeft: 15 }}
      >
        <Text style={{ color: "#424242", paddingBottom: 5, color: "blue" }}>
          Utilisation prévue:
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - Personnes âgées de 65 ans et plus.
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
          - Les deux doses vaccinales peuvent être administrées en respectant un
          intervalle de 8 à 12 semaines.
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - Si la seconde dose est administrée par inadvertance moins de 4
          semaines après la première, il n’est pas nécessaire de répéter la
          dose.
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - Si l’administration de la seconde dose est reportée par inadvertance
          au-delà de 12 semaines, celle-ci doit être administrée le plus tôt
          possible. Il est recommandé que toutes les personnes vaccinées
          reçoivent deux doses.
        </Text>
      </View>
      <View
        style={{ flexDirection: "column", paddingTop: 20, paddingLeft: 15 }}
      >
        <Text style={{ color: "#424242", paddingBottom: 5, color: "blue" }}>
          Co-administration avec d’autres vaccins:
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - Un intervalle minimum de 14 jours doit être respecté entre
          l’administration du vaccin ChAdOx1-S [recombinant] et celle de tout
          autre vaccin contre d’autres maladies. Cette recommandation pourra
          être modifiée à mesure que des données sur la co-administration avec
          d’autres vaccins seront disponibles.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          paddingTop: 20,
          paddingLeft: 15,
          marginBottom: 70,
        }}
      >
        <Text
          style={{
            color: "#424242",
            paddingBottom: 5,

            color: "blue",
          }}
        >
          Qui d'autre peut se faire vacciner ?
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - La vaccination est recommandée pour les personnes atteintes de
          comorbidités dont on sait qu’elles augmentent le risque d’être atteint
          d’une forme grave de la COVID-19, notamment l’obésité, les maladies
          cardiovasculaires et les affections respiratoires.
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - Le vaccin peut être proposé aux personnes qui ont déjà eu la
          COVID-19.
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - L’OMS recommande l’utilisation du vaccin anti-COVID-19
          Sinovac-CoronaVac chez les femmes allaitantes comme chez les autres
          adultes.
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - Les personnes vivant avec le virus de l’immunodéficience humaine
          (VIH) ou immunodéprimées présentent un risque plus élevé de contracter
          une forme grave de la COVID-19.
        </Text>
        <Text
          style={{
            fontSize: 16,
            paddingLeft: 10,
            paddingBottom: 5,
            color: "red",
          }}
        >
          * Cependant les données d’essais cliniques sont limitées ou
          inexistantes concernant cette population. *
        </Text>
        <Text
          style={{
            color: "#424242",
            paddingBottom: 5,
            color: "blue",
            paddingTop: 20,
          }}
        >
          Qui ne doit pas se faire vacciner ?
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          Les personnes ayant des antécédents de réaction allergique grave à
          l’un des composants du vaccin ne doivent pas être vaccinées. Le vaccin
          n’est pas recommandé pour les personnes âgées de moins de 18 ans dans
          l’attente des résultats d’études complémentaires.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Astrazeneca;
