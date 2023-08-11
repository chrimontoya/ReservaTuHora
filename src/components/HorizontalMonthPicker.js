import React, { useEffect } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {calendar} from '../data/calendar';

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

const HorizontalMonthPicker = ({navigation, getCalendar}) => {
    const [months, setMonths] = React.useState(calendar.months);
    const [currentMonth, setCurrentMonth] = React.useState(months.find(month => month.id == (new Date().getMonth() + 1)));
    const [day, setDay] = React.useState(currentMonth.days.find( day => day.id == new Date().getDate()));

    useEffect(() => {
        getCalendar({month: currentMonth.id, day: day.id});
    },[day]);

    const getBeforeMonth = () => {
      if(currentMonth.id > 1){
          setCurrentMonth(months.find( month => month.id == (currentMonth.id - 1)));
      }
    }
    const getAfterMonth = () => {
        if(currentMonth.id < 12){
            setCurrentMonth(months.find( month => month.id == (currentMonth.id + 1)));
        }
    }

    return (
        <View style={styles.container}>

            {currentMonth 
                && 
                <>
                    <View style={styles.containerMonths}>
                        <TouchableOpacity style={styles.containerArrowLeft} onPress={getBeforeMonth}>
                            <Icon name={'chevron-left'} size={34} style={styles.arrowLeft} />
                        </TouchableOpacity>
                        <Text style={styles.monthLabel}>{currentMonth.month}</Text>
                        <TouchableOpacity style={styles.containerArrowRight} onPress={getAfterMonth}>
                            <Icon name={'chevron-right'} size={34} style={styles.arrowRight} />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={currentMonth.days}
                        horizontal
                        renderItem={({ item }) =>
                            <TouchableOpacity style={styles.button} onPress={()=>setDay(item)}>
                                <View style={[styles.containerDays]}>
                                    <Text style={styles.numberDayLabel}>{item.id}</Text>
                                    <Text style={styles.nameDayLabel}>{item.day}</Text>
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