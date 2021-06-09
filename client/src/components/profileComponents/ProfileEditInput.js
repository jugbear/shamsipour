import React from 'react';
import {Text,View,StyleSheet,TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';
const ProfileEditInput = ({iconname,placeholder,value, onchange}) => {
    return(
        <View style={styles.main}>
        <Feather name={iconname} style={styles.iconStyle}/>
        <TextInput 
        placeholder={placeholder}
        style={styles.inputStyle}
        value={value}
        onChangeText={onchange}
        />
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        backgroundColor:'#F0EEEE',
        height:40,
        marginHorizontal:15,
        marginTop:0,
        flexDirection:'row-reverse',
        borderRadius:5,
        marginTop:10,
    }, 
    iconStyle:{
        fontSize:20,
        alignSelf:'center',
        marginHorizontal:15
    },
    inputStyle:{
        fontSize:18,
        flex:1,
        textAlign:'right'
    }
})
export default ProfileEditInput;