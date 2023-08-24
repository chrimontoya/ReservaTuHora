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
import { dataCalendar } from '../../data/calendar';

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
    const [monthSelected, setMonthSelected] = React.useState();


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

    const getCalendar = async () => {
      //reemplazar por firebase
      // const querySnapshot = await firestore().collection('CALENDAR').where('year', '==', 2023).get();
      // querySnapshot.docs.map( doc => {
      //   if(doc.data().months){
      //     doc.data().months.map(month => console.log(month.name))
      //   }
      // });

      const querySnapshot = JSON.stringify(dataCalendar.months);
    }

    useEffect(() => {
      
        console.log(monthSelected);
    },[monthSelected]);

    return (
        <View style={styles.container}>
            <HorizontalMonthPicker data={dataCalendar} setMonthSelected={setMonthSelected}/>
            {/* <VerticalTimeBooking books={books} placeId={params.id} setTimeSelected={getTimeSelected}/> */}
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
