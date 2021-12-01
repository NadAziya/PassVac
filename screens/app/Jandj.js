import React from "react";
import { View, ScrollView, Text } from "react-native";

const Jandj = () => {
  return (
    <ScrollView
      style={{
        padding: 8,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "600", color: "blue" }}>
        Vaccin Jonhson and Jonhson contre la COVID-19 : ce qu’il faut savoir
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
      </View>
      <View
        style={{ flexDirection: "column", paddingTop: 20, paddingLeft: 15 }}
      >
        <Text style={{ color: "#424242", paddingBottom: 5, color: "blue" }}>
          Administration:
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - La posologie recommandée est d'une seule dose (0.5ml) administrées
          par voie intramusculaire dans le deltoïde.
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
          - Le vaccin est sûr et efficace chez les personnes souffrant de
          pathologies associées à un risque supérieur de maladie grave, par
          exemple l’hypertension, les maladies pulmonaires chroniques, les
          cardiopathies graves, l’obésité et le diabète.
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - Les personnes vivant avec le virus de l’immunodéficience humaine
          (VIH),Il est recommandé que les bénéficiaires du vaccin dont on sait
          qu’ils sont séropositifs pour le VIH reçoivent des informations et des
          conseils avant la vaccination.
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - Le vaccin peut être proposé aux personnes qui ont déjà contracté la
          COVID-19 par le passé, mais celles-ci peuvent envisager de reporter
          leur vaccination contre la COVID-19 jusqu’à six mois après l’infection
          par le SARS-CoV-2.
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - Ce vaccin peut être proposé à une femme allaitante si elle fait
          partie d’un groupe auquel la vaccination est recommandée.
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
          - Le vaccin ne doit pas être administré aux personnes ayant des
          antécédents d’anaphylaxie à l’un de ses composants.
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - Toute personne présentant une température corporelle supérieure à
          38,5ºC doit reporter la vaccination jusqu’à ce qu’elle n’ait plus de
          fièvre.
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 5 }}>
          - Le vaccin n’est pas recommandé pour les personnes âgées de moins de
          18 ans dans l’attente des résultats d’études complémentaires.
        </Text>
      </View>
    </ScrollView>
  );
};
export default Jandj;
