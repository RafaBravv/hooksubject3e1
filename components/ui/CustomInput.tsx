import { View, Text, TextInput } from 'react-native'
import React from 'react'

interface CustomInputProps {
    text?: string;
    placeholder?: string;
}

const CustomInput = ({placeholder, text}: CustomInputProps) => {
  return (
    <View>
        <Text className="text-gray-500 font-bold text-[20] mt-[20]">{text}</Text>
        <TextInput
            className='border border-black rounded-[15] p-3 w-full mt-[15]'
            placeholder={placeholder}
        />
    </View>
  )
}

export default CustomInput