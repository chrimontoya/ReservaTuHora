import React, { useEffect } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
   container: {
       flexDirection: "row",
       justifyContent: "space-around",
       marginVertical: 5,
   },
    containerArrowLeft: {
        borderRadius: 100,
        padding: 5,
    },
    arrowLeft: {},
    monthLabel:{
       textAlignVertical: "center",
        fontSize: 24,
    },
    containerArrowRight: {
        borderRadius: 100,
        padding: 5,
    },
    arrowRight: {},
});

const months = [
    {
        id: 1,
        name: "Enero"
    },
    {
        id: 2,
        name: "Febrero"
    },
    {
        id: 3,
        name: "Marzo"
    },
    {
        id: 4,
        name: "Abril"
    },
    {
        id: 5,
        name: "Mayo"
    },
    {
        id: 6,
        name: "Junio"
    },
    {
        id: 7,
        name: "Julio"
    },
    {
        id: 8,
        name: "Agosto"
    },
    {
        id: 9,
        name: "Septiembre"
    },
    {
        id: 10,
        name: "Octubre"
    },
    {
        id: 11,
        name: "Noviembre"
    },
    {
        id: 12,
        name: "Diciembre"
    },];
const HorizontalMonthPicker = ({navigation, getMonthSelected}) => {
    const [currentMonth, setCurrentMonth] = React.useState((new Date().getMonth() + 1));

    const getBeforeMonth = () => {
      if(currentMonth > 1){
          setCurrentMonth(currentMonth - 1);
      }
    }
    const getAfterMonth = () => {
        if(currentMonth < 12){
            setCurrentMonth(currentMonth + 1);
        }
    }

    useEffect(() => {
        getMonthSelected(currentMonth);
    },[currentMonth]);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerArrowLeft} onPress={getBeforeMonth}>
                <Icon name={'chevron-left'} size={34} style={styles.arrowLeft}/>
            </TouchableOpacity>
            <Text style={styles.monthLabel}>{months.find( month => month.id == currentMonth).name}</Text>
            <TouchableOpacity style={styles.containerArrowRight} onPress={getAfterMonth}>
                <Icon name={'chevron-right'} size={34} style={styles.arrowRight}/>
            </TouchableOpacity>
        </View>
    )
}
export default HorizontalMonthPicker;