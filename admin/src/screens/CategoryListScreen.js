import React, { useState, useEffect, useContext } from "react";
import Shamsipour from "../api/api";
import "../styles/category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import CategoryModal from "../components/modal/CategoryModal";

const CategoryListScreen = () => {
  const [categories, setCategories] = useState({});
  const [errorMsg, setErrorMsg] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({});


  const fetchCategories = async () => {
    Shamsipour.get("/category/")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => {
        setErrorMsg(true);
      });
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    await Shamsipour.delete(`/category/${id}`)
      .then((response) => {
        swal("موفقیت", "دسته بندی با موفقیت حذف شد", "success");
        fetchCategories();
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
  const handleEdit = (id,name) => {
    setShowModal(true);
    setCurrentCategory({...currentCategory,id:id,name:name});
  };

  return (
    <div id='page-section' className="page-section">
      {showModal ? (
        <CategoryModal showModal={setShowModal} id={currentCategory.id} refetchCategory={()=>fetchCategories()} categoryName={currentCategory.name} />
      ) : null}
      <div className="table-holder table--no-card m-b-40">
        {errorMsg ? renderError() : null}
        <table className="table table-borderless table-striped table-earning category-table">
          <thead>
            <tr>
              <th scope="col" className='first-th'>شناسه</th>
              <th scope="col">تصویر</th>
              <th scope="col">نام</th>
              <th scope="col" className='last-th'>کنترلر ها</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(categories).map((category) => {
              return (
                <tr key={category.id}>
                  <th scope="row">{category.id}</th>
                  <td>
                    <img className="category-image" src={category.image} />
                  </td>
                  <td>{category.name}</td>
                  <td>
                    <div>
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="ویرایش"
                        onClick={() => handleEdit(category.id,category.name)}
                      >
                        <FontAwesomeIcon icon={faEdit} size="lg" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="حذف"
                        onClick={() => handleDelete(category.id)}
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
export default CategoryListScreen;
