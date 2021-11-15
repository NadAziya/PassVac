import React, { useContext, useState } from "react";

import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import AuthContext from "../../auth/context";
import AuthStorage from "../../auth/storage";

import ButtonMain from "../../components/MainButton";

export default function info(props, navigation) {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get("window");
  const { info, setInfo } = useContext(AuthContext).info;

  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            setSliderPage(event);
          }}
        >
          <View style={{ width, height }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 50,
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/img/scroll1.jpg")}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text style={styles.title}>Get GoPass and Go ! </Text>
              <Text style={styles.text}>
                Connectez votre résultat de test COVID-19 ou votre preuve de
                vaccintations et reprenez vos voyages, votre travail et votre
                vie.
              </Text>
            </View>
          </View>
          <View style={{ height, width }}>
            <Text style={styles.textWelcome}>Bienvenue sur GoPass !</Text>

            <View style={styles.container}>
              <View style={styles.storeContainer}>
                <View>
                  <Image
                    style={styles.store}
                    source={require("../../assets/img/store.jpg")}
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.textInfo}>
                    GoPass stock seulement vos informations personnelles
                    d'identification sur votre appareil mobile.
                  </Text>
                </View>
              </View>

              <View style={styles.storeContainer}>
                <View>
                  <Image
                    style={styles.store}
                    source={require("../../assets/img/codeQr.png")}
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.textInfo}>
                    GoPass génére un code Qr coloré qui représente votre état
                    sanitaire face à la covid-19.
                  </Text>
                </View>
              </View>

              <View style={styles.storeContainer}>
                <View>
                  <Image
                    style={styles.store}
                    source={require("../../assets/img/travel.png")}
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.textInfo}>
                    GoPass vérifie la validité de vos tests, vaccins et profiter
                    de vos voyages et de votre vie.
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ width, height }}>
            <View style={{ height, width }}>
              <Text style={styles.textWelcome}>
                N'oubliez pas les gestes barriére !
              </Text>

              <View style={styles.container}>
                <View style={styles.gesteContainer}>
                  <View>
                    <Image
                      style={styles.store}
                      source={require("../../assets/img/masque.png")}
                    />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.textInfo}>
                      pour votre sécurité portez un masque chirurgical jetable.
                    </Text>
                  </View>
                </View>

                <View style={styles.gesteContainer}>
                  <View>
                    <Image
                      style={styles.store}
                      source={require("../../assets/img/serre_main.png")}
                    />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.textInfo}>
                      saluer sans se serrer la main, éviter les embrassades.
                    </Text>
                  </View>
                </View>

                <View style={styles.gesteContainer}>
                  <View>
                    <Image
                      style={styles.store}
                      source={require("../../assets/img/lavmain.png")}
                    />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.textInfo}>
                      se laver trés régulierement les mains.
                    </Text>
                  </View>
                </View>
                <View style={styles.gesteContainer}>
                  <View>
                    <Image
                      style={styles.store}
                      source={require("../../assets/img/distance.png")}
                    />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.textInfo}>
                      rester toujours à plus d'un métre les uns des autres.
                    </Text>
                  </View>
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <ButtonMain
                    onPress={() => {
                      AuthStorage.storeInfo(true);
                      setInfo(true);
                    }}
                    style={{
                      width: 180,
                      height: 45,
                      marginTop: 50,
                      justifyContent: "center",
                    }}
                  >
                    OK, j'ai compris !
                  </ButtonMain>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.paginationWrapper}>
          {Array.from(Array(3).keys()).map((key, index) => (
            <View
              style={[
                styles.paginationDots,
                { opacity: pageIndex === index ? 1 : 0.2 },
              ]}
              key={index}
            />
          ))}
        </View>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  paginationWrapper: {
    position: "absolute",
    bottom: 130,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#0099ff",
    marginLeft: 10,
  },
  image: {
    height: 260,
    width: 260,
  },
  title: {
    fontSize: 20,
    fontFamily: "muli-bold",
    textAlign: "center",
    marginTop: 30,
  },
  text: {
    fontSize: 16,
    fontFamily: "muli",
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 6,
  },
  textWelcome: {
    textAlign: "center",
    fontSize: 23,

    fontFamily: "segeo-ui-bold",
    marginTop: 25,
  },
  container: {
    flex: 1,
    flexDirection: "column",

    padding: 15,
  },
  storeContainer: {
    flexDirection: "row",
    marginTop: 25,
    padding: 10,
  },
  store: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    marginLeft: 12,
  },
  textInfo: {
    lineHeight: 20,
    fontFamily: "muli",
    fontSize: 16,
  },
  gesteContainer: {
    flexDirection: "row",
    marginTop: 25,
  },
});
