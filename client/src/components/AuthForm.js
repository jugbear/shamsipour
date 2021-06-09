import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ActivityIndicator, TouchableOpacity, ToastAndroid,KeyboardAvoidingView } from 'react-native';
import { Text, Button, Input, Image } from 'react-native-elements';
import Spacer from './Spacer';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.authStyle}>
    <Image source={require('../assets/img/logo.png')} style={styles.imgStyle}/>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <View style={styles.containerStyle}>
        <TextInput
          value={username}
          placeholder='نام کاربری خود را وارد کنید'
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputStyle}
        />
      </View>
      <Spacer />
      <View style={styles.containerStyle}>
        <TextInput
          value={password}
          placeholder='رمز عبور خود را وارد کنید'
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputStyle}
        />
      </View>
      {errorMessage ? (
        <Text style={styles.errorMessage}>نام کاربری یا رمز عبور اشتباه می باشد</Text>
      ) : null}
      <Spacer>
        <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: '#0dcaf0', borderColor: '#27ae60', }]}
        onPress={() =>
            onSubmit({ username, password })
          }>
          <Text style={styles.txtStyle}>{submitButtonText}</Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 15,
    color : '#dc3545'
  },
  authStyle: {
    alignItems: 'center',
    marginTop: 50,
},
  containerStyle: {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: '#fff',
    height: 50,
    marginHorizontal: 15,
    flexDirection: 'row',
    borderRadius: 15,
    marginVertical: 10
  },
  iconStyle: {
    fontSize: 24,
    alignSelf: 'center',
    marginLeft: 10
  },
  inputStyle: {
    flex: 1,
    marginRight: 10,
    fontWeight: 'bold',
    textAlign:'right'
  },
  btnStyle: {
    width: 400
  },
  buttonContainer: {
    marginTop: 40,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 150,
    borderRadius: 10,
    backgroundColor: "#00BFFF",
    marginHorizontal: 10,
  },
  txtStyle: {
    fontWeight: 'bold',
    color: '#FFF'
  },
  
});

export default AuthForm;
