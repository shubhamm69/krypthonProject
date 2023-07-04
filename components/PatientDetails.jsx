import { Text, View, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { useFonts } from 'expo-font';
import DescriptionBox from '../components/DescriptionBox'


function PatientDetails() {
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

        <View className="">
            <View className="mx-5 pb-1 flex flex-col mb-3">
                <Text className="text-[14px] text-black mt-1 pb-1 mb-2" style={{ fontFamily: 'Poppins-SemiBold' }}>Full Name</Text>
                <TextInput placeholder='Add Details...' keyboardType='default' className="flex bg-white text-[14px] text-black mx-2 w-[360] h-[40] rounded-[10px] pl-4 justify-center items-center" style={{ fontFamily: 'Poppins-SemiBold' }} />
            </View>
            <View className="mx-5 flex flex-col mb-3">
                <Text className="text-[14px] text-black pb-1 mt-1 mb-2" style={{ fontFamily: 'Poppins-SemiBold' }}>Age</Text>
                <TextInput placeholder='Add Details...' keyboardType='default' className="flex pb-1 bg-white text-[14px] text-black mx-2 w-[360] h-[40] rounded-[10px] pl-4 justify-center items-center" style={{ fontFamily: 'Poppins-SemiBold' }} />
            </View>
            <View className="mx-5 flex flex-col  pb-1 mb-3">
                <Text className="text-[14px] text-black mt-1 mb-2" style={{ fontFamily: 'Poppins-SemiBold' }}>Gender</Text>
                <View className="flex flex-row space-x-2">
                    <View className="h-[40] w-[80] rounded-[10px] bg-Primary-Purple border-gray-600 border-0.5 items-center justify-center">
                        <Text className="text-white" style={{ fontFamily: "Poppins-SemiBold" }}>Male</Text>
                    </View>
                    <View className="h-[40] w-[80] rounded-[10px] bg-transparent border-gray-600 border-0.5 items-center justify-center">
                        <Text className="text-black" style={{ fontFamily: "Poppins-SemiBold" }}>Female</Text>
                    </View>
                    <View className="h-[40] w-[80] rounded-[10px] bg-transparent border-gray-600 border-0.5 items-center justify-center">
                        <Text className="text-black" style={{ fontFamily: "Poppins-SemiBold" }}>Other</Text>
                    </View>
                </View>
            </View>
            <View className="mx-2 flex flex-col mb-1">
                <Text className="mx-3 text-[14px] text-black mt-1" style={{ fontFamily: 'Poppins-SemiBold' }}>Problem Description</Text>
                <DescriptionBox />
            </View>
        </View>

    </>

}

export default PatientDetails