import React from "react";
import { View } from "react-native";
import { Input, Button } from "@rneui/themed";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const RegisterScreen = () => {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [birthDay, setBirthDay] = React.useState(undefined);

  const createUser = () => {
      if (name && lastName && birthDay) {
          auth()
              .createUserWithEmailAndPassword(user, password)
              .then(res => {

                  firestore()
                      .collection('USER')
                      .add({
                          name,
                          lastName,
                          birthDay,
                          user
                      })
                      .then(() => {
                          console.log('User added!');
                          console.log('response message: ', res);
                      })
                      .catch(err => {
                          console.error(err);
                      });
              })
              .catch(err => {
                  if (err.code === 'auth/email-already-in-use') {
                      alert('El email ingresado ya está en uso');
                  }
                  if (err.code === 'auth/invalid-email') {
                      console.log('El email ingresado es inválido');
                  }
                  console.error(err);
              });
      } else {
          console.error("Datos incorrectos");
      }
      ;
  };

  return (
    <View style={{flex: 1}}>
        <Input placeholder={'Christian'} label={'Nombre'} onChangeText={(name) => setName(name)} />
        <Input placeholder={'Montoya'} label={'Apellido'} onChangeText={(lastName) => setLastName(lastName)} />
        <Input placeholder={'dd/mm/yyyy'} label={'Fecha de nacimiento'} onChangeText={(birthDay) => setBirthDay(birthDay)} />
      <Input placeholder={'Ingrese su correo'} label={'Correo'} onChangeText={(user) => setUser(user)} />
      <Input
        placeholder={'Ingrese su contraseña'}
        label={'Contraseña'}
        onChangeText={(pass) => setPassword(pass)}
      />
      <Button
        title={'Registrar'}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={createUser}
      />
    </View>
  );
};
export default RegisterScreen;
