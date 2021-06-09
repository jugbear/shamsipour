import createDataContext from "./createDataContext";
import Shamsipour from "../api/api";
import history from "../components/core/history";

const userReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        UserCount: action.payload.length,
        Users: action.payload,
      };
    case "USER_LOGIN_REQUEST":
      return { loading: true };

    case "USER_LOGIN_SUCCESS":
      return {
        loading: false,
        userInfo: action.payload,
      };

    case "USER_LOGIN_FAIL":
      return { loading: true, error: action.payload };

    case "USER_LOGOUT":
      return {};
    default:
      return state;
  }
};

const fetchUsers = (dispatch) => async () => {
  const response = await Shamsipour.get("/users/");
  dispatch({ type: "FETCH_USERS", payload: response.data });
};

const userLogin = (dispatch) => async (username, password) => {
  const userLoginInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  if (userLoginInfoFromStorage) {
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: userLoginInfoFromStorage });
  } else {
    try {
      dispatch({ type: "USER_LOGIN_REQUEST" });
      const { data } = await Shamsipour.post("/signin", {
        username: username,
        password: password,
      });
      console.log(data);
      dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      history.push("/");
    } catch (error) {
      dispatch({
        type: "USER_LOGIN_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  }
};

const userLogout = (dispatch) => async () => {
  localStorage.removeItem("userInfo");
  history.push("/login");
  dispatch({ type: "USER_LOGOUT" });
};

export const { Provider, Context } = createDataContext(
  userReducer,
  { fetchUsers, userLogin, userLogout },
  []
);
