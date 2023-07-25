import React from 'react';
import {Input, Icon} from '@rneui/themed';
import {Text, View} from 'react-native';
import HorizontalCategoryList from "../../components/HorizontalCategoryList";
const HomeScreen = () => {
    const [place, setPlace] = React.useState();
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
        </View>

    )
}
export default HomeScreen;