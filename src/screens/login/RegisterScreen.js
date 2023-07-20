import React from "react";
import { View } from "react-native";
import { Input, Button } from "@rneui/themed";
import auth from '@react-native-firebase/auth';
const RegisterScreen = () => {
  const [user, setUser] = React.useState('');
  const [password, setEmail] = React.useState('');

  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(this.user, this.password)
      .then(res => {
        console.log('response message: ', res);
      })
      .catch(err => {
        if (err.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (err.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(err);
      });
  };

  return (
    <View style={{flex: 1}}>
      <Input placeholder={'Ingrese su correo'} label={'Correo'} />
      <Input
        placeholder={'Ingrese su contraseña'}
        label={'Contraseña'}
      />
      <Button
        title={'Registrar'}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    </View>
  );
};
export default RegisterScreen;
