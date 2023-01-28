import moment from "moment";
import React from "react";
import LoadingComponent from "./LoadingComponent";
import LongText from "./LongText";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";

function ListPostComponent({ data, loading, page, limit, total }) {
  return (
    <>
      {!loading ? (
        data?.map((row, key) => {
          return (
            <div key={key} className="box-content-blob">
              <div className="row">
                <div className="col-xl-8 col-md-8 col-lg-8 col-sm-12 col-xs-12">
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
                <div className="col-xl-4 col-md-4 col-lg-4 col-sm-12 col-xs-12">
                  <div className="image-post">
                    <img loading="lazy" src={`${row.image}`} alt="post" />
                  </div>
                  <div className="action-dwad">
                    <div className="action">
                      <ThumbUpAltIcon />
                    </div>
                    <div className="action">
                      <ThumbDownAltIcon />
                    </div>
                    <div className="action">
                      <VisibilityIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="container-content-blog">
          <LoadingComponent />
        </div>
      )}
    </>
  );
}

export default ListPostComponent;
