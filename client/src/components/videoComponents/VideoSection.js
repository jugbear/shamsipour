import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    Image,
    ActivityIndicator,
    ScrollView
} from 'react-native';
import {SafeAreaView } from 'react-navigation';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { navigate } from '../../navigationRef';
const VideoSection = ({ info }) => {
    const [counter, setCounter] = useState(true);
    if (counter && info == 0) {
        return <ActivityIndicator size="large" color="#F7444E" style={{ marginTop: 300 }} />
    }
    else if (info == 0 && !counter) {
        return (
            <View style={styles.notFoundStyle} >
                <Image
                    source={require('../../assets/img/404.png')}
                />
            </View>
        )
    }
    if (counter) { setCounter(false) }
    return (
        <View style={{marginBottom:150}}>
        <FlatList
            data={info}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
                return (
                    <View style={styles.innerContainerStyle}>
                        <TouchableOpacity
                            onPress={() => navigate('ShowVideo', { results: item })}>
                            <ImageBackground
                                imageStyle={{ borderRadius: 10, borderBottomRightRadius: 30, borderBottomLeftRadius: 30 }}
                                style={styles.imageStyle}
                                source={{ uri: item.thumbnail }} >
                                <View style={styles.iconHolderStyle}><AntDesign name="playcircleo" size={50} color="black" /></View>
                                <View style={styles.tagHolderStyle}>
                                    <Text style={styles.tagStyle}>{item.category.name}</Text>
                                </View>
                                <View style={styles.titleHolderStyle}>
                                    <Text style={styles.titleStyle}>{item.title}</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                )
            }}
        /> 
        </View>
    )
}

const styles = StyleSheet.create({
    innerContainerStyle: {
        flex: 1,
        flexDirection: "column",
    },
    imageStyle: {
        flex: 1,
        resizeMode: "cover",
        height: 210,
        margin: 15,
    },
    titleHolderStyle: {
        height: 50,
        backgroundColor: 'black',
        marginTop: 160,
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30,
        opacity: 0.75,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
    },
    tagHolderStyle: {
        backgroundColor: 'black',
        marginTop: 10,
        marginLeft: 5,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        opacity: 0.75,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },
    tagStyle: {
        fontWeight: 'bold',
        color: '#fff',
    },
    iconHolderStyle: {
        position: 'absolute',
        marginTop: 65,
        marginLeft: 165,
        opacity: 0.8
    },
    notFoundStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 250
    }
})
export default VideoSection;