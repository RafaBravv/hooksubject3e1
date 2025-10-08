import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack
  screenOptions={{
    //headerShown: false,
    headerStyle: {
      backgroundColor: "gray",
    }
  }}>
    <Stack.Screen name="Principal"/>
    <Stack.Screen name="(main)" options={{
      headerShown: false,
      title: "HOLA"
    }}/>
  </Stack>;
}
