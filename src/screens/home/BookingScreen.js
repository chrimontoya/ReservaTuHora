import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HorizontalDayPicker from '../../components/HorizontalDayPicker';
import HorizontalMonthPicker from '../../components/HorizontalMonthPicker';
import VerticalTimeBooking from '../../components/VerticalTimeBooking';

const styles = StyleSheet.create({
   container: {
       flex: 1,
   }
});
const BookingScreen = ({navigation, route}) => {
    const [monthSelected, setMonthSelected] = React.useState(null);
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
    const getMonthSelected = (month) => {
        setMonthSelected(month);
    };


    return (
        <View style={styles.container}>
            <HorizontalMonthPicker getMonthSelected={getMonthSelected}/>
            <HorizontalDayPicker  year={new Date().getFullYear()} month={monthSelected}/>
            <VerticalTimeBooking />
        </View>
    )
}
export default BookingScreen;