import { Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { useFonts } from 'expo-font';


function Date() {
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
        <View className="flex-row pb-3 mx-6 pt-4 justify-between">
            <View className="flex bg-white w-[44] h-[56] items-center justify-center rounded-[15px]">
                <Text className="text-[13px] leading-4 pt-2 " style={{ fontFamily: 'Poppins-Regular', }}>Mon</Text>
                <Text className="text-[13px] leading-7" style={{ fontFamily: 'Poppins-Bold', }}>26</Text>
            </View>
            <View className="flex bg-Primary-Purple w-[44] h-[56] items-center justify-center rounded-[15px]">
                <Text className="text-[13px] leading-4 pt-2 text-white" style={{ fontFamily: 'Poppins-Regular', }}>Tue</Text>
                <Text className="text-[13px] leading-7 text-white" style={{ fontFamily: 'Poppins-Bold', }}>27</Text>
            </View>
            <View className="flex bg-white w-[44] h-[56] items-center justify-center rounded-[15px]">
                <Text className="text-[13px] leading-4 pt-2" style={{ fontFamily: 'Poppins-Regular', }}>Wed</Text>
                <Text className="text-[13px] leading-7" style={{ fontFamily: 'Poppins-Bold', }}>28</Text>
            </View>
            <View className="flex bg-white w-[44] h-[56] items-center justify-center rounded-[15px]">
                <Text className="text-[13px] leading-4 pt-2" style={{ fontFamily: 'Poppins-Regular', }}>Thu</Text>
                <Text className="text-[13px] leading-7" style={{ fontFamily: 'Poppins-Bold', }}>29</Text>
            </View>
            <View className="flex bg-white w-[44] h-[56] items-center justify-center rounded-[15px]">
                <Text className="text-[13px] leading-4 pt-2" style={{ fontFamily: 'Poppins-Regular', }}>Fri</Text>
                <Text className="text-[13px] leading-7" style={{ fontFamily: 'Poppins-Bold', }}>30</Text>
            </View>
            <View className="flex bg-white w-[44] h-[56] items-center justify-center rounded-[15px]">
                <Text className="text-[13px] leading-4 pt-2" style={{ fontFamily: 'Poppins-Regular', }}>Sat</Text>
                <Text className="text-[13px] leading-7" style={{ fontFamily: 'Poppins-Bold', }}>31</Text>
            </View>
            <View className="flex bg-white w-[44] h-[56] items-center justify-center rounded-[15px]">
                <Text className="text-[13px] leading-4 pt-2" style={{ fontFamily: 'Poppins-Regular', }}>Sun</Text>
                <Text className="text-[13px] leading-7" style={{ fontFamily: 'Poppins-Bold', }}>01</Text>
            </View>
        </View>
    </>
}

export default Date