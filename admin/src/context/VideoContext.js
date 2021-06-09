import createDataContext from './createDataContext';
import Shamsipour from "../api/api";

const videoReducer = (state, action) => {
  switch (action.type) {
      case 'fetch_videos':
        return {
          ...state,
          videoCount: action.payload.length,
          Videos: action.payload,
        };
    default:
      return state;
  }  
};
 
const fetchVideos = dispatch => async() => {
    const response = await Shamsipour.get('/video/')
    dispatch({type:'fetch_videos',payload:response.data}) 
    
};
export const { Provider, Context } = createDataContext(
    videoReducer,
  { fetchVideos },
  []
);
