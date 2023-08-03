import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import PlaceModel from "../../models/PlaceModel";

const styles = StyleSheet.create({
   container: {
       flex: 1,
   }
});
const BookingScreen = ({navigation, route}) => {

    useEffect(()=> {

        const { name,img,address }: PlaceModel = route.params;

        navigation.setOptions({
           title: name,
            headerTitleAlign: 'center',
        });

    },[]);

    return (
        <View style={styles.container}>
            
        </View>
    )
}
export default BookingScreen;