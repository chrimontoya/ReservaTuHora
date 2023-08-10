import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import minutesData from '../data/minutes';
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

const VerticalTimeBooking = ({setTimeSelected}) => {
    const [dialogVisible, setDialogVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [dialogConfirm, setDialogConfirm] = React.useState(false);
    const [action, setAction] = React.useState(false);
    const [bookSelected, setBookSelected] = React.useState(undefined);

  return (
    <View style={styles.container}>
        {/* <DialogAction visible={dialogVisible} setVisible={setDialogVisible} description={description} title={title} setAction={setAction}/>
        <Dialog visible={loading}>
            <Dialog.Loading/>
        </Dialog>
        <Dialog 
            visible={dialogConfirm}
            onBackdropPress={()=> setDialogConfirm(false)}>
            <Text style={styles.titleReservaLabel}>Se ha realizado la reserva</Text>
            <Text style={styles.reservaLabel}>Miercoles 9 de Agosto 10:30 AM {data.date + " " + data.time}</Text>
            <Button title={'Aceptar'} onPress={()=> setDialogConfirm(false)}/>
        </Dialog> */}
        <FlatList
            data={minutesData.minutes}
            renderItem={({item})=> 
                <View style={styles.containerReserva}>
                    <View style={styles.containerMinutesLabel}>
                        <Text style={styles.minutesLabel}>{item.minute}</Text>
                    </View>
                    <TouchableOpacity style={styles.reservaButton} onPress={() => setTimeSelected(item.id)}>
                        <Text style={styles.reservaLabel}>{item.book == false ? 'Reservado' : 'Disponible para reserva'}</Text>
                    </TouchableOpacity>
                </View>
        }
        />
    </View>
  )
}

export default VerticalTimeBooking;