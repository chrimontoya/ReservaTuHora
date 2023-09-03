import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SettingScreen from '../screens/setting/SettingScreen';

const Stack = createNativeStackNavigator();

const SettingNavigationStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name={'SettingScreen'} component={SettingScreen}/>
    </Stack.Navigator>
  )
}

export default SettingNavigationStack