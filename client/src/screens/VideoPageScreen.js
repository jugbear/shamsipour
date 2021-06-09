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
import VideoBoxComponent from '../components/videoComponents/VideoBoxComponent';
import VideoInfoComponent from '../components/videoComponents/VideoInfoComponent';


const VideoPageScreen = ({ navigation }) => {
    const results = navigation.getParam('results');

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <VideoBoxComponent videoUrl={results.content_url} />
            <VideoInfoComponent videoinfo={results} />
        </ScrollView>
    )
}
VideoPageScreen.navigationOptions = () => {
    return { 
        title : ''
    };
}
export default VideoPageScreen;

