import createDataContext from "./createDataContext";
import Shamsipour from "../api/api";

const postReducer = (state, action) => {
  switch (action.type) {
    case "fetch_posts":
      return {
        ...state,
        PostCount: action.payload.length,
        Posts: action.payload,
      };
    default:
      return state;
  }
};

const fetchPosts = (dispatch) => async () => {
  const response = await Shamsipour.get("/post/");
  dispatch({ type: "fetch_posts", payload: response.data });
};
export const { Provider, Context } = createDataContext(
  postReducer,
  { fetchPosts },
  []
);
