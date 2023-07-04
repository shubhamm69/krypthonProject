import React from 'react'
import { useFonts } from 'expo-font';
import { View, Text} from 'react-native'


export default function card({input, color}) {

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

        <View className={`flex justify-center mx-5 h-[62px] mb-2 bg-Primary-${color} rounded-[15px]`}>
            <Text className="text-center text-[18px] text-white" style={{fontFamily: 'Poppins-Medium' }} >
                {input}
            </Text>
        </View>
    )
}

// to use ...    
// <BigButton input='close Appointment' color='Purple'/>
