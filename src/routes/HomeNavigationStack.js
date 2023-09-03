import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/login/RegisterScreen';
import HomeScreen from '../screens/home/HomeScreen';
import BookingPlaceScreen from '../screens/home/BookingPlaceScreen';
import BookingScreen from '../screens/home/BookingScreen';

const Stack = createNativeStackNavigator();

const HomeNavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen name={'Login'} component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name={'Home'} component={HomeScreen}  options={{headerShown: false}}/>
        <Stack.Screen name={'BookingPlace'} component={BookingPlaceScreen} />
        <Stack.Screen name={'Booking'} component={BookingScreen} />
        <Stack.Screen name={'RegisterScreen'} component={RegisterScreen}/>
    </Stack.Navigator>
  )
}

export default HomeNavigationStack