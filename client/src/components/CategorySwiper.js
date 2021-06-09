import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, Image, FlatList, StyleSheet } from 'react-native';
import { Context as CategoryContext } from '../context/CategoryContext';
import { NavigationEvents } from 'react-navigation';
import { navigate } from '../navigationRef';
import CategoryListScreen from '../screens/CategoryListScreen';
const CategorySwiper = () => {
    const { state, fetchCats } = useContext(CategoryContext);
    return (
        <View>
        <NavigationEvents onWillFocus={fetchCats} />
            <FlatList
                data={state}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View  style={styles.container}>
                            <TouchableOpacity
                            onPress={()=>navigate('ShowList',{categoryId:item.id})}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={styles.imageStyle}
                                />
                                <Text style={styles.textStyle}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>

                    )
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 120,
        width: 120,
        backgroundColor: '#e3e9ed',
        alignItems: 'center',
        marginLeft: 10,
        justifyContent: 'center',
        borderRadius: 10

    },
    imageStyle: {
        height: 70,
        width: 70
    },
    textStyle: {
        color: '#374957',
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center'
    }
});
export default CategorySwiper;