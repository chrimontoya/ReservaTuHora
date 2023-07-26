import React from 'react';
import {FlatList, Text, View} from 'react-native';

const HorizontalBookingCard = ({data}) => {
    return (
        <View>
            <FlatList
                horizontal
                data={data}
                renderItem={({item}) => <Text>{item.name}</Text>}
                keyExtractor={item=> item.id}/>
        </View>
    )
}
export default HorizontalBookingCard;