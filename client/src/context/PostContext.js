import createDataContext from './createDataContext';
import ShamsipourApi from '../api/blogs';

const postReducer = (state, action) => {
  switch (action.type) {
      case 'fetch_post':
          return action.payload;
    default:
      return state;
  }  
}; 
  
const fetchposts = dispatch => async() => { 
    const response = await ShamsipourApi.get('/post/')
    dispatch({type:'fetch_post',payload:response.data}) 
    
}; 
export const { Provider, Context } = createDataContext(
    postReducer,
  { fetchposts },
  []
);
