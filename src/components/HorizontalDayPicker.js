import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Utils from '../utils/Utils';

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    containerDays : {
        flexDirection: "column",
    },
    button: {
        borderRadius: 20,
        marginHorizontal: 10,
    },
    numberDayLabel: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
    nameDayLabel: {
        fontSize: 16,
        fontWeight: "bold",
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
});

const HorizontalDayPicker = ({navigation, year,month, setDay}) => {
    const [days, setDays] = React.useState([]);

    useEffect(() =>{
        setDay(new Date().getDate());
        if(month != undefined){
            setDays(Utils.getDaysFromMonth(year,month));
        }
    },[year,month]);

  return (
    <View style={styles.container}>
        
        <FlatList
            horizontal
            data={days}
            renderItem={({item})=> 
            <TouchableOpacity style={styles.button} onPress={()=>setDay(item.id)}>
                <View style={styles.containerDays}>
                    <Text style={styles.numberDayLabel}>{item.id}</Text>
                    <Text style={styles.nameDayLabel}>{item.name}</Text>
                </View>
            </TouchableOpacity>
            }
        />

    </View>
  )
}

export default HorizontalDayPicker;