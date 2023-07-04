import { useFonts } from 'expo-font';
import React, { useLayoutEffect } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

import BackButton from '../components/BackButton'
import SearchBar from '../components/SearchBar'
import Card from '../components/Card';

export default function Patient({ navigate }) {
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
    <SafeAreaView className="bg-{#F1F6FA} pt-4">
      <BackButton tabName='Patients' />
      <SearchBar />
    </SafeAreaView>
    <View>
      <ScrollView>


        <View className="flex flex-row justify-between pt-7 mx-10 pb-1 items-center">
          <Text className="text-[15px]" style={{ fontFamily: 'Poppins-Bold' }}>All</Text>
          <Text className="text-[15px]" style={{ fontFamily: 'Poppins-Bold' }}>Clinic</Text>
          <Text className="text-[15px]" style={{ fontFamily: 'Poppins-Bold' }}>Hospital 1</Text>
          <Text className="text-[15px]" style={{ fontFamily: 'Poppins-Bold' }}>Hospital 2</Text>

        </View>
        <View className="bg-Primary-Green h-[2.5px] mx-6 w-[55px] "></View>

        <View className="flex flex-row justify-between mx-5 py-3 items-center">
          <Text className="text-[16px]" style={{ fontFamily: 'Poppins-Regular' }}>Today</Text>
          <Text className="text-[13px]" style={{ fontFamily: 'Poppins-Regular' }}>See All</Text>
        </View>

        <Card borderColor="#BFE8E3" colorView="#BFE8E3" colorFont="#01A48F" colorBack="#FFFFFF" para1="79 bpm | 98% O2" name="Plarck Cacil" para2="View" image="https://links.papareact.com/wru" />
        <Card borderColor="#FCE4C9" colorView="#FCE4C9" colorFont="#F0A04B" colorBack="#FFFFFF" para1="79 bpm | 98% O2" name="Plarck Cacil" para2="View" image="https://links.papareact.com/wru" />
        <Card borderColor="#BFE8E3" colorView="#BFE8E3" colorFont="#01A48F" colorBack="#FFFFFF" para1="79 bpm | 98% O2" name="Plarck Cacil" para2="View" image="https://links.papareact.com/wru" />

        <View className="flex flex-row justify-between mx-5 py-3 items-center">
          <Text className="text-[16px]" style={{ fontFamily: 'Poppins-Regular' }}>Past Patients</Text>
          <Text className="text-[13px]" style={{ fontFamily: 'Poppins-Regular' }}>See All</Text>
        </View>

        <Card borderColor="#FCE4C9" colorView="#FCE4C9" colorFont="#F0A04B" colorBack="#FFFFFF" para1="79 bpm | 98% O2" name="Plarck Cacil" para2="View" image="https://links.papareact.com/wru" />


        <Button
          title="Go to Patient History"
          onPress={() => navigation.navigate('History')}
        />
        <Button
          title="Go to Edit Patient History"
          onPress={() => navigation.navigate('EditHistory')}
        />
      </ScrollView>
    </View>
  </>
};


