import React from 'react';
import {View, Button} from 'react-native';
import { Input } from '@rneui/themed';
const LoginScreen = ({ navigation }) => {
  const userRef = React.createRef();
  const passRef = React.createRef();

  // const redirectToRegister = () => {
  //     navigation.push('Register');
  // };


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
        <Button title={'Iniciar sesión'} type={'outline'}/>
        <Button title={'Registrar'} type={'clear'} onPress={() => navigation.navigate("Register")}/>

    </View>
  )
}

export default LoginScreen;
