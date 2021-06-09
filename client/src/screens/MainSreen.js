import React, { useState, useContext, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList,
    Image,
    ScrollView
} from 'react-native';
import PhotoSwiper from '../components/PhotoSwiper';
import CategorySwiper from '../components/CategorySwiper';
import trackerApi from '../api/blogs';
import BlogBox from '../components/BlogBox';
import { NavigationEvents, SafeAreaView } from 'react-navigation';
import { Context as PostContext } from '../context/PostContext';
import AsyncStorage from '@react-native-community/async-storage';
import { Context as AuthContext } from '../context/AuthContext';
import MainHeaderComponent from '../components/MainHeaderComponent';
import axios from 'axios'

const MainScreen = ({ navigation }) => {
    const { state, fetchposts } = useContext(PostContext);
    const resultHelper = (cat) => {
        return Object.values(state).filter(post => {
            return post.category.name == cat
        });
        
    }
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <MainHeaderComponent />
            <ScrollView style={{marginBottom:40}} showsVerticalScrollIndicator={false}>
                <NavigationEvents onWillFocus={fetchposts} />
                <PhotoSwiper />
                <CategorySwiper /> 
                <BlogBox results={resultHelper('آموزش مجازی')} categoryTitle="آموزش مجازی" tagcolor='#F7444E' />
                <BlogBox results={resultHelper('اخبار فناوری')} categoryTitle="اخبار فناوری" tagcolor='#78BCC4' />
                <BlogBox results={resultHelper('اطلاعیه ها')} categoryTitle="اطلاعیه ها" tagcolor='#B46088' />
                <BlogBox results={resultHelper('اخبار دانشکده')} categoryTitle="اخبار دانشکده" tagcolor='#28B463' />
                <BlogBox results={resultHelper('پژوهش و فناوری')} categoryTitle="پژوهش و فناوری" tagcolor='#34495E' /> 
                <BlogBox results={resultHelper('رویداد ها')} categoryTitle="رویداد ها" tagcolor='#F39C12' />
            </ScrollView>
        </SafeAreaView>

    )
}
MainScreen.navigationOptions = () => {
    return { 
        header: () => null
    };
}
export default MainScreen;

