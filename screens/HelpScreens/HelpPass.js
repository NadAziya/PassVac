import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const HelpPass = () => {
  return (
    <ScrollView style={{ height: "100%", backgroundColor: "white" }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          padding: 10,
          textAlign: "center",
          color: "blue",
          marginBottom: 15,
        }}
      >
        Comment accéder à mon Pass ?
      </Text>
      <Text style={{ padding: 10, textAlign: "justify", lineHeight: 20 }}>
        Vous pouvez accéder à votre Pass en cliquant sur la card 'Pass
        sanitaire' qui se trouve sur votre écran d'accueil.
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Image
          style={{ height: 400, width: 200 }}
          source={require("../../assets/img/help_accesPass.jpg")}
        />
      </View>
      <Text style={{ padding: 10, textAlign: "justify", lineHeight: 20 }}>
        Ou sinon en cliquant sur l'option menu 'Mon Pass'.
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Image
          style={{ height: 260, width: 260 }}
          source={require("../../assets/img/help_accesPass1.jpg")}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          padding: 10,
          textAlign: "center",
          color: "blue",
          marginBottom: 15,
        }}
      >
        Comment avoir mon GoPass ?
      </Text>
      <Text style={{ padding: 10, textAlign: "justify", lineHeight: 20 }}>
        A la création de votre compte sur GoPass un état initial vous est généré
        automatiquement.
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Image
          style={{ height: 250, width: 200 }}
          source={require("../../assets/img/helpPass.jpg")}
        />
      </View>
      <Text style={{ padding: 10, textAlign: "justify", lineHeight: 20 }}>
        Vous devez vous rendre au plus vite à un centre disposant de notre
        système GoPass, vous serrez aussitôt mis à jour. Un CODE QR unique vous
        est généré selon votre état face au COVID-19. ci-dessous un Pass valide
        indiquant l'état vacciné et négatif au COVID-19.
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Image
          style={{ height: 250, width: 200 }}
          source={require("../../assets/img/helpPass1.jpg")}
        />
      </View>
      <Text style={{ padding: 10, textAlign: "justify", lineHeight: 20 }}>
        Cliquer ici pour afficher plus de détails concernant votre vaccination.
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Image
          style={{ height: 250, width: 200 }}
          source={require("../../assets/img/help_detailpass.jpg")}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          padding: 10,
          textAlign: "center",
          color: "blue",
          marginBottom: 15,
        }}
      >
        Une fois mes données mis à jour, comment je rafraichis mes modifications
        sur mon GoPass ?
      </Text>
      <Text style={{ padding: 10, textAlign: "justify", lineHeight: 20 }}>
        Tirez vers le bas pour rafraîchir votre écran.
      </Text>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Image
          style={{ height: 500, width: 250, marginBottom: 20 }}
          source={require("../../assets/img/help_scrollRefreshPass.jpg")}
        />
        <Image
          style={{ height: 500, width: 250 }}
          source={require("../../assets/img/help_updatePass.jpg")}
        />
      </View>
    </ScrollView>
  );
};
export default HelpPass;
