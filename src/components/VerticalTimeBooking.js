import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {minutesData} from '../data/calendar';
import DialogAction from './DialogAction';
import { Button, Dialog } from '@rneui/themed';

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        flex: 1,
    },
    containerReserva: {
        flexDirection: "row",
    },
    containerMinutesLabel: {
        width: "25%",
        borderRightWidth: 1,
    },
    minutesLabel: {
        fontSize: 20,
        padding: 10,
        fontWeight: "bold",
        textAlign: "center",
    },
    reservaButton: {
        width: "70%",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
    },
    reservaLabel: {
        textAlignVertical: "center",
        fontSize: 20,
        fontWeight: "bold",
        padding: 10,
        textAlign: "center"
    },
    titleReservaLabel: {
        fontSize: 14,
        textAlign: "center",
    },
    fechaReservaLabel: {
        fontSize: 24,
        textAlign: "center"
    },
});

const VerticalTimeBooking = ({setTimeSelected, books}) => {

  useEffect(() => {
  }, [books]);

  return (
    <View style={styles.container}>
        <FlatList
            data={minutesData.minutes}
            renderItem={({item})=>
                <View style={styles.containerReserva}>
                    <View style={styles.containerMinutesLabel}>
                        <Text style={styles.minutesLabel}>{item.minute}</Text>
                    </View>
                    <TouchableOpacity style={styles.reservaButton} onPress={() => books.find( book => book.time !== item.id) && setTimeSelected(item)}>
                        <Text style={styles.reservaLabel}>{ books.find( book => book.time === item.id) ? 'Reservado' : 'Disponible para reserva'}</Text>
                    </TouchableOpacity>
                </View>
        }
        />
    </View>
  )
}

export default VerticalTimeBooking;
