import { useFonts } from 'expo-font';
import React, { useLayoutEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import BellButton from '../components/BellButton'

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [100, 120, 88, 94, 175, 90],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
  legend: ["Average BPM/Month"] // optional
};
const chartConfig = {
  backgroundGradientFrom: "#F3922A",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#F3922A",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(1, 1, 1, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
  
};

export default function CriticalProfile() {
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
  return <>
    <SafeAreaView className="bg-{#F1F6FA} pt-5">
      <ScrollView>
        <BellButton tabName='Critical Care' />
        <View>
          <View className="ml-5">
            <Text className="text-[20px] leading-6" style={{ fontFamily: "Poppins-Medium" }}>Mr. Plarck Cacil</Text>
            <Text className="text-[16px] leading-6" style={{ fontFamily: "Poppins-Light" }}>47yo | Cardiac Arrest</Text>
          </View>
          <View className="flex flex-row">
            <View className="">
              <Image source={require('../assets/Human.png')} style={{ width: 240, height: 550, resizeMode: 'contain', }} className="ml-3"></Image>
            </View>
            <View>
              <View className="mt-[60px] bg-transparent border border-Primary-Orange items-center justify-center h-14 w-32 rounded-[10px]">
                <Text className="text-Primary-Orange text-[18px] mt-1" style={{ fontFamily: "Poppins-Medium" }}>79 BPM</Text>
              </View>
              <View className="mt-[66px] bg-transparent border border-Primary-Orange items-center justify-center h-14 w-32 rounded-[10px]">
                <Text className="text-Primary-Orange text-[18px] mt-1" style={{ fontFamily: "Poppins-Medium" }}>12 RESP</Text>
              </View>
              <View className="mt-[60px] bg-transparent border border-Primary-Orange items-center justify-center h-14 w-32 rounded-[10px]">
                <Text className="text-Primary-Orange text-[18px] mt-1" style={{ fontFamily: "Poppins-Medium" }}>100 mg/dL</Text>
              </View>
              <View className="mt-[60px] bg-transparent border border-Primary-Orange items-center justify-center h-14 w-32 rounded-[10px]">
                <Text className="text-Primary-Orange text-[18px] mt-1" style={{ fontFamily: "Poppins-Medium" }}>99 SpO2</Text>
              </View>
            </View>
          </View>
        </View>
        
        <LineChart
          data={data}
          width={screenWidth-20}
          height={220}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
          bezier
          className="mx-3 mb-4"
        />

      </ScrollView>
    </SafeAreaView>
  </>
};

