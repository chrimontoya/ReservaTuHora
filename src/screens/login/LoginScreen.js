import React, {useEffect} from 'react';
import {View,TouchableOpacity,Text,StyleSheet,ScrollView} from 'react-native';
import {Input,Button} from '@rneui/themed';
import auth from '@react-native-firebase/auth';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerButton: {
        backgroundColor: '#F9D949',
        height: 60, 
        borderRadius: 20, 
        marginHorizontal: 20,
        justifyContent: 'center',
    },
    labelButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3C486B',
        textAlign: 'center'
    },
    labelRecoveryPassword: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#3C486B',
        marginBottom: 20,
        marginHorizontal: 20,
        textAlign: 'right'
    },
    containerLabelRegister:{
        flexDirection: 'row',
        position: 'absolute',
        width: '100%',
        justifyContent: 'center',
        bottom: 10,
    },
    labelEnterToAccount: {
        fontSize: 16,
        color: '#3C486B',
        marginBottom: 20,
        marginHorizontal: 20,
        textAlign: 'center',
        marginVertical: 20,
    },
    labelRegister: {
        fontSize: 16,
        color: '#3C486B',
        marginBottom: 20,
        textAlign: 'center',
        marginVertical: 20,
    },
    labelRegister2: {
        fontSize: 16,
        color: '#3C486B',
        marginBottom: 20,
        textAlign: 'center',
        marginVertical: 20,
        fontWeight: 'bold',
        borderBottomWidth: 1,
    }
});

const LoginScreen = ({ navigation }) => {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passVisible, setPassVisible] = React.useState(false);

  useEffect(()=> {
      if(auth().currentUser){
          navigation.navigate('Home');
      }else{
          console.log("No user");
      }
  },[]);
  const signInWithEmailAndPassword = () => {

      if(user && password){
          auth().signInWithEmailAndPassword(user,password)
              .then(userCredential => {
                  //Signed in
                  console.log(userCredential.user.email);
                  navigation.navigate('Home');
              })
              .catch(err => {
                 const errorCode = err.code;
                 const errorMessage = err.message;
                 console.log(errorCode, errorMessage);
              });
      }
      console.log(user, password);
  }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
            <Input
                placeholder={'Ingrese su correo'}
                label={'Correo'}
                onChangeText={(text) => setUser(text)}
                labelStyle={{ color: '#303955', fontSize: 16, paddingBottom: 10, marginHorizontal: 10 }}
                placeholderTextColor={'#303955'}
                style={{ borderWidth: 0, borderColor: '#3C486B', paddingLeft: 10, fontSize: 16 }}
                inputContainerStyle={
                    {
                        borderBottomWidth: 0.3,
                        borderTopWidth: 0.3,
                        borderLeftWidth: 0.3,
                        borderRightWidth: 0.3,
                        borderRadius: 8,
                        marginHorizontal: 10,
                    }}
            />
            <Input
                placeholder={'Ingrese su contraseña'}
                label={'Contraseña'}
                rightIcon={{ type: 'material-community', name: passVisible ? 'eye-outline' : 'eye-off-outline', color: '#3C486B', style: { paddingRight: 10 }, onPress: () => setPassVisible(!passVisible) }}
                onChangeText={(text) => setPassword(text)}
                labelStyle={{ color: '#3C486B', fontSize: 16, paddingBottom: 10, marginHorizontal: 10 }}
                placeholderTextColor={'#3C486B'}
                style={{ borderWidth: 0, borderColor: '#3C486B', paddingLeft: 10, fontSize: 16 }}
                inputContainerStyle={
                    {
                        borderBottomWidth: 0.3,
                        borderTopWidth: 0.3,
                        borderLeftWidth: 0.3,
                        borderRightWidth: 0.3,
                        borderRadius: 8,
                        marginHorizontal: 10,
                    }}
                secureTextEntry={!passVisible}
            />
            <Text style={styles.labelRecoveryPassword}>{'Recuperar contraseña'}</Text>
            <TouchableOpacity
                style={styles.containerButton}
                onPress={() => signInWithEmailAndPassword()}>
                <Text style={styles.labelButton}>{'Iniciar sesión'}</Text>
            </TouchableOpacity>
            <Text style={styles.labelEnterToAccount}>{'o entrar en mi cuenta con'}</Text>
            <Button
                title={'Cerrar sesión'}
                onPress={() => auth().signOut().then(res => console.log(res))}
                color={'warning'}
            />
            <View style={styles.containerLabelRegister}>
                <Text style={styles.labelRegister}>{'Soy nuevo aquí, '}</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.labelRegister2}>{'quiero registrarme'}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </View>
    )
}

export default LoginScreen;
