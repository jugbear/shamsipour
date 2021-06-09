import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./styles/main.css";
//Components
import history from "./components/core/history";
import Sidebar from "./components/core/Sidebar";
//Screens
import DashboardScreen from "./screens/DashboardScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import PostListScreen from "./screens/PostListScreen";
import UserListScreen from "./screens/UserListScreen";
import CreateUserScreen from "./screens/CreateUserScreen";
import VideoListScreen from "./screens/VideoListScreen";
import CreateVideoScreen from "./screens/CreateVideoScreen";
import CategoryListScreen from "./screens/CategoryListScreen";
import CreateCategoryScreen from "./screens/CreateCategoryScreen";
import LoginScreen from "./screens/LoginScreen";

//contexts
import { Provider as Categoryprovider } from "./context/CategoryContext";
import { Provider as Postprovider } from "./context/PostContext";
import { Provider as Videoprovider } from "./context/VideoContext";
import { Provider as Userprovider } from "./context/UserContext";

const App = () => {
  return (
    <Postprovider>
      <Videoprovider>
        <Userprovider>
          <Categoryprovider>
            <div>
              <Router history={history}>
                <Sidebar />
                <div className="content-section">
                  <Switch>
                    <Route path="/" exact component={DashboardScreen} />
                    <Route
                      path="/post/create"
                      exact
                      component={CreatePostScreen}
                    />
                    <Route path="/post/list" exact component={PostListScreen} />
                    <Route
                      path="/video/create"
                      exact
                      component={CreateVideoScreen}
                    />
                    <Route
                      path="/video/list"
                      exact
                      component={VideoListScreen}
                    />
                    <Route
                      path="/user/create"
                      exact
                      component={CreateUserScreen}
                    />
                    <Route path="/user/list" exact component={UserListScreen} />
                    <Route
                      path="/category/list"
                      exact
                      component={CategoryListScreen}
                    />
                    <Route
                      path="/category/create"
                      exact
                      component={CreateCategoryScreen}
                    />
                    <Route path="/login" exact component={LoginScreen} />
                  </Switch>
                </div>
              </Router>
            </div>
          </Categoryprovider>
        </Userprovider>
      </Videoprovider>
    </Postprovider>
  );
};
export default App;
