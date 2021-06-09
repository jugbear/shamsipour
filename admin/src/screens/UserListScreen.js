import React, { useState, useEffect } from "react";
import Shamsipour from "../api/api";
import "../styles/category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import UserModal from "../components/modal/UserModal";

const UserListScreen = () => {
  const [users, setUsers] = useState({});
  const [errorMsg, setErrorMsg] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const fetchUsers = async () => {
    Shamsipour.get("/users/")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        setErrorMsg(true);
      });
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await Shamsipour.delete(`/users/${id}/`)
      .then((response) => {
        swal("موفقیت", "کاربر با موفقیت حذف شد", "success");
        fetchUsers();
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
  const handleEdit = (user) => {
    setShowModal(true);
    setCurrentUser(user);
  };

  return (
    <div id="page-section" className="page-section">
      {showModal ? (
        <UserModal
          showModal={setShowModal}
          userInfo={currentUser}
          refetchUsers={() => fetchUsers()}
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
              <th scope="col">نام کاربری</th>
              <th scope="col">ایمیل</th>
              <th scope="col">نام</th>
              <th scope="col">نام خانوادگی</th>
              <th scope="col">نقش</th>
              <th scope="col" className="last-th">
                کنترلر ها
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.values(users).map((user) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{user.id ? user.id : "-"}</th>
                  <td>{user.username ? user.username : "-"}</td>
                  <td>{user.email ? user.email : "-"}</td>
                  <td>{user.first_name ? user.first_name : '-'}</td>
                  <td>{user.last_name ? user.last_name : '-'}</td>
                  <td>{user.is_superuser ? "ادمین" : "کاربر"}</td>
                  <td>
                    <div>
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="ویرایش"
                        onClick={() => handleEdit(user)}
                      >
                        <FontAwesomeIcon icon={faEdit} size="lg" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="حذف"
                        onClick={() => handleDelete(user.id)}
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
export default UserListScreen;
