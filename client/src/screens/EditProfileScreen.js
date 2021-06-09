import React, { useState, useEffect, useContext } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import ProfileEditInput from '../components/profileComponents/ProfileEditInput';
import AsyncStorage from '@react-native-community/async-storage';
import { Context as AuthContext } from '../context/AuthContext';

const EditProfileScreen = ({navigation}) => {
    const [user, settUser] = useState({})
    const { updateUser } = useContext(AuthContext);


    useEffect(() => {
        const setUser = async () => {
            const detail = await AsyncStorage.getItem('detail');
            settUser(JSON.parse(detail))
        }
        setUser()
    }, [])
    return (
        <View>
            <View style={styles.innerStyle}>
                <Image style={styles.avatar} source={{ uri: 'http://192.168.1.4:3001/media/avatar.png' }} />
                <Text style={styles.nameStyle}>{user.username}</Text>
                <Text style={[styles.nameStyle, { fontSize: 14, marginBottom: 30 }]}>{user.email}</Text>
                <ProfileEditInput iconname='info' placeholder='نام خود را وارد کنید' value={user.first_name} onchange={value => settUser({ ...user, first_name: value })} />
                <ProfileEditInput iconname='type' placeholder='نام خانوادگی خود را وارد کنید' value={user.last_name} onchange={value => settUser({ ...user, last_name: value })} />
                <ProfileEditInput iconname='archive' placeholder='شماره دانشجویی را وارد کنید' value={user.StudentCode} onchange={value => settUser({ ...user, StudentCode: value })} />
                <ProfileEditInput iconname='user' placeholder='نام خود را وارد کنید' value={user.username} onchange={value => settUser({ ...user, username: value })} />
                <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: '#2ecc71', borderColor: '#27ae60', }]}
                onPress={()=>updateUser(user)}
                >
                    <Text style={styles.txtStyle}>ذخیره</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    innerStyle: {
        height: 450,
        width: 300,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.40,
        shadowRadius: 1.41,

        elevation: 6,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 80,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        alignSelf: 'center',
        marginTop: -70,
    },
    nameStyle: {
        fontWeight: 'bold',
        color: '#374957',
        marginTop: 5,
        fontSize: 20,
        marginBottom: 1
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
    btnViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtStyle: {
        fontWeight: 'bold',
        color: '#fff'
    }
});

EditProfileScreen.navigationOptions = () => {
    return { 
        title : ''
    };
}
export default EditProfileScreen;
