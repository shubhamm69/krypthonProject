import React from 'react'
import { useFonts } from 'expo-font';
import { View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'

export default function card({ tabName }) {
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, [])

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
        <View className=" flex-row pb-7 justify-between ">
            <View className="justify-start">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View className="flex justify-center items-center mx-6 h-[50px] w-[50px] bg-white rounded-xl">
                        <AntDesign className="flex item-center" name="arrowleft" size={30} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
            <View className="flex items-center justify-center ">
                <Text className="text-[20px]" style={{ fontFamily: 'Poppins-Medium' }} >{tabName}</Text>
            </View>
            <View className="justify-end">
                <View className="flex justify-center items-center mx-6 h-[50px] w-[50px] bg-white rounded-xl">
                    <Feather name="edit" size={24} color="black" />
                </View>
            </View>
        </View>
    )
}
