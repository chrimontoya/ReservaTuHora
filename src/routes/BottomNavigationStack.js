import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React,{useEffect} from 'react';
import HomeNavigationStack from './HomeNavigationStack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingNavigationStack from './SettingNavigationStack';

const Tab = createBottomTabNavigator();

const BottomNavigationStack = ({navigation}) => {

  return (
    <Tab.Navigator>
      <Tab.Screen name={'HomeStack'} component={HomeNavigationStack} options={{
        tabBarIcon: () => (
          <Icon name={'home'} size={30} color={'black'} />
        ),
        headerShown: false
      }} />
      <Tab.Screen name={'SettingStack'} component={SettingNavigationStack} options={{
        tabBarIcon: () => (
          <Icon name={'cog'} size={30} color={'black'} />
        ),
        headerShown: false
      }} />
    </Tab.Navigator>
  )
}

export default BottomNavigationStack