import React, { useState, useEffect } from "react";
import Shamsipour from "../../api/api";
import swal from "sweetalert";

const UserModal = ({ showModal, userInfo, refetchUsers }) => {
  const [values, setValues] = useState({
    username: `${userInfo.username}`,
    password: ``,
    first_name: `${userInfo.first_name}`,
    last_name: `${userInfo.last_name}`,
    is_superuser: `${userInfo.is_superuser}`,
    email: `${userInfo.email}`,
  });
  const [errorMsg, setErrorMsg] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    Shamsipour.patch(`/users/${userInfo.id}/`, values)
      .then((response) => {
        swal("موفقیت", "کاربر مورد نظر با موفقیت ویرایش شد", "success");
        showModal(false);
        refetchUsers();
      })
      .catch((err) => {
        setErrorMsg(true);
      });
  };
  const renderError = () => {
    return (
      <div class="alert alert-danger" role="alert">
        ویرایش کاربر موفقیت آمیز نبود
      </div>
    );
  };
  return (
    <div className="modal-place">
      <div
        className="modal fade show"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: "block" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                ویرایش کاربر
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => showModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              {errorMsg ? renderError() : null}
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    نام کاربری
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="نام کاربری را وارد کنید"
                    onChange={(e) =>
                      setValues({ ...values, username: e.target.value })
                    }
                    value={values.username}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    نام
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="نام را وارد کنید"
                    onChange={(e) =>
                      setValues({ ...values, first_name: e.target.value })
                    }
                    value={values.first_name}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    نام خانوادگی
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="نام خانوادگی را وارد کنید"
                    onChange={(e) =>
                      setValues({ ...values, last_name: e.target.value })
                    }
                    value={values.last_name}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    رمز عبور
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="title"
                    placeholder="رمز عبور را وارد کنید"
                    onChange={(e) =>
                      setValues({ ...values, password: e.target.value })
                    }
                    value={values.password}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    ایمیل
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="title"
                    placeholder="ایمیل را وارد کنید"
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                    value={values.email}
                  />
                </div>
                <label htmlFor="formFile" className="form-label">
                  نقش کاربر را انتخاب کنید
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) =>
                    setValues({ ...values, is_superuser: e.target.value })
                  }
                  value={values.is_superuser}
                >
                  <option defaultValue>نقش کاربر</option>
                  <option value={true}>ادمین</option>
                  <option value={false}>کاربر عادی</option>
                </select>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => showModal(false)}
              >
                بستن
              </button>
              <button
                onClick={onSubmitHandler}
                type="button"
                className="btn btn-primary"
              >
                ذخیره
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserModal;
