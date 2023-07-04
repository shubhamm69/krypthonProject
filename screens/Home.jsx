import { View, Text, Image, ScrollView, Button, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { useFonts } from 'expo-font';
import HomeCard from '../components/HomeCard';
import UpcomingCard from '../components/UpcomingCard';
import SearchBar from '../components/SearchBar'

export default function Home() {
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
    <SafeAreaView className="bg-{#F1F6FA} pt-4">
      {/* Header */}
      <ScrollView>
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <View className="flex-1">
            <Text className="text-[20px]" style={{ fontFamily: 'Poppins-Regular' }}>Good Morning,</Text>
            <Text className="text-[24px]" style={{ fontFamily: 'Poppins-Medium' }}>Dr. Adam Willams</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={{
              uri: 'https://links.papareact.com/wru',
            }} className="h-[60px] w-[60px]  bg-gray-300 p-4 rounded-full" />
          </TouchableOpacity>
        </View>

        {/* Search */}
        <SearchBar />

        {/*Upcoming Appointments*/}
        <View className="pt-5 pb-2">
          <View className="flex items-centers space-x-2 pb-2 mx-4 pt-3 rounded-[15px] h-[140] bg-purple-500/70">
            <View className="flex-row space-x-[125] px-3  ">
              <Text className="text-[16px] text-white" style={{ fontFamily: 'Poppins-SemiBold' }}>Upcoming Appointments</Text>
              <ArrowRightIcon color="white" size={24} />
            </View>
            <View className="flex-row justify-between p-2 px-4">
              <View className="flex border-2 border-[#D3C5FD] w-[160] h-[70] rounded-[7px] p-2">
                <View className="flex-row pb-3 pt-1 items-center">
                  <Image source={{
                    uri: 'https://links.papareact.com/wru',
                  }} className="h-10 w-10 bg-gray-300 rounded-full" />
                  <View className="flex-1">
                    <Text className="px-1 text-[14px]" style={{ fontFamily: 'Poppins-Medium' }}>Maria Jones</Text>
                    <Text className="px-1 text-[14px]" style={{ fontFamily: 'Poppins-Light' }}>10 am | Clinic </Text>
                  </View>
                </View>
              </View>
              <View className="flex border-2 border-[#D3C5FD] w-[160] h-[70] rounded-[7px] p-2">
                <View className="flex-row pb-3 pt-1 items-center">
                  <Image source={{
                    uri: 'https://links.papareact.com/wru',
                  }} className="h-10 w-10 bg-gray-300 rounded-full" />
                  <View className="flex-1">
                    <Text className="px-1 text-[14px]" style={{ fontFamily: 'Poppins-Medium' }}>Maria Jones</Text>
                    <Text className="px-1 text-[14px]" style={{ fontFamily: 'Poppins-Light' }}>10 am | Clinic </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>


        {/*Patients Critical Care*/}
        <View className="flex flex-row justify-between mx-5 pt-3 items-center">
          <Text className="text-[16px]" style={{ fontFamily: 'Poppins-Regular' }}>Patients Under Crticial Care</Text>
          <Text className="text-[13px]" style={{ fontFamily: 'Poppins-Regular' }}>See All</Text>
        </View>
        <HomeCard colorFont="#F0A04B" colorBack="#FFD966" para1="79 bpm | 98% O2" para2="81 bpm | 99% O2" name1="Plarck Cacil" name2="David Beckham" para3="View" image1="https://links.papareact.com/wru" image2="https://links.papareact.com/wru" />

        {/*Recent Patients*/}
        <View className="flex flex-row justify-between mx-5 pt-3 items-center">
          <Text className="text-[16px]" style={{ fontFamily: 'Poppins-Regular' }}>Recent Patients</Text>
          <Text className="text-[13px]" style={{ fontFamily: 'Poppins-Regular' }}>See All</Text>
        </View>
        <HomeCard colorFont="#205E61" colorBack="#B5F1CC" para1="12am | Hospital2" para2="10am | Clinic" name1="Maria Pinto" name2="Erika Patt" para3="History" image1="https://links.papareact.com/wru" image2="https://links.papareact.com/wru" />

        {/*Upcoming Features*/}
        <View className="flex flex-row justify-between mx-5 pt-3 items-center">
          <Text className="text-[16px]" style={{ fontFamily: 'Poppins-Regular' }}>Upcoming Features</Text>
        </View>
        <UpcomingCard f1="Transfer Patient" f2="Doctor Tools" f3="Order Equipments" />


        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />

      </ScrollView>
    </SafeAreaView>


    
    <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </>;
};

