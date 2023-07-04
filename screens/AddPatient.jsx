import { View, Text, Image, ScrollView, Button, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import PatientDetails from '../components/PatientDetails';
import HistoryCard from '../components/HistoryCard'
import Report from '../components/Report';
import BackButton from '../components/BackButton'

export default function AddPatient() {
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

    <SafeAreaView className="pt-5">
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton tabName='Add Patients' />
        </TouchableOpacity>
        <Text className="mx-6 p-2 m-3 text-[17px] text-black mt-1" style={{ fontFamily: 'Poppins-Medium' }}>Patient Details</Text>
        <PatientDetails />
        <Text className="mx-6 p-2 m-3 text-[17px] text-black mt-1" style={{ fontFamily: 'Poppins-Medium' }}>Doctor Report</Text>
        <Report />
        <Text className="mx-6 p-2 m-3 text-[17px] text-black mt-1" style={{ fontFamily: 'Poppins-Medium' }}>Patient History</Text>
        <HistoryCard />
      </ScrollView>
    </SafeAreaView>
  </>

};

