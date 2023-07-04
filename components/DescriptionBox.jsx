import React from 'react'
import { useFonts } from 'expo-font';
import { View, TextInput } from 'react-native';

export default function card() {

    const [fontsLoaded] = useFonts({
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View className="m-4">
            <View className="bg-white h-[100px] p-3 rounded-[15px]">
                <TextInput placeholder='Add Details' keyboardType='default' className="text-[14px]" style={{ fontFamily: 'Poppins-SemiBold' }} />
            </View>
        </View>

    )
}
