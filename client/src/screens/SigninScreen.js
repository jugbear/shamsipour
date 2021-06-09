import React, { useContext } from 'react';
import { View, StyleSheet, Image, Text, } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation'
const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <View style={styles.topHolder}>
        <Image resizeMode="contain" source={require('../assets/img/university-logo-black.png')} style={styles.imgStyle} />
        <Text style={styles.titleStyle}>دانشکده شهید شمسی پور</Text>
      </View>
      <AuthForm
        headerText=""
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="ورود"
      />
      <NavLink
        text="اگر اکانت ندارید, همین الان ثبت نام کنید"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = {
  header: () => false,
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
  topHolder:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: 50
  },
  titleStyle:{
    fontWeight:'bold',
    fontSize:20
  }
  
});

export default SigninScreen;
