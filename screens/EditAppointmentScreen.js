import React, { useLayoutEffect, useContext } from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Context } from '../context/AppointmentContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppointmentForm from '../components/AppointmentForm';
import Time from '../components/Time';
import Date from '../components/Date';
import { AntDesign } from '@expo/vector-icons';
import BackButton from '../components/BackButton';

const EditAppointmentScreen = ({ route, navigation }) => {
    const { state, editAppointment } = useContext(Context);
    const { id } = route.params;
    const Appointment = state.find((appointment) => appointment.id === id);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <SafeAreaView>
            <ScrollView>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackButton tabName="Edit Appointment" />
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
                    initialValues={{ title: Appointment.title, content: Appointment.content, problem: Appointment.problem }}
                    onSubmit={(title, content, problem) => {
                        editAppointment(id, title, content, problem, () => navigation.pop())
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default EditAppointmentScreen;