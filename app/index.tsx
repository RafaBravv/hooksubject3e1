import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import IconButton from "../components/IconButton";

export default function Index() {

  const [cont, setContador] = useState(0); //Hook

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#6f4e37',
        margin: '10%',
        borderRadius: 40
      }}
    >
      <Text style={{fontWeight: 'bold', fontSize: 40, color: 'white'}}>Contador</Text>
      <Text style={{fontSize: 20, marginVertical: 20 }}>{cont}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <IconButton iconName="plus" color="green" presionar={() => setContador(cont + 1)}/>
        <IconButton iconName="minus" color="red" presionar={() => setContador(cont - 1)}/>
      </View>
    </View>
  );
}
