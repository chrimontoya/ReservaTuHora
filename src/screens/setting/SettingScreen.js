import { Button } from '@rneui/themed';
import React from 'react'
import {StyleSheet,View} from 'react-native'
import auth from '@react-native-firebase/auth';

const styles = StyleSheet.create({
    container: {

    },
});

const SettingScreen = ({navigation}) => {
  return (
    <View>
        <Button
                title={'Cerrar sesión'}
                onPress={() => auth().signOut().then(res => navigation.navigate('LoginScreen'))}
                color={'warning'}
            />
    </View>
  )
}

export default SettingScreen