import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';

const ProfileHeader = ({ photo }) => {

    return (
        <View>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{ uri: 'http://192.168.1.4:3001/media/avatar.png' }} />
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: "#374957",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
})
export default ProfileHeader;