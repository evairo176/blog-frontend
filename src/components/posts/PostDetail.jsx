import React from "react";
import Navbar from "../cummon/Navbar";
import banner from "../../assets/images/banner.png";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostById } from "../../redux/slices/posts/postSlices";
import moment from "moment";
import Moment from "react-moment";

function PostDetail() {
  const params = useParams();
  const dispatch = useDispatch();

  const storeData = useSelector((store) => store?.posts);
  const { postDetail, loading } = storeData;

  useEffect(() => {
    dispatch(fetchPostById(params?.id));
  }, [dispatch, params?.id]);

  return (
    <>
      <Navbar />
      <div className="container-content-blog">
        <section className="section-posts-detail">
          <div className="profile-user-post">
            <div className="date">
              <Moment format="D MMMM YYYY" withTitle>
                {postDetail?.createdAt}
              </Moment>
              <span className="titik-bulet"></span>{" "}
              <span className="kdwaidk">{postDetail?.category}</span>
            </div>
            <div className="post-title">{postDetail?.title}</div>
            <div className="name-and-foto">
              <img
                width={45}
                src={`${postDetail?.user?.profilePhoto}`}
                className="rounded-circle"
                alt={postDetail?.user?.firstName}
              />

              <span>
                {postDetail?.user?.firstName} {postDetail?.user?.lastName}
              </span>
            </div>
          </div>
          <div className="image-posts-details">
            <img
              src={`${postDetail?.image}`}
              alt=""
              className="img-post-detail"
            />
          </div>
          <div className="post-detail-description">
            {postDetail?.description}
          </div>
        </section>
      </div>
    </>
  );
}

export default PostDetail;
