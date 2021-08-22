import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function WavyHeader({ customStyles }) {
  return (
    <View style={customStyles}>
      <View style={{ backgroundColor: "#0099ff", height: 140 }}>
        <Svg
          height="60%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: "absolute", top: 130 }}
        >
          <Path
            fill="#0099ff"
            d="M0,288L60,288C120,288,240,288,360,261.3C480,235,600,181,720,181.3C840,181,960,235,1080,218.7C1200,203,1320,117,1380,74.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </Svg>
      </View>
    </View>
  );
}
