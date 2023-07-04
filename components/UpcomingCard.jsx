import { View, Text} from 'react-native'
import { useFonts } from 'expo-font';


function UpcomingCard({f1, f2, f3}) {
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

        <View className={`pt-3 m-4 bg-orange-500/40 rounded-[15px]`}>
            <View className="flex-row pb-3 pt-2 items-center mx-4 space-x-2">
                <View className="flex-1">
                    <Text className="text-[17px] px-1 text-black-400" style={{ fontFamily: 'Poppins-Regular' }}>{f1}</Text>
                </View>
            </View>
            <View className="bg-white/40 h-[0.5] mx-3"></View>
            <View className="flex-row pb-3 pt-2 items-center mx-4 space-x-2">
                <View className="flex-1">
                    <Text className="text-[17px] px-1 text-black-400" style={{ fontFamily: 'Poppins-Regular' }}>{f2}</Text>
                </View>
            </View>
            <View className="bg-white/40 h-[0.5] mx-3"></View>
            <View className="flex-row pb-3 pt-2 items-center mx-4 space-x-2">
                <View className="flex-1">
                    <Text className="text-[17px] px-1 text-black-400" style={{ fontFamily: 'Poppins-Regular' }}>{f3}</Text>
                </View>
            </View>
            <View className="bg-white/40 h-[0.5] mx-3"></View>
        </View>
    )
}

export default UpcomingCard