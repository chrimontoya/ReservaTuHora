import {Dialog,Button} from '@rneui/themed';
import React from 'react'
import {View,StyleSheet,Text} from 'react-native'

const styles = StyleSheet.create({
    container: {
    },
    containerButtons: {
        flexDirection: "row",
    },
    title: {

    },
    description:{
        marginBottom: 20,
    },
});

const DialogAction = ({visible, title, description, setAction}) => {

  return (
    <View style={styles.container}>
        <Dialog
            isVisible={visible}
            style={{backgroundColor: "black"}}
            >
            <Dialog.Title title={title} titleStyle={styles.title}/>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.containerButtons}>
                <Button
                title={"Cancelar"}
                containerStyle={{width: '50%'}}
                type="clear"
                onPress={() => setAction(false)}
                />
                <Button
                title={'Aceptar'}
                containerStyle={{width: '50%'}}
                onPress={() => setAction(true)}
                />
            </View>
        </Dialog>
    </View>
  )
}

export default DialogAction
