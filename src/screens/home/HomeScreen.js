import React, {useEffect} from 'react';
import {Input} from '@rneui/themed';
import {Text, View} from 'react-native';
import HorizontalCategoryList from "../../components/HorizontalCategoryList";
import firestore from '@react-native-firebase/firestore';
import HorizontalBookingCard from "../../components/HorizontalBookingCard";
import HorizontalMonthPicker from '../../components/HorizontalMonthPicker';
import { dataCalendar } from '../../data/calendar';
const HomeScreen = () => {
    const [place, setPlace] = React.useState(null);
    const [reservas, setReservas] = React.useState([]);
    const data = [
        {
            id: 1,
            name: "Medicina"
        },
        {
            id: 2,
            name: "Deportes"
        },
        {
            id: 3,
            name: "Hotelería"
        },
        {
            id: 4,
            name: "Centro educativo"
        },
        {
            id: 5,
            name: "Centro de entretención"
        }
    ]

    const getReservas = async () => {
        try {
            const querySnapshot = await firestore().collection('PLACE').get();
            const reservas = querySnapshot.docs.map(doc => doc.data());
            setReservas(reservas);
        } catch (error) {
            console.error("Error al obtener la colección:", error);
        }
    };

    useEffect( () => {
        getReservas();
    },[]);

    return (
        <View>
            <Text>Hola Nombre usuario</Text>
            <Text>subtitulo</Text>
            <Input
                placeholder='¿Donde deseas reservar?'
                leftIcon={{ type: 'material-community', name: 'magnify' }}
                onChangeText={(place) => setPlace(place)}
            />
            <HorizontalCategoryList data={data}/>
            <HorizontalBookingCard data={reservas}/>
        </View>

    )
}
export default HomeScreen;
