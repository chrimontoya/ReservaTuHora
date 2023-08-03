import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
   container: {
       flex: 1,
   }
});
const BookingScreen = ({navigation, route}) => {

    // useEffect(()=> {
    //
    //     const { name,img,address }: PlaceModel = route.params;
    //
    //     navigation.setOptions({
    //        title: name,
    //         headerTitleAlign: 'center',
    //     });
    //
    // },[]);

    return (
        <View style={styles.container}>
            <Text>hola</Text>
        </View>
    )
}
export default BookingScreen;