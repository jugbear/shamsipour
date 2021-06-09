import React, {useState,useEffect } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const ProfileInfo = () => {
    const [users,settUser] = useState({})
    useEffect(()=>{
        const setUser = async() =>{
            const detail = await AsyncStorage.getItem('detail');
            settUser(JSON.parse(detail))
        }
        setUser()
    },[])
    return (
        <View style={styles.innerStyle}>
            <View style={styles.firstRowStyle}>
                <View style={styles.secondary}><Text style={styles.firstStyle}>نام</Text></View>
                <View style={styles.secondaryView}><Text style={styles.secondStyle}>{users.first_name}</Text></View>
            </View>
            <View style={styles.firstRowStyle}>
                <View style={styles.secondary}><Text style={styles.firstStyle}>نام خانوادگی</Text></View>
                <View style={styles.secondaryView}><Text style={styles.secondStyle}>{users.last_name}</Text></View>
            </View>
            <View style={styles.firstRowStyle}>
                <View style={styles.secondary}><Text style={styles.firstStyle}>کد دانشجویی</Text></View>
                <View style={styles.secondaryView}><Text style={styles.secondStyle}>{users.StudentCode}</Text></View>
            </View>
            <View style={styles.firstRowStyle}>
                <View style={styles.secondary}><Text style={styles.firstStyle}>نام کاربری</Text></View>
                <View style={styles.secondaryView}><Text style={styles.secondStyle}>{users.username}</Text></View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    innerStyle: {
        height: 300,
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
        marginTop: 75,
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    nameStyle: {
        fontWeight: 'bold',
        color: '#374957',
        marginTop: 10,
        fontSize: 20,
        marginBottom: 30
    },
    usernameStyle: {
        color: '#374957',
    },
    firstRowStyle: {
        width: 280,
        borderWidth: 0.5,
        flexDirection: 'row-reverse',
        borderRadius: 10,
        height: 40,
        marginTop: 20,
        borderColor: '#374957',
        marginBottom: 10

    },
    firstStyle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    secondStyle: {
        color: '#374957',
        fontWeight: 'bold',
        fontSize: 14,
    },
    secondary: {
        backgroundColor: '#374957',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    secondaryView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 180,
    },
    headerTitle: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 30
    },
    headerContainer: {
        paddingTop: 0
    }
})
export default ProfileInfo;