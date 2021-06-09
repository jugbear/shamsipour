import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const instance = axios.create({
    baseURL:'http://192.168.1.7:3001'  
})
instance.interceptors.request.use(
    async(config)=>{ 
        const token = await AsyncStorage.getItem('token');
        if(token){ 
            config.headers.Authorization = `Token ${token}`;
        }
        return config;       
    },   
    (err)=>{
        Promise.reject(err)
    } 
)
export default instance;