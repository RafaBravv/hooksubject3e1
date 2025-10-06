/*import React, { useState } from "react";
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
}*/

import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

type status="Activo"|"Resgitrando"|"Logueando"|"Esperando";

export default function Index() {

  const [estadoUsuario, setEstadoUsusario] = useState<status>("Esperando");
  useEffect(() => {
    //Lo que va a disparse a mi efecto
    if(estadoUsuario=="Esperando"){
      Alert.alert("Bienvenido, espero tu respuesta");
    }
    return () => {
      //Cuando termine el efecto
    }
  }, []) //Lo que va a disparar el efecto
  
  return (
    <View className="flex-1 bg-white items-center justify-center px-6">
      <View className="w-full max-w-md">
        <Text className="text-3xl font-bold text-teal-600 mb-8 text-center">
          Formulario
        </Text>

        <View className="mb-6">
          <Text className="text-teal-700 font-semibold mb-2">Nombre</Text>
          <TextInput
            className="bg-teal-50 border-2 border-teal-300 rounded-lg px-4 py-3 text-teal-900"
            placeholder="Ingresa tu nombre"
            placeholderTextColor="#5eead4"
          />
        </View>

        <View className="mb-6">
          <Text className="text-teal-700 font-semibold mb-2">Email</Text>
          <TextInput
            className="bg-teal-50 border-2 border-teal-300 rounded-lg px-4 py-3 text-teal-900"
            placeholder="tu@email.com"
            placeholderTextColor="#5eead4"
          />
        </View>

        <View className="mb-6">
          <Text className="text-teal-700 font-semibold mb-2">Teléfono</Text>
          <TextInput
            className="bg-teal-50 border-2 border-teal-300 rounded-lg px-4 py-3 text-teal-900"
            placeholder="0999999999"
            placeholderTextColor="#5eead4"
          />
        </View>

        <View className="mb-8">
          <Text className="text-teal-700 font-semibold mb-2">Mensaje</Text>
          <TextInput
            className="bg-teal-50 border-2 border-teal-300 rounded-lg px-4 py-3 text-teal-900 h-24"
            placeholder="Escribe tu mensaje"
            placeholderTextColor="#5eead4"
            multiline
            textAlignVertical="top"
          />
        </View>

        <TouchableOpacity className="bg-teal-500 rounded-lg py-4 shadow-lg">
          <Text className="text-white text-center font-bold text-lg">
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const disableButton = (estado:boolean) => {
  if(estado){
    return "bg-gray"
  }
}