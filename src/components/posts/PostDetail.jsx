import React from "react";
import Navbar from "../cummon/Navbar";
import banner from "../../assets/images/banner.png";

function PostDetail() {
  return (
    <>
      <Navbar />
      <div className="container-content-blog">
        <section className="section-posts-detail">
          <div className="profile-user-post">
            <div className="date">
              22 Januari 2022 <span className="titik-bulet"></span>{" "}
              <span className="kdwaidk">Mobile Dev</span>
            </div>
            <div className="post-title">
              Creating a Simple Calculator App with Flutter: A Beginner's Guide
            </div>
            <div className="name-and-foto">
              <img src="" alt="" />

              <span>Dicki Prasetya</span>
            </div>
          </div>
          <div className="image-posts-details">
            <img src={banner} width="100%" alt="" className="img-post-detail" />
          </div>
        </section>
      </div>
    </>
  );
}

export default PostDetail;
