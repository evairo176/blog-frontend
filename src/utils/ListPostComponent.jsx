import moment from "moment";
import React from "react";
import LongText from "./LongText";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch } from "react-redux";
import {
  addDisLikePostAction,
  addLikePostAction,
} from "../redux/slices/posts/postSlices";
import { Skeleton } from "@mui/material";

function ListPostComponent({ data, loading, page, limit, total, userAuth }) {
  const dispatch = useDispatch();

  return (
    <>
      {loading ? (
        <>
          {" "}
          <div className="box-content-blob">
            <div className="row">
              <div className="col-8">
                <div className="box-blog-post-dawd">
                  <div className="author-post">
                    <div className="img-author-dawd">
                      <Skeleton variant="circular" width={40} height={40} />
                    </div>
                    <div className="ml-2 name-dw">
                      <Skeleton width={100} height={22} circle={true} />
                    </div>
                  </div>
                  <div className="title-post">
                    <Skeleton width="130px" height={22} circle={true} />
                  </div>
                  <div className="description-post">
                    <Skeleton width="100%" height={22} circle={true} />
                    <Skeleton width="100%" height={22} circle={true} />
                    <Skeleton width="100%" height={22} circle={true} />
                    <Skeleton width="100%" height={22} circle={true} />
                  </div>
                  <div className="time-detail-dwd">
                    <Skeleton width={160} height={22} circle={true} />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="image-post">
                  <Skeleton width="100%" height="100%" />
                </div>
                <div className="action-dwad">
                  <Skeleton width={160} height={22} />
                </div>
              </div>
            </div>
          </div>
          <div className="box-content-blob">
            <div className="row">
              <div className="col-8">
                <div className="box-blog-post-dawd">
                  <div className="author-post">
                    <div className="img-author-dawd">
                      <Skeleton variant="circular" width={40} height={40} />
                    </div>
                    <div className="ml-2 name-dw">
                      <Skeleton width={100} height={22} circle={true} />
                    </div>
                  </div>
                  <div className="title-post">
                    <Skeleton width="130px" height={22} circle={true} />
                  </div>
                  <div className="description-post">
                    <Skeleton width="100%" height={22} circle={true} />
                    <Skeleton width="100%" height={22} circle={true} />
                    <Skeleton width="100%" height={22} circle={true} />
                    <Skeleton width="100%" height={22} circle={true} />
                  </div>
                  <div className="time-detail-dwd">
                    <Skeleton width={160} height={22} circle={true} />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="image-post">
                  <Skeleton width="100%" height="100%" />
                </div>
                <div className="action-dwad">
                  <Skeleton width={160} height={22} />
                </div>
              </div>
            </div>
          </div>
          <div className="box-content-blob">
            <div className="row">
              <div className="col-8">
                <div className="box-blog-post-dawd">
                  <div className="author-post">
                    <div className="img-author-dawd">
                      <Skeleton variant="circular" width={40} height={40} />
                    </div>
                    <div className="ml-2 name-dw">
                      <Skeleton width={100} height={22} circle={true} />
                    </div>
                  </div>
                  <div className="title-post">
                    <Skeleton width="130px" height={22} circle={true} />
                  </div>
                  <div className="description-post">
                    <Skeleton width="100%" height={22} circle={true} />
                    <Skeleton width="100%" height={22} circle={true} />
                    <Skeleton width="100%" height={22} circle={true} />
                    <Skeleton width="100%" height={22} circle={true} />
                  </div>
                  <div className="time-detail-dwd">
                    <Skeleton width={160} height={22} circle={true} />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="image-post">
                  <Skeleton width="100%" height="100%" />
                </div>
                <div className="action-dwad">
                  <Skeleton width={160} height={22} />
                </div>
              </div>
            </div>
          </div>
          <div className="box-content-blob">
            <div className="row">
              <div className="col-8">
                <div className="box-blog-post-dawd">
                  <div className="author-post">
                    <div className="img-author-dawd">
                      <Skeleton variant="circular" width={40} height={40} />
                    </div>
                    <div className="ml-2 name-dw">
                      <Skeleton width={100} height={22} circle={true} />
                    </div>
                  </div>
                  <div className="title-post">
                    <Skeleton width="130px" height={22} circle={true} />
                  </div>
                  <div className="description-post">
                    <Skeleton width="100%" height={22} circle={true} />
                    <Skeleton width="100%" height={22} circle={true} />
                    <Skeleton width="100%" height={22} circle={true} />
                    <Skeleton width="100%" height={22} circle={true} />
                  </div>
                  <div className="time-detail-dwd">
                    <Skeleton width={160} height={22} circle={true} />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="image-post">
                  <Skeleton width="100%" height="100%" />
                </div>
                <div className="action-dwad">
                  <Skeleton width={160} height={22} />
                </div>
              </div>
            </div>
          </div>
          <div className="box-content-blob">
            <div className="row">
              <div className="col-8">
                <div className="box-blog-post-dawd">
                  <div className="author-post">
                    <div className="img-author-dawd">
                      <Skeleton variant="circular" width={40} height={40} />
                    </div>
                    <div className="ml-2 name-dw">
                      <Skeleton width={100} height={22} circle={true} />
                    </div>
                  </div>
                  <div className="title-post">
                    <Skeleton width="130px" height={22} circle={true} />
                  </div>
                  <div className="description-post">
                    <Skeleton width="100%" height={22} circle={true} />
                    <Skeleton width="100%" height={22} circle={true} />
                    <Skeleton width="100%" height={22} circle={true} />
                    <Skeleton width="100%" height={22} circle={true} />
                  </div>
                  <div className="time-detail-dwd">
                    <Skeleton width={160} height={22} circle={true} />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="image-post">
                  <Skeleton width="100%" height="100%" />
                </div>
                <div className="action-dwad">
                  <Skeleton width={160} height={22} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : data.length > 0 ? (
        data?.map((row, key) => {
          return (
            <div key={key} className="box-content-blob">
              <div className="row">
                <div className="col-8">
                  <div className="box-blog-post-dawd">
                    <div className="author-post">
                      <div className="img-author-dawd">
                        <img
                          src={`${row.user.profilePhoto}`}
                          className="rounded-circle"
                          width="25px"
                          alt=""
                        />
                      </div>
                      <div className="name-dw">{`${row.user.firstName} ${row.user.lastName}`}</div>
                    </div>
                    <div className="title-post">{row.title}</div>
                    <div className="description-post">
                      <LongText content={row.description} limit={300} />
                    </div>
                    <div className="time-detail-dwd">
                      {moment(row.createdAt).fromNow()} · 24 min read ·{" "}
                      <span className="category-dad">{row.category}</span>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    className="image-post"
                    style={{ backgroundImage: `url('${row.image}')` }}
                  >
                    {/* <img loading="lazy" src={`${row.image}`} alt="post" /> */}
                  </div>
                  <div className="action-dwad">
                    <div className="action-dw">
                      <ThumbUpAltIcon
                        onClick={() => dispatch(addLikePostAction(row._id))}
                        sx={
                          row.likes.some((e) => e.id === userAuth?._id)
                            ? { color: "var(--font)" }
                            : {}
                        }
                      />
                      <span className="sum-action-dwad">
                        {row?.likes.length > 0 ? row?.likes.length : 0}
                      </span>
                    </div>
                    <div className="action-dw">
                      <ThumbDownAltIcon
                        onClick={() => dispatch(addDisLikePostAction(row._id))}
                        disabled
                        sx={
                          row.disLikes.some((e) => e.id === userAuth?._id)
                            ? { color: "var(--font)" }
                            : {}
                        }
                      />
                      <span className="sum-action-dwad">
                        {row.disLikes.length > 0 ? row.disLikes.length : 0}
                      </span>
                    </div>
                    <div className="action-dw">
                      <VisibilityIcon />
                      <span className="sum-action-dwad">
                        {" "}
                        {row.numViews.length > 0 ? row.numViews.length : 0}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="box-content-blob" style={{ borderBottom: "none" }}>
          <div
            className="title-post"
            style={{ fontSize: "15px", textAlign: "center" }}
          >
            Maaf Data Yang anda cari tidak ditemukan, Silahkan coba lagi cari
            dengan data yang baru
          </div>
        </div>
      )}
    </>
  );
}

export default ListPostComponent;
