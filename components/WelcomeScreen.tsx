import { View, Text } from 'react-native'
import React from 'react'
import "@/global.css"
import CompInicio from './CompInicio'

const WelcomeScreen = () => {
  return (
    <View className='justify-center items-center flex-1'>
      <View className='flex-[2] w-full justify-center items-center'>
        <Text className='text-white text-[45px]'>Bienvenido</Text>
        <Text className='text-white text-[15px]'>¡Nos agrada tenerte de vuelta!</Text>
      </View>
      <CompInicio/>
    </View>
  )
}

export default WelcomeScreen