import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigationStack from './BottomNavigationStack';
import auth from '@react-native-firebase/auth';
const RouterNavigationStack = () => {
  const isLogged = auth().currentUser;
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'LoginScreen'}>
      <Stack.Screen component={BottomNavigationStack} name={'BottomTab'} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RouterNavigationStack;
