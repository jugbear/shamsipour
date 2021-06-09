import React, { useState, useEffect } from "react";
import Shamsipour from "../../api/api";
import swal from "sweetalert";

const PostModal = ({ showModal, postInfo, refetchPosts }) => {
  const [values, setValues] = useState({
    title: `${postInfo.title}`,
    cover: "",
    content: `${postInfo.content}`,
    category: `${postInfo.category.id}`,
    author: 1,
  });
  const [errorMsg, setErrorMsg] = useState(false);
  const [categoies, setCategories] = useState({});

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
    Shamsipour.patch(`/post/${postInfo.id}/`, data, config)
      .then((response) => {
        swal("موفقیت", "محتوای مورد نظر با موفقیت ویرایش شد", "success");
        showModal(false);
        refetchPosts();
      })
      .catch((err) => {
        setErrorMsg(true);
      });
  };
  const renderError = () => {
    return (
      <div class="alert alert-danger" role="alert">
        ویرایش محتوا موفقیت آمیز نبود
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
                ویرایش محتوا
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
                    عنوان محتوا
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="عنوان محتوا را وارد کنید"
                    onChange={(e) =>
                      setValues({ ...values, title: e.target.value })
                    }
                    value={values.title}
                  />
                </div>
                <div className="mb-3 cover-input">
                  <label htmlFor="formFile" className="form-label">
                    تصویر محتوا
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    onChange={(e) =>
                      setValues({ ...values, cover: e.target.files[0] })
                    }
                    name="photo"
                    accept="image/*"
                  />
                </div>
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
                <label htmlFor="formFile" className="form-label">
                  دسته بندی را انتخاب کنید
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) =>
                    setValues({ ...values, category: e.target.value })
                  }
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
export default PostModal;
