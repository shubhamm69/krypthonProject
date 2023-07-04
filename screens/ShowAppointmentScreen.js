import React, { useLayoutEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/AppointmentContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import HistoryCard from '../components/HistoryCard';

const ShowAppointmentScreen = ({ route, navigation }) => {
    const { state } = useContext(Context);
    const Appointment = state.find((appointment) => appointment.id === route.params.id);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <SafeAreaView>
            <View className=" flex-row pb-7 justify-between ">
                <View className="justify-start">
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View className="flex justify-center items-center mx-6 h-[50px] w-[50px] bg-white rounded-xl">
                            <AntDesign className="flex item-center" name="arrowleft" size={30} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View className="flex items-center justify-center ">
                    <Text className="text-[20px]" style={{ fontFamily: 'Poppins-Medium' }} >Show Appointment</Text>
                </View>
                <View className="justify-end">
                    <View className="flex justify-center items-center mx-6 h-[50px] w-[50px] bg-white rounded-xl">
                        <TouchableOpacity onPress={() =>
                            navigation.navigate('EditAppointmentScreen', { id: route.params.id })}>
                            <Feather name="edit" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <HistoryCard title={Appointment.title} content={Appointment.content} problem={Appointment.problem} />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({});
export default ShowAppointmentScreen;