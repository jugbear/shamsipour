import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/blogs';
import { navigate } from '../navigationRef';
const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return {errorMessage: '', token: action.payload.token,info:action.payload.user };
      case 'eltra':
        return {...state,info:action.payload}
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
      case 'signout':
        return {token : null,errorMessage : '',info:{name:''}}
    default:
      return state;
  } 
};  

const autoLogin = dispatch => async () => { 
  const token = await AsyncStorage.getItem('token') || 'dsefes';
  const detail = await AsyncStorage.getItem('detail');
  const meme =JSON.parse(detail)
  if (token) {
    dispatch({ type: 'signin', payload: token });
    dispatch({ type: 'eltra', payload: meme });
    navigate('MainPage');
  } else { 
    navigate('Signup');
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
}

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token || 'sfsef');
    await AsyncStorage.setItem('detail',JSON.stringify(response.data.user));
    dispatch({ type: 'signin', payload: response.data });
    navigate('MainPage');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: err.message
    });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    await AsyncStorage.setItem('detail',JSON.stringify(response.data.user));
    dispatch({ type: 'signin', payload: response.data });
    navigate('MainPage');
  } catch (err) {
    dispatch({ 
      type: 'add_error',
      payload: err.message
    });
  }
};

const signout = dispatch => async () => { 
  await AsyncStorage.removeItem('token');
  await AsyncStorage.removeItem('detail');
  dispatch({type : 'signout'})
  navigate('Signin');
  };


export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage,autoLogin},
  { token: null, errorMessage: '',info:null }
);
