import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from "@rneui/themed";
import BookingPlaceModel from "../../models/BookingPlaceModel";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
    },
    containerDescription: {
        backgroundColor: "grey",
        height: 400,
        width: "100%",
        position: "absolute",
        bottom: 0,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    containerAddress: {
        flexDirection: "row",
        marginVertical: 5,
    },
    flagIcon: {
        fontSize: 24,
    },
    address: {
        marginHorizontal: 5,
        fontSize: 16,
    },
    containerReview: {
        flexDirection: "row",
        marginVertical: 5,
    },
    sunIcon: {
        fontSize: 24,
    },
    reviews: {
        marginHorizontal: 5,
        fontSize: 16,
    },
    containerBooking: {
        flexDirection: "row",
        marginVertical: 5,
    },
    clockIcon: {
        fontSize: 24,
    },
    bookingText: {
        marginHorizontal: 5,
        fontSize: 16,
    },
    description: {
      fontSize: 16,
    },
    containerBookingButton: {
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
    },
});
const BookingPlaceScreen = ({route}) => {

    const { name,description,address,img,availableTime,reviews}: BookingPlaceModel = route.params;
    
    return (
        <View style={styles.container}>
            <View style={styles.containerDescription}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.containerAddress}>
                    <Icon name={'flag'} style={styles.flagIcon}/>
                    <Text style={styles.address}>{address}</Text>
                </View>
                <View style={styles.containerReview}>
                    <Icon name={'white-balance-sunny'} style={styles.sunIcon}/>
                    <Text style={styles.reviews}>{'Reseñas ' + reviews}</Text>
                </View>
                <Text style={styles.description}>
                    {description}
                </Text>
                <View style={styles.containerBooking}>
                    <Icon name={'clock'} style={styles.clockIcon}/>
                    <Text style={styles.bookingText}>{'Horas disponibles hoy ' + availableTime}</Text>
                </View>
                <Button title={"Reservar hora"} containerStyle={styles.containerBookingButton} onPress={() => console.log(route.params)}/>
            </View>
        </View>
    )
};
export default BookingPlaceScreen;