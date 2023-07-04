import { View, Text, Image, } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

export default function card({title, content,problem}) {

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
        <View className="pt-4 mx-4 bg-white rounded-lg">
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image source={{
                    uri: 'https://links.papareact.com/wru',
                }} className="h-10 w-10 bg-gray-300 p-4 rounded-full" />
                <View className="flex-1">
                    <Text className="font-medium px-1 text-black-400 text-xl" style={{ fontFamily: 'Poppins-Medium' }}>{title}</Text>
                    <Text className="font-medium px-1.5 text-gray-500 text-l" style={{ fontFamily: 'Poppins-Light' }}>{content}</Text>
                </View>
                <View className="flex justify-center bg-Primary-Purple/25 rounded-lg w-[150px] h-[50px]">
                    <Text style={{ fontFamily: 'Poppins-Regular' }}
                    className="text-center text-Primary-Purple"
                    >
                        Diagnosed
                    </Text>
                </View>
            </View>
            <View>
                <Text 
                    className="px-4 font-bold text-[16px]"
                    style={{ fontFamily: 'Poppins-SemiBold' }}
                >
                    Diagnosis
                </Text>
                <Text 
                    className="p-4 text-[16px]"
                    style={{ fontFamily: 'Poppins-Light' }}
                >
                    {problem}
                </Text>
                <Text 
                    className="px-4 font-bold text-[16px]"
                    style={{ fontFamily: 'Poppins-SemiBold' }}
                >
                    Drugs Prescribed
                </Text>
                <Text 
                    className="p-4 text-[16px]"
                    style={{ fontFamily: 'Poppins-Light' }}
                >
                    Ethatin X 40mg OD, Max Pro 20mg BD, Flucsogen 10mg
                </Text>
                <Text 
                    className="px-4 font-bold text-[16px]"
                    style={{ fontFamily: 'Poppins-SemiBold' }}
                >
                    Special Needs
                </Text>
                <Text 
                    className="p-4 text-[16px]"
                    style={{ fontFamily: 'Poppins-Light' }}
                >
                    NA
                </Text>

                <View className="flex-row">
                <Text 
                    className="px-4 font-bold text-[16px]"
                    style={{ fontFamily: 'Poppins-SemiBold' }}
                >
                        Payment
                    </Text>
                    <Image className="p-2" source={require('../assets/Checkbox.jpg')} />
                </View>
                <Text 
                    className="p-4 text-[16px]"
                    style={{ fontFamily: 'Poppins-Light' }}
                >
                    Received Rs.999/-
                </Text>
            </View>
        </View>

    )
}
