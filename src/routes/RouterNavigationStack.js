import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/login/RegisterScreen';
const RouterNavigationStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen name={'Login'} component={LoginScreen} />
          <Stack.Screen name={'Register'} component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RouterNavigationStack;
