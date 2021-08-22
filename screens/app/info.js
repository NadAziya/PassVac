import React, { useState } from "react";

import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";

export default function info() {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get("window");
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
                Connect your COVID-19 test result or vaccination records and get
                back to travel, work and life.
              </Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Text>Screen 2</Text>
          </View>
          <View style={{ width, height }}>
            <Text>Screen 3</Text>
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
    bottom: 150,
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
});
