import React, { useLayoutEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Context } from '../context/AppointmentContext';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import Date from '../components/Date';

const AppointmentScreen = ({ navigation }) => {

  const { state, deleteAppointment } = useContext(Context);

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
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex-row pb-2 items-center mx-5 space-x-2 pt-5 justify-between">
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={{
              uri: 'https://links.papareact.com/wru',
            }} className="h-[60px] w-[60px]  bg-gray-300 p-4 rounded-full" />
          </TouchableOpacity>
          <Text className="flex text-[18px]" style={{ fontFamily: 'Poppins-Regular' }}>Mar,2023</Text>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('CreateAppointmentScreen')}>
              <View className="flex justify-center items-center h-[50px] w-[50px] bg-white rounded-xl">
                <AntDesign className="flex item-center" name="plus" size={30} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>


        <View className="flex-col pb-2 mx-5 pt-5">
          <Text className="flex text-[22px] leading-6" style={{ fontFamily: 'Poppins-Regular' }}>Good Morning, Dr.Adam</Text>
          <Text className="flex text-[22px] leading-7" style={{ fontFamily: 'Poppins-Regular' }}>You have
            <Text className="text-Primary-Purple" style={{ fontFamily: 'Poppins-Bold', }}> 3</Text> Appointments today</Text>
        </View>


        <View className="flex flex-row justify-between mx-10 py-1 items-center">
          <Text className="text-[15px]" style={{ fontFamily: 'Poppins-Bold' }}>All</Text>
          <Text className="text-[15px]" style={{ fontFamily: 'Poppins-Bold' }}>Clinic</Text>
          <Text className="text-[15px]" style={{ fontFamily: 'Poppins-Bold' }}>Hospital 1</Text>
          <Text className="text-[15px]" style={{ fontFamily: 'Poppins-Bold' }}>Hospital 2</Text>
        </View>
        <View className="bg-Primary-Purple h-[2.5px] mx-6 w-[55px] "></View>
        <Date />


        <View>
          <FlatList
            data={state}
            keyExtractor={Appointment => Appointment.title}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('ShowAppointmentScreen', { id: item.id })}>
                  <View className="bg-white m-4 px-4 rounded-lg" style={styles.row}>
                    <View>
                      <Text className="leading-4" style={styles.title}>{item.title}</Text>
                      <Text className="leading-5" style={styles.content}>{item.content}</Text>
                    </View>
                    <TouchableOpacity className=" mb-5 flex justify-center">
                      <FontAwesome onPress={() => deleteAppointment(item.id)} className="" style={styles.icon} name="trash-o" color="black" />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};





const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginBottom: 0

  },
  title: {
    paddingVertical: 5,
    fontSize: 19
  },
  icon: {
    paddingHorizontal: 10,
    fontSize: 24,
    top: 10,
  }
});

export default AppointmentScreen;
