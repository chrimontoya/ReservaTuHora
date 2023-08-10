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

const DialogAction = ({visible, setVisible, title, description, setAction}) => {
    // const [visible, setVisible] = React.useState(state);

    const toggleDialog = () => {
        setVisible(!visible);
    }

  return (
    <View style={styles.container}>
        <Dialog
            isVisible={visible}
            onBackdropPress={toggleDialog}
            style={{backgroundColor: "black"}}
            >
            <Dialog.Title title={title} titleStyle={styles.title}/>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.containerButtons}>
                <Button
                title={"Cancelar"}
                containerStyle={{width: '50%'}}
                type="clear"
                onPress={() => setVisible(!visible)}
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