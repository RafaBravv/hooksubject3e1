import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import "@/global.css"

const DashboardScreen = () => {
  return (
    <SafeAreaView className='flex-1 ustify-center items-center'>
      <Text>Dashboard</Text>
      <TouchableOpacity
        onPress={() => {router.push('/')}}
        className='p-4 rounded-lg bg-blue-200 h-[20px]'
      >
          <Text className='text-black'>Go to index</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default DashboardScreen