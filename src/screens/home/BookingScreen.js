import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HorizontalDayPicker from '../../components/HorizontalDayPicker';
import HorizontalMonthPicker from '../../components/HorizontalMonthPicker';
import VerticalTimeBooking from '../../components/VerticalTimeBooking';
import DialogAction from '../../components/DialogAction';
import { Button, Dialog } from '@rneui/themed';
import firestore from "@react-native-firebase/firestore";
import { BookDao } from "../../models/dao/BookDao";
import moment from "moment";
import { BookDate } from "../../models/dao/BookDate";

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

    const booking = async (state) => {
        if(state){
            //confirm call to bd
            setDialogConfirmVisible(false);
            setLoading(true);
            const bookDao = new BookDao(bookingDate,params.id, timeSelected);
             await firestore()
               .collection('BOOK')
               .add(JSON.parse(JSON.stringify(bookDao)))
               .then(() => {
                 setLoading(false);
                 console.log("Reserva completada");
                 getBookingByDate();
               })
               .catch(err => {
                 setLoading(false);
                 console.error("Error al reservar hora: ", err);
               });
            // setSuccess(true);
        }else{
            //levantar algún popup por debajoW
          console.log("operacion cancelada");
            setDialogConfirmVisible(false);
        }
    }

    const getTimeSelected = (timeSelected)=> {
      setTimeSelected(timeSelected);
        if(calendar !== undefined && timeSelected !== undefined){
            //call dialog confirm
            setBookingDate(new BookDate(calendar.day, calendar.month, calendar.year));
            if(bookingDate !== undefined){
                setDialogConfirmVisible(true);
            }
        }else{
          console.error("Error al seleccionar hora");
        }
    }

    const getBookingByDate = async () => {
      try{
        const booksSnapshot = [];
        const querySnapshot = await firestore().collection('BOOK').where('placeId','==', params.id).get();
        querySnapshot.docs.map(doc => {
          booksSnapshot.push(doc.data());
        });
        setbooks(booksSnapshot);
      } catch (err) {
        console.error("Error al obtener reservas del día: ",err);
      }
    }

    useEffect(() => {
      if(calendar != undefined){
        //get hours available at day
        getBookingByDate();
      }
    },[calendar,books]);

    return (
        <View style={styles.container}>
            <HorizontalMonthPicker getCalendar={setCalendar}/>
            <VerticalTimeBooking books={books} placeId={params.id} setTimeSelected={getTimeSelected}/>
            <DialogAction visible={dialogConfirmVisible} setAction={booking} title={title} description={description}/>
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
