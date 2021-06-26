import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const instance = axios.create({
    baseURL:'http://51.89.107.147:8000'  
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
