import React, { useState, useEffect } from "react";
import Shamsipour from "../api/api";
import "../styles/category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import VideoModel from "../components/modal/VideoModal";
const VideoListScreen = () => {
  const [categories, setCategories] = useState({});
  const [errorMsg, setErrorMsg] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({});
  const fetchVideos = async () => {
    Shamsipour.get("/video/")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => {
        setErrorMsg(true);
      });
  };
  useEffect(() => {
    fetchVideos();
  }, []);

  const handleDelete = async (id) => {
    await Shamsipour.delete(`/video/${id}`)
      .then((response) => {
        swal("موفقیت", "ویدیو با موفقیت حذف شد", "success");
        fetchVideos();
      })
      .catch((err) => {
        setErrorMsg(true);
      });
  };
  const renderError = () => {
    return (
      <div class="alert alert-danger" role="alert">
        خطایی رخ داده است
      </div>
    );
  };
  const handleEdit = (video) => {
    setShowModal(true);
    setCurrentVideo(video);
  };


  return (
    <div id="page-section" className="page-section">
      {showModal ? (
        <VideoModel
          showModal={setShowModal}
          VideoInfo={currentVideo}
          refetchVideo={() => fetchVideos()}
        />
      ) : null}
      <div className="table-holder table--no-card m-b-40">
        {errorMsg ? renderError() : null}
        <table className="table table-borderless table-striped table-earning category-table">
          <thead>
            <tr>
              <th scope="col" className="first-th">
                شناسه
              </th>
              <th scope="col">تصویر</th>
              <th scope="col">نام</th>
              <th scope="col" className="last-th">
                کنترلر ها
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.values(categories).map((video) => {
              return (
                <tr key={video.id}>
                  <th scope="row">{video.id}</th>
                  <td>
                    <img className="category-image" src={video.thumbnail} />
                  </td>
                  <td>{video.title}</td>
                  <td>
                    <div>
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="ویرایش"
                        onClick={() => handleEdit(video)}
                      >
                        <FontAwesomeIcon icon={faEdit} size="lg" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="حذف"
                        onClick={() => handleDelete(video.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} size="lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default VideoListScreen;
