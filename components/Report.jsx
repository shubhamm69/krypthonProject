import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation,  } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import BigButton from './BigButton';
import DescriptionBox from './DescriptionBox';


function Report() {
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
    });

    if (!fontsLoaded) {
        return null;
    }
    return <>
    
        <View className="mx-2 flex flex-col mb-1">
            <Text className="mx-3 text-[14px] text-black mt-1" style={{ fontFamily: 'Poppins-SemiBold' }}>Diagnosis</Text>
            <DescriptionBox />
        </View>
        <View className="mx-2 flex flex-col mb-1">
            <Text className="mx-3 text-[14px] text-black mt-1" style={{ fontFamily: 'Poppins-SemiBold' }}>Medicines Prescribed</Text>
            <DescriptionBox />
        </View>
        <View className="mx-2 flex flex-col mb-1">
            <Text className="mx-3 text-[14px] text-black mt-1" style={{ fontFamily: 'Poppins-SemiBold' }}>Special Needs</Text>
            <DescriptionBox />
        </View>
        <View className="mx-2 flex flex-col mb-1">
            <Text className="mx-3 text-[14px] text-black mt-1" style={{ fontFamily: 'Poppins-SemiBold' }}>Payment</Text>
            <View className="flex flex-row bg-white m-4 h-[50px] p-3 space-x-1 rounded-[15px]">
            <TextInput placeholder='Recieved' keyboardType='default' className="text-[14px]" style={{ fontFamily: 'Poppins-SemiBold' }} />
            </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <BigButton input='Close Appointment' color='Purple' />
        </TouchableOpacity>
    </>
}

export default Report