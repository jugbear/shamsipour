import React, {useState, useEffect} from 'react'
import Shamsipour from "../api/api";
import "../styles/category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import PostModal from "../components/modal/PostModal";

const PostListScreen = () => {
    const [posts, setposts] = useState({});
    const [errorMsg, setErrorMsg] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [currentPost, setCurrentPost] = useState({});
    const fetchPosts = async () => {
      Shamsipour.get("/post/")
        .then((response) => {
            setposts(response.data);
        })
        .catch((err) => {
          setErrorMsg(true);
        });
    };
    useEffect(() => {
        fetchPosts();
    }, []);
  
    const handleDelete = async (id) => {
      await Shamsipour.delete(`/post/${id}`)
        .then((response) => {
          swal("موفقیت", "محتوا مورد نظر با موفقیت حذف شد", "success");
          fetchPosts();
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
    const handleEdit = (post) => {
      setShowModal(true);
      setCurrentPost(post);
    };
  

    return(
        <div id='page-section' className="page-section">
        {showModal ? (
          <PostModal showModal={setShowModal} postInfo={currentPost} refetchPosts={()=>fetchPosts()} />
        ) : null}
        <div className="table-holder table--no-card m-b-40">
          {errorMsg ? renderError() : null}
          <table className="table table-borderless table-striped table-earning category-table">
            <thead>
              <tr>
                <th scope="col" className='first-th'>شناسه</th>
                <th scope="col">تصویر</th>
                <th scope="col">عنوان</th>
                <th scope="col">دسته بندی</th>
                <th scope="col">نویسنده</th>
                <th scope="col" className='last-th'>کنترلر ها</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(posts).map((post) => {
                return (
                  <tr key={post.id}>
                    <th scope="row">{post.id}</th>
                    <td>
                      <img className="category-image" src={post.cover} />
                    </td>
                    <td>{post.title}</td>
                    <td>{post.category.name}</td>
                    <td>{post.author.username}</td>
                    <td>
                      <div>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="ویرایش"
                          onClick={() => handleEdit(post)}
                        >
                          <FontAwesomeIcon icon={faEdit} size="lg" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="حذف"
                          onClick={() => handleDelete(post.id)}
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
    )
}
export default PostListScreen