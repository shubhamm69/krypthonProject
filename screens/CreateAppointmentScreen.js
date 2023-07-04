import React, { useLayoutEffect, useContext } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context } from '../context/AppointmentContext';
import AppointmentForm from '../components/AppointmentForm';
import Time from '../components/Time';
import Date from '../components/Date';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import BackButton from '../components/BackButton';

const CreateAppointmentScreen = ({ navigation }) => {
    const { addAppointment } = useContext(Context);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <SafeAreaView>
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackButton tabName="Schedule Appointment" />
            </TouchableOpacity>
            {/* March date */}

            <View className="flex">
                <View className="flex flex-row mx-5 items-center">
                    <Text className="mr-1 text-[18px]" style={{ fontFamily: 'Poppins-Medium' }}>March, 2023</Text>
                    <View className="pb-1">
                        <AntDesign name="down" size={19} color="black" />
                    </View>
                </View>
            </View>

            <Date />

            {/* Available Time */}

            <View className="flex pt-2">
                <View className="flex flex-row mx-5 items-center">
                    <Text className="mr-1 text-[18px]" style={{ fontFamily: 'Poppins-Medium' }}>Available Time</Text>
                </View>
            </View>

            {/* Time */}
            <Time />
            <AppointmentForm
                onSubmit={(title, content, problem) => {
                    addAppointment(title, content, problem, () => navigation.navigate('AppointmentScreen'));
                }}
            />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default CreateAppointmentScreen;