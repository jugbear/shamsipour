import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import MainScreen from './src/screens/MainSreen';
import UserProfileScreen from './src/screens/UserProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen'
import VideoScreen from './src/screens/VideoScreen';
import BlogPageScreen from './src/screens/BlogPageScreen';
import CategoryListScreen from './src/screens/CategoryListScreen';
import VideoPageScreen from './src/screens/VideoPageScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as Postprovider } from './src/context/PostContext';
import { Provider as Catprovider } from './src/context/CategoryContext';
import { Provider as Videoprovider } from './src/context/VideoContext';
import { setNavigator } from './src/navigationRef';
import AutoLoginScreen from './src//screens/AutoLoginScreen';
import { FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

const mainscreen = createStackNavigator({ 
  MainPage: MainScreen, 
  BlogPage: BlogPageScreen,
  ShowList: CategoryListScreen  
});
mainscreen.navigationOptions = {
  title: 'خانه',
  tabBarIcon: <Entypo name="home" size={24} color="black" />,
};
const profile = createStackNavigator({ 
  UserDashboard: UserProfileScreen,
  EditProfile: EditProfileScreen
});  
 

profile.navigationOptions = {
  title: 'پروفایل',
  tabBarIcon: <FontAwesome name="user" size={24} color="black" />
};

const Video = createStackNavigator({
  Videopage: VideoScreen,
  ShowVideo: VideoPageScreen, 
});
Video.navigationOptions = {
  title: 'ویدیو',
  tabBarIcon: <MaterialCommunityIcons name="movie-open" size={24} color="black" />

};


const switchNavigator = createSwitchNavigator({
  Autologin: AutoLoginScreen,
  loginflow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }), 
  mainflow: createBottomTabNavigator({
    profile,
    mainscreen,
    Video
  })


})

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <Videoprovider> 
        <Catprovider> 
          <Postprovider> 
            <AuthProvider>
              <App ref={(navigator) => { setNavigator(navigator) }} />
            </AuthProvider>
          </Postprovider>
        </Catprovider>
    </Videoprovider>
  )
}             