import { View, Text } from 'react-native'
import React from 'react'
import CustomText from '@/components/ui/CustomText'
import CustomInput from '@/components/ui/CustomInput'
import IconButton from './IconButton'

const CompInicio = () => {
  return (
    <View className='flex-[4] w-[90%] bg-white rounded-t-[50] p-10 justify-top items-center'>
        <CustomText value='Iniciar sesión' variant='title' color='text-[#043952]'/>
        <View className='justify-center items-left w-full'>
            <CustomInput placeholder='ejemplo@uets.edu.ec' text="Correo electrónico"/>
            <CustomInput placeholder='0123456' text='Contraseña'/>
        </View>
        <View className='w-full h-[2px] bg-gray-200 rounded-full m-[30px]'/>
        <View className='flex-row gap-3 mb-[30px]'>
            <IconButton name={'google'} bgColor='#043952' color='white'/>
            <IconButton name={'mail'} bgColor='#043952' color='white'/>
            <IconButton name={'key'} bgColor='#043952' color='white'/>
        </View>
        <Text>No tienes una cuenta?</Text>
        <Text className="mb-[10px] text-[#043952] text-bold">Registrate</Text>
        <Text>¿Olvidaste tu contraseña?</Text>
        <Text className="mb-[10px] text-[#043952] text-bold">¿No puedes iniciar sesión?</Text>
    </View>
  )
}

export default CompInicio