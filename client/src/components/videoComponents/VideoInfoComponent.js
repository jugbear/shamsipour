import React, { useContext } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';

const VideoInfoComponent = ({ videoinfo }) => {
    return (
        <View>
        <View style={styles.mainInfoStyle}>
        <Text style={styles.titleStyle}>{videoinfo.title}</Text>
        <View style={styles.downStyle}>
        <Text style={styles.subinfoStyle}>نویسنده: {videoinfo.author.username}</Text>
        <Text style={styles.subinfoStyle}>دسته بندی: {videoinfo.category.name}</Text>
        </View>
        </View>
        <View style={styles.extraInfoStyle}>
        <Text style={styles.titleStyle}>توضیحات</Text>
        <Text style={styles.contentStyle}>{videoinfo.desc}</Text>

        </View>

        </View>
    )
}
const styles = StyleSheet.create({
    mainInfoStyle: {
        height:150,
        backgroundColor:'#fff',
        marginVertical:15,
    },
    extraInfoStyle:{
        height:250,
        backgroundColor:'#fff',

    },
    titleStyle:{
        margin:20,
        fontWeight: 'bold',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e3e9ed',
        color: '#374957',
        paddingBottom:10,
        fontSize:20,
        textAlign:'center'

    },
    downStyle:{
        flexDirection:'row',
        marginHorizontal:20,
        marginVertical:10,
        justifyContent:'space-evenly'
    },
    subinfoStyle:{
        fontWeight: 'bold',
        color: '#374957',
    },
    contentStyle:{
        color: '#374957',
        fontWeight: 'bold',
        fontSize: 15,
        marginHorizontal:10,
        textAlign:'center',
    }
    
});

export default VideoInfoComponent;
