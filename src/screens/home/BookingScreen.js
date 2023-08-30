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
import { TimeReserveDTO } from '../../models/dto/TimeReserveDTO';

const styles = StyleSheet.create({
   container: {
       flex: 1,
   }
});
const BookingScreen = ({navigation, route: {params}}) => {
    const [bookingDate, setBookingDate] = React.useState(undefined);
    const [dialogConfirmVisible, setDialogConfirmVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [title, setTitle] = React.useState('Confirmar reserva');
    const [description, setDescription] = React.useState('Una vez confirmado quedará registrado en el lugar de reserva y se enviará un correo con las indicaciones por parte del lugar de reserva');
    const [monthSelected, setMonthSelected] = React.useState(); // mes y dia seleccionado para reservar
    const [timeToReserve, setTimeToReserve] = React.useState(); // hora seleccionada para reservar
    const [reservedTimes, setReservedTimes] = React.useState([]); // usado para horas reservadas por filtro

    const getReservedTimes = async () => {
        const querySnapshot = await firestore().collection('BOOK').get();
        const books = querySnapshot.docs.map( doc => doc.data());
        setReservedTimes(books);
    }

    const booking = async () => {
        setLoading(true);
        const bookDao = new BookDao(params.id, timeToReserve.id, monthSelected.id, monthSelected.day.id);
            await firestore()
            .collection('BOOK')
            .add(JSON.parse(JSON.stringify(bookDao)))
            .then(() => {
                setLoading(false);
                setSuccess(true);
                getReservedTimes();
            })
            .catch((err)=> {
                console.error("error al reservar: ",err);
                setLoading(false);
            })
            // setSuccess(true);
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

    const getAction = (actionSelected) => {
        if(actionSelected){
            //guardar a bd
            console.log("confirm");
            setDialogConfirmVisible(false);
            booking();
        }else{
            //levantar burbuja con msj
            console.log("cancel");
            setDialogConfirmVisible(false);
        }
    }

    useEffect(() => {
      
        if(monthSelected != undefined && timeToReserve != undefined && params != undefined){
            //abrir modal confirm
            console.log("abrir modal");
            setDialogConfirmVisible(true);
        }

    },[timeToReserve]);

    useEffect(() => {
        getReservedTimes();
    },[]);


    return (
        <View style={styles.container}>
            <HorizontalMonthPicker data={dataCalendar} setMonthSelected={setMonthSelected}/>
            <VerticalTimeBooking reservedTimes={reservedTimes} getTimeToReserve={setTimeToReserve}/>
            <DialogAction visible={dialogConfirmVisible} getAction={getAction} title={title} description={description}/>
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
