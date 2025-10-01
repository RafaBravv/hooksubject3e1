//Imports
import React from 'react'
import { Pressable, View} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

//Intefaces
interface IconButtonProps {
    presionar?: () => void;
    name: string; // Nombre del icono
    color?: string; // Color de icono (Opcional)
    bgColor?: string; // Color de fondo (Opcional)
} 

//Principal
const IconButton = ({name, presionar, color, bgColor='gray'}: IconButtonProps) => {
    return (
        <View style={{borderRadius: 10, backgroundColor: bgColor, height: 40, width: 40, justifyContent: 'center', alignItems: 'center'}}>
            <Pressable onPress={presionar}>
                <AntDesign
                    name={name as any}
                    size={30}
                    color={color}
                />
            </Pressable>
        </View>
    )
}

//Export
export default IconButton