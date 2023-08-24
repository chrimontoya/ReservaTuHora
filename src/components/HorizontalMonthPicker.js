import React, { useEffect } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {dataCalendar} from '../data/calendar';
import { MonthDTO } from '../models/dto/MonthDto';

const styles = StyleSheet.create({
   container: {

   },
   containerMonths: {
    justifyContent: "space-around",
    marginVertical: 5,
    flexDirection: "row"
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
    containerDays : {
        flexDirection: "column",
        borderRadius: 50,
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
    button: {
        marginHorizontal: 10,
        borderRadius: 50,
    },
});

const HorizontalMonthPicker = ({navigation, data, setMonthSelected}) => {
    const [year, setYear] = React.useState(data.year);
    const [months, setMonths] = React.useState(data.months);
    const [currentMonthSelected, setCurrentMonthSelected] = React.useState(new Date().getMonth() + 1);
    const [monthFiltered, setMonthFiltered] = React.useState(undefined);

    useEffect(() => {
        setMonthFiltered(months.find(month => month.id == currentMonthSelected));
    },[currentMonthSelected]);

    const getBeforeMonth = () => {
      if(currentMonthSelected > 1){
        setCurrentMonthSelected(currentMonthSelected -1);
      }
    }
    const getAfterMonth = () => {
        if(currentMonthSelected < 12){
            setCurrentMonthSelected(currentMonthSelected + 1);
        }
    }

    const getMonthSelected= (day) => {
     const month = {
        id: monthFiltered.id,
        name: monthFiltered.name,
        day: day
     }
     setMonthSelected(new MonthDTO(month));
    }

    return (
        <View style={styles.container}>

            {monthFiltered &&
                <>
                    <View style={styles.containerMonths}>
                        <TouchableOpacity style={styles.containerArrowLeft} onPress={getBeforeMonth}>
                            <Icon name={'chevron-left'} size={34} style={styles.arrowLeft} />
                        </TouchableOpacity>
                        <Text style={styles.monthLabel}>{monthFiltered && (`${monthFiltered.name}, ${year}`)}</Text>
                        <TouchableOpacity style={styles.containerArrowRight} onPress={getAfterMonth}>
                            <Icon name={'chevron-right'} size={34} style={styles.arrowRight} />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={monthFiltered.days}
                        horizontal
                        renderItem={({ item }) =>
                            <TouchableOpacity style={styles.button} onPress={() => getMonthSelected(item)}>
                                <View style={[styles.containerDays]}>
                                    <Text style={styles.numberDayLabel}>{item.id}</Text>
                                    <Text style={styles.nameDayLabel}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </>
            }

        </View>
    )
}
export default HorizontalMonthPicker;
