import React from 'react';
import { View, Text } from "react-native";
import { Input, Icon } from '@rneui/themed';

const LoginScreen = () => {
  const userRef = React.createRef();
  const passRef = React.createRef();

  const redirectToRegister = () => {
  };


  return (
    <View>
      <Input
        placeholder={'Ingrese su correo'}
        label={'Correo'}
        ref={userRef}/>
      <Input
        placeholder={'Ingrese su contraseña'}
        label={'Contraseña'}
        rightIcon={{type: 'material-community', name: 'eye'}}
        ref={passRef}
      />
      <Text onPress={() => redirectToRegister()}>Registrar</Text>
    </View>
  )
}

export default LoginScreen;
