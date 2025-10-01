import React, { useState } from "react";
import { Dimensions, ImageBackground, View } from "react-native";
import WelcomeScreen from "../components/WelcomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css"


export default function Index() {
  //const [cont, setContador] = useState(0); //Hook
  const { width, height } = Dimensions.get("window");

  return (
    <ImageBackground
      source={require("../assets/images/img_fondo.png")}
      style={{width: width, height: height, flex: 1, justifyContent: "center", alignContent: "center"}}
      resizeMode="cover"
    >
      <SafeAreaView className="flex-1">
        <WelcomeScreen/>
      </SafeAreaView>
    </ImageBackground>
  );
}
