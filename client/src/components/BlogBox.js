import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { navigate } from '../navigationRef';

const BlogBox = ({ results, categoryTitle, tagcolor,handlenavigation,navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.catStyle, { color: tagcolor }]}>{categoryTitle}</Text>
            <FlatList
                data={results}
                horizontal
                inverted={-1}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.innerStyle}>
                            <TouchableOpacity
                            onPress={()=>navigate('BlogPage',{results:item,tagcolor})}>
                                <Image
                                    style={styles.imageStyle}
                                    source={{ uri: item.cover }} />
                            </TouchableOpacity>
                            <Text style={styles.titleStyle}>{item.title}</Text>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <AntDesign name="tags" size={24} color="black" />
                                <View style={[styles.detailStyle, { backgroundColor: tagcolor }]}>
                                    <Text style={{ color: '#fff' }}>{item.category.name}</Text>
                                </View>
                                <MaterialIcons name="person-pin" size={24} color="black" />
                                <View style={[styles.detailStyle, { backgroundColor: tagcolor }]}>
                                    <Text style={{ color: '#fff' }}>{item.author.username}</Text>
                                </View>

                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 300,
    },
    innerStyle: {
        height: 215,
        width: 300,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        backgroundColor: '#fff',
        marginTop: 15,
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 10
    },
    imageStyle: {
        height: 150,
        width: 300,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10

    },
    catStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 30,
        marginRight: 10,
    },
    titleStyle: {
        fontWeight: 'bold',
        marginTop: 5,
        borderBottomWidth: 0.5,
        width: '100%',
        textAlign: 'center',
        paddingBottom: 6,
        borderBottomColor: '#e3e9ed'
    },
    detailStyle: {
        marginHorizontal: 10,
        borderRadius: 10,
        marginLeft: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 3
    },

});
export default BlogBox;