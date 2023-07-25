import React from 'react';
import {TouchableOpacity, FlatList, View, StyleSheet, Text} from 'react-native';
const styles = StyleSheet.create({
    container: {

    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 5,
        borderRadius: 20,
        backgroundColor: 'yellow'
    },
    buttonTitle: {
        fontWeight: "bold"
    },
});

const HorizontalCategoryList = ({data}) => {
    return (
        <View>
            <FlatList
                horizontal
                data={data} renderItem={({item}) =>
                <TouchableOpacity
                    style={styles.button}
                    title={item.name}
                    keyExtractor={item => item.id}
                >
                    <Text
                        style={styles.buttonTitle}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            }/>
        </View>
    )
}
export default HorizontalCategoryList;