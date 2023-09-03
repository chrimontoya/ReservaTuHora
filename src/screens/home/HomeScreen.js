import React, {useEffect} from 'react';
import {Input} from '@rneui/themed';
import {Text, View, StyleSheet} from 'react-native';
import HorizontalCategoryList from "../../components/HorizontalCategoryList";
import firestore from '@react-native-firebase/firestore';
import HorizontalBookingCard from "../../components/HorizontalBookingCard";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    containerIcon: {
        marginHorizontal: 20,
        alignItems: 'flex-end',
    },
    icon: {
        right: 0,
    },
    firstTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 20,
        textAlign: 'left'
    },
    secondTitle: {
        fontSize: 16,
        marginHorizontal: 20,
        textAlign: 'left',
        marginVertical: 5,
    },
    containerInputSearch: {
        
    },
    inputSearch: {
       fontSize: 16, 
    },
});

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
    ];

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
        <View style={styles.container}>
            <View style={styles.containerIcon}>
                <Icon style={styles.icon} name='brightness-4' color={'#303955'} size={34}/>
            </View>
            <Text style={styles.firstTitle}>Hola Nombre usuario</Text>
            <Text style={styles.secondTitle}>Vamos a agendar una hora</Text>
            <Input
                placeholder='¿Donde deseas reservar?'
                leftIcon={{ type: 'material-community', name: 'magnify' }}
                onChangeText={(place) => setPlace(place)}
                style={styles.inputSearch}
                containerStyle={styles.containerInputSearch}
                inputContainerStyle={{                         borderBottomWidth: 0.3,
                    borderTopWidth: 0.3,
                    borderLeftWidth: 0.3,
                    borderRightWidth: 0.3,
                    borderRadius: 8,
                    marginHorizontal: 10,
                    paddingHorizontal: 10,
                }}
            />
            <HorizontalCategoryList data={data}/>
            <HorizontalBookingCard data={reservas}/>
        </View>

    )
}
export default HomeScreen;
