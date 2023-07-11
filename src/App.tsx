/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from "./screens/login/LoginScreen";

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <LoginScreen/>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
}
export default App;
