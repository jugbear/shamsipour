import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ActivityIndicator, TouchableOpacity, ToastAndroid, KeyboardAvoidingView } from 'react-native';
import { Text, Button, Input, Image } from 'react-native-elements';
import Spacer from './Spacer';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const SignUpForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [first_name, setFirst_name] = useState('');
    const [StudentCode, setStudentCode] = useState('');
    const [last_name, setLast_name] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.authStyle}>
            <Image source={require('../assets/img/logo.png')} style={styles.imgStyle} />
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <View style={styles.RowHolder}>
                <View style={styles.containerStyle}>
                    <TextInput
                    value={last_name}
                    placeholder='نام خانوادگی خود را وارد کنید'
                    onChangeText={setLast_name}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.inputStyle}
                />
                </View>
                <View style={styles.containerStyle}>
                    <TextInput
                        value={first_name}
                        placeholder='نام خود را وارد کنید'
                        onChangeText={setFirst_name}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputStyle}
                    />
                </View>
            </View>
            <View style={styles.RowHolder}>

            <View style={styles.containerStyle}>
                <TextInput
                value={StudentCode}
                placeholder='شماره دانشجویی را وارد کنید'
                onChangeText={setStudentCode}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
            />
            </View>
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
            </View>
            <View style={styles.passHolder}>
                <TextInput
                    value={password}
                    placeholder='رمز عبور را وارد کنید'
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.inputStyle}
                />
            </View>
            {errorMessage ? (
                <Text style={styles.errorMessage}>لطفا دوباره تلاش کنید</Text>
            ) : null}
            <Spacer>
                <TouchableOpacity
                    style={[styles.buttonContainer, { backgroundColor: '#0dcaf0', borderColor: '#27ae60', }]}
                    onPress={() =>
                        onSubmit({ StudentCode, first_name, last_name, username, password })
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
        color: '#dc3545',
        marginLeft: 15,
        marginTop: 15
    },
    RowHolder: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    authStyle: {
        alignItems: 'center',
        marginTop: 50,
    },
    passHolder:{
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
        width:180,
        marginHorizontal: 10,
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
        backgroundColor: "#0dcaf0",
        marginHorizontal: 10,
    },
    txtStyle: {
        fontWeight: 'bold',
        color: '#FFF'
    },

});

export default SignUpForm;
