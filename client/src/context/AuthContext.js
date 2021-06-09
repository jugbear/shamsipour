import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import ShamsipourApi from '../api/blogs';
import { navigate } from '../navigationRef';
const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'sign':
      return { errorMessage: '', token: action.payload };
    case 'clear_error_message': 
      return { ...state, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '', user: { name: '' } }
    case 'auto_login':
      return { errorMessage: '', user: action.payload.detail, token:action.payload.token };
    default:  
      return state; 
  }  
};

const autoLogin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  const detail = await AsyncStorage.getItem('detail');
  if (token) { 
    dispatch({ type: 'auto_login', payload: {token,detail} });
    navigate('MainPage');  
  } else { 
    navigate('Signup'); 
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
}

const signup = dispatch => async ({StudentCode, first_name, last_name, username, password }) => {
  try {
    const response = await ShamsipourApi.post('/signup', {StudentCode, first_name, last_name, username, password });
    await AsyncStorage.setItem('token', response.data.token);
    await AsyncStorage.setItem('detail', JSON.stringify(response.data.user));
    dispatch({ type: 'sign', payload: response.data.token });
    navigate('MainPage');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: err.message
    });
  } 
};

const signin = dispatch => async ({ username, password }) => {
  try {
    const response = await ShamsipourApi.post('/signin', { username, password });
    await AsyncStorage.setItem('token', response.data.token);
    await AsyncStorage.setItem('detail', JSON.stringify(response.data.user));
    dispatch({ type: 'sign', payload: response.data.token });
    navigate('MainPage');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: err.message
    });
  }
}; 


const updateUser = dispatch => async (user) => {
  try { 
    const {username, StudentCode, first_name, last_name} = user
    await AsyncStorage.removeItem('detail');
    const response = await ShamsipourApi.put(`/update/${user.id}/`,{username, StudentCode, first_name, last_name});
    await AsyncStorage.setItem('detail', JSON.stringify(response.data));
    dispatch({ type: 'sign', payload: response.data.token });
    navigate('UserDashboard');
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
  dispatch({ type: 'signout' })
  navigate('Signin');
};


export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, autoLogin, updateUser },
  { token: null, errorMessage: '', info: null }
);
