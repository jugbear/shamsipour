import React, { useState, useEffect } from "react";
import "../styles/createpost.css";
import Shamsipour from "../api/api";
import swal from "sweetalert";
import history from "../components/core/history";
const CreatePostScreen = () => {
  const [categoies, setCategories] = useState({});
  const [errorMsg, setErrorMsg] = useState(false);
  const [values, setValues] = useState({
    title: "",
    cover: "",
    content: "",
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
    data.append("cover", values.cover);
    data.append("content", values.content);
    data.append("category", values.category);
    data.append("author", values.author);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    Shamsipour.post("/post/", data, config)
      .then((response) => {
        swal("موفقیت", "محتوا با موفقیت ایجاد شد", "success");
        history.push("/post/list");
      })
      .catch((err) => {
        setErrorMsg(true);
      });
  };
  const renderError = () => {
    return (
      <div class="alert alert-danger" role="alert">
        ایجاد محتوا موفقیت آمیز نبود
      </div>
    );
  };

  return (
    <div className="page-section">
      <div className="form-holder">
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              عنوان محتوا
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="عنوان پست را وارد کنید"
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              value={values.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              محتوای اصلی
            </label>
            <textarea
              className="form-control"
              id="content"
              rows="3"
              onChange={(e) =>
                setValues({ ...values, content: e.target.value })
              }
              value={values.content}
            ></textarea>
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
                setValues({ ...values, cover: e.target.files[0] })
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
export default CreatePostScreen;
