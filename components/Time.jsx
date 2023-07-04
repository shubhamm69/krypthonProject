import { Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { useFonts } from 'expo-font';


function Time() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const [fontsLoaded] = useFonts({
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return <>
        <View className="mt-3 flex flex-col">
            <View className="mx-5 flex flex-row justify-between items-center mb-3">
                <View className="h-[40] w-[80] rounded-[10px] bg-transparent border-gray-600 border-0.5 items-center justify-center">
                    <Text className="text-[14px] pt-1" style={{ fontFamily: "Poppins-Medium" }}>11:00AM</Text>
                </View>
                <View className="h-[40] w-[80] rounded-[10px] bg-Primary-Purple border-gray-600 border-0.5 items-center justify-center">
                    <Text className="text-[14px] pt-1 text-white" style={{ fontFamily: "Poppins-Medium" }}>11:00AM</Text>
                </View>
                <View className="h-[40] w-[80] rounded-[10px] bg-transparent border-gray-600 border-0.5 items-center justify-center">
                    <Text className="text-[14px] pt-1" style={{ fontFamily: "Poppins-Medium" }}>11:00AM</Text>
                </View>
                <View className="h-[40] w-[80] rounded-[10px] bg-transparent border-gray-600 border-0.5 items-center justify-center">
                    <Text className="text-[14px] pt-1" style={{ fontFamily: "Poppins-Medium" }}>11:00AM</Text>
                </View>
            </View>
            <View className="mx-5 flex flex-row justify-between items-center mb-3">
                <View className="h-[40] w-[80] rounded-[10px] bg-transparent border-gray-600 border-0.5 items-center justify-center">
                    <Text className="text-[14px] pt-1" style={{ fontFamily: "Poppins-Medium" }}>11:00AM</Text>
                </View>
                <View className="h-[40] w-[80] rounded-[10px] bg-transparent border-gray-600 border-0.5 items-center justify-center">
                    <Text className="text-[14px] pt-1" style={{ fontFamily: "Poppins-Medium" }}>11:00AM</Text>
                </View>
                <View className="h-[40] w-[80] rounded-[10px] bg-transparent border-gray-600 border-0.5 items-center justify-center">
                    <Text className="text-[14px] pt-1" style={{ fontFamily: "Poppins-Medium" }}>11:00AM</Text>
                </View>
                <View className="h-[40] w-[80] rounded-[10px] bg-transparent border-gray-600 border-0.5 items-center justify-center">
                    <Text className="text-[14px] pt-1" style={{ fontFamily: "Poppins-Medium" }}>11:00AM</Text>
                </View>
            </View>
        </View>

    </>
}

export default Time