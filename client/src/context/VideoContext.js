import createDataContext from './createDataContext';
import ShamsipourApi from '../api/blogs';

const videoReducer = (state, action) => {
  switch (action.type) {
      case 'fetch_videos':
          return action.payload;
    default:
      return state;
  }  
};
 
const fetchvideos = dispatch => async() => {  
    const response = await ShamsipourApi.get('/video/')
    dispatch({type:'fetch_videos',payload:response.data}) 
    
};
export const { Provider, Context } = createDataContext(
    videoReducer,
  { fetchvideos },
  []
);
