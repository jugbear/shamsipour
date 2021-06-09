import React, { useState, useEffect, useContext } from "react";
import { Context as UserContext } from "../context/UserContext";
import history from "../components/core/history";
import loginImage from "../assets/img/marketing.png";

const LoginScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {
    state: { userInfo, error },
    userLogin,
  } = useContext(UserContext);
  const userInformation = localStorage.getItem("userInfo");

  const submitHandler = (event) => {
    event.preventDefault();
    userLogin(username, password);
  };
  useEffect(() => {
    if (userInformation) {
      history.push("/");
    }
  }, [userInfo]);
  return (
    <div>
      <section className="login-area ptb-100">
        <h2 className="login-title">
          سیستم مدیریت اپلیکیشن خبری و آموزشی شمسی پور
        </h2>
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="login-image">
                <img src={loginImage} alt="image" className="login-img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="login-form">
                <h3>خوش آمدید!</h3>
                <p>لطفا وارد حساب کاربری خود شوید.</p>
                <form onSubmit={submitHandler}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="نام کاربری"
                          value={username}
                          onChange={(event) => setUsername(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="رمز عبور"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </div>
                    </div>
                    {error ? (
                      <div className="alert alert-danger">
                        ورود موفقیت آمیز نبود
                      </div>
                    ) : null}
                    <div className="col-lg-12">
                      <button
                        type="submit"
                        className="btn btn-primary btn-login"
                      >
                        هم اکنون وارد شوید!
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LoginScreen;
