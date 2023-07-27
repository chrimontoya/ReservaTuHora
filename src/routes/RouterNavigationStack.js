import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/login/RegisterScreen';
import HomeScreen from "../screens/home/HomeScreen";
import BookingPlaceScreen from "../screens/home/BookingPlaceScreen";
const RouterNavigationStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name={'Login'} component={LoginScreen} />
          <Stack.Screen name={'Register'} component={RegisterScreen} />
          <Stack.Screen name={'Home'} component={HomeScreen} />
          <Stack.Screen name={'BookingPlace'} component={BookingPlaceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RouterNavigationStack;
