import React, { useState, useEffect } from "react";
import "../styles/createpost.css";
import Shamsipour from "../api/api";
import swal from "sweetalert";
import history from "../components/core/history";
const CreateVideoScreen = () => {
  const [categoies, setCategories] = useState({});
  const [errorMsg, setErrorMsg] = useState(false);
  const [values, setValues] = useState({
    title: "",
    thumbnail: "",
    contentUrl:"",
    desc: "",
    category: "",
    author: 1,
  });
  const fetchCategory = async () => {
    await Shamsipour.get("/category")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => {
        setErrorMsg(true);
      });
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("title", values.title);
    data.append("thumbnail", values.thumbnail);
    data.append("content_url", values.contentUrl);
    data.append("desc", values.desc);
    data.append("category", values.category);
    data.append("author", values.author);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    Shamsipour.post("/video/", data, config)
      .then((response) => {
        swal("موفقیت", "ویدیو با موفقیت ایجاد شد", "success");
        history.push("/video/list");
      })
      .catch((err) => {
        setErrorMsg(true);
      });
  };
  const renderError = () => {
    return (
      <div class="alert alert-danger" role="alert">
        ایجاد ویدیو موفقیت آمیز نبود
      </div>
    );
  };

  return (
    <div className="page-section">
      <div className="form-holder">
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              عنوان ویدیو
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="عنوان ویدیو را وارد کنید"
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              value={values.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              توضیحات
            </label>
            <textarea
              className="form-control"
              id="content"
              rows="3"
              onChange={(e) =>
                setValues({ ...values, desc: e.target.value })
              }
              value={values.content}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="contentUrl" className="form-label">
              لینک ویدیو
            </label>
            <input
              type="text"
              className="form-control"
              id="contentUrl"
              placeholder="لینک ویدیو را وارد کنید"
              onChange={(e) => setValues({ ...values, contentUrl: e.target.value })}
              value={values.contentUrl}
            />
          </div>
          <div className="mb-3 cover-input">
            <label htmlFor="formFile" className="form-label">
              تصویر مورد نظر را انتخاب کنید
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              onChange={(e) =>
                setValues({ ...values, thumbnail: e.target.files[0] })
              }
            />
          </div>
          <label htmlFor="formFile" className="form-label">
            دسته بندی را انتخاب کنید
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setValues({ ...values, category: e.target.value })}
            value={values.category}
          >
            <option defaultValue>دسته بندی</option>
            {Object.values(categoies).map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
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
export default CreateVideoScreen;
