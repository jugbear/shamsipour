import React, { useContext,useState,useEffect } from 'react';
import { SafeAreaView } from 'react-navigation';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import ProfileHeader from '../components/profileComponents/ProfileHeader';
import ProfileInfo from '../components/profileComponents/ProfileInfo';
import ProfileEndButton from '../components/profileComponents/ProfileEndButton';

const UserProfileScreen = ({ navigation }) => {
    const { state: { user }, signout } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{ bottom: 'always' }}>
            <ProfileHeader photo={''} />
            <ProfileInfo user={user}/>
            <ProfileEndButton handlesignout={signout} handleEdit={()=> navigation.navigate('EditProfile')} />
            
        </SafeAreaView>
    )
}
UserProfileScreen.navigationOptions = {
    header: () => false,
};
const styles = StyleSheet.create({



});
export default UserProfileScreen;