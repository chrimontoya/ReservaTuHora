import React, {useEffect} from 'react';
import {Input} from '@rneui/themed';
import {Text, View} from 'react-native';
import HorizontalCategoryList from "../../components/HorizontalCategoryList";
import firestore from '@react-native-firebase/firestore';
import HorizontalBookingCard from "../../components/HorizontalBookingCard";
const HomeScreen = () => {
    const [place, setPlace] = React.useState();
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

    const getReservas =  () => {
        firestore().collection('PLACE').get().then(res => {
            res.docs.map(doc => reservas.push(doc.data()));
        });
    }

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