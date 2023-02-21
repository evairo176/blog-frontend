import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPostByIdUpdate } from "../../redux/slices/posts/postSlices";
import Navbar from "../cummon/Navbar";

function UpdatePost() {
  const dispatch = useDispatch();
  const params = useParams();
  const storeData = useSelector((store) => store?.posts);
  const { postDetailUpdate } = storeData;

  useEffect(() => {
    dispatch(fetchPostByIdUpdate(params?.id));
  }, [dispatch, params]);

  return (
    <>
      <Navbar />
      <div className="container-content-form">
        <div className="card-form">
          <form action="">
            <div className="form-group mb-3">
              <label htmlFor="title">Title</label>
              <input
                className="form-custom"
                placeholder="Post"
                type="text"
                value={postDetailUpdate?.title}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="title">Title</label>
              <input className="form-custom" placeholder="Post" type="text" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="title">Title</label>
              <input className="form-custom" placeholder="Post" type="text" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdatePost;
