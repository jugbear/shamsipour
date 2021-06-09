import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    ScrollView
} from 'react-native';
import moment from "jalali-moment";

const BlogPageScreen = ({ navigation }) => {
    const results = navigation.getParam('results');
    const tagcolor = navigation.getParam('tagcolor') ? navigation.getParam('tagcolor') : '#F7444E'
    const date = JSON.stringify(results.create).slice(1, 11);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
            <View style={styles.imageHolderStyle}>
                <Image style={styles.imageStyle} source={{ uri: results.cover }} />
                </View>
                <View style={styles.topinfoHolderStyle}>
                <Text style={styles.titleStyle}>{results.title}</Text>
                <View style={styles.subDetailStyle}>
                    <Text style={styles.subTitleStyle}>تاریخ انتشار:</Text>
                    <Text style={[styles.subValueStyle, { backgroundColor: tagcolor }]}>{moment(date).format('jYYYY/jMM/jDD')}</Text>
                    <Text style={styles.subTitleStyle}>نویسنده:</Text>
                    <Text style={[styles.subValueStyle, { backgroundColor: tagcolor }]}>{results.author.username}</Text>
                </View>
                <View style={styles.subDetailStyle}>
                    <Text style={styles.subTitleStyle}>دسته بندی:</Text>
                    <Text style={[styles.subValueStyle, { backgroundColor: tagcolor }]}>{results.category.name}</Text>
                </View>
                </View>
                <View style={styles.contentHolderStyle}>
                <Text style={styles.contentStyle}>{results.content}</Text>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    imageHolderStyle:{
        backgroundColor:'#fff',
    },
    imageStyle: {
        height: 300,
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        paddingVertical:20
    },
    topinfoHolderStyle:{
        marginVertical:10,
        backgroundColor:'#fff',
    },
    titleStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#374957',
        marginVertical: 20,
        height: 50,
        marginHorizontal: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#e3e9ed',

    },
    contentHolderStyle:{
        display: 'flex',
        backgroundColor:'#fff',
        paddingVertical:20,
        flexDirection: 'row'
    },
    subDetailStyle: {
        flexDirection: 'row-reverse',
        marginBottom: 15,
        marginLeft: 10,
    },
    subTitleStyle: {
        color: '#374957',
        fontWeight: 'bold',
        fontSize: 15,
    },
    subValueStyle: {
        marginHorizontal: 5,
        borderRadius: 10,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 3,
        marginRight: 4,
        color: '#fff'
    },
    contentStyle: {
        color: '#374957',
        fontSize: 15,
        marginHorizontal: 20,
        textAlign: 'center',
        writingDirection:'rtl'
    }
});
BlogPageScreen.navigationOptions = () => {
    return { 
        title : ''
    };
}
export default BlogPageScreen;
