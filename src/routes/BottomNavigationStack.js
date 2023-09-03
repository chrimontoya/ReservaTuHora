import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React,{useEffect} from 'react';
import HomeNavigationStack from './HomeNavigationStack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

const Tab = createBottomTabNavigator();

const BottomNavigationStack = ({navigation}) => {

  useEffect(()=> {
    if(auth().currentUser){
        navigation.navigate('Home');
    }else{
        console.log("No user");
    }
},[]);

  return (
    <Tab.Navigator>
      <Tab.Screen name={'home'} component={HomeNavigationStack} options={{
        tabBarIcon: () => (
          <Icon name={'home'} size={30} color={'black'} />
        ),
        headerShown: false
      }} />
    </Tab.Navigator>
  )
}

export default BottomNavigationStack