import React, { useContext, useState } from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { Context as VideoContext } from '../context/VideoContext';
import { NavigationEvents, SafeAreaView } from 'react-navigation';
import VideoSection from '../components/videoComponents/VideoSection';
import { Context as CategoryContext } from '../context/CategoryContext';
import { Feather } from '@expo/vector-icons';
import SearchBarComponent from '../components/videoComponents/SearchBarComponent';
const VideoScreen = ({ navigation }) => {
    const { state, fetchvideos } = useContext(VideoContext);
    const [term, setTerm] = useState('');
    const resultHelper=(title)=>{
        return state.filter(st =>{
            return st.title.includes(title);
        });
    }
    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <NavigationEvents onWillFocus={fetchvideos} />
            <SearchBarComponent term={term} onTermChange={setTerm} onEndTerm={()=>resultHelper(term)}/>
            <VideoSection info={resultHelper(term)} />
        </SafeAreaView>

    )
}
VideoScreen.navigationOptions = () => {
    return {
        header: () => null
    };
}

const styles = StyleSheet.create({

})
export default VideoScreen;