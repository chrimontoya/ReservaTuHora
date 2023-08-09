import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import minutesData from '../data/minutes';
import DialogAction from './DialogAction';
import { Dialog } from '@rneui/themed';

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
    }
});

const VerticalTimeBooking = () => {
    const [dialogVisible, setDialogVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [title, setTitle] = React.useState('Confirmar reserva');
    const [description, setDescription] = React.useState('Una vez confirmado quedará registrado en el lugar de reserva y se enviará un correo con las indicaciones por parte del lugar de reserva');
    const [action, setAction] = React.useState(false);

    useEffect(()=>{
        actionSelected();
    },[action]);

    const booking=(book) => {
        if(book){
            setDialogVisible(book)
        }else{
            setDialogVisible(book)
        }
    }

    const actionSelected = () => {
        //confirm
        if(action){
            console.log("Abro screen");
            setDialogVisible(false);
            setLoading(true);
            setTimeout(()=>{
                //simula llamada a bd
                setLoading(false);
            },2000);
        }else{
            //cancel
            console.log("No hago nada ");
            setDialogVisible(false);
        }
        
    }


  return (
    <View style={styles.container}>
        <DialogAction visible={dialogVisible} setVisible={setDialogVisible} description={description} title={title} setAction={setAction}/>
        <Dialog visible={loading}>
            <Dialog.Loading/>
        </Dialog>
        <FlatList
            data={minutesData.minutes}
            renderItem={({item})=> 
                <View style={styles.containerReserva}>
                    <View style={styles.containerMinutesLabel}>
                        <Text style={styles.minutesLabel}>{item.minute}</Text>
                    </View>
                    <TouchableOpacity style={styles.reservaButton} onPress={() => booking(item.book)}>
                        <Text style={styles.reservaLabel}>{item.book == false ? 'Reservado' : 'Disponible para reserva'}</Text>
                    </TouchableOpacity>
                </View>
        }
        />
    </View>
  )
}

export default VerticalTimeBooking;