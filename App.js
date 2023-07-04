import React from 'react';
import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



NativeWindStyleSheet.setOutput({
  default: "native",
});

import Home from "./screens/Home"
import Profile from "./screens/Profile"
import Patient from "./screens/Patient"
import AddPatient from "./screens/AddPatient"
import History from "./screens/History"
import Critical from "./screens/Critcal"
import CriticalProfile from "./screens/CriticalProfile"
import EditHistory from "./screens/EditHistory"
import ShowAppointmentScreen from './screens/ShowAppointmentScreen';
import EditAppointmentScreen from './screens/EditAppointmentScreen';
import CreateAppointmentScreen from './screens/CreateAppointmentScreen';
import AppointmentScreen from './screens/AppointmentScreen';
import { Provider } from './context/AppointmentContext';

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Group>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="Profile" component={Profile} />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
}
const AppointmentStack = createNativeStackNavigator();
function AppointmentStackScreen() {
  return (
    <AppointmentStack.Navigator>
      <AppointmentStack.Group>
        <AppointmentStack.Screen name="AppointmentScreen" component={AppointmentScreen} />
        <AppointmentStack.Screen name="CreateAppointmentScreen" component={CreateAppointmentScreen} />
        <AppointmentStack.Screen name="EditAppointmentScreen" component={EditAppointmentScreen} />
        <AppointmentStack.Screen name="ShowAppointmentScreen" component={ShowAppointmentScreen} />
      </AppointmentStack.Group>
    </AppointmentStack.Navigator>
  );  
}
const PatientStack = createNativeStackNavigator();
function PatientStackScreen() {
  return (
    <PatientStack.Navigator>
      <PatientStack.Group >
        <PatientStack.Screen name="Patient" component={Patient} />
        <PatientStack.Screen name="History" component={History} />
        <PatientStack.Screen name="EditHistory" component={EditHistory} />
      </PatientStack.Group>
    </PatientStack.Navigator>
  );
}
const CriticalStack = createNativeStackNavigator();
function CriticalStackScreen() {
  return (
    <CriticalStack.Navigator>
      <CriticalStack.Group>
        <CriticalStack.Screen name="Critical" component={Critical} />
        <CriticalStack.Screen name="CriticalProfile" component={CriticalProfile} />
      </CriticalStack.Group>
    </CriticalStack.Navigator>
  );
}
const Tab = createMaterialBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="black"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'black' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={26} color="{color}" />
            ),
          }}
        />
        <Tab.Screen
          name="Appointments"
          component={AppointmentStackScreen}
          options={{
            tabBarLabel: 'Appointment',
            tabBarIcon: ({ color }) => (
              <AntDesign name="calendar" size={26} color="{color}" />
            ),
          }}
        />
        <Tab.Screen
          name="Patient"
          component={PatientStackScreen}
          options={{
            tabBarLabel: 'Patient',
            tabBarIcon: ({ color }) => (
              <AntDesign name="addusergroup" size={26} color="{color}" />
            ),
          }}
        />
        <Tab.Screen
          name="Critical"
          component={CriticalStackScreen}
          options={{
            tabBarLabel: 'Critical',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="alert-rhombus-outline" size={26} color="{color}" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider>
      <App/>
    </Provider>
  )
}



