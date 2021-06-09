import React, { useState } from "react";
import Shamsipour from "../api/api";
import swal from "sweetalert";
import history from "../components/core/history";
const CreateCategoryScreen = () => {
  const [values, setValues] = useState({
    name: "",
    image: "",
  });
  const [errorMsg, setErrorMsg] = useState(false);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("name", values.name);
    data.append("image", values.image);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    Shamsipour.post("/category/", data, config)
      .then((response) => {
        setValues({ name: "", image: "" });
        swal("موفقیت", "دسته بندی با موفقیت ایجاد شد", "success");
        history.push("/category/list");
      })
      .catch((err) => {
        setErrorMsg(true);
      });
  };
  const renderError = () => {
    return (
      <div class="alert alert-danger" role="alert">
        ایجاد دسته بندی موفقیت آمیز نبود
      </div>
    );
  };
  return (
    <div className="page-section">
      <div className="form-holder">
        {errorMsg ? renderError() : null}
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              عنوان دسته بندی
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="عنوان دسته بندی را وارد کنید"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              value={values.name}
            />
          </div>
          <div className="mb-3 cover-input">
            <label htmlFor="formFile" className="form-label">
              آیکون دسته بندی
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              onChange={(e) =>
                setValues({ ...values, image: e.target.files[0] })
              }
              name="photo"
              accept="image/*"
            />
          </div>
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
export default CreateCategoryScreen;
