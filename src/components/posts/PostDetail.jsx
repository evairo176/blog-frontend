import React from "react";
import Navbar from "../cummon/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostById } from "../../redux/slices/posts/postSlices";
import Moment from "react-moment";
import { Skeleton } from "@mui/material";

function PostDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const storeData = useSelector((store) => store?.posts);
  const storeUser = useSelector((store) => store?.users);
  const { postDetail, loading } = storeData;
  const { userAuth } = storeUser;

  useEffect(() => {
    dispatch(fetchPostById(params?.id));
  }, [dispatch, params?.id]);

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="container-content-blog">
          <section className="section-posts-detail">
            <div className="profile-user-post">
              <div className="date">
                <Skeleton width={100} height={22} />
                <Skeleton width={100} height={22} />
              </div>
              <div className="post-title">
                <Skeleton width={100} height={42} />{" "}
              </div>
              <div className="name-and-foto">
                <Skeleton variant="circular" width={40} height={40} />
                <span>
                  <Skeleton width={100} height={22} />
                </span>
              </div>
            </div>
            <div className="image-posts-details">
              <Skeleton width="100%" height={550} />
            </div>
            <div className="post-detail-description">
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
              <Skeleton width="100%" height={22} />
            </div>
          </section>
        </div>
      ) : (
        <div className="container-content-blog">
          {userAuth ? (
            <div className="edit-post-btn">
              <button
                onClick={() => navigate(`/update-post/${postDetail?.id}`)}
                className="btn-edit"
              >
                Edit Post
              </button>
            </div>
          ) : (
            ""
          )}
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
              <div
                dangerouslySetInnerHTML={{ __html: postDetail?.description }}
              ></div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default PostDetail;
