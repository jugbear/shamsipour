import React, { useState } from "react";
import Shamsipour from "../../api/api";
import swal from "sweetalert";

const CategoryModal = ({ showModal, id, refetchCategory, categoryName }) => {
  const [values, setValues] = useState({
    name: `${categoryName}`,
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
    Shamsipour.patch(`/category/${id}/`, data, config)
      .then((response) => {
        setValues({ name: "", image: "" });
        swal("موفقیت", "دسته بندی با موفقیت ویرایش شد", "success");
        showModal(false)
        refetchCategory()
      })
      .catch((err) => {
        setErrorMsg(true);
      });
  };
  const renderError = () => {
    return (
      <div class="alert alert-danger" role="alert">
        ویرایش دسته بندی موفقیت آمیز نبود
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
                ویرایش دسته بندی
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
              <form >
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    عنوان دسته بندی
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="عنوان دسته بندی را وارد کنید"
                    onChange={(e) =>
                      setValues({ ...values, name: e.target.value })
                    }
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
              <button onClick={onSubmitHandler} type="button" className="btn btn-primary">
                ذخیره
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryModal;
