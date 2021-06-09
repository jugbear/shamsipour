import React,{useEffect,useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';

const AutoLoginScreen = () => {
    const {autoLogin} = useContext(AuthContext);
    useEffect(()=>{
        autoLogin();
    },[])
return null;
};
export default AutoLoginScreen;