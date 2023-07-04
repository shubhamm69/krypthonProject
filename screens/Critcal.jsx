import { useFonts } from 'expo-font';
import React, { useLayoutEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

import PlusButton from '../components/PlusButton'
import SearchBar from '../components/SearchBar'
import Card from '../components/Card';

export default function Critical() {
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
      <PlusButton tabName='Critical Care' />
      <SearchBar />
    </SafeAreaView>
    <View>
      <ScrollView>
        <View className="flex flex-row justify-between mx-10 py-1 items-center">
          <Text className="text-[15px]" style={{ fontFamily: 'Poppins-Bold' }}>All</Text>
          <Text className="text-[15px]" style={{ fontFamily: 'Poppins-Bold' }}>Clinic</Text>
          <Text className="text-[15px]" style={{ fontFamily: 'Poppins-Bold' }}>Hospital 1</Text>
          <Text className="text-[15px]" style={{ fontFamily: 'Poppins-Bold' }}>Hospital 2</Text>
        </View>
        <View className="bg-Primary-Orange h-[2.5px] mb-4 mx-6 w-[55px] "></View>

        <TouchableOpacity onPress={() => navigation.navigate('CriticalProfile')}>
          <Card borderColor="#F49229" colorView="#FCE4C9" colorFont="#F49229" colorBack="#FFFFFF" para1="79 bpm | 98% O2" name="Plarck Cacil" para2="View" image="https://links.papareact.com/wru" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CriticalProfile')}>
          <Card borderColor="#FCE4C9" colorView="#FCE4C9" colorFont="#F0A04B" colorBack="#FFFFFF" para1="79 bpm | 98% O2" name="Plarck Cacil" para2="View" image="https://links.papareact.com/wru" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CriticalProfile')}>
          <Card borderColor="#F49229" colorView="#FCE4C9" colorFont="#F49229" colorBack="#FFFFFF" para1="79 bpm | 98% O2" name="Plarck Cacil" para2="View" image="https://links.papareact.com/wru" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  </>
};


