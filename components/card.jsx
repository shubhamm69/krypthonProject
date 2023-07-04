import { View, Text, Image } from 'react-native'
import { useFonts } from 'expo-font';

function Card({ colorBack, colorFont, para1, para2, name, image, colorView, borderColor }) {

    const [fontsLoaded] = useFonts({
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }


    return (
        <>
            <View className={`pt-3 mx-4 my-1 bg-${colorBack}-500/40 rounded-[15px]`} style={{ backgroundColor: colorBack, }}>
                <View className="flex-row pb-3 items-center mx-4 space-x-2">
                    <Image source={{
                        uri: `${image}`,
                    }} className="h-14 w-14 bg-gray-300 p-4 rounded-full" />
                    <View className="flex-1">
                        <Text className="text-[17px] px-1 text-black-400" style={{ fontFamily: 'Poppins-Medium' }}>{name}</Text>
                        <Text clasfsName="text-[17px] px-1 text-black-500" style={{ fontFamily: 'Poppins-Light' }}>{para1}</Text>
                    </View>
                    <View className="flex justify-center rounded-lg w-[80px] h-[30px]" style={{backgroundColor: colorView, borderColor: borderColor}}>
                        <Text className="text-center" style={{ color: colorFont }}>
                            {para2}
                        </Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Card