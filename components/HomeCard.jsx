import { View, Text, Image} from 'react-native'
import { useFonts } from 'expo-font';

function HomeCard({ colorBack, colorFont, para1, para2, para3, name1, name2, image1, image2 }) {

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
            <View className={`pt-3 m-4 bg-${colorBack}-500/40 rounded-[15px]`} style={{backgroundColor: colorBack, }}>
                <View className="flex-row pb-3 items-center mx-4 space-x-2">
                    <Image source={{
                        uri:   `${image1}`,
                    }} className="h-14 w-14 bg-gray-300 p-4 rounded-full" />
                    <View className="flex-1">
                        <Text className="text-[17px] px-1 text-black-400" style={{ fontFamily: 'Poppins-Medium' }}>{name1}</Text>
                        <Text className="text-[17px] px-1 text-black-500" style={{ fontFamily: 'Poppins-Light' }}>{para1}</Text>
                    </View>
                    <View className="flex justify-center rounded-lg w-[80px] h-[30px] border border-[#F49229]/25">
                    <Text className="text-center" style={{color: colorFont}}>
                            {para3}
                        </Text>
                    </View>
                </View>
                <View className="bg-white/40 h-[0.5] mx-3"></View>
                <View className="flex-row pb-3 pt-2 items-center mx-4 space-x-2">
                    <Image source={{
                        uri:  `${image2}`,
                    }} className="h-14 w-14 bg-black-300 p-4 rounded-full" />
                    <View className="flex-1">
                    <Text className="text-[17px] px-1 text-black-400" style={{ fontFamily: 'Poppins-Medium' }}>{name2}</Text>
                        <Text className="text-[17px] px-1 text-black-500" style={{ fontFamily: 'Poppins-Light' }}>{para2}</Text>
                    </View>
                    <View className="flex justify-center rounded-lg w-[80px] h-[30px] border border-[#F49229]/25">
                        <Text className="text-center" style={{color: colorFont}}>
                            {para3}
                        </Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default HomeCard