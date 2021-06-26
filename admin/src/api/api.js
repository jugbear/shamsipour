import axios from 'axios';

const instance = axios.create({
    baseURL:'http://51.89.107.147:8000'
})
// instance.interceptors.request.use(
//     async(config)=>{ 
//         const token = await AsyncStorage.getItem('token');
//         if(token){
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;  
//     }, 
//     (err)=>{
//         Promise.reject(err)
//     } 
// )
export default instance;