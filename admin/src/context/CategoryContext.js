import createDataContext from "./createDataContext";
import Shamsipour from "../api/api";
const catReducer = (state, action) => {
  switch (action.type) {
    case "fetch_cats":
      return {
        ...state,
        categoryCount: action.payload.length,
        users: action.payload,
      };
    default:
      return state;
  }
};

const fetchCategories = (dispatch) => async () => {
  const response = await Shamsipour.get("/category/");
  dispatch({ type: "fetch_cats", payload: response.data });
};

export const { Provider, Context } = createDataContext(
  catReducer,
  { fetchCategories },
  []
);
