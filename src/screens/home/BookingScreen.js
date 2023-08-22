import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HorizontalDayPicker from '../../components/HorizontalDayPicker';
import HorizontalMonthPicker from '../../components/HorizontalMonthPicker';
import VerticalTimeBooking from '../../components/VerticalTimeBooking';
import DialogAction from '../../components/DialogAction';
import { Button, Dialog } from '@rneui/themed';
import firestore from "@react-native-firebase/firestore";

const styles = StyleSheet.create({
   container: {
       flex: 1,
   }
});
const BookingScreen = ({navigation, route: {params}}) => {
    // const [monthSelected, setMonthSelected] = React.useState(null);
    const [daySelected, setDaySelected] = React.useState(0);
    const [timeSelected, setTimeSelected] = React.useState(undefined);
    const [bookingDate, setBookingDate] = React.useState(undefined);
    const [dialogConfirmVisible, setDialogConfirmVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [title, setTitle] = React.useState('Confirmar reserva');
    const [description, setDescription] = React.useState('Una vez confirmado quedará registrado en el lugar de reserva y se enviará un correo con las indicaciones por parte del lugar de reserva');
    const [calendar, setCalendar] = React.useState(undefined);
    const [books, setbooks] = React.useState([]);

    const booking = (state) => {
        if(state){
            //confirm call to bd
            setLoading(true);
            console.log(`params: ${params} - reserva: ${bookingDate}`);
            setSuccess(true);
        }else{

        }
    }

    const getTimeSelected = (timeSelected)=> {
      console.log(timeSelected, calendar)
        if(calendar != undefined && timeSelected){
            //hacer reserva
            setBookingDate(new Date(2023,calendar.month - 1, calendar.day).toDateString());
            if(bookingDate != undefined){
                setDialogConfirmVisible(true);
            }
        }
    }

    const getBookingByDate = async () => {
      try{
        const querySnapshot = await firestore().collection('BOOK').where('placeId','==', 1).get();
        querySnapshot.docs.map(doc => books.push(doc.data()));
      } catch (err) {
        console.error("Error al obtener reservas del día: ",err);
      }
    }

    useEffect(() => {
      if(calendar != undefined){
        //get hours available at day
        getBookingByDate();
      }
    },[calendar]);

    return (
        <View style={styles.container}>
            <HorizontalMonthPicker getCalendar={setCalendar}/>
            <VerticalTimeBooking books={books} setTimeSelected={getTimeSelected}/>
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
