import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Input,Button} from '@rneui/themed';
import auth from '@react-native-firebase/auth';
const LoginScreen = ({ navigation }) => {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');

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
    <View>
      <Input
        placeholder={'Ingrese su correo'}
        label={'Correo'}
        onChangeText={(text) => setUser(text)}
       />
      <Input
        placeholder={'Ingrese su contraseña'}
        label={'Contraseña'}
        rightIcon={{type: 'material-community', name: 'eye'}}
        onChangeText={(text) => setPassword(text)}
      />
        <Button
            title={'Iniciar sesión'}
            onPress={() => signInWithEmailAndPassword()}
        />
        <Button
            title={'Register'}
            onPress={() => navigation.navigate('Register')}
            color={'secondary'}
        />
        <Button
            title={'Cerrar sesión'}
            onPress={() => auth().signOut().then(res => console.log(res))}
            color={'warning'}
        />
    </View>
  )
}

export default LoginScreen;
