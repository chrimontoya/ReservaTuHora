import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    containerImg: {
        backgroundColor: 'red',
        width:  240,
        height: 340,
        borderRadius: 40,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        fontStyle: "normal",
        marginVertical: 10,
    }
});
const HorizontalBookingCard = ({data}) => {
    const navigation = useNavigation();
    return (
        <View>
            <FlatList
                horizontal
                data={data}
                renderItem={({item}) =>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => navigation.navigate('BookingPlace', item)}>
                            <View style={styles.containerImg}/>
                        </TouchableOpacity>
                        <Text style={styles.title} >{item.name}</Text>
                    </View>
                }
                keyExtractor={item => item.id}/>
        </View>
    )
}
export default HorizontalBookingCard;