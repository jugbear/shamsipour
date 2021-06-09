import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, Image, FlatList, StyleSheet } from 'react-native';
import { Context as PostContext } from '../context/PostContext';
import { NavigationEvents } from 'react-navigation';
import { navigate } from '../navigationRef';

const CategoryListScreen = ({ navigation }) => {
    const categoryId = navigation.getParam('categoryId');
    const { state } = useContext(PostContext);
    const posts = state.filter(post => post.category.id == categoryId)
    return (
        <View style={styles.ContainerStyle}>
        <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
            return (
                <View style={styles.innerStyle}>
                    <TouchableOpacity
                    onPress={()=>navigate('BlogPage',{results:item})}>
                    <Image
                    style={styles.imageStyle}
                    source={{ uri: item.cover }}
                     />
                    </TouchableOpacity>
                    <View style={styles.textAreaStyle}>
                    <Text numberOfLines={2} style={styles.titleStyle}>{item.title}</Text>
                    <Text  numberOfLines={4} style={styles.contentStyle}>{item.content}</Text>
                    </View>
                </View>
            )
        }}
    />
        </View>

    )
}
const styles = StyleSheet.create({
    ContainerStyle:{
        alignItems:'center',
    },
    innerStyle: {
        flex:1,
        flexDirection:'row-reverse',
        height: 130,
        width:380,
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
        
        marginHorizontal: 10,
        borderRadius: 10
    },
    imageStyle:{
        height:110,
        width:110,
        margin:10,
        borderRadius:10,
    },
    textAreaStyle:{
        flexDirection:'column',
        alignItems:'flex-end',
        height:100,
        width:230,
        margin:10,

    },
    titleStyle:{
        marginBottom:10,
        fontWeight:'bold',
        color: '#374957',
        marginLeft:10,
        textAlign:'right'
    },
    contentStyle:{
        color: '#374957',
        marginLeft:10,
        marginBottom:10,
        fontSize:12
    },
});
CategoryListScreen.navigationOptions = () => {
    return { 
        title : ''
    };
}
export default CategoryListScreen;





