import React, { useContext } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation'
import SignUpForm from '../components/SignUpForm'
const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.topHolder}>
        <Image resizeMode="contain" source={require('../assets/img/university-logo-black.png')} style={styles.imgStyle} />
        <Text style={styles.titleStyle}>دانشکده شهید شمسی پور</Text>
      </View> 
      <NavigationEvents onWillFocus={clearErrorMessage} />

      <SignUpForm
        headerText=''
        errorMessage={state.errorMessage}
        submitButtonText="ثبت نام"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="اگر اکانت دارید,از این طریق وارد شوید"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  imgStyle: {
    height: 170,
    width: 170,
  },
  titleStyle:{
    fontWeight:'bold',
    fontSize:20
  },
  topHolder:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: 50
  }
  
});

export default SignupScreen;
