import React, { useState, useEffect } from "react";
import "../styles/createpost.css";
import Shamsipour from "../api/api";
import swal from "sweetalert";
import history from "../components/core/history";
const CreateUserScreen = () => {
  const [categoies, setCategories] = useState({});
  const [errorMsg, setErrorMsg] = useState(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    is_superuser: "",
    email: "",
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    Shamsipour.post("/users/", values)
      .then((response) => {
        swal("موفقیت", "کاربر با موفقیت ایجاد شد", "success");
        history.push("/user/list");
      })
      .catch((err) => {
        setErrorMsg(true);
      });
  };
  const renderError = () => {
    return (
      <div class="alert alert-danger" role="alert">
        ایجاد کاربر موفقیت آمیز نبود
      </div>
    );
  };

  return (
    <div className="page-section">
      <div className="form-holder">
        <form onSubmit={onSubmitHandler}>
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
          <div className="col-auto form-btn">
            <button type="submit" className="btn btn-primary mb-3 submit-btn">
              ایجاد
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateUserScreen;
