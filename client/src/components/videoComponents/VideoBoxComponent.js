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
import { Video } from 'expo-av';

const VideoBoxComponent = ({ videoUrl }) => {
    return (
        <View style={styles.videoBoxStyle}>
            <Video
                source={{ uri: videoUrl }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                useNativeControls
                isLooping
                style={styles.videoStyle}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    videoBoxStyle: {
        height:320,
        backgroundColor:'#fff'
    },
    videoStyle:{
        height:300,
        margin:10,
        borderRadius:10
    }
});
export default VideoBoxComponent;
