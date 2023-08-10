import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HorizontalDayPicker from '../../components/HorizontalDayPicker';
import HorizontalMonthPicker from '../../components/HorizontalMonthPicker';
import VerticalTimeBooking from '../../components/VerticalTimeBooking';
import DialogAction from '../../components/DialogAction';
import { Button, Dialog } from '@rneui/themed';

const styles = StyleSheet.create({
   container: {
       flex: 1,
   }
});
const BookingScreen = ({navigation, route: {params}}) => {
    const [monthSelected, setMonthSelected] = React.useState(null);
    const [daySelected, setDaySelected] = React.useState(0);
    const [timeSelected, setTimeSelected] = React.useState(undefined);
    const [bookingDate, setBookingDate] = React.useState(undefined);
    const [dialogConfirmVisible, setDialogConfirmVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [title, setTitle] = React.useState('Confirmar reserva');
    const [description, setDescription] = React.useState('Una vez confirmado quedará registrado en el lugar de reserva y se enviará un correo con las indicaciones por parte del lugar de reserva');

    const booking = (state) => {
        if(state){
            //confirm call to bd
            setLoading(true);
            console.log(`params: ${params} - reserva: ${bookingDate}`);
            setSuccess(true);
        }else{

        }
    }

    getTimeSelected = (timeSelected)=> {
        
        if(monthSelected && daySelected && timeSelected){
            //hacer reserva
            setBookingDate(new Date(2023,monthSelected, daySelected).toDateString());
            if(bookingDate != undefined){
                setDialogConfirmVisible(true);
            }
        }
    }

    return (
        <View style={styles.container}>
            <HorizontalMonthPicker getMonthSelected={setMonthSelected}/>
            <HorizontalDayPicker  year={new Date().getFullYear()} month={monthSelected} setDay={setDaySelected}/>
            <VerticalTimeBooking setTimeSelected={getTimeSelected}/>
            <DialogAction visible={dialogConfirmVisible} setVisible={setDialogConfirmVisible} setAction={booking} title={title} description={description}/>
            <Dialog visible={loading}>
                <Dialog.Loading/>
            </Dialog>
            <Dialog 
                visible={success}>
            <Text style={styles.titleReservaLabel}>Se ha realizado la reserva</Text>
            <Text style={styles.reservaLabel}>{bookingDate}</Text>
            <Button title={'Aceptar'} onPress={()=> {setSuccess(false); setLoading(false); setDialogConfirmVisible(false)}}/>
        </Dialog>
        </View>
    )
}
export default BookingScreen;