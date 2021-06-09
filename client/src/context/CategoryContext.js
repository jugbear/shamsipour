import createDataContext from './createDataContext';
import trackerApi from '../api/blogs';
const catReducer = (state, action) => {
  switch (action.type) {
      case 'fetch_cats':
          return action.payload; 
    default:
      return state;
  }  
};
 
const fetchCats = dispatch => async() => {
    const response = await trackerApi.get('/category/')  
    dispatch({type:'fetch_cats',payload:response.data}) 
     
};
export const { Provider, Context } = createDataContext(
    catReducer,
  { fetchCats },
  []
);
