import React from 'react';
import { Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import EditButton from '../components/EditButton'
import { ProgressChart } from "react-native-chart-kit";
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
const data = {
  labels: ["Man", "Woman"],
  data: [0.6, 0.4,]
};
const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#ffffff",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(244, 146, 41, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false
};
export default function Profile({ navigation }) {
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

  return <>

    <SafeAreaView className="bg-{#F1F6FA}">
      <EditButton tabName='Profile' />
    </SafeAreaView>

    <ScrollView>
    <View class="flex justify-center h-screen">
      <Image source={{
        uri: 'https://links.papareact.com/wru',
      }} className="h-[60px] w-[60px] bg-gray-300 p-4 rounded-full" />
    </View>

    <Text className="text-center text-[18px]" style={{ fontFamily: 'Poppins-SemiBold' }}>
      Dr. Adam Williams
    </Text>
    <Text className="text-center text-[18px]" style={{ fontFamily: 'Poppins-Regular' }}>
      Medical Specialist
    </Text>

    <View className="flex p-4 space-x-4 flex-row h-[280px] w-full">
      <View className="bg-white rounded-lg h-[275px] w-[180]" >
        <ProgressChart
          data={data}
          width={180}
          height={200}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend
        />
        <View>
          <Text>
            60% Male
          </Text>
          <Text>
            40% Male
          </Text>
        </View>
      </View>
      <View className=" flex flex-col space-y-4 h-[300px] w-[200] flex-column">
        <View className=" h-[120px] w-[200] bg-white rounded-lg ">
          <Text className="text-center text-Primary-Black text-[24px] pt-5" style={{ fontFamily: 'Poppins-Medium' }}>
            New Patient
          </Text>
          <View className="flex-row pb-3 items-center mx-3">
            <View className="flex-1">
              <Text className="text-start px-2 text-Primary-Green text-[40px] p-4" style={{ fontFamily: 'Poppins-Regular' }}> 26 </Text>
            </View>
            <View className="flex justify-center rounded-lg mr-4 bg-Primary-Green/25 w-[60px] h-[30px]" >
              <Text className="text-center text-Primary-Green" style={{ fontFamily: 'Poppins-Regular' }}>
                +%51
              </Text>
            </View>
          </View>
        </View>
        <View className=" h-[140px] w-[200] bg-white rounded-lg ">
          <Text className="text-center text-Primary-Black text-[24px] pt-5" style={{ fontFamily: 'Poppins-Medium' }}>
            Old Patient
          </Text>
          <View className="flex-row pb-3 items-center mx-3">
            <View className="flex-1">
              <Text className="text-start px-2 text-red-600 text-[40px] p-4" style={{ fontFamily: 'Poppins-Regular' }}> 15 </Text>
            </View>
            <View className="flex justify-center rounded-lg mr-4 bg-red-700/25 w-[60px] h-[30px]" >
              <Text className="text-center text-red-600" style={{ fontFamily: 'Poppins-Regular' }}>
                +%51
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>

<Text className = " mt-7 mx-4 text-[16px]" style={{ fontFamily: 'Poppins-Regular' }}>
  edaebdhbe
</Text>

    <View className="p-3 m-4 bg-white rounded-[15px]">
      
      <View className="flex-row p-3 items-center mx-4 space-x-2">
        <View className="flex-1">
          <Text className="text-[17px] px-1 text-black-400" style={{ fontFamily: 'Poppins-Medium' }}>Transfer Patient</Text>
        </View>
      </View>

      <View className="bg-black/40 h-[0.5] mx-3"></View>
      
      <View className="flex-row p-3 items-center mx-4 space-x-2">
        <View className="flex-1">
          <Text className="text-[17px] px-1 text-black-400" style={{ fontFamily: 'Poppins-Medium' }}>Doctor Tools</Text>
        </View>
      </View>
      <View className="bg-black/40 h-[0.5] mx-3"></View>
      
      <View className="flex-row p-3 items-center mx-4 space-x-2">
        <View className="flex-1">
          <Text className="text-[17px] px-1 text-black-400" style={{ fontFamily: 'Poppins-Medium' }}>Order Equipments</Text>
        </View>
      </View>
      <View className="bg-black/40 h-[0.5] mx-3"></View>
      
      <View className="flex-row p-3 items-center mx-4 space-x-2">
        <View className="flex-1">
          <Text className="text-[17px] px-1 text-black-400" style={{ fontFamily: 'Poppins-Medium' }}>Medical Supplements</Text>
        </View>
      </View>
      <View className="bg-black/40 h-[0.5] mx-3"></View>
      
      <View className="flex-row p-3 items-center mx-4 space-x-2">
        <View className="flex-1">
          <Text className="text-[17px] px-1 text-black-400" style={{ fontFamily: 'Poppins-Medium' }}>Software Sync</Text>
        </View>
      </View>



    </View>
  </ScrollView>



  </>
};

