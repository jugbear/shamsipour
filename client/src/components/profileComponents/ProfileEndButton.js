import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { navigate } from '../../navigationRef';

const ProfileEndButton = ({ handlesignout, handleEdit }) => {
    return (
        <View style={styles.btnViewStyle}>
            <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: '#e74c3c', borderColor: '#c0392b', }]}
                onPress={handlesignout}
            >
                <Text style={styles.txtStyle}>خروج</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: '#198754', borderColor: '#198754', }]}
                onPress={handleEdit}>
                <Text style={styles.txtStyle}>ویرایش اطلاعات</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
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

})
export default ProfileEndButton;