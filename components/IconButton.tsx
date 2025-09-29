//Imports
import React from 'react'
import { Pressable, View} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

//Intefaces
interface IconButtonProps {
    presionar?: () => void;
    iconName: string; // Nombre del icono
    color?: string; // Color de icono (Opcional)
} 

//Principal
const IconButton = ({iconName, presionar, color}: IconButtonProps) => {
    return (
        <View style={{margin: 5, borderRadius: 10, backgroundColor: 'gray', height: 40, width: 40, justifyContent: 'center', alignItems: 'center'}}>
            <Pressable onPress={presionar}>
                <AntDesign
                    name={iconName as any}
                    size={35}
                    color={color}
                />
            </Pressable>
        </View>
    )
}

//Export
export default IconButton