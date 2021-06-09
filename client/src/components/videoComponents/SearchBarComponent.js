import React, { useContext, useState } from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { Feather } from '@expo/vector-icons'
const SearchBarComponent = ({term,onTermChange,onEndTerm}) => {

    return (
        <View style={styles.headerStyle}>
            <View style={styles.main}>
                <Feather name='search' style={styles.iconStyle} />
                <TextInput
                    placeholder='نام ویدیو را وارد کنید'
                    style={styles.inputStyle}
                    value={term}
                    onChangeText={onTermChange}
                    onEndEditing={onEndTerm}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#F0EEEE',
        height: 50,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: 15,
        marginBottom: 10,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    },
    inputStyle: {
        fontSize: 18,
        flex: 1,
        marginRight:10,
        textAlign:'right'
    },
    headerStyle: {
        backgroundColor: '#fff',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20
    }
})
export default SearchBarComponent;