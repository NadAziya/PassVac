import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Sinovac = () => {
  return (
    <ScrollView
      style={{
        padding: 8,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "600", color: "blue" }}>
        Vaccin de Sinovac contre la COVID-19 : ce qu’il faut savoir
      </Text>
      <View
        style={{ flexDirection: "column", paddingTop: 20, paddingLeft: 15 }}
      >
        <Text style={{ color: "#424242", paddingBottom: 5, color: "blue" }}>
          Utilisation prévue:
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - Personnes âgées de 18 ans et plus.
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10 }}>
          - Vaccin à virus entier inactivé.
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
          intervalle de deux à quatres semaines.
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - Si l'administration de la seconde dose est reportée au-delà de
          quatres semaines, celle-ci doit être administrées le plus tôt
          possible.
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - Il est recommandé que toutes les personnes vaccinées reçoivent deux
          doses.
        </Text>
      </View>
      <View
        style={{ flexDirection: "column", paddingTop: 20, paddingLeft: 15 }}
      >
        <Text style={{ color: "#424242", paddingBottom: 5, color: "blue" }}>
          Co-administration avec d’autres vaccins:
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - Il convient de respecter un intervalle minimum de 14 jours entre
          l’administration de ce vaccin et celle de tout autre vaccin contre
          d’autres maladies. Cette recommandation pourra être modifiée à mesure
          que des données sur la co-administration avec d’autres vaccins seront
          disponibles.
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
            paddingTop: 20,
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
        <Text style={{ color: "#424242", paddingBottom: 5, color: "blue" }}>
          Qui ne doit pas se faire vacciner ?
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          Les personnes ayant des antécédents d’anaphylaxie provoquée par l’un
          des composants du vaccin ne doivent pas être vaccinées. Les personnes
          atteintes d’une COVID-19 confirmée par PCR doivent être vaccinées
          uniquement après la fin de la phase aiguë et lorsque les critères
          permettant de mettre un terme à leur isolement ont été respectés.
          Toute personne dont la température corporelle est supérieure 38,5 ºC
          doit reporter la vaccination jusqu’à ce qu’elle n’ait plus de fièvre.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Sinovac;
