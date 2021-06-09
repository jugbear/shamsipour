import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhotoVideo,
  faChalkboardTeacher,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Context as PostContext } from "../context/PostContext";
import { Context as VideoContext } from "../context/VideoContext";
import { Context as UserContext } from "../context/UserContext";

const DashboardScreen = () => {
  const {
    state: { PostCount },
    fetchPosts,
  } = useContext(PostContext);
  const {
    state: { videoCount },
    fetchVideos,
  } = useContext(VideoContext);
  const {
    state: { UserCount, userInfo },
    fetchUsers,
    userLogin,
  } = useContext(UserContext);

  useEffect(() => {
    userLogin();
    fetchPosts();
    fetchUsers();
    fetchVideos();
  }, []);
  console.log("info", userInfo);
  return (
    <div>
      <div className="box-section">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="overview-item overview-item--c1">
              <div className="overview__inner">
                <div className="overview-box clearfix">
                  <div className="box-icon">
                    <FontAwesomeIcon icon={faChalkboardTeacher} size="lg" />
                  </div>
                  <div className="text">
                    <h2 className="box-header">پست ها</h2>
                    <p>تعداد کل</p>
                    <p>{PostCount}</p>
                  </div>
                </div>
                <div className="btn-row">
                  <Link
                    to="/post/list"
                    type="button"
                    className="btn btn-outline-light footer-btn"
                  >
                    لیست
                  </Link>
                  <Link
                    to="/post/create"
                    type="button"
                    className="btn btn-outline-light footer-btn"
                  >
                    ایجاد
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="overview-item overview-item--c2">
              <div className="overview__inner">
                <div className="overview-box clearfix">
                  <div className="box-icon">
                    <FontAwesomeIcon icon={faPhotoVideo} size="lg" />
                  </div>
                  <div className="text">
                    <h2 className="box-header">ویدیو ها</h2>
                    <p>تعداد کل</p>
                    <p>{videoCount}</p>
                  </div>
                </div>
                <div className="btn-row">
                  <Link
                    to="/video/list"
                    type="button"
                    className="btn btn-outline-light footer-btn"
                  >
                    لیست
                  </Link>
                  <Link
                    to="/video/create"
                    type="button"
                    className="btn btn-outline-light footer-btn"
                  >
                    ایجاد
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="overview-item overview-item--c3">
              <div className="overview__inner">
                <div className="overview-box clearfix">
                  <div className="box-icon">
                    <FontAwesomeIcon icon={faUsers} size="lg" />
                  </div>
                  <div className="text">
                    <h2 className="box-header">کاربران</h2>
                    <p>تعداد کل</p>
                    <p>{UserCount}</p>
                  </div>
                </div>
                <div className="btn-row">
                  <Link
                    to="/user/list"
                    type="button"
                    className="btn btn-outline-light footer-btn"
                  >
                    لیست
                  </Link>
                  <Link
                    to="/user/create"
                    type="button"
                    className="btn btn-outline-light footer-btn"
                  >
                    ایجاد
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardScreen;
