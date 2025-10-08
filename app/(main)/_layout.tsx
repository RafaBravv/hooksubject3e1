import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const MainLayout = () => {
  return (
    <Stack
        screenOptions={{
            //headerShown:false,
            headerStyle: {
                backgroundColor: "black",
            }
        }}
    >
        <Stack.Screen name="HOLA" options={{
            title: "Main",
        }}/>
    </Stack>
  )
}

export default MainLayout